import { type AWSCredentials, getAwsCredentialProvider } from '../../deps';
import { MongoAWSError } from '../../error';
import { request } from '../../utils';

const AWS_RELATIVE_URI = 'http://169.254.170.2';
const AWS_EC2_URI = 'http://169.254.169.254';
const AWS_EC2_PATH = '/latest/meta-data/iam/security-credentials';

/**
 * @internal
 * This interface matches the final result of fetching temporary credentials manually, outlined
 * in the spec [here](https://github.com/mongodb/specifications/blob/master/source/auth/auth.md#ec2-endpoint).
 *
 * When we use the AWS SDK, we map the response from the SDK to conform to this interface.
 */
export interface AWSTempCredentials {
  AccessKeyId?: string;
  SecretAccessKey?: string;
  Token?: string;
  RoleArn?: string;
  Expiration?: Date;
}

/** @public **/
export type AWSCredentialProvider = () => Promise<AWSCredentials>;

/**
 * @internal
 *
 * Fetches temporary AWS credentials.
 */
export abstract class AWSTemporaryCredentialProvider {
  abstract getCredentials(): Promise<AWSTempCredentials>;
  private static _awsSDK: ReturnType<typeof getAwsCredentialProvider>;
  protected static get awsSDK() {
    AWSTemporaryCredentialProvider._awsSDK ??= getAwsCredentialProvider();
    return AWSTemporaryCredentialProvider._awsSDK;
  }

  static get isAWSSDKInstalled(): boolean {
    return !('kModuleError' in AWSTemporaryCredentialProvider.awsSDK);
  }
}

/** @internal */
export class AWSSDKCredentialProvider extends AWSTemporaryCredentialProvider {
  private _provider?: AWSCredentialProvider;

  /**
   * Create the SDK credentials provider.
   * @param credentialsProvider - The credentials provider.
   */
  constructor(credentialsProvider?: AWSCredentialProvider) {
    super();

    if (credentialsProvider) {
      this._provider = credentialsProvider;
    }
  }

  /**
   * The AWS SDK caches credentials automatically and handles refresh when the credentials have expired.
   * To ensure this occurs, we need to cache the `provider` returned by the AWS sdk and re-use it when fetching credentials.
   */
  private get provider(): () => Promise<AWSCredentials> {
    if ('kModuleError' in AWSTemporaryCredentialProvider.awsSDK) {
      throw AWSTemporaryCredentialProvider.awsSDK.kModuleError;
    }
    if (this._provider) {
      return this._provider;
    }
    let { AWS_STS_REGIONAL_ENDPOINTS = '', AWS_REGION = '' } = process.env;
    AWS_STS_REGIONAL_ENDPOINTS = AWS_STS_REGIONAL_ENDPOINTS.toLowerCase();
    AWS_REGION = AWS_REGION.toLowerCase();

    /** The option setting should work only for users who have explicit settings in their environment, the driver should not encode "defaults" */
    const awsRegionSettingsExist =
      AWS_REGION.length !== 0 && AWS_STS_REGIONAL_ENDPOINTS.length !== 0;

    /**
     * The following regions use the global AWS STS endpoint, sts.amazonaws.com, by default
     * https://docs.aws.amazon.com/sdkref/latest/guide/feature-sts-regionalized-endpoints.html
     */
    const LEGACY_REGIONS = new Set([
      'ap-northeast-1',
      'ap-south-1',
      'ap-southeast-1',
      'ap-southeast-2',
      'aws-global',
      'ca-central-1',
      'eu-central-1',
      'eu-north-1',
      'eu-west-1',
      'eu-west-2',
      'eu-west-3',
      'sa-east-1',
      'us-east-1',
      'us-east-2',
      'us-west-1',
      'us-west-2'
    ]);
    /**
     * If AWS_STS_REGIONAL_ENDPOINTS is set to regional, users are opting into the new behavior of respecting the region settings
     *
     * If AWS_STS_REGIONAL_ENDPOINTS is set to legacy, then "old" regions need to keep using the global setting.
     * Technically the SDK gets this wrong, it reaches out to 'sts.us-east-1.amazonaws.com' when it should be 'sts.amazonaws.com'.
     * That is not our bug to fix here. We leave that up to the SDK.
     */
    const useRegionalSts =
      AWS_STS_REGIONAL_ENDPOINTS === 'regional' ||
      (AWS_STS_REGIONAL_ENDPOINTS === 'legacy' && !LEGACY_REGIONS.has(AWS_REGION));

    this._provider =
      awsRegionSettingsExist && useRegionalSts
        ? AWSTemporaryCredentialProvider.awsSDK.fromNodeProviderChain({
            clientConfig: { region: AWS_REGION }
          })
        : AWSTemporaryCredentialProvider.awsSDK.fromNodeProviderChain();

    return this._provider;
  }

  override async getCredentials(): Promise<AWSTempCredentials> {
    /*
     * Creates a credential provider that will attempt to find credentials from the
     * following sources (listed in order of precedence):
     *
     * - Environment variables exposed via process.env
     * - SSO credentials from token cache
     * - Web identity token credentials
     * - Shared credentials and config ini files
     * - The EC2/ECS Instance Metadata Service
     */
    try {
      const creds = await this.provider();
      return {
        AccessKeyId: creds.accessKeyId,
        SecretAccessKey: creds.secretAccessKey,
        Token: creds.sessionToken,
        Expiration: creds.expiration
      };
    } catch (error) {
      throw new MongoAWSError(error.message, { cause: error });
    }
  }
}

/**
 * @internal
 * Fetches credentials manually (without the AWS SDK), as outlined in the [Obtaining Credentials](https://github.com/mongodb/specifications/blob/master/source/auth/auth.md#obtaining-credentials)
 * section of the Auth spec.
 */
export class LegacyAWSTemporaryCredentialProvider extends AWSTemporaryCredentialProvider {
  override async getCredentials(): Promise<AWSTempCredentials> {
    // If the environment variable AWS_CONTAINER_CREDENTIALS_RELATIVE_URI
    // is set then drivers MUST assume that it was set by an AWS ECS agent
    if (process.env.AWS_CONTAINER_CREDENTIALS_RELATIVE_URI) {
      return await request(
        `${AWS_RELATIVE_URI}${process.env.AWS_CONTAINER_CREDENTIALS_RELATIVE_URI}`
      );
    }

    // Otherwise assume we are on an EC2 instance

    // get a token
    const token = await request(`${AWS_EC2_URI}/latest/api/token`, {
      method: 'PUT',
      json: false,
      headers: { 'X-aws-ec2-metadata-token-ttl-seconds': 30 }
    });

    // get role name
    const roleName = await request(`${AWS_EC2_URI}/${AWS_EC2_PATH}`, {
      json: false,
      headers: { 'X-aws-ec2-metadata-token': token }
    });

    // get temp credentials
    const creds = await request(`${AWS_EC2_URI}/${AWS_EC2_PATH}/${roleName}`, {
      headers: { 'X-aws-ec2-metadata-token': token }
    });

    return creds;
  }
}
