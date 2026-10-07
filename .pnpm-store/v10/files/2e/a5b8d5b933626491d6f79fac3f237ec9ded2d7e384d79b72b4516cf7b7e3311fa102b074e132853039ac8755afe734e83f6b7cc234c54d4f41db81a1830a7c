export const defaultProvider = ((input) => {
    return () => import("@aws-sdk/credential-provider-node").then(({ defaultProvider }) => defaultProvider(input)());
});
