import { getHostnameFromVariants } from "./getHostnameFromVariants";
import { getResolvedHostname } from "./getResolvedHostname";
import { getResolvedPartition } from "./getResolvedPartition";
import { getResolvedSigningRegion } from "./getResolvedSigningRegion";
export const getRegionInfo = (region, { useFipsEndpoint = false, useDualstackEndpoint = false, signingService, regionHash, partitionHash, }) => {
    const partition = getResolvedPartition(region, { partitionHash });
    const resolvedRegion = region in regionHash ? region : partitionHash[partition]?.endpoint ?? region;
    const hostnameOptions = { useFipsEndpoint, useDualstackEndpoint };
    const regionHostname = getHostnameFromVariants(regionHash[resolvedRegion]?.variants, hostnameOptions);
    const partitionHostname = getHostnameFromVariants(partitionHash[partition]?.variants, hostnameOptions);
    const hostname = getResolvedHostname(resolvedRegion, { regionHostname, partitionHostname });
    if (hostname === undefined) {
        throw new Error(`Endpoint resolution failed for: ${{ resolvedRegion, useFipsEndpoint, useDualstackEndpoint }}`);
    }
    const signingRegion = getResolvedSigningRegion(hostname, {
        signingRegion: regionHash[resolvedRegion]?.signingRegion,
        regionRegex: partitionHash[partition].regionRegex,
        useFipsEndpoint,
    });
    return {
        partition,
        signingService,
        hostname,
        ...(signingRegion && { signingRegion }),
        ...(regionHash[resolvedRegion]?.signingService && {
            signingService: regionHash[resolvedRegion].signingService,
        }),
    };
};
