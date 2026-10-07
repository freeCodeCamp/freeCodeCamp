import { getRealRegion } from "./getRealRegion";
import { isFipsRegion } from "./isFipsRegion";
export const resolveRegionConfig = (input) => {
    const { region, useFipsEndpoint } = input;
    if (!region) {
        throw new Error("Region is missing");
    }
    return {
        ...input,
        region: async () => {
            if (typeof region === "string") {
                return getRealRegion(region);
            }
            const providedRegion = await region();
            return getRealRegion(providedRegion);
        },
        useFipsEndpoint: async () => {
            const providedRegion = typeof region === "string" ? region : await region();
            if (isFipsRegion(providedRegion)) {
                return true;
            }
            return typeof useFipsEndpoint !== "function" ? Promise.resolve(!!useFipsEndpoint) : useFipsEndpoint();
        },
    };
};
