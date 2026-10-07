"use strict";
// ResourceNamespace allows you to create nested resources, i.e. `stripe.issuing.cards`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.resourceNamespace = void 0;
// It also works recursively, so you could do i.e. `stripe.billing.invoicing.pay`.
function ResourceNamespace(stripe, resources) {
    for (const name in resources) {
        if (!Object.prototype.hasOwnProperty.call(resources, name)) {
            continue;
        }
        const camelCaseName = name[0].toLowerCase() + name.substring(1);
        const resource = new resources[name](stripe);
        this[camelCaseName] = resource;
    }
}
function resourceNamespace(namespace, resources) {
    return function (stripe) {
        return new ResourceNamespace(stripe, resources);
    };
}
exports.resourceNamespace = resourceNamespace;
