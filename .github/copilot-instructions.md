# GitHub Copilot Code Review Instructions

## Core Principles

**BE EXTREMELY MINIMAL.** Only comment when there are actual issues to address.

**NEVER generate:**
- "Pull request overview" sections
- "Changes:" sections listing what was changed
- "Reviewed changes" sections
- Tables listing files with descriptions of changes
- Summaries of what the PR does (the diff shows this)
- Statements about how many files were reviewed
- Any explanatory text about obvious changes

**ONLY provide:**
- Specific, actionable feedback on actual problems
- Brief comments (1-3 sentences per issue)
- Silence when everything is correct

**Example of what NOT to do:**
```
## Pull request overview
This PR addresses issue #65331 by replacing em dash characters...

### Reviewed changes
Copilot reviewed 4 out of 4 changed files...

| File | Description |
| ---- | ----------- |
| file1.md | Updated em dash... |
```

**Example of what TO do:**
```
The test on line 46 will fail: `innerText` returns rendered text `—`, not `&mdash;`.
```

---

## Focus Areas

1. **Test Coverage** - Ensuring adequate testing for code changes
2. **Pull Request Guidelines** - Compliance with contribution standards

---

## Focus Area 1: Test Coverage

When reviewing pull requests, ensure adequate test coverage for code changes in JavaScript, TypeScript, JSX, and TSX files.

> Detailed test coverage rules are in `.github/instructions/testing.instructions.md`

### Quick Reference

| Location | Framework | File Pattern |
|----------|-----------|--------------|
| `api/` | Vitest | `*.test.ts` |
| `client/` | Vitest | `*.test.{ts,tsx}` |
| `e2e/` | Playwright | `*.spec.ts` |

### When to Comment

Only leave a comment if:

- The PR modifies JavaScript/TypeScript/JSX/TSX code (bug fixes or new features)
- AND there are no corresponding test additions or updates

### When NOT to Comment

Do not comment if:

- Changes are only to documentation, configuration, or non-JS/TS files
- The PR includes appropriate test coverage for the changes
- Changes are test-only modifications

### Comment Style

If tests are missing, provide ONE brief comment:

```
Missing tests for [specific file]. Consider:
- [specific scenario]
- [edge case]
```

If test coverage is sufficient, **DO NOT COMMENT**. No "LGTM" needed.

---

## Focus Area 2: Pull Request Guidelines

When reviewing pull requests, verify compliance with [freeCodeCamp's contribution standards](https://contribute.freecodecamp.org/how-to-open-a-pull-request).

### PR Title Format

Check that the title follows conventional commits format:
`<type>([optional scope]): <description>`

**Valid types:** `fix`, `feat`, `refactor`, `docs`, `test`

**Common scopes:** `curriculum`, `client`, `api`, `i18n`, `a11y`, `tools`

Flag if:

- Title is vague (e.g., "Update file", "Fix bug", "Changes")
- Missing type prefix
- Description exceeds ~50 characters
- Type doesn't match the actual changes

Example of good title:

```
fix(client): resolve login button alignment on mobile
```

Example of bad title:

```
Fixed stuff
```

### PR Description & Issue Linking

Check for:

- Meaningful description explaining what changes were made and why
- Proper issue linking using `Closes #XXXXX` format (not just `#XXXXX`)
- Screenshots included for UI/visual changes

Flag if:

- Description is empty or only contains template boilerplate
- Issue reference uses incorrect format (e.g., `fixes XXXXX` without `#`)
- UI changes lack screenshots

### Checklist Completion

Verify the PR template checklist items are completed:

- Boxes should be checked (`[x]`) not left unchecked (`[ ]`)
- Placeholder text like `#XXXXX` should be replaced with actual issue numbers

Flag if:

- Checklist boxes are left unchecked
- Placeholder issue number `#XXXXX` remains unchanged

### Comment Style

Keep feedback minimal (one line when possible):

```
Update PR title to format: `<type>(scope): description`
See: https://contribute.freecodecamp.org/how-to-open-a-pull-request
```

```
Link issue using: `Closes #XXXXX`
```

If PR guidelines are followed, **DO NOT COMMENT**. No "LGTM" needed.

---

## General Guidelines

**Focus on Actionable Issues Only**

### Strict Rules

- NO summaries, overviews, or descriptions of changes
- NO tables or file listings
- NO "LGTM" or affirmative comments when everything is fine
- Only comment when action is required
- Keep each comment brief and actionable

### Prioritization

When multiple issues exist, address them in order of severity:

1. Security vulnerabilities or critical bugs
2. Missing test coverage for new functionality
3. Outdated tests for modified functionality
4. PR title/description compliance

Comment on all legitimate issues, but keep each comment concise.
