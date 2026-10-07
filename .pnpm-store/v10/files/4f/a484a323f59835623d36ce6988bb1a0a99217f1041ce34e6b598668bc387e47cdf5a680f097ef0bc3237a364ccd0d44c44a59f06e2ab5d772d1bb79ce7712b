### 2.6.8

Security release. Coordinated disclosure from [@adamyordan](https://github.com/adamyordan). See published advisory [GHSA-cchx-rhgv-92hj](https://github.com/i18next/i18next-fs-backend/security/advisories/GHSA-cchx-rhgv-92hj).

- security: `utils.getLastOfPath` now descends only into own properties, closing an unauthenticated denial of service that the 2.6.6 prototype-pollution fix did not cover. 2.6.6 denylists `__proto__`, `constructor` and `prototype`, but the walk it guards still stepped into inherited members: the autovivify test (`!object[key]`) is true for every inherited `Object.prototype` method, so a queued missing-key string such as `hasOwnProperty.call` (split to `['hasOwnProperty','call']` in `writeFile()`) walked into `Object.prototype.hasOwnProperty` and overwrote its `.call` with the attacker's fallback value, breaking the own-property check i18next itself runs and returning `500` for every request in the process until restart. The same held for `valueOf`, `toString`, `isPrototypeOf` and the other inherited members the denylist never covered, so extending the denylist would not have closed it. The traversal now gates each descent on `Object.prototype.hasOwnProperty.call(object, key)`, covering `setPath`, `pushPath` and `getPath`, and matching the fix i18next core already carries. Reachable in practice via `i18next-http-middleware`'s `missingKeyHandler` with `saveMissing` enabled; see also the matching fix in `i18next-http-middleware` 3.9.9. Credit: [@adamyordan](https://github.com/adamyordan) ([GHSA-cchx-rhgv-92hj](https://github.com/i18next/i18next-fs-backend/security/advisories/GHSA-cchx-rhgv-92hj)).

### 2.6.7

- security (defence-in-depth): `write()` iterates own enumerable keys of `queuedWrites` instead of using `for...in`. `for...in` walks the prototype chain, so an `Object.prototype` polluted by any other library in the process was iterated here and turned into `writeFile()` calls. `setPath` / `pushPath` already refuse to create unsafe own keys and `interpolatePath` still validates before anything is written, so this closes an amplification path rather than a traversal.
- docs: corrected the security section of the README, which still claimed `/` is rejected in both `lng` and `ns`. That has not been true since 2.6.5, which allows `/` in `ns` so nested namespace names such as `a/b` map to subfolder layouts. The per-key split is now described accurately.

### 2.6.6

Security release — coordinated disclosure from [@codeswhite](https://github.com/codeswhite). See published advisory [GHSA-2933-q333-qg83](https://github.com/i18next/i18next-fs-backend/security/advisories/GHSA-2933-q333-qg83).

- security: guard the in-memory `setPath` / `pushPath` traversal (`utils.getLastOfPath`) against prototype pollution via crafted missing-key strings. 2.6.4 sanitised `lng`/`ns` interpolation into filesystem paths, but did not cover the JSON-object walk that `writeFile()` performs on each queued missing-key entry: with the default `keySeparator: '.'`, a key like `__proto__.polluted` was split into `['__proto__','polluted']` and walked straight into `Object.prototype`. The traversal helper now refuses to descend through `__proto__`, `constructor`, or `prototype` segments and drops the offending write silently; legitimate dotted keys (`header.title`) are unaffected. Reachable in practice via `i18next-http-middleware`'s `missingKeyHandler` when exposed to untrusted input — see also the matching defence-in-depth fix in `i18next-http-middleware` 3.9.7. Credit: [@codeswhite](https://github.com/codeswhite) ([GHSA-2933-q333-qg83](https://github.com/i18next/i18next-fs-backend/security/advisories/GHSA-2933-q333-qg83)).

### 2.6.5

- fix: allow forward slashes in `ns` values so nested namespace names (mapping to subfolder locale files such as `public/locales/en/a/b.json`) load correctly again. 2.6.4's security fix applied the same strict path-segment check to both `lng` and `ns`, which was correct for `lng` (no BCP-47 shape contains `/`) but over-strict for `ns` — nested namespaces containing `/` were never officially supported, but the behaviour fell out of the implicit string-substitution semantics of `loadPath` and is common enough in the wild to be worth accommodating. `isSafePathSegment` is now split into `isSafeLangSegment` (strict — still rejects `/`) and `isSafeNsSegment` (loose — allows `/` but still rejects `..`, `\`, control chars, prototype keys, and oversized inputs). `isSafePathSegment` is kept as a backwards-compatible alias for the strict check. The 2.6.4 security fix remains in force for every concrete attack pattern from the original advisory. Fixes [#74](https://github.com/i18next/i18next-fs-backend/issues/74).

### 2.6.4

Security release — all issues found via an internal audit. See published advisory [GHSA-8847-338w-5hcj](https://github.com/i18next/i18next-fs-backend/security/advisories/GHSA-8847-338w-5hcj).

- security: refuse to build filesystem paths when `lng` or `ns` values contain `..`, path separators (`/`, `\`), control characters, prototype keys (`__proto__` / `constructor` / `prototype`), or exceed 128 chars. Prevents arbitrary filesystem read / write via attacker-controlled language-code values. Any legitimate i18next language-code shape (BCP-47-like, underscores, hyphens, dots, `+`-joined multi-language requests) is still accepted ([GHSA-8847-338w-5hcj](https://github.com/i18next/i18next-fs-backend/security/advisories/GHSA-8847-338w-5hcj))
- docs: new "Security considerations" README section — documents the filesystem-path sanitiser and clarifies the trust model around `.js`/`.ts` locale files (their content is `eval`-ed, so they must be treated as code). The `eval` behaviour itself is retained: dynamic expressions in `.js`/`.ts` locale files are an intentional feature, and safe replacements like `import()` are async-only and not viable for this sync-capable code path.
- chore: ignore `.env*` and `*.pem`/`*.key` files in `.gitignore`.

### 2.6.3

- use own interpolation function instead of relying on i18next's interpolator

### 2.6.1

- Bump js-yaml from 4.1.0 to 4.1.1 (#64)

### 2.6.0

- support `initImmediate` -> `initAsync` renaming of i18next v24

### 2.5.0

- fix for Deno 2 and removal of unnecessary .cjs file
- for esm build environments not supporting top-level await, you should import the `i18next-fs-backend/cjs` export or stay at v2.4.0
