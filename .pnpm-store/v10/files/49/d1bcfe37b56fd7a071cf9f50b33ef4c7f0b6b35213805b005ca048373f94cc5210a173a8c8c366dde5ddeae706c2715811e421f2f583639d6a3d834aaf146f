function isCommonAssetRequest(request) {
  const url = new URL(request.url);
  if (url.protocol === "file:") {
    return true;
  }
  if (/(fonts\.googleapis\.com)/.test(url.hostname)) {
    return true;
  }
  if (/node_modules/.test(url.pathname)) {
    return true;
  }
  if (url.pathname.includes("@vite")) {
    return true;
  }
  return /\.(s?css|less|m?jsx?|m?tsx?|html|ttf|otf|woff|woff2|eot|gif|jpe?g|png|avif|webp|svg|mp4|webm|ogg|mov|mp3|wav|ogg|flac|aac|pdf|txt|csv|json|xml|md|zip|tar|gz|rar|7z)$/i.test(
    url.pathname
  );
}
export {
  isCommonAssetRequest
};
//# sourceMappingURL=isCommonAssetRequest.mjs.map