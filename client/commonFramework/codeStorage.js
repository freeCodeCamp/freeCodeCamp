// depends on: codeUri
window.common = (function(global ) {
  const {
    $,
    localStorage,
    common = { init: [] }
  } = global;

  const {
    codeUri
  } = common;

  var CodeStorageProps = {
    version: 0.01,
    keyVersion: 'saveVersion',
    keyValue: null,
    updateWait: 2000,
    updateTimeoutId: null
  };

  var CodeStorage = {
    hasSaved: function() {
      return this.updateTimeoutId === null;
    },

    onSave: function(func) {
      this.eventArray.push(func);
    },

    setSaveKey: function(key) {
      this.keyValue = key + 'Val';
    },

    getStoredValue: function() {
      return '' + localStorage.getItem(this.keyValue);
    },

    setEditor: function(editor) {
      this.editor = editor;
    },

    isAlive: function() {
      var val = this.getStoredValue();
      return val !== 'null' &&
        val !== 'undefined' &&
        (val && val.length > 0);
    },

    updateStorage: function() {
      if (typeof localStorage !== 'undefined') {
        var value = this.editor.getValue();
        // store in localStorage
        localStorage.setItem(this.keyValue, value);
        // also store code in URL
        codeUri.querify(value);
      } else {
        console.log('no web storage');
      }
      this.updateTimeoutId = null;
    }
  };

  function codeStorageFactory(editor, challengeName) {
    var codeStorage = Object.create(CodeStorage);
    $.extend(codeStorage, CodeStorageProps);
    codeStorage.setEditor(editor);
    codeStorage.setSaveKey(challengeName);
    return codeStorage;
  }

  var savedVersion = localStorage.getItem(CodeStorageProps.keyVersion);
  if (savedVersion === null) {
    localStorage.setItem(
      CodeStorageProps.keyVersion,
      CodeStorageProps.version
    );
  }

  common.codeStorageFactory = codeStorageFactory;

  return common;
}(window, window.common));
