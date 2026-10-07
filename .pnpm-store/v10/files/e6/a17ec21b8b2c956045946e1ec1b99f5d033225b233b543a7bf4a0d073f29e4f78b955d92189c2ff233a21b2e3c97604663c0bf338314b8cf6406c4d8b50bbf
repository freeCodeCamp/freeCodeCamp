// jsdom does not implement Blob.text()
function readBlobText(blob, FileReader) {
    return new Promise((res, rej)=>{
        const fr = new FileReader();
        fr.onerror = rej;
        fr.onabort = rej;
        fr.onload = ()=>{
            res(String(fr.result));
        };
        fr.readAsText(blob);
    });
}

export { readBlobText };
