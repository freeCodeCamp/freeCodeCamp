import { chain, CredentialsProviderError } from "@smithy/property-provider";
export const ENV_IMDS_DISABLED = "AWS_EC2_METADATA_DISABLED";
export const remoteProvider = async (init) => {
    const { ENV_CMDS_FULL_URI, ENV_CMDS_RELATIVE_URI, fromContainerMetadata, fromInstanceMetadata } = await import("@smithy/credential-provider-imds");
    if (process.env[ENV_CMDS_RELATIVE_URI] || process.env[ENV_CMDS_FULL_URI]) {
        init.logger?.debug("@aws-sdk/credential-provider-node", "remoteProvider::fromHttp/fromContainerMetadata");
        const { fromHttp } = await import("@aws-sdk/credential-provider-http");
        return chain(fromHttp(init), fromContainerMetadata(init));
    }
    if (process.env[ENV_IMDS_DISABLED]) {
        return async () => {
            throw new CredentialsProviderError("EC2 Instance Metadata Service access disabled");
        };
    }
    init.logger?.debug("@aws-sdk/credential-provider-node", "remoteProvider::fromInstanceMetadata");
    return fromInstanceMetadata(init);
};
