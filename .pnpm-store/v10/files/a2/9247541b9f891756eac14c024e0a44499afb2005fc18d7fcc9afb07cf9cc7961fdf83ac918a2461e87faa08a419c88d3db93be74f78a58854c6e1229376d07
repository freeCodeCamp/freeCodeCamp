import { EndpointVariant } from "./EndpointVariant";
/**
 * @internal
 *
 * The hash of region with the information specific to that region.
 * The information can include hostname, signingService and signingRegion.
 */
export type RegionHash = Record<string, {
    variants: EndpointVariant[];
    signingService?: string;
    signingRegion?: string;
}>;
