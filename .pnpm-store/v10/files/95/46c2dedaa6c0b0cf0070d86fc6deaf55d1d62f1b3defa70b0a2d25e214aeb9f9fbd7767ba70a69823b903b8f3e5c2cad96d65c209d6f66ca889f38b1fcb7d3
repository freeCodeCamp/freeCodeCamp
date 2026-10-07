import {
  type AWSCredentialProvider,
  AWSSDKCredentialProvider
} from '../../cmap/auth/aws_temporary_credentials';
import { type KMSProviders } from '.';

/**
 * @internal
 */
export async function loadAWSCredentials(
  kmsProviders: KMSProviders,
  provider?: AWSCredentialProvider
): Promise<KMSProviders> {
  const credentialProvider = new AWSSDKCredentialProvider(provider);

  // We shouldn't ever receive a response from the AWS SDK that doesn't have a `SecretAccessKey`
  // or `AccessKeyId`.  However, TS says these fields are optional.  We provide empty strings
  // and let libmongocrypt error if we're unable to fetch the required keys.
  const {
    SecretAccessKey = '',
    AccessKeyId = '',
    Token
  } = await credentialProvider.getCredentials();
  const aws: NonNullable<KMSProviders['aws']> = {
    secretAccessKey: SecretAccessKey,
    accessKeyId: AccessKeyId
  };
  // the AWS session token is only required for temporary credentials so only attach it to the
  // result if it's present in the response from the aws sdk
  Token != null && (aws.sessionToken = Token);

  return { ...kmsProviders, aws };
}
