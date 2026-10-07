import { getIsolationScope } from '../../currentScopes.js';
import { httpRequestToRequestData } from '../../utils/request.js';

function setSDKProcessingMetadata(request) {
  const sdkProcMeta = getIsolationScope()?.getScopeData()?.sdkProcessingMetadata;
  if (!sdkProcMeta?.normalizedRequest) {
    const normalizedRequest = httpRequestToRequestData(request);
    getIsolationScope().setSDKProcessingMetadata({ normalizedRequest });
  }
}

export { setSDKProcessingMetadata };
//# sourceMappingURL=set-sdk-processing-metadata.js.map
