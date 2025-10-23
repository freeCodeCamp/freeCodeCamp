#!/usr/bin/env python3
"""Extract all block introductions from intro.json into a flat lookup.

Usage:
    python3 extract_blocks.py [language]

The script reads `client/i18n/locales/<language>/intro.json`, gathers every
`blocks` entry, and writes them to a `blocks-intro.json` file alongside the
specified intro file. If duplicate block slugs contain conflicting definitions,
the script attempts to automatically resolve minor wording differences between
"lesson" and "lecture" variants. Remaining conflicts are logged with a unified
diff while the script keeps the newer curriculum's version in
`blocks-intro.json`. Finally, it removes each curriculum's `blocks` property
from the source `intro.json` and writes the updated file back to disk.
"""

from __future__ import annotations

import argparse
import json
import re
import sys
from copy import deepcopy
from difflib import unified_diff
from pathlib import Path
from typing import Any, Dict, Iterable, List

DEFAULT_LANGUAGE = "english"
LOCALES_ROOT = Path("client/i18n/locales")
OUTPUT_FILENAME = "blocks-intro.json"


def resolve_intro_json_path(language: str) -> Path:
    sanitized_language = language.strip().lower()
    return LOCALES_ROOT / sanitized_language / "intro.json"


def resolve_output_path(intro_path: Path) -> Path:
    return intro_path.parent / OUTPUT_FILENAME


def load_intro_data(path: Path) -> Dict[str, Any]:
    if not path.exists():
        raise FileNotFoundError(f"Unable to locate intro data at {path}")

    with path.open(encoding="utf-8") as fp:
        return json.load(fp)


def collect_blocks(data: Dict[str, Any]) -> Dict[str, Dict[str, Any]]:
    blocks: Dict[str, Dict[str, Any]] = {}
    block_sources: Dict[str, str] = {}
    conflicts: list[str] = []

    for curriculum_slug, curriculum_entry in data.items():
        entry_blocks = curriculum_entry.get("blocks")
        if not isinstance(entry_blocks, dict):
            continue

        for block_slug, block_payload in entry_blocks.items():
            if not isinstance(block_payload, dict):
                # Ignore malformed entries but warn the caller.
                conflicts.append(
                    f"Block '{block_slug}' in '{curriculum_slug}' is not an object."
                )
                continue

            payload_copy = deepcopy(block_payload)
            if block_slug not in blocks:
                blocks[block_slug] = payload_copy
                block_sources[block_slug] = curriculum_slug
                continue

            if blocks[block_slug] != payload_copy:
                resolved = resolve_lessons_conflict(blocks[block_slug], payload_copy)
                replacement_payload = payload_copy
                if resolved is not None:
                    replacement_payload = resolved

                origin = block_sources[block_slug]
                diff = format_block_diff(
                    block_slug,
                    origin,
                    blocks[block_slug],
                    curriculum_slug,
                    replacement_payload,
                )
                if diff is not None:
                    conflicts.append(diff)
                blocks[block_slug] = deepcopy(replacement_payload)
                block_sources[block_slug] = curriculum_slug

    if conflicts:
        conflict_report = "\n".join(conflicts)
        print("Conflicting block definitions were found.", file=sys.stderr)
        print(conflict_report, file=sys.stderr)

    return dict(sorted(blocks.items()))


LESSON_WORD_REPLACEMENTS = (
    (re.compile(r"(?i)lectures"), "lessons"),
    (re.compile(r"(?i)lecture"), "lesson"),
)


def resolve_lessons_conflict(
    origin_payload: Dict[str, Any],
    conflicting_payload: Dict[str, Any],
) -> Dict[str, Any] | None:
    if not isinstance(origin_payload, dict) or not isinstance(conflicting_payload, dict):
        return None

    resolved = _resolve_lessons_value(origin_payload, conflicting_payload)
    if resolved is None:
        return None

    return resolved


def _resolve_lessons_value(origin_value: Any, conflicting_value: Any) -> Any | None:
    if isinstance(origin_value, str) and isinstance(conflicting_value, str):
        origin_clean = _standardize_smart_quotes(origin_value)
        conflicting_clean = _standardize_smart_quotes(conflicting_value)

        if origin_clean == conflicting_clean:
            return origin_clean

        normalized_origin = _normalize_lesson_words(origin_clean)
        normalized_conflicting = _normalize_lesson_words(conflicting_clean)

        if normalized_origin != normalized_conflicting:
            return None

        if _contains_lesson_word(origin_clean):
            return origin_clean
        if _contains_lesson_word(conflicting_clean):
            return conflicting_clean

        return origin_clean

    if isinstance(origin_value, list) and isinstance(conflicting_value, list):
        if len(origin_value) != len(conflicting_value):
            return None

        resolved_list: List[Any] = []
        for left, right in zip(origin_value, conflicting_value):
            resolved_element = _resolve_lessons_value(left, right)
            if resolved_element is None:
                return None
            resolved_list.append(resolved_element)

        return resolved_list

    if isinstance(origin_value, dict) and isinstance(conflicting_value, dict):
        if set(origin_value.keys()) != set(conflicting_value.keys()):
            return None

        resolved_dict: Dict[str, Any] = {}
        for key in origin_value:
            resolved_entry = _resolve_lessons_value(
                origin_value[key], conflicting_value[key]
            )
            if resolved_entry is None:
                return None
            resolved_dict[key] = resolved_entry

        return resolved_dict

    if origin_value == conflicting_value:
        return deepcopy(origin_value)

    return None


def _normalize_lesson_words(text: str) -> str:
    normalized = _standardize_smart_quotes(text)
    for pattern, replacement in LESSON_WORD_REPLACEMENTS:
        normalized = pattern.sub(replacement, normalized)
    return normalized


def _contains_lesson_word(text: str) -> bool:
    return bool(re.search(r"(?i)lessons?", text))


SMART_QUOTE_REPLACEMENTS = {
    "’": "'",
    "‘": "'",
    "‛": "'",
    "`": "'",
}


def _standardize_smart_quotes(text: str) -> str:
    normalized = text
    for curly, straight in SMART_QUOTE_REPLACEMENTS.items():
        normalized = normalized.replace(curly, straight)
    return normalized


def write_blocks(path: Path, blocks: Dict[str, Dict[str, Any]]) -> None:
    with path.open("w", encoding="utf-8") as fp:
        json.dump(blocks, fp, ensure_ascii=False, indent=2, sort_keys=False)
        fp.write("\n")


def remove_blocks_from_intro(data: Dict[str, Any]) -> int:
    removed = 0

    for curriculum_entry in data.values():
        if not isinstance(curriculum_entry, dict):
            continue

        if "blocks" in curriculum_entry:
            del curriculum_entry["blocks"]
            removed += 1

    return removed


def write_intro_data(path: Path, data: Dict[str, Any]) -> None:
    with path.open("w", encoding="utf-8") as fp:
        json.dump(data, fp, ensure_ascii=False, indent=2, sort_keys=False)
        fp.write("\n")


def _format_intro_differences(
    origin_curriculum: str,
    origin_intro: Iterable[str] | None,
    conflicting_curriculum: str,
    conflicting_intro: Iterable[str] | None,
) -> List[str]:
    if not isinstance(origin_intro, list) or not isinstance(conflicting_intro, list):
        return []

    if not all(isinstance(item, str) for item in origin_intro + conflicting_intro):
        return []

    max_len = max(len(origin_intro), len(conflicting_intro))
    lines: List[str] = []

    for index in range(max_len):
        origin_value = origin_intro[index] if index < len(origin_intro) else None
        conflicting_value = (
            conflicting_intro[index] if index < len(conflicting_intro) else None
        )

        if origin_value == conflicting_value:
            continue

        lines.append(f"  intro[{index}]:")
        if origin_value is None:
            lines.append(f"    {origin_curriculum}: <missing>")
        else:
            lines.append(f"    {origin_curriculum}: {origin_value}")

        if conflicting_value is None:
            lines.append(f"    {conflicting_curriculum}: <missing>")
        else:
            lines.append(f"    {conflicting_curriculum}: {conflicting_value}")

    return lines


def format_block_diff(
    block_slug: str,
    origin_curriculum: str,
    origin_payload: Dict[str, Any],
    conflicting_curriculum: str,
    conflicting_payload: Dict[str, Any],
) -> str | None:
    header = [
        f"Conflict detected for block '{block_slug}':",
        f"  first seen in '{origin_curriculum}'",
        f"  differs in '{conflicting_curriculum}'",
    ]

    intro_differences = _format_intro_differences(
        origin_curriculum,
        origin_payload.get("intro"),
        conflicting_curriculum,
        conflicting_payload.get("intro"),
    )

    formatted_origin = deepcopy(origin_payload)
    formatted_conflicting = deepcopy(conflicting_payload)

    if intro_differences:
        formatted_origin["intro"] = ["<see intro differences below>"]
        formatted_conflicting["intro"] = ["<see intro differences below>"]

    baseline = json.dumps(
        formatted_origin,
        ensure_ascii=False,
        indent=2,
        sort_keys=True,
    ).splitlines()
    contender = json.dumps(
        formatted_conflicting,
        ensure_ascii=False,
        indent=2,
        sort_keys=True,
    ).splitlines()

    diff_lines = list(
        unified_diff(
            baseline,
            contender,
            fromfile=f"{origin_curriculum}:{block_slug}",
            tofile=f"{conflicting_curriculum}:{block_slug}",
            lineterm="",
        )
    )

    if diff_lines:
        header.extend(["Diff:", *diff_lines])
    elif intro_differences:
        header.append(
            "Diff: no additional field differences (intro differences listed below)."
        )
    else:
        return None

    if intro_differences:
        header.extend(["Intro element differences:", *intro_differences])

    return "\n".join(header)


def main(argv: Iterable[str] | None = None) -> int:
    parser = argparse.ArgumentParser(
        description="Extract block introductions into a shared lookup file."
    )
    parser.add_argument(
        "language",
        nargs="?",
        default=DEFAULT_LANGUAGE,
        help="Language folder under client/i18n/locales (default: english)",
    )

    args = parser.parse_args(list(argv) if argv is not None else None)

    intro_path = resolve_intro_json_path(args.language)
    output_path = resolve_output_path(intro_path)

    try:
        data = load_intro_data(intro_path)
        blocks = collect_blocks(data)
        write_blocks(output_path, blocks)
        removed_blocks = remove_blocks_from_intro(data)
        if removed_blocks:
            write_intro_data(intro_path, data)
    except Exception as exc:  # noqa: BLE001
        print(exc, file=sys.stderr)
        return 1

    try:
        output_display = output_path.resolve().relative_to(Path.cwd())
    except ValueError:
        output_display = output_path.resolve()

    if removed_blocks:
        print(
            f"Extracted {len(blocks)} unique blocks to {output_display} and removed"
            f" 'blocks' from {removed_blocks} intro entries."
        )
    else:
        print(
            f"Extracted {len(blocks)} unique blocks to {output_display}."
        )
    return 0


if __name__ == "__main__":
    sys.exit(main())
