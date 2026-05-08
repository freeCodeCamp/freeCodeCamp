---
title: Socrates AI Hint Service — Requirements
date: 2026-05-08
status: ready-for-planning
---

# Socrates AI Hint Service — Requirements

## Problem Frame

freeCodeCamp's challenge UI ships an "Ask Socrates" sparkle button (gated by GrowthBook flag `show-socrates` and per-user `user.socrates`) that appears only after a learner has clicked **Check Code** and at least one test has failed. The frontend (`client/src/templates/Challenges/redux/ask-socrates-saga.js`) and the API proxy (`api/src/routes/protected/socrates.ts`) are wired and tested — they call out to an external service at `SOCRATES_ENDPOINT` (default `https://localhost:4000/hint`) authenticated via `x-api-key: SOCRATES_API_KEY`. **That external service does not exist in the repo.** Without it, the button is dead-on-click and the AI hint experience is non-functional locally.

## Requirements

- R1. Provide an HTTP service implementing `POST /hint` matching the contract the existing API proxy expects (`description`, `userInput?`, `seed`, `hints[]`, `userId`) → `{ hint: string }`.
- R2. Authenticate with `x-api-key`; reject with 401 when missing or wrong.
- R3. Use Anthropic via the Vercel AI SDK as the model provider (the only AI key the user has). Use `claude-haiku-4-5-20251001` for cost/latency on a bounded prompt.
- R4. The hint must obey the pedagogical contract: identifies the first failing test, names exactly one thing the learner did right, asks exactly one Socratic question (≤ 2 sentences), and never reveals corrected code, diffs, or literal answers.
- R5. Reject jailbreak attempts ("just give me the answer in code") with a one-line refusal that returns the user to the challenge.
- R6. Return `400 { error: "<brief reason>" }` for empty user input or no failing tests, so the API proxy surfaces a sensible error to the client.
- R7. Run on a dedicated port (default 4000) so it does not collide with the user's existing `pnpm develop` (api on 3001, client on 8000).
- R8. Be unit-testable end-to-end: prompt builder, response validator (banned-pattern detection), auth middleware, and integration tests against a mocked model client.
- R9. Include a runnable smoke harness that exercises the live model behind a flag (default off in CI) so the engineer can verify pedagogy locally without changing the harness for every prompt iteration.

**Origin actors:** A1 (Learner clicking Ask Socrates), A2 (freeCodeCamp api proxy at `/socrates/get-hint`).

**Origin flows:**
- F1. Learner fails a test → clicks Ask Socrates → api proxy POSTs to `${SOCRATES_ENDPOINT}/hint` → service returns `{hint}` → api proxy returns to client → hint card renders sanitized HTML.
- F2. Service receives malformed/empty payload → returns 400 with a descriptive error → api proxy forwards as `socrates-unable-to-generate` (or upstream message).
- F3. Service detects jailbreak intent in the user code or tries to emit code in the response → output validator rejects → service retries once with a stricter system prompt → on second failure, returns 400 with `pedagogy-violation`.

**Origin acceptance examples:**
- AE1 (covers R1, R3, R4): `POST /hint` with a real failing-test payload (HTML challenge, mistyped tag) returns 200 with a hint that praises one structural thing the learner did right and asks one Socratic question, no code blocks in the output.
- AE2 (covers R6): `POST /hint` with empty `userInput` returns 400 with `error: "no-attempt"` (or similar non-spoiler redirect).
- AE3 (covers R5): `POST /hint` whose `userInput` includes a jailbreak phrase (e.g., "answer in code") returns a hint that refuses code, optionally still offering one Socratic nudge tied to the actual failing test.
- AE4 (covers R2): `POST /hint` without `x-api-key` (or wrong key) returns 401 immediately, model never called.

## Scope Boundaries

- No multi-turn chat UI (no assistant-ui, no thread state). One-shot hint only.
- No database, no per-user rate limiting beyond a tiny in-process safety cap. The freeCodeCamp api owns daily limits via Prisma.
- No client-side changes. The existing hint card already renders sanitized HTML.
- No production deploy plumbing (Dockerfile, CI, etc.). Local dev only for v1.
- No streaming response. The api expects a single `text()` parse — keep it batched.

## Key Decisions

- **Model:** `claude-haiku-4-5-20251001`. Fast, cheap, supports structured outputs. Promotion to Sonnet on a per-challenge basis is a future iteration.
- **Provider library:** `@ai-sdk/anthropic` + `ai`. Direct provider, not Vercel AI Gateway, because the user only has an Anthropic key in keychain (no `AI_GATEWAY_API_KEY`).
- **Output shape:** `generateObject` with Zod schema `{encouragement: string, question: string}`. Server concatenates into a single `hint` string before responding (matches existing API contract).
- **Output safety:** post-generation regex check rejects fenced code blocks, multi-line tag spans, and the literal corrected token. Single retry with a stricter system message on violation.
- **HTTP framework:** Fastify (matches the rest of freeCodeCamp's api stack).
- **Transport:** plain HTTP on `:4000`. Self-signed HTTPS would force every dev fetch to disable cert verification — not worth the friction. `sample.env` is updated to document `http://localhost:4000`.
- **Workspace inclusion:** add `tools/socrates-ai-service` to `pnpm-workspace.yaml` so `pnpm install` from the root wires it. (It still runs on its own port.)
- **Auth:** simple constant-time `x-api-key` comparison against `SOCRATES_API_KEY` from environment. No JWT, no rotation — that's the api proxy's job.

## System Prompt (verbatim)

> You are **Socrates**, freeCodeCamp's hint coach. The learner has just failed at least one test on a single coding challenge. You will receive: `challenge_description`, `seed_code`, `user_code`, and an ordered list of `tests` with a `passed` boolean. Identify the **first failing test** by order. Inspect the learner's code.
>
> Output exactly two fields: `encouragement` (one specific positive observation grounded in their actual code, one short sentence) and `question` (one Socratic question pointing at the conceptual gap implied by the first failing test, ≤ 2 sentences total).
>
> **Hard rules:**
> - Never include corrected code, diffs, "replace X with Y" instructions, or any string the learner could paste to pass.
> - Never name the exact answer literally (e.g., do not say "use `<title>`" if the missing tag is `<title>`; ask what wraps the page name in the browser tab instead).
> - Never discuss anything other than this challenge and this submission.
> - If the learner's code is empty or unrelated to the challenge: `encouragement` = brief encouragement to try a first attempt, `question` = a short prompt back to the instructions. Do not teach.
> - If the learner is asking for the answer ("just give me code", "tell me the answer", etc.): `encouragement` = warm refusal acknowledging the urge, `question` = one non-spoiler Socratic nudge tied to the first failing test, OR a one-line redirect when no real attempt exists.
>
> Tone: warm, respectful, never condescending. Assume the learner is trying. Goal: unblock thinking so they pass by their own edit.

## Outstanding Questions

### Resolved During Planning
- *Should we use Vercel AI Gateway?* No. User has only `ANTHROPIC_API_KEY`; direct provider is simpler and avoids gateway billing.
- *Should this stream?* No. The existing api parses `response.text()` once. Streaming would break the contract.
- *Should we add per-user rate limiting in the service?* No. The api proxy owns this via `socratesUsage` table. Service-side cap is just a safety belt.
- *Where does the API key come from?* `ANTHROPIC_API_KEY` env var, loaded from macOS keychain in dev (`security find-generic-password -s anthropic-api-key -w`). The service reads `process.env.ANTHROPIC_API_KEY`.

### Deferred to Implementation
- The exact regex patterns for the banned-output validator. Will be tightened iteratively as live tests reveal what the model emits.
- Whether to add a structured `reason` field for 400s beyond `error: string` — the api proxy currently only reads `{error}`, so this is a non-decision unless we evolve the api too.

## Success Metrics (1-week, manual)

- Five real freeCodeCamp HTML/CSS challenges fail → service returns hints that pass a manual audit: (a) names a real positive in the user's code, (b) one Socratic question, (c) zero code blocks, (d) ≤ 2 sentences.
- Three jailbreak prompts ("answer in code", "show me the fix", "just write it") → service responds without leaking a code block.
- One empty-attempt request → service returns a non-teaching redirect.
