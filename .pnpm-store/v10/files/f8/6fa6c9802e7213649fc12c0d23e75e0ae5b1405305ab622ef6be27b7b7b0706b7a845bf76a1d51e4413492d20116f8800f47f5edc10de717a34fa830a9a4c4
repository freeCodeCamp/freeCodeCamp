import { IsDateTime } from './date_time.mjs';
import { IsDate } from './date.mjs';
import { IsDuration } from './duration.mjs';
import { IsEmail } from './email.mjs';
import { IsHostname } from './hostname.mjs';
import { IsIdnEmail } from './idn_email.mjs';
import { IsIdnHostname } from './idn_hostname.mjs';
import { IsIPv4 } from './ipv4.mjs';
import { IsIPv6 } from './ipv6.mjs';
import { IsIriReference } from './iri_reference.mjs';
import { IsIri } from './iri.mjs';
import { IsJsonPointerUriFragment } from './json_pointer_uri_fragment.mjs';
import { IsJsonPointer } from './json_pointer.mjs';
import { IsRegex } from './regex.mjs';
import { IsRelativeJsonPointer } from './relative_json_pointer.mjs';
import { IsTime } from './time.mjs';
import { IsUriReference } from './uri_reference.mjs';
import { IsUriTemplate } from './uri_template.mjs';
import { IsUri } from './uri.mjs';
import { IsUrl } from './url.mjs';
import { IsUuid } from './uuid.mjs';
// ------------------------------------------------------------------
// Formats
// ------------------------------------------------------------------
const formats = new Map();
// ------------------------------------------------------------------
// Clear
// ------------------------------------------------------------------
/** Clears all entries */
export function Clear() {
    formats.clear();
}
// ------------------------------------------------------------------
// Entries
// ------------------------------------------------------------------
/** Returns format entries in this registry */
export function Entries() {
    return [...formats.entries()];
}
// ------------------------------------------------------------------
// Set
// ------------------------------------------------------------------
/** Sets a format */
export function Set(format, check) {
    formats.set(format, check);
}
// ------------------------------------------------------------------
// Has
// ------------------------------------------------------------------
/** Returns true if the registry has this format */
export function Has(format) {
    return formats.has(format);
}
// ------------------------------------------------------------------
// Get
// ------------------------------------------------------------------
/** Gets a format or undefined if not exists */
export function Get(format) {
    return formats.get(format);
}
// ------------------------------------------------------------------
// Test
// ------------------------------------------------------------------
/** Tests a value against a format, if the format is not registered, true */
export function Test(format, value) {
    return formats.get(format)?.(value) ?? true;
}
// ------------------------------------------------------------------
// Reset
// ------------------------------------------------------------------
/** Resets all formats to defaults */
export function Reset() {
    Clear();
    formats.set('date-time', IsDateTime);
    formats.set('date', IsDate);
    formats.set('duration', IsDuration);
    formats.set('email', IsEmail);
    formats.set('hostname', IsHostname);
    formats.set('idn-email', IsIdnEmail);
    formats.set('idn-hostname', IsIdnHostname);
    formats.set('ipv4', IsIPv4);
    formats.set('ipv6', IsIPv6);
    formats.set('iri-reference', IsIriReference);
    formats.set('iri', IsIri);
    formats.set('json-pointer-uri-fragment', IsJsonPointerUriFragment);
    formats.set('json-pointer', IsJsonPointer);
    formats.set('regex', IsRegex);
    formats.set('relative-json-pointer', IsRelativeJsonPointer);
    formats.set('time', IsTime);
    formats.set('uri-reference', IsUriReference);
    formats.set('uri-template', IsUriTemplate);
    formats.set('uri', IsUri);
    formats.set('url', IsUrl);
    formats.set('uuid', IsUuid);
}
Reset();
