# html-standard

A TypeScript library for working with the HTML Living Standard specification.

> ⚠️ **Experimental**: This project may introduce breaking changes frequently.

## Installation

```bash
npm install html-standard
```

## Usage

### Get Implicit ARIA Roles

```typescript
import { element } from "html-standard";

// Basic elements
element("button").implicitRole(); // 'button'
element("nav").implicitRole(); // 'navigation'

// Attribute-dependent roles
element("a", {
  attributes: { get: (key) => (key === "href" ? "https://example.com" : null) },
}).implicitRole(); // 'link'

element("a").implicitRole(); // 'generic' (no href)

element("input", {
  attributes: { get: (key) => (key === "type" ? "checkbox" : null) },
}).implicitRole(); // 'checkbox'
```

### Validate Attributes

```typescript
import { element } from "html-standard";

const link = element("link");

// Validate 'rel' attribute
link.attributes.get("rel")?.validateValue("stylesheet"); // { valid: true, ... }
link.attributes.get("rel")?.validateValue("invalid-value"); // { valid: false, ... }
```

## Features

- Implicit ARIA roles per [HTML-ARIA spec](https://www.w3.org/TR/html-aria/)
- Attribute validation based on HTML Standard
- Case-insensitive element names
- TypeScript support

## License

MIT
