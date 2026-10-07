import { PlaceholderType } from "../placeholder-handler";
import { ImageCropFocus } from "../types";
import type { Actions, Store } from "gatsby";
import type { IRemoteFileNode, IRemoteImageNode, IGraphQLFieldConfigDefinition, ImageFormat, CalculateImageSizesArgs } from "../types";
import type { getRemoteFileEnums } from "./get-remote-file-enums";
interface IGatsbyImageData {
    sources: Array<{
        srcSet: string;
        type: string;
        sizes: string;
    }>;
    fallback: {
        srcSet: string;
        src: string;
        sizes: string;
    };
}
type IGatsbyImageDataArgs = Omit<CalculateImageSizesArgs, "fit" | "outputPixelDensities"> & {
    formats?: Array<ImageFormat>;
    backgroundColor?: string;
    placeholder?: PlaceholderType | "none";
    aspectRatio?: number;
    sizes?: string;
    cropFocus?: Array<ImageCropFocus>;
    fit?: CalculateImageSizesArgs["fit"];
    outputPixelDensities?: CalculateImageSizesArgs["outputPixelDensities"];
    quality?: number;
};
export declare function gatsbyImageResolver(source: IRemoteFileNode, args: IGatsbyImageDataArgs, actions: Actions, store?: Store): Promise<{
    images: IGatsbyImageData;
    layout: string;
    width: number;
    height: number;
    backgroundColor?: string;
    placeholder?: {
        fallback: string;
    } | undefined;
} | null>;
export declare function generateGatsbyImageFieldConfig(enums: ReturnType<typeof getRemoteFileEnums>, actions: Actions, store?: Store): IGraphQLFieldConfigDefinition<IRemoteFileNode | IRemoteImageNode, ReturnType<typeof gatsbyImageResolver>, IGatsbyImageDataArgs>;
export {};
