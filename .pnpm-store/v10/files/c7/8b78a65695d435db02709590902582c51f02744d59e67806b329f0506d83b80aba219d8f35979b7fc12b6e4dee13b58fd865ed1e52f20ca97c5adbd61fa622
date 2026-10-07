/**
 * Throws an error if the condition is not met.
 *
 * The error is exhaustive in development, and becomes generic in production.
 *
 * This is used to make development a better experience to provide guidance as
 * to where the error comes from.
 */ function invariant(condition, message) {
    if (condition) {
        return;
    }
    {
        throw new Error('Invariant failed');
    }
}

export { invariant };
