export function resolveLogins(logins) {
    return Promise.all(Object.keys(logins).reduce((arr, name) => {
        const tokenOrProvider = logins[name];
        if (typeof tokenOrProvider === "string") {
            arr.push([name, tokenOrProvider]);
        }
        else {
            arr.push(tokenOrProvider().then((token) => [name, token]));
        }
        return arr;
    }, [])).then((resolvedPairs) => resolvedPairs.reduce((logins, [key, value]) => {
        logins[key] = value;
        return logins;
    }, {}));
}
