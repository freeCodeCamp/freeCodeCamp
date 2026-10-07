Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

function splitTwoLevels(functionName) {
  const memberParts = functionName.split(".");
  if (memberParts.length > 1) {
    if (memberParts.length !== 2) throw Error(`Invalid member function name ${functionName}`);
    return memberParts;
  } else {
    return [functionName];
  }
}
function indexFs(fs, member) {
  if (!member) throw new Error(JSON.stringify({ member }));
  const splitResult = splitTwoLevels(member);
  const [functionName1, functionName2] = splitResult;
  if (functionName2) {
    return {
      objectToPatch: fs[functionName1],
      functionNameToPatch: functionName2
    };
  } else {
    return {
      objectToPatch: fs,
      functionNameToPatch: functionName1
    };
  }
}

exports.indexFs = indexFs;
exports.splitTwoLevels = splitTwoLevels;
//# sourceMappingURL=utils.js.map
