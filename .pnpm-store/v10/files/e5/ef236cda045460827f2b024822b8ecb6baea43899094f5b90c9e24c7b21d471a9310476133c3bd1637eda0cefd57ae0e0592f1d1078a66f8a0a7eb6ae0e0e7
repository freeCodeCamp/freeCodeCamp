// This implementation as shamelessly inspired by source code of
// tslint:disable-next-line:max-line-length
// {@link https://chromium.googlesource.com/chromium/src.git/+/master/third_party/WebKit/Source/platform/audio/IIRFilter.cpp|Chromium's IIRFilter}.
export const filterBuffer = (feedback, feedbackLength, feedforward, feedforwardLength, minLength, xBuffer, yBuffer, bufferIndex, bufferLength, input, output) => {
    const inputLength = input.length;
    let i = bufferIndex;
    for (let j = 0; j < inputLength; j += 1) {
        let y = feedforward[0] * input[j];
        for (let k = 1; k < minLength; k += 1) {
            const x = (i - k) & (bufferLength - 1); // tslint:disable-line:no-bitwise
            y += feedforward[k] * xBuffer[x];
            y -= feedback[k] * yBuffer[x];
        }
        for (let k = minLength; k < feedforwardLength; k += 1) {
            y += feedforward[k] * xBuffer[(i - k) & (bufferLength - 1)]; // tslint:disable-line:no-bitwise
        }
        for (let k = minLength; k < feedbackLength; k += 1) {
            y -= feedback[k] * yBuffer[(i - k) & (bufferLength - 1)]; // tslint:disable-line:no-bitwise
        }
        xBuffer[i] = input[j];
        yBuffer[i] = y;
        i = (i + 1) & (bufferLength - 1); // tslint:disable-line:no-bitwise
        output[j] = y;
    }
    return i;
};
//# sourceMappingURL=filter-buffer.js.map