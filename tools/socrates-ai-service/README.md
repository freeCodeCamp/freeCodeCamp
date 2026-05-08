# socrates-ai-service

The AI hint backend the freeCodeCamp api proxies to at
`SOCRATES_ENDPOINT/hint`. Generates Socratic, no-spoiler hints via Anthropic
+ the Vercel AI SDK.

The api workspace already ships the proxy
(`api/src/routes/protected/socrates.ts`) and the client already ships the UI
(the Socrates button on a failing challenge). This package fills the missing
backend that those two halves expect.

## Contract

```
POST /hint
Headers: x-api-key: <SOCRATES_API_KEY>
Body:    { description, userInput, seed, hints[], userId }

200 { hint: string }                # one short encouragement + one Socratic question
400 { error: 'invalid-request' }    # body fails Zod validation
400 { error: 'no-attempt' }         # learner code is empty
400 { error: 'no-failing-test' }    # all tests already pass
400 { error: 'pedagogy-violation' } # model retried twice, still produced spoiler-y output
401 { error: 'unauthorized' }       # missing or wrong x-api-key
500 { error: 'service-unavailable' }# upstream LLM call failed
```

`GET /health` returns `{ status: 'ok' }` for liveness checks.

## Pedagogy contract

The service generates exactly two fields, then concatenates them:

- **encouragement** — one specific positive observation grounded in the
  learner's actual code.
- **question** — one Socratic question that targets the conceptual gap
  implied by the *first* failing test.

Hard rules baked into the system prompt and re-checked in code:

1. No code blocks, no diffs, no "replace X with Y" instructions.
2. Never name the literal answer (e.g. ask what wraps the page name in
   the browser tab — never say "use `<title>`").
3. Stay strictly on the current challenge.
4. Empty/unrelated submissions get a redirect to try first, not a teach.
5. Answer-seeking prompts get a warm refusal + at most one nudge.

If the model violates any rule, the service silently retries once with a
stricter system prompt. If that also fails, it returns
`400 pedagogy-violation` so the client can fall back to the static hint UX.

## Running locally (without disturbing `npm run develop`)

```sh
cd tools/socrates-ai-service
cp .env.sample .env
# edit .env: set ANTHROPIC_API_KEY and SOCRATES_API_KEY (must match repo-root .env)
pnpm dev
```

Defaults bind `127.0.0.1:4000`, so it does not collide with the api on
:3000 or the client on :8000. The repo-root `sample.env` has
`SOCRATES_ENDPOINT=https://localhost:4000` — for local dev set your repo-root
`.env` to `SOCRATES_ENDPOINT=http://localhost:4000` (plain http) so the api
proxy can reach the service.

### Smoke test (no live model)

```sh
curl -s -X POST http://127.0.0.1:4000/hint \
  -H 'content-type: application/json' \
  -H "x-api-key: $SOCRATES_API_KEY" \
  -d '{
    "description": "Add a title that says Cat Photo App.",
    "userInput": "<h1>Cat Photo App</h1>",
    "seed": "<title>placeholder</title>",
    "hints": [
      { "text": "Title should say Cat Photo App.", "failed": true }
    ],
    "userId": "u1"
  }'
```

## Tests

```sh
pnpm test         # vitest unit + route tests, no live LLM
pnpm type-check   # strict tsc
```

The unit tests stub the model with `vi.fn()`. To exercise the live
Anthropic call as well, use the integration smoke described above.

## Why a separate workspace

- Strict type-safety over the upstream contract without forcing the api
  package to depend on `ai` / `@ai-sdk/anthropic`.
- Deployable independently of the main api when LLM cost or latency
  becomes a concern.
- Mirrors the existing `tools/*` convention in the monorepo.
