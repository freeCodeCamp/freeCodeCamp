## Threat Model for qs (querystring parsing library)

### 1. Library Overview

- **Library Name:** qs
- **Brief Description:** A JavaScript library for parsing and stringifying URL query strings, supporting nested objects and arrays. It is widely used in Node.js and web applications for processing query parameters[2][6][8].
- **Key Public APIs/Functions:** `qs.parse()`, `qs.stringify()`

### 2. Define Scope

This threat model focuses on the core parsing and stringifying functionality, specifically the handling of nested objects and arrays, option validation, and cycle management in stringification.

### 3. Conceptual System Diagram

```
Caller Application → qs.parse(input, options) → Parsing Engine → Output Object
                           │
                           └→ Options Handling

Caller Application → qs.stringify(obj, options) → Stringifying Engine → Output String
                           │
                           └→ Options Handling
                           └→ Cycle Tracking
```

**Trust Boundaries:**
- **Input string (parse):** May come from untrusted sources (e.g., user input, network requests)
- **Input object (stringify):** May contain cycles, which can lead to infinite loops during stringification
- **Options:** Provided by the caller
- **Cycle Tracking:** Used only during stringification to detect and handle circular references

### 4. Identify Assets

- **Integrity of parsed output:** Prevent malicious manipulation of the output object structure, especially ensuring builtins/globals are not modified as a result of parse[3][4][8].
- **Confidentiality of processed data:** Avoid leaking sensitive information through errors or output.
- **Availability/performance for host application:** Prevent crashes or resource exhaustion in the consuming application.
- **Security of host application:** Prevent the library from being a vector for attacks (e.g., prototype pollution, DoS).
- **Reputation of library:** Maintain trust by avoiding supply chain attacks and vulnerabilities[1].

### 5. Identify Threats

| Component / API / Interaction         | S  | T  | R  | I  | D  | E  |
|---------------------------------------|----|----|----|----|----|----|
| Public API Call (`parse`)             | –  | ✓  | –  | ✓  | ✓  | ✓  |
| Public API Call (`stringify`)         | –  | ✓  | –  | ✓  | ✓  | –  |
| Options Handling                      | ✓  | ✓  | –  | ✓  | –  | ✓  |
| Dependency Interaction                | –  | –  | –  | –  | ✓  | –  |

**Key Threats:**
- **Tampering:** Malicious input can, if not prevented, alter parsed output (e.g., prototype pollution via `__proto__`, modification of builtins/globals)[3][4][8].
- **Information Disclosure:** Error messages may expose internal details or sensitive data.
- **Denial of Service:** Large or malformed input can exhaust memory or CPU.
- **Elevation of Privilege:** Prototype pollution can lead to unintended privilege escalation in the host application[3][4][8].

### 6. Mitigation/Countermeasures

| Threat Identified                                 | Proposed Mitigation |
|---------------------------------------------------|---------------------|
| Tampering (malicious input, prototype pollution)  | Strict input validation; keep `allowPrototypes: false` by default; use `plainObjects` for output; ensure builtins/globals are never modified by parse[4][8]. |
| Information Disclosure (error messages)           | Generic error messages without stack traces or internal paths. |
| Denial of Service (memory/CPU exhaustion)         | Enforce `arrayLimit` and `parameterLimit` with safe defaults; enable `throwOnLimitExceeded`; limit nesting depth[7]. |
| Elevation of Privilege (prototype pollution)      | Keep `allowPrototypes: false`; validate options against allowlist; use `plainObjects` to avoid prototype pollution[4][8]. |

### 7. Risk Ranking

- **High:** Denial of Service via array parsing or malformed input (historical vulnerability)
- **Medium:** Prototype pollution via options or input (if `allowPrototypes` enabled)
- **Low:** Information disclosure in errors

### 8. Next Steps & Review

1. **Audit option validation logic.**
2. **Add depth limiting to nested parsing and stringification.**
3. **Implement fuzz testing for parser and stringifier edge cases.**
4. **Regularly review dependencies for vulnerabilities.**
5. **Keep documentation and threat model up to date.**
6. **Ensure builtins/globals are never modified as a result of parse.**
7. **Support round-trip consistency between parse and stringify as a non-security goal, with the right options[5][9].**
