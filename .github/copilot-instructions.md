# GitHub Copilot Code Review Instructions

## Focus Areas

This document guides Copilot code review on two key areas:

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

If tests are missing, provide a brief, actionable nudge:

```
Consider adding tests for the new/modified functionality in [specific file].
For example:
- Test case for [specific scenario]
- Edge case handling for [specific condition]
```

If test coverage is sufficient:

```
LGTM
```

---

## Focus Area 2: Pull Request Guidelines

When reviewing pull requests, verify compliance with [freeCodeCamp's contribution standards](https://contribute.freecodecamp.org/how-to-open-a-pull-request).

### PR Title Format

Check that the title follows conventional commits format:
`<type>([optional scope]): <description>`

**Valid types:** `fix`, `feat`, `refactor`, `docs`, `chore`, `test`

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

Keep feedback specific and reference the contribution guide:

```
Please update your PR title to follow conventional commits format: `<type>(scope): description`
See: https://contribute.freecodecamp.org/how-to-open-a-pull-request
```

```
Please link the related issue using `Closes #XXXXX` format in the PR description.
```

If PR guidelines are followed:

```
LGTM
```

---

## General Guidelines

### Avoid

- Long explanations
- Generic comments without specific pointers
- Comments on non-functional changes
- Repeating information already in the PR discussion
- Commenting on the same issue multiple times

### Prioritization

When multiple issues exist, prioritize feedback in this order:

1. PR title/description compliance (most visible, easiest to fix)
2. Missing test coverage for new functionality
3. Outdated tests for modified functionality
