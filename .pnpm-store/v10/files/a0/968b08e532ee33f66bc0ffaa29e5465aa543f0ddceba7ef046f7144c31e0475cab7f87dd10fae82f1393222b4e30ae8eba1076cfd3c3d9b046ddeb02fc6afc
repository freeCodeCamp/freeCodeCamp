export class DefaultIdentityProviderConfig {
    constructor(config) {
        this.authSchemes = new Map();
        for (const [key, value] of Object.entries(config)) {
            if (value !== undefined) {
                this.authSchemes.set(key, value);
            }
        }
    }
    getIdentityProvider(schemeId) {
        return this.authSchemes.get(schemeId);
    }
}
