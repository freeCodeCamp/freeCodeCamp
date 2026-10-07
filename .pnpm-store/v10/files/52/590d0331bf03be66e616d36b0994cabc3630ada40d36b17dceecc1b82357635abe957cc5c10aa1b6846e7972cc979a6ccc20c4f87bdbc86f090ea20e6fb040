import { transformFromString, transformToString } from "./transforms";
export class Uint8ArrayBlobAdapter extends Uint8Array {
    static fromString(source, encoding = "utf-8") {
        switch (typeof source) {
            case "string":
                return transformFromString(source, encoding);
            default:
                throw new Error(`Unsupported conversion from ${typeof source} to Uint8ArrayBlobAdapter.`);
        }
    }
    static mutate(source) {
        Object.setPrototypeOf(source, Uint8ArrayBlobAdapter.prototype);
        return source;
    }
    transformToString(encoding = "utf-8") {
        return transformToString(this, encoding);
    }
}
