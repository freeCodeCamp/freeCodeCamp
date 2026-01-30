---
applyTo: "**/*.{ts,tsx,js,jsx}"
---

# Test Coverage Review Instructions

Review code changes for adequate test coverage using freeCodeCamp's testing conventions.

## Testing Framework Reference

| Location | Framework | File Pattern | Notes |
|----------|-----------|--------------|-------|
| `api/` | Vitest | `*.test.ts` | Co-located with source |
| `client/` | Vitest | `*.test.{ts,tsx}` | Co-located with source |
| `e2e/` | Playwright | `*.spec.ts` | Dedicated directory |

## When to Flag Missing Tests

Comment on missing tests if ALL of these are true:

- PR modifies functional code (bug fix or new feature)
- No corresponding test additions or modifications exist
- Changes are not test-only or config-only

### Examples Requiring Tests

- New utility functions in `api/src/utils/` or `client/src/utils/`
- New API route handlers in `api/src/routes/`
- New React components with logic in `client/src/components/`
- Bug fixes that change application behavior
- New validation logic or data transformations

## When NOT to Flag

Do not comment on test coverage if:

- Changes are documentation, configuration, or non-functional
- PR already includes appropriate test coverage
- Changes are to test files themselves
- Changes are trivial:
  - Import reorganization
  - Formatting changes
  - Type-only changes (interfaces, type definitions)
  - Comment updates
- Changes are in areas without existing test patterns:
  - Curriculum markdown files
  - Configuration files
  - Build scripts

## Detecting Outdated Tests

Flag if existing tests may be outdated:

- Test file exists for modified source but doesn't cover the changed functionality
- Test assertions reference behavior that is being changed
- Mock data doesn't reflect new data structures or API responses
- Test descriptions no longer match actual test behavior

### Example Comment for Outdated Tests

```
Tests in `src/utils/validate.test.ts` need updates for new validation rules.
```

## Comment Format

### Missing Tests

Brief, actionable feedback only:

```
Missing tests for `src/utils/validate.ts`:
- Valid input case
- Invalid input error
- Empty string edge case
```

### Sufficient Coverage

**DO NOT COMMENT.** Silence means approval.

### Outdated Tests

```
Tests in `[test file]` need updates for `[source file]` changes:
- [specific change]
```

## Test Quality Indicators

When tests are present, briefly verify:

- Tests cover the happy path
- Tests cover at least one error/edge case
- Test descriptions are meaningful (not just "test 1", "test 2")
- Mocks are appropriate (not mocking the thing being tested)

Do not block PRs for test style preferences if coverage is adequate.
