/**
 * Returns true if the value is a Iri
 * @specification
 */
export function IsIri(value) {
    try {
        new URL(value);
        return true;
    }
    catch {
        return false;
    }
}
