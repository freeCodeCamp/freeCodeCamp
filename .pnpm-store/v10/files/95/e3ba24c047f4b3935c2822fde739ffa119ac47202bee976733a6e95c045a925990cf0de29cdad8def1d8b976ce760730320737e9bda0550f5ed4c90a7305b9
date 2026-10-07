import resolveAltShiftedAlias from './resolveAltShiftedAlias';
import resolveUnaltShiftedAlias from './resolveUnaltShiftedAlias';
import resolveShiftedAlias from './resolveShiftedAlias';
import resolveUnshiftedAlias from './resolveUnshiftedAlias';
import resolveAltedAlias from './resolveAltedAlias';
import resolveUnaltedAlias from './resolveUnaltedAlias';

function applicableAliasFunctions(keyDictionary) {
  if (keyDictionary['Shift']) {
    if (keyDictionary['Alt']) {
      return [resolveAltShiftedAlias, resolveUnaltShiftedAlias];
    } else {
      return [resolveShiftedAlias, resolveUnshiftedAlias];
    }
  } else {
    if (keyDictionary['Alt']) {
      return [resolveAltedAlias, resolveUnaltedAlias];
    } else {
      var nop = function nop(keyName) {
        return [keyName];
      };

      return [nop, nop];
    }
  }
}

export default applicableAliasFunctions;