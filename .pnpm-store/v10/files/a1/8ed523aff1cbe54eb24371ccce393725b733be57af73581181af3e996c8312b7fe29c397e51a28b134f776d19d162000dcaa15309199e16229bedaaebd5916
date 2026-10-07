import { getGcpMetadata } from '../../deps';
import { type KMSProviders } from '.';

/** @internal */
export async function loadGCPCredentials(kmsProviders: KMSProviders): Promise<KMSProviders> {
  const gcpMetadata = getGcpMetadata();

  if ('kModuleError' in gcpMetadata) {
    return kmsProviders;
  }

  const { access_token: accessToken } = await gcpMetadata.instance<{ access_token: string }>({
    property: 'service-accounts/default/token'
  });
  return { ...kmsProviders, gcp: { accessToken } };
}
