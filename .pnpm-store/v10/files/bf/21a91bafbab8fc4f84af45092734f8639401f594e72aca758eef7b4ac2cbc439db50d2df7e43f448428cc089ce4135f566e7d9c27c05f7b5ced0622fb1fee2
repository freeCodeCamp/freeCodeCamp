import { fromBase64 } from "@smithy/util-base64";
export const streamCollector = (stream) => {
    if (typeof Blob === "function" && stream instanceof Blob) {
        return collectBlob(stream);
    }
    return collectStream(stream);
};
async function collectBlob(blob) {
    const base64 = await readToBase64(blob);
    const arrayBuffer = fromBase64(base64);
    return new Uint8Array(arrayBuffer);
}
async function collectStream(stream) {
    let res = new Uint8Array(0);
    const reader = stream.getReader();
    let isDone = false;
    while (!isDone) {
        const { done, value } = await reader.read();
        if (value) {
            const prior = res;
            res = new Uint8Array(prior.length + value.length);
            res.set(prior);
            res.set(value, prior.length);
        }
        isDone = done;
    }
    return res;
}
function readToBase64(blob) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => {
            if (reader.readyState !== 2) {
                return reject(new Error("Reader aborted too early"));
            }
            const result = (reader.result ?? "");
            const commaIndex = result.indexOf(",");
            const dataOffset = commaIndex > -1 ? commaIndex + 1 : result.length;
            resolve(result.substring(dataOffset));
        };
        reader.onabort = () => reject(new Error("Read aborted"));
        reader.onerror = () => reject(reader.error);
        reader.readAsDataURL(blob);
    });
}
