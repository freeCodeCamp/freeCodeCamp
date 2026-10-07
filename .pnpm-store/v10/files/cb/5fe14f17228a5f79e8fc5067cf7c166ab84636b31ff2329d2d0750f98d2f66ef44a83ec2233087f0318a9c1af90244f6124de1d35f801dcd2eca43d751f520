import { getDefaultRoleAssumer as StsGetDefaultRoleAssumer, getDefaultRoleAssumerWithWebIdentity as StsGetDefaultRoleAssumerWithWebIdentity, } from "./defaultStsRoleAssumers";
import { STSClient } from "./STSClient";
const getCustomizableStsClientCtor = (baseCtor, customizations) => {
    if (!customizations)
        return baseCtor;
    else
        return class CustomizableSTSClient extends baseCtor {
            constructor(config) {
                super(config);
                for (const customization of customizations) {
                    this.middlewareStack.use(customization);
                }
            }
        };
};
export const getDefaultRoleAssumer = (stsOptions = {}, stsPlugins) => StsGetDefaultRoleAssumer(stsOptions, getCustomizableStsClientCtor(STSClient, stsPlugins));
export const getDefaultRoleAssumerWithWebIdentity = (stsOptions = {}, stsPlugins) => StsGetDefaultRoleAssumerWithWebIdentity(stsOptions, getCustomizableStsClientCtor(STSClient, stsPlugins));
export const decorateDefaultCredentialProvider = (provider) => (input) => provider({
    roleAssumer: getDefaultRoleAssumer(input),
    roleAssumerWithWebIdentity: getDefaultRoleAssumerWithWebIdentity(input),
    ...input,
});
