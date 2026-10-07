import { CredentialsProviderError } from "@smithy/property-provider";
export const resolveCredentialSource = (credentialSource, profileName) => {
    const sourceProvidersMap = {
        EcsContainer: (options) => import("@smithy/credential-provider-imds").then(({ fromContainerMetadata }) => fromContainerMetadata(options)),
        Ec2InstanceMetadata: (options) => import("@smithy/credential-provider-imds").then(({ fromInstanceMetadata }) => fromInstanceMetadata(options)),
        Environment: (options) => import("@aws-sdk/credential-provider-env").then(({ fromEnv }) => fromEnv(options)),
    };
    if (credentialSource in sourceProvidersMap) {
        return sourceProvidersMap[credentialSource];
    }
    else {
        throw new CredentialsProviderError(`Unsupported credential source in profile ${profileName}. Got ${credentialSource}, ` +
            `expected EcsContainer or Ec2InstanceMetadata or Environment.`);
    }
};
