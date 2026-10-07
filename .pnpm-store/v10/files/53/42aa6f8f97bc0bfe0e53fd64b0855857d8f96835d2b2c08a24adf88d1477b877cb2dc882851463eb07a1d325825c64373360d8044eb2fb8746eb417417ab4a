import { NodeHttpHandler } from "@smithy/node-http-handler";
import { CredentialsProviderError } from "@smithy/property-provider";
import fs from "fs/promises";
import { checkUrl } from "./checkUrl";
import { createGetRequest, getCredentials } from "./requestHelpers";
import { retryWrapper } from "./retry-wrapper";
const AWS_CONTAINER_CREDENTIALS_RELATIVE_URI = "AWS_CONTAINER_CREDENTIALS_RELATIVE_URI";
const DEFAULT_LINK_LOCAL_HOST = "http://169.254.170.2";
const AWS_CONTAINER_CREDENTIALS_FULL_URI = "AWS_CONTAINER_CREDENTIALS_FULL_URI";
const AWS_CONTAINER_AUTHORIZATION_TOKEN_FILE = "AWS_CONTAINER_AUTHORIZATION_TOKEN_FILE";
const AWS_CONTAINER_AUTHORIZATION_TOKEN = "AWS_CONTAINER_AUTHORIZATION_TOKEN";
export const fromHttp = (options) => {
    options.logger?.debug("@aws-sdk/credential-provider-http", "fromHttp");
    let host;
    const relative = options.awsContainerCredentialsRelativeUri ?? process.env[AWS_CONTAINER_CREDENTIALS_RELATIVE_URI];
    const full = options.awsContainerCredentialsFullUri ?? process.env[AWS_CONTAINER_CREDENTIALS_FULL_URI];
    const token = options.awsContainerAuthorizationToken ?? process.env[AWS_CONTAINER_AUTHORIZATION_TOKEN];
    const tokenFile = options.awsContainerAuthorizationTokenFile ?? process.env[AWS_CONTAINER_AUTHORIZATION_TOKEN_FILE];
    if (relative && full) {
        console.warn("AWS SDK HTTP credentials provider:", "you have set both awsContainerCredentialsRelativeUri and awsContainerCredentialsFullUri.");
        console.warn("awsContainerCredentialsFullUri will take precedence.");
    }
    if (token && tokenFile) {
        console.warn("AWS SDK HTTP credentials provider:", "you have set both awsContainerAuthorizationToken and awsContainerAuthorizationTokenFile.");
        console.warn("awsContainerAuthorizationToken will take precedence.");
    }
    if (full) {
        host = full;
    }
    else if (relative) {
        host = `${DEFAULT_LINK_LOCAL_HOST}${relative}`;
    }
    else {
        throw new CredentialsProviderError(`No HTTP credential provider host provided.
Set AWS_CONTAINER_CREDENTIALS_FULL_URI or AWS_CONTAINER_CREDENTIALS_RELATIVE_URI.`);
    }
    const url = new URL(host);
    checkUrl(url);
    const requestHandler = new NodeHttpHandler({
        requestTimeout: options.timeout ?? 1000,
        connectionTimeout: options.timeout ?? 1000,
    });
    return retryWrapper(async () => {
        const request = createGetRequest(url);
        if (token) {
            request.headers.Authorization = token;
        }
        else if (tokenFile) {
            request.headers.Authorization = (await fs.readFile(tokenFile)).toString();
        }
        try {
            const result = await requestHandler.handle(request);
            return getCredentials(result.response);
        }
        catch (e) {
            throw new CredentialsProviderError(String(e));
        }
    }, options.maxRetries ?? 3, options.timeout ?? 1000);
};
