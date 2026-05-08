---
title: "feat(socrates): implement AI hint service"
type: feat
status: active
date: 2026-05-08
origin: docs/brainstorms/2026-05-08-socrates-ai-service-requirements.md
---

# feat(socrates): implement AI hint service

## Summary

Ship the missing external service the freeCodeCamp api proxy already calls at `${SOCRATES_ENDPOINT}/hint`, implementing a single-shot Socratic hint endpoint backed by Anthropic via the Vercel AI SDK, with a strict pedagogical system prompt and an output validator that rejects code-bearing responses. The service lives at `tools/socrates-ai-service/`, runs on port 4000, and integrates without touching the existing api proxy, client UI, or response contract.

---

## Problem Frame

The Ask Socrates button is wired end-to-end in client + api but its upstream service is missing — every click currently fails with `socrates-unavailable`. Building it locally as a typed Fastify service unblocks the existing UX, makes the AI hint experience runnable on a developer laptop, and creates a place to enforce the no-spoiler pedagogy in code (output validator + retry with stricter prompt) rather than relying on prompt discipline alone.

---

## Requirements

- R1. Implement `POST /hint` matching the existing api proxy contract: body `{description, userInput?, seed, hints[], userId}` → 200 `{hint: string}`, 400 `{error: string}` for non-spoiler refusals, 401 for missing/wrong `x-api-key`.
- R2. Use Anthropic via `@ai-sdk/anthropic` and the `ai` package. Default model `claude-haiku-4-5-20251001`, configurable via env.
- R3. Generate output as a structured object `{encouragement, question}` via `generateObject` with a Zod schema, then concatenate to a single `hint` string before returning.
- R4. Apply an output safety validator that rejects fenced code blocks, multi-tag HTML spans, and direct echoes of seed-code identifiers. On violation, retry once with a tougher system message; second violation → 400 `pedagogy-violation`.
- R5. Run on a dedicated port (default 4000), HTTP only. Confirm port via env (`PORT`).
- R6. Provide Vitest coverage for: prompt builder, output validator, auth middleware, request handler happy/sad paths, and a `RUN_LIVE_AI=1`-gated live smoke test against the real model.
- R7. Update `sample.env` to document `http://localhost:4000` as the local default and add a runnable note in the service's `README.md`.

**Origin actors:** A1 (Learner), A2 (freeCodeCamp api proxy).
**Origin flows:** F1 (happy path hint), F2 (malformed payload), F3 (jailbreak / pedagogy violation with single retry).
**Origin acceptance examples:** AE1 (real failing test → Socratic hint), AE2 (empty attempt → 400), AE3 (jailbreak attempt → no code in response), AE4 (missing api key → 401).

---

## Scope Boundaries

- No client or api package edits beyond a one-line update to `sample.env`. The existing api proxy and hint card remain untouched.
- No multi-turn chat. No `@assistant-ui/react`. No streaming.
- No production deploy artifacts (no Dockerfile, no CI workflow, no `pm2`/systemd hints). Local dev only for v1.
- No auth beyond `x-api-key`. No per-user rate limiting (the api proxy owns daily quotas).
- No prompt eval harness, telemetry pipeline, or A/B routing. A single live smoke harness is enough.

### Deferred to Follow-Up Work

- Promote-to-Sonnet routing for "deep" challenges — separate iteration once we have data on hint quality across model tiers.
- Output telemetry (latency, validator rejection rate) — separate iteration; out of scope for v1.
- Production-grade hosting (Dockerfile, ECS task, observability) — separate PR when we move past local dev.

---

## Context & Research

### Relevant Code and Patterns

- `api/src/routes/protected/socrates.ts` — the proxy this service must satisfy. Calls `fetch(${SOCRATES_ENDPOINT}/hint, {method:'POST', headers:{'x-api-key':...}})` with body `{description, userInput, seed, hints, userId}` and expects `{hint: string}` on 200, `{error: string}` on 400.
- `api/src/schemas/socrates/ask-socrates.ts` — TypeBox schema for the *request from client to api*. Mirrors what the api forwards to us (minus `userId`, which the api injects).
- `api/src/routes/protected/socrates.test.ts` — the contract tests for the api proxy. Mocks `fetch`. Useful as the canonical reference for response shapes the proxy expects (200, 400 with `{error}`, 429, 5xx).
- `client/src/templates/Challenges/redux/ask-socrates-saga.js` — the client only requests a hint after at least one failed test. Good for understanding how `hints[]` arrives.
- `sample.env` lines 39-40 — current `SOCRATES_API_KEY` and `SOCRATES_ENDPOINT` defaults.

### Institutional Learnings

- The api proxy enforces atomic per-user rate limiting via `prisma.socratesUsage`. The upstream service must NOT also count attempts — double-counting would silently halve the user's daily quota.
- The api proxy injects `userId` from the session and overwrites any client-supplied `userId` (see `api/src/routes/protected/socrates.test.ts` "should use session userId even when userId is sent in body"). Service can rely on `req.body.userId` for logging if needed but should never use it for auth.
- The api forwards 400 responses' `error` field verbatim to the client (see "should forward upstream error message on 400"). Whatever string we put in `{error}` shows up — so we keep it short and machine-readable (`pedagogy-violation`, `no-attempt`, `empty-payload`).

### External References

- Vercel AI SDK `generateObject` docs at `https://ai-sdk.dev/docs/ai-sdk-core/generating-structured-data`.
- Anthropic models endpoint confirmed `claude-haiku-4-5-20251001` is current (1M-context-not-required, structured outputs supported, fast/cheap, no `effort` knobs needed).

---

## Key Technical Decisions

- **Provider library: `@ai-sdk/anthropic`, not the AI Gateway.** The user only has `ANTHROPIC_API_KEY` in their macOS keychain. Gateway needs its own key and adds a hop.
- **Model: `claude-haiku-4-5-20251001`.** Hint generation is bounded (≤ 2 sentences). Haiku is sufficient and 5-10× cheaper than Sonnet.
- **Structured output via `generateObject` + Zod.** Forces the model to commit to two fields, avoids prompt-leakage of full prose, and makes the validator's job tractable.
- **Concatenate to single `hint` string before responding.** Preserves the existing api/client contract; client-side `sanitizeHtml` already wraps the string and renders it.
- **Output validator before retry.** Cheap, deterministic safety net. Banned: ```` ``` ```` fenced blocks, two or more `<...>` tags on the same line, any token from the user-readable solution path that the model should not literally repeat (heuristic).
- **Single retry with a stricter system prompt.** No exponential backoff; cost is bounded.
- **Workspace package, not a free-standing repo.** Adds `tools/socrates-ai-service` to `pnpm-workspace.yaml` so `pnpm install` from root resolves dependencies. Stays inside the freeCodeCamp tree because the contract and pedagogy are co-evolving with the api.

---

## Open Questions

### Resolved During Planning

- *HTTP vs HTTPS locally?* HTTP. Self-signed HTTPS would force `NODE_TLS_REJECT_UNAUTHORIZED=0` for the api proxy — too sharp an edge. `sample.env` is updated to use `http://localhost:4000`.
- *Should the service write to MongoDB?* No. Stateless. Per-user limits live in `socratesUsage` on the api side.
- *What turns the live test on?* `RUN_LIVE_AI=1` env var. Defaults off in CI and local Vitest runs.

### Deferred to Implementation

- The exact regex patterns for banned-output detection — will be tuned during U4 against real model emissions.
- Whether to surface tokens-used in the response — the api currently doesn't read it; if we add it later the api/client also evolves.

---

## Output Structure

    tools/socrates-ai-service/
    ├── package.json
    ├── tsconfig.json
    ├── vitest.config.ts
    ├── README.md
    ├── .gitignore
    └── src/
        ├── server.ts          # Fastify entry, port binding, env loading
        ├── env.ts             # ANTHROPIC_API_KEY, SOCRATES_API_KEY, PORT, MODEL_ID
        ├── auth.ts            # x-api-key middleware, constant-time compare
        ├── prompt.ts          # buildSystemPrompt + buildUserPrompt(payload)
        ├── validator.ts       # rejectIfHasCode, rejectIfEchoesAnswer, etc.
        ├── hint.ts            # generateHint(payload, deps): generateObject + retry
        ├── route.ts           # POST /hint handler
        ├── schemas.ts         # Zod schemas for request, structured output, response
        └── __tests__/
            ├── prompt.test.ts
            ├── validator.test.ts
            ├── auth.test.ts
            ├── hint.test.ts
            ├── route.test.ts
            └── live-smoke.test.ts  # gated by RUN_LIVE_AI=1

---

## Implementation Units

### U1. Workspace scaffolding and dependencies

**Goal:** Stand up `tools/socrates-ai-service` as a pnpm workspace package with the right TypeScript, Vitest, Fastify, AI SDK, Zod, and Anthropic-provider deps installed and resolvable from the root.

**Requirements:** R1, R2, R5

**Dependencies:** None.

**Files:**
- Create: `tools/socrates-ai-service/package.json`
- Create: `tools/socrates-ai-service/tsconfig.json`
- Create: `tools/socrates-ai-service/vitest.config.ts`
- Create: `tools/socrates-ai-service/.gitignore`
- Modify: `pnpm-workspace.yaml`

**Approach:**
- Add `tools/socrates-ai-service` to `pnpm-workspace.yaml` packages list so `pnpm install` resolves it.
- `package.json`: name `@freecodecamp/socrates-ai-service`, private true, ESM, scripts `dev`, `build`, `start`, `test`, `type-check`.
- Dependencies: `fastify`, `ai`, `@ai-sdk/anthropic`, `zod`, `dotenv`. Dev: `typescript`, `tsx`, `vitest`, `@types/node`.
- `tsconfig.json` extends the api's strict TS settings (`strict: true`, `noUncheckedIndexedAccess: true`, target ES2022, module NodeNext).
- `.gitignore`: `node_modules`, `dist`, `.env`.

**Patterns to follow:**
- `api/tsconfig.json` for strict TS posture.
- `api/package.json` for script naming (`type-check`, `test`, `dev`).

**Test scenarios:**
- Test expectation: none — pure scaffolding, no behavior. Verified by U6's `pnpm install && pnpm -F @freecodecamp/socrates-ai-service type-check` running clean.

**Verification:**
- `pnpm install` from repo root completes without error.
- `pnpm -F @freecodecamp/socrates-ai-service type-check` passes (no source yet, just config sanity).

---

### U2. Env loading and Zod schemas

**Goal:** Centralize env-var parsing (with helpful errors) and define the Zod schemas the request handler, structured-output call, and response writer will all share.

**Requirements:** R1, R2

**Dependencies:** U1.

**Files:**
- Create: `tools/socrates-ai-service/src/env.ts`
- Create: `tools/socrates-ai-service/src/schemas.ts`
- Create: `tools/socrates-ai-service/src/__tests__/schemas.test.ts`

**Approach:**
- `env.ts` exports a single `loadEnv()` that returns `{ANTHROPIC_API_KEY, SOCRATES_API_KEY, PORT, MODEL_ID}` with Zod validation. Throws on missing required keys.
- `schemas.ts` exports:
  - `requestSchema` = Zod schema mirroring the api proxy's body (`description`, `userInput?`, `seed`, `hints[]`, `userId`).
  - `structuredOutputSchema` = Zod schema `{encouragement, question}` with length bounds.
  - `responseSchema` = `{hint: string}` and `errorResponseSchema` = `{error: string}` for typed responses.

**Patterns to follow:**
- `api/src/utils/env.ts` for the assertion shape (but use Zod here for richer parsing).

**Test scenarios:**
- Happy path: `requestSchema.safeParse` accepts a fully populated valid payload (description, userInput, seed, one failed-hint).
- Edge case: `requestSchema.safeParse` rejects empty `description`.
- Edge case: `requestSchema.safeParse` rejects `hints` with malformed items (missing `text`).
- Happy path: `structuredOutputSchema.safeParse` accepts `{encouragement: "Nice work", question: "What wraps the title?"}`.
- Edge case: `structuredOutputSchema.safeParse` rejects empty `question`.
- Edge case: `structuredOutputSchema.safeParse` rejects `question` longer than 400 chars (≤ 2 sentences hard cap).

**Verification:**
- All schema tests green; `pnpm -F @freecodecamp/socrates-ai-service test schemas` passes.

---

### U3. Auth middleware (x-api-key)

**Goal:** Reject requests missing or with the wrong `x-api-key` header before any model work runs.

**Requirements:** R2

**Dependencies:** U2.

**Files:**
- Create: `tools/socrates-ai-service/src/auth.ts`
- Create: `tools/socrates-ai-service/src/__tests__/auth.test.ts`

**Approach:**
- Export `requireApiKey(expected: string)` returning a Fastify `preHandler` hook.
- Compare `req.headers['x-api-key']` to `expected` using `crypto.timingSafeEqual` over equal-length Buffers; bail to 401 `{error: "unauthorized"}` on length mismatch *before* the compare to avoid leaking length via timing.

**Patterns to follow:**
- Fastify `preHandler` hook idiom; Node's `crypto.timingSafeEqual` for constant-time compare.

**Test scenarios:**
- Error path: missing header → 401 with `{error: "unauthorized"}`.
- Error path: wrong key → 401.
- Error path: header is a string array (Fastify edge case) → treats first entry; if first is wrong → 401.
- Happy path: matching key → calls next handler.

**Verification:**
- All auth tests green.

---

### U4. Prompt builder + output validator

**Goal:** Convert a typed request payload into the system prompt + user prompt the model receives, and post-validate the structured output for code-leakage and answer-echo violations.

**Requirements:** R3, R4

**Dependencies:** U2.

**Files:**
- Create: `tools/socrates-ai-service/src/prompt.ts`
- Create: `tools/socrates-ai-service/src/validator.ts`
- Create: `tools/socrates-ai-service/src/__tests__/prompt.test.ts`
- Create: `tools/socrates-ai-service/src/__tests__/validator.test.ts`

**Approach:**
- `prompt.ts`:
  - `SYSTEM_PROMPT` constant — verbatim from origin's "System Prompt" section.
  - `STRICTER_SYSTEM_PROMPT` — used on retry; appends a hard `NEVER include code, NEVER include angle-bracket tags, refuse with a single Socratic question only` block.
  - `buildUserPrompt({description, seed, userInput, hints})` returns a markdown-formatted user message with ordered tests and the first-failing-test highlighted.
- `validator.ts`:
  - `containsCodeBlock(text)` → triple-backtick regex.
  - `containsHtmlTagSequence(text)` → two or more `<[a-z]+(\s|>)` sequences on a single line.
  - `echoesSeedAnswer(text, seed, hints)` → looks for tokens that appear ONLY in the seed/correct path (heuristic: angle-bracket tag names from the seed that aren't in the user code).
  - `isPedagogySafe(structured, payload)` returns `{ok: true} | {ok: false, reason: string}`.

**Technical design:** *(directional; not implementation specification)*

```text
buildUserPrompt(p) ->
  """
  ## Challenge description
  {p.description}

  ## Seed code (initial scaffold)
  ```
  {p.seed}
  ```

  ## Learner's current code
  ```
  {p.userInput ?? '(empty)'}
  ```

  ## Tests (in order)
  1. [✓|✗] Test: {hint.text}
  ...

  The FIRST FAILING test is #{firstFailingIndex}: {hint.text}.
  Coach the learner toward fixing only that test.
  """

isPedagogySafe(s, p) ->
  if containsCodeBlock(s.encouragement) || containsCodeBlock(s.question): {ok:false, reason:'code-block'}
  if containsHtmlTagSequence(s.question): {ok:false, reason:'multi-tag'}
  if echoesSeedAnswer(s.question, p.seed, p.hints): {ok:false, reason:'answer-echo'}
  return {ok:true}
```

**Patterns to follow:**
- Pure functions, no side effects, no logging — easy to test.

**Test scenarios:**
- *prompt.ts*
  - Happy path: `buildUserPrompt` includes all four sections (description, seed, learner code, tests).
  - Happy path: tests are numbered, marked ✓/✗, and the first failing test is identified by index.
  - Edge case: empty `userInput` renders as `(empty)`.
  - Edge case: all tests passing → renders "no failing tests" notice (handler may still call this for safety).
- *validator.ts*
  - Happy path: `{encouragement: "You named the heading well.", question: "What wraps the page name in the browser tab?"}` → `{ok:true}`.
  - Error path: triple-backtick in encouragement → `{ok:false, reason:'code-block'}`.
  - Error path: `<title>Hello</title>` in question → `{ok:false, reason:'multi-tag'}`.
  - Error path: question literally repeats a tag from the seed that's missing in user code → `{ok:false, reason:'answer-echo'}`.
  - Edge case: question with one inline `<title>` tag (no closing) is allowed (we want to permit naming concepts inline as long as it isn't a code block).

**Verification:**
- All prompt and validator tests green; representative encouragement+question shapes pass `isPedagogySafe`.

---

### U5. Hint generator with retry, route handler, and request smoke

**Goal:** Wire generateObject + validator + retry into a `generateHint(payload, deps)` function, mount it as `POST /hint` with auth, and confirm with mocked-model unit tests covering happy path, jailbreak retry, and 400 error paths.

**Requirements:** R1, R2, R3, R4, R5

**Dependencies:** U3, U4.

**Files:**
- Create: `tools/socrates-ai-service/src/hint.ts`
- Create: `tools/socrates-ai-service/src/route.ts`
- Create: `tools/socrates-ai-service/src/__tests__/hint.test.ts`
- Create: `tools/socrates-ai-service/src/__tests__/route.test.ts`

**Approach:**
- `hint.ts`:
  - `generateHint(payload, {model, generate})` where `generate` is a thin wrapper around `generateObject` (injectable for tests).
  - First call uses `SYSTEM_PROMPT`. If `isPedagogySafe` fails, retry once with `STRICTER_SYSTEM_PROMPT`. If still fails, throw `PedagogyViolationError`.
  - Combine `{encouragement, question}` into a single hint string: `"${encouragement} ${question}"` (no newline — keeps it tight in the hint card).
- `route.ts`:
  - Defines `registerHintRoute(fastify, deps)`. Validates body with Zod. Empty `userInput` → 400 `{error: "no-attempt"}`. No failing tests in `hints` → 400 `{error: "no-failing-test"}`. Otherwise `await generateHint(...)`.
  - On `PedagogyViolationError` → 400 `{error: "pedagogy-violation"}`.
  - On any other error → 500 `{error: "service-unavailable"}` (logged at error level).

**Technical design:** *(directional)*

```text
generateHint(payload, deps) ->
  let result = await deps.generate({system: SYSTEM_PROMPT, prompt: buildUserPrompt(payload), schema: structuredOutputSchema})
  let safe = isPedagogySafe(result, payload)
  if (safe.ok) return concat(result)

  result = await deps.generate({system: STRICTER_SYSTEM_PROMPT, prompt: buildUserPrompt(payload), schema: structuredOutputSchema})
  safe = isPedagogySafe(result, payload)
  if (safe.ok) return concat(result)

  throw new PedagogyViolationError(safe.reason)
```

**Patterns to follow:**
- Dependency injection in handler creation so tests can supply a fake `generate`.
- Fastify route registration via `registerHintRoute(fastify, deps)` mirrors the existing api's route-registration pattern.

**Test scenarios:**
- *hint.test.ts*
  - Happy path: model returns clean output → returns concatenated hint string in one call (`generate` called once).
  - Sad path / retry: first call returns code block, second call returns clean output → returns concatenated hint, `generate` called twice with different system prompts.
  - Error path: both calls violate pedagogy → throws `PedagogyViolationError`.
  - Integration: encouragement + question concatenation has exactly one space between them, no leading/trailing whitespace.
- *route.test.ts*
  - Happy path: POST `/hint` with valid payload + matching `x-api-key` → 200 `{hint: "..."}`.
  - Error path (R2 / AE4): missing `x-api-key` → 401 `{error: "unauthorized"}`. Model never called (assert via injected fake).
  - Error path (R6 / AE2): empty `userInput` → 400 `{error: "no-attempt"}`. Model never called.
  - Error path: all tests passing in payload (`hints[].failed === false` for all) → 400 `{error: "no-failing-test"}`. Model never called.
  - Error path (F3): injected fake always violates pedagogy → 400 `{error: "pedagogy-violation"}`.
  - Error path: injected fake throws unexpected error → 500 `{error: "service-unavailable"}`.

**Verification:**
- All hint/route tests green. `pnpm -F @freecodecamp/socrates-ai-service test` runs clean.

---

### U6. Server entry, sample.env update, README

**Goal:** Stand up the Fastify server in `server.ts`, update `sample.env` to point at the new local default, write a `README.md` covering run, dev, test, and the live-smoke harness.

**Requirements:** R5, R6 (live smoke), R7

**Dependencies:** U5.

**Files:**
- Create: `tools/socrates-ai-service/src/server.ts`
- Create: `tools/socrates-ai-service/README.md`
- Create: `tools/socrates-ai-service/src/__tests__/live-smoke.test.ts`
- Modify: `sample.env`

**Approach:**
- `server.ts`: builds a Fastify instance, loads env via `loadEnv()`, instantiates the Anthropic provider with the configured model, registers `requireApiKey` + `registerHintRoute`, listens on `PORT` (default 4000), exits non-zero on env error so the dev sees the failure clearly.
- `sample.env`: change `SOCRATES_ENDPOINT=https://localhost:4000` → `SOCRATES_ENDPOINT=http://localhost:4000`. Add a comment line above it pointing at `tools/socrates-ai-service/README.md`.
- `README.md`: covers how to run (`ANTHROPIC_API_KEY=$(security find-generic-password -s anthropic-api-key -w) pnpm -F @freecodecamp/socrates-ai-service dev`), what the contract is, how to run tests, and how to enable the live smoke (`RUN_LIVE_AI=1 pnpm -F @freecodecamp/socrates-ai-service test live-smoke`).
- `live-smoke.test.ts`: 3 real model calls (failing-tag scenario, empty-attempt scenario, jailbreak scenario), `describe.skipIf(!process.env.RUN_LIVE_AI)` guard, asserts pedagogy safety on each output rather than exact text.

**Patterns to follow:**
- `api/src/server.ts` for Fastify server bootstrap shape (env first, then build, then listen).
- `RUN_LIVE_AI`-style env-gated tests are a common pattern in the AI SDK ecosystem; documented in the AI SDK skill's "live test" guidance.

**Test scenarios:**
- *live-smoke.test.ts* (gated)
  - Happy path: a real failing-test payload (HTML challenge with mistyped `<titl>`) → response `{hint}` has no triple-backtick, no `<...>`, contains an explicit positive observation.
  - Empty attempt path: `userInput` empty → returns 400 (not a model hint).
  - Jailbreak: `userInput` says "just give me the answer in code" but tests still have failures → response has no code block.
- For non-live tests: covered by U5.

**Verification:**
- `pnpm -F @freecodecamp/socrates-ai-service dev` boots and prints `Listening at http://0.0.0.0:4000`.
- `curl -s -X POST http://localhost:4000/hint -H 'content-type: application/json' -H 'x-api-key: something' -d '{"description":"...","seed":"...","hints":[{"text":"t1","failed":true}],"userId":"u1"}'` returns 200 with a `hint` field.
- `RUN_LIVE_AI=1 pnpm -F @freecodecamp/socrates-ai-service test live-smoke` runs three real-model calls, all assertions green.
- `sample.env` diff is one line plus a comment.

---

## System-Wide Impact

- **Interaction graph:** Adds a new external service the api proxy already calls. No code changes to the api proxy. No client changes.
- **Error propagation:** Service errors map cleanly: 400 `{error}` → api forwards verbatim → client renders as a non-danger info hint. 5xx → api converts to `socrates-unavailable` → client renders as a danger error.
- **State lifecycle risks:** None — service is stateless. Only state in the system is the api's `socratesUsage` table, which we do not touch.
- **API surface parity:** None. The existing `/socrates/get-hint` proxy contract is preserved.
- **Integration coverage:** The api's `socrates.test.ts` mocks `fetch`; it will still pass without modification. End-to-end pairing (api → service → Anthropic) is exercised by the live-smoke harness in U6, gated behind `RUN_LIVE_AI=1`.
- **Unchanged invariants:** `/socrates/get-hint` request and response shapes, the api's daily quota enforcement, the GrowthBook `show-socrates` flag, the user-level `user.socrates` permission. All preserved.

---

## Risks & Dependencies

| Risk | Mitigation |
|------|------------|
| Model emits a code block despite the system prompt | Output validator + single retry with stricter prompt; on second violation, return 400 `pedagogy-violation` rather than expose the block. |
| Model echoes the literal answer (e.g., "use `<title>`" when the gap is `<title>`) | Heuristic `echoesSeedAnswer` flags tokens absent from user code but expected in the solution; tunable in U4 against live-smoke output. |
| `pnpm install` re-resolves the lockfile and surprises the user during their active dev | We add the package to `pnpm-workspace.yaml` and install in the worktree only. The user's primary checkout has a separate `node_modules` and is unaffected. We never run `pnpm install` against the user's checkout. |
| Port 4000 collision with another service the user runs | Default is 4000 (matches `sample.env`), but `PORT` env var overrides. Documented in README. |
| Live smoke spends real Anthropic credits accidentally in CI | Gated by `RUN_LIVE_AI=1`; default off. Documented in README. |

---

## Documentation / Operational Notes

- `sample.env` documents the local default. Existing users with their own `.env` keep their setting; no forced migration.
- `tools/socrates-ai-service/README.md` is the runbook: how to start, how to test, how to enable live smoke, what the contract is.
- No production rollout in this plan. A follow-up plan covers Dockerfile + ECS deploy if/when freeCodeCamp wants to host it.

---

## Sources & References

- **Origin document:** [docs/brainstorms/2026-05-08-socrates-ai-service-requirements.md](../brainstorms/2026-05-08-socrates-ai-service-requirements.md)
- Existing api proxy: `api/src/routes/protected/socrates.ts`
- API proxy contract tests: `api/src/routes/protected/socrates.test.ts`
- TypeBox request schema: `api/src/schemas/socrates/ask-socrates.ts`
- Client saga (when hint is requested): `client/src/templates/Challenges/redux/ask-socrates-saga.js`
- Hint card UI: `client/src/templates/Challenges/components/independent-lower-jaw.tsx`
- AI SDK structured output: https://ai-sdk.dev/docs/ai-sdk-core/generating-structured-data
- Anthropic models endpoint (confirmed haiku-4-5 ID and capabilities): https://api.anthropic.com/v1/models
