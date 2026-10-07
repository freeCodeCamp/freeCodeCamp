# `bidi/core`

`bidi/core` is a low-level layer that sits above the WebDriver BiDi transport to
provide a structured API to WebDriver BiDi's flat API. In particular,
`bidi/core` provides object-oriented semantics around WebDriver BiDi resources
and automatically carries out the correct order of events in WebDriver BiDi through
the use of events.

## Tips

There are a few design decisions in this library that should be considered when
developing `bidi/core`:

- Required arguments are inlined as function arguments while optional arguments
  are put into an options object.
  - Function arguments are implicitly required in TypeScript, so by putting
    required arguments as function arguments, the semantic is automatically
    inherited.

- The session shall never be exposed on any public method/getter on any
  object except the browser. Private getters are allowed.
  - Passing around the session is dangerous as it obfuscates the origin of the
    session. By only allowing it on the browser, the origin is well-defined.

- `bidi/core` implements WebDriver BiDi plus its surrounding specifications.
  - A lot of WebDriver BiDi is not strictly written in WebDriver BiDi. Since WebDriver
    BiDi interacts with several other specs, there are other considerations that
    also influence the design of `bidi/core`. For example, for navigation,
    WebDriver BiDi doesn't have a concept of "nested navigation", but in
    practice this exists if a fragment navigation happens in a `beforeunload`
    hook.

- `bidi/core` always follow the spec and never Puppeteer's needs.
  - By ensuring `bidi/core` follows the spec rather than Puppeteer's needs, we
    can identify the source of a bug precisely (i.e. whether the spec needs to
    be updated or Puppeteer needs to work around it).

- `bidi/core` attempts to implement WebDriver BiDi comprehensively, but
  minimally.
  - Imagine the objects and events in WebDriver BiDi as a large
    [graph](<https://en.wikipedia.org/wiki/Graph_(discrete_mathematics)>) where
    objects are nodes and events are edges. In `bidi/core`, we always implement
    all edges and nodes required by a feature without skipping nodes and events
    (e.g. [fragment navigation -> navigation -> browsing context]; not [fragment
    navigation -> browsing context]). We also never compose edges (e.g. both
    [fragment navigation -> navigation -> browsing context] and [fragment
    navigation -> browsing context] must not exist; i.e. a fragment navigation
    event should not occur on the browsing context). This ensures that the
    semantics of WebDriver BiDi is carried out correctly.

  - This point reinforces `bidi/core` should not follow Puppeteer's needs since
    Puppeteer typically composes a lot of events to satisfy its needs.
