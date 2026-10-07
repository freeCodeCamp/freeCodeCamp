import { isObject } from '../../utils/internal/isObject.mjs';
function getMessageLength(data) {
  if (data instanceof Blob) {
    return data.size;
  }
  if (isObject(data) && "byteLength" in data) {
    return data.byteLength;
  }
  return new Blob([data]).size;
}
export {
  getMessageLength
};
//# sourceMappingURL=getMessageLength.mjs.map