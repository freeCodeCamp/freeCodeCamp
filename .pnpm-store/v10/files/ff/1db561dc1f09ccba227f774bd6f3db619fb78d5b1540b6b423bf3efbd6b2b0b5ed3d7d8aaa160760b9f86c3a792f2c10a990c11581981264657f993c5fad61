"use strict";

exports.__esModule = true;
exports.addRemoteFileInterfaceFields = addRemoteFileInterfaceFields;
exports.getOrCreateRemoteFileInterface = getOrCreateRemoteFileInterface;
var _redux = require("redux");
var _index = require("../../redux/index");
var _index2 = require("../../redux/actions/index");
var _polyfillRemoteFile = require("gatsby-plugin-utils/polyfill-remote-file");
function addRemoteFileInterfaceFields(schemaComposer, typeComposer) {
  const remoteFileInterfaceType = getOrCreateRemoteFileInterface(schemaComposer);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  typeComposer.addFields(remoteFileInterfaceType.getFields());
}
function getOrCreateRemoteFileInterface(
// eslint-disable-next-line @typescript-eslint/no-explicit-any
schemaComposer) {
  const enums = (0, _polyfillRemoteFile.getRemoteFileEnums)(schemaComposer.createEnumTC.bind(schemaComposer));
  schemaComposer.getOrCreateOTC(`RemoteFileResize`, tc => {
    tc.addFields({
      width: `Int`,
      height: `Int`,
      src: `String`
    });
  });
  return schemaComposer.getOrCreateIFTC(`RemoteFile`, tc => {
    tc.setDescription(`Remote Interface`);
    const boundActions = (0, _redux.bindActionCreators)(_index2.actions, _index.store.dispatch);

    // @ts-ignore - types are messed up by schema composer maybe new version helps here
    tc.addFields((0, _polyfillRemoteFile.getRemoteFileFields)(enums, boundActions, _index.store));
  });
}
//# sourceMappingURL=remote-file-interface.js.map