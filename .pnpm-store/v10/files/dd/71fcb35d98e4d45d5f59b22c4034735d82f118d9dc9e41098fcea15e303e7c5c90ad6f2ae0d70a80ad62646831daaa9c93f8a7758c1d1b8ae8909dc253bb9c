import { isObject } from '../../utils/internal/isObject.mjs';
import { truncateMessage } from './truncateMessage.mjs';
async function getPublicData(data) {
  if (data instanceof Blob) {
    const text = await data.text();
    return `Blob(${truncateMessage(text)})`;
  }
  if (isObject(data)) {
    const text = new TextDecoder().decode(data);
    return `ArrayBuffer(${truncateMessage(text)})`;
  }
  return truncateMessage(data);
}
export {
  getPublicData
};
//# sourceMappingURL=getPublicData.mjs.map