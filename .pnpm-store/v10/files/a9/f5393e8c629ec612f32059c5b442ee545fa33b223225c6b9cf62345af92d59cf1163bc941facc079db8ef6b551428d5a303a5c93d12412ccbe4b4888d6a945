type BypassRequestInput = string | URL | Request;
/**
 * Creates a `Request` instance that will always be ignored by MSW.
 *
 * @example
 * import { bypass } from 'msw'
 *
 * fetch(bypass('/resource'))
 * fetch(bypass(new URL('/resource', 'https://example.com)))
 * fetch(bypass(new Request('https://example.com/resource')))
 *
 * @see {@link https://mswjs.io/docs/api/bypass `bypass()` API reference}
 */
declare function bypass(input: BypassRequestInput, init?: RequestInit): Request;

export { type BypassRequestInput, bypass };
