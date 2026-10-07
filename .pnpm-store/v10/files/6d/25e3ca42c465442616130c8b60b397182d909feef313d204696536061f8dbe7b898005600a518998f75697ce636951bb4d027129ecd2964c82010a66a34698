import initFn, {transform} from './wasm/dist-web/parcel_js_swc_wasm.js';

export const init = initFn();

function transformWrapper(config) {
  let result = transform(config);
  return {
    ...result,
    // Hydrate Uint8Array into Buffer
    code: Buffer.from(result.code.buffer),
  };
}

export {transformWrapper as transform};
