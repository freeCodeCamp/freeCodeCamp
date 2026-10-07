Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

function parseCookie(str) {
  const obj = {};
  let index = 0;
  while (index < str.length) {
    const eqIdx = str.indexOf("=", index);
    if (eqIdx === -1) {
      break;
    }
    let endIdx = str.indexOf(";", index);
    if (endIdx === -1) {
      endIdx = str.length;
    } else if (endIdx < eqIdx) {
      index = str.lastIndexOf(";", eqIdx - 1) + 1;
      continue;
    }
    const key = str.slice(index, eqIdx).trim();
    if (void 0 === obj[key]) {
      let val = str.slice(eqIdx + 1, endIdx).trim();
      if (val.charCodeAt(0) === 34) {
        val = val.slice(1, -1);
      }
      try {
        obj[key] = val.indexOf("%") !== -1 ? decodeURIComponent(val) : val;
      } catch {
        obj[key] = val;
      }
    }
    index = endIdx + 1;
  }
  return obj;
}

exports.parseCookie = parseCookie;
//# sourceMappingURL=cookie.js.map
