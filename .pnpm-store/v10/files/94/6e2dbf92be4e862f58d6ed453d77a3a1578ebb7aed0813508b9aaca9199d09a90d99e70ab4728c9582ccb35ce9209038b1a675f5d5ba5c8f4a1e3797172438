"use strict";

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 */
var PhotosMimeType = require("./PhotosMimeType");

var createArrayFromMixed = require("./createArrayFromMixed");

var emptyFunction = require("./emptyFunction");

var CR_LF_REGEX = new RegExp("\r\n", 'g');
var LF_ONLY = "\n";
var RICH_TEXT_TYPES = {
  'text/rtf': 1,
  'text/html': 1
};
/**
 * If DataTransferItem is a file then return the Blob of data.
 *
 * @param {object} item
 * @return {?blob}
 */

function getFileFromDataTransfer(item) {
  if (item.kind == 'file') {
    return item.getAsFile();
  }
}

var DataTransfer = /*#__PURE__*/function () {
  /**
   * @param {object} data
   */
  function DataTransfer(data) {
    this.data = data; // Types could be DOMStringList or array

    this.types = data.types ? createArrayFromMixed(data.types) : [];
  }
  /**
   * Is this likely to be a rich text data transfer?
   *
   * @return {boolean}
   */


  var _proto = DataTransfer.prototype;

  _proto.isRichText = function isRichText() {
    // If HTML is available, treat this data as rich text. This way, we avoid
    // using a pasted image if it is packaged with HTML -- this may occur with
    // pastes from MS Word, for example.  However this is only rich text if
    // there's accompanying text.
    if (this.getHTML() && this.getText()) {
      return true;
    } // When an image is copied from a preview window, you end up with two
    // DataTransferItems one of which is a file's metadata as text.  Skip those.


    if (this.isImage()) {
      return false;
    }

    return this.types.some(function (type) {
      return RICH_TEXT_TYPES[type];
    });
  };
  /**
   * Get raw text.
   *
   * @return {?string}
   */


  _proto.getText = function getText() {
    var text;

    if (this.data.getData) {
      if (!this.types.length) {
        text = this.data.getData('Text');
      } else if (this.types.indexOf('text/plain') != -1) {
        text = this.data.getData('text/plain');
      }
    }

    return text ? text.replace(CR_LF_REGEX, LF_ONLY) : null;
  };
  /**
   * Get HTML paste data
   *
   * @return {?string}
   */


  _proto.getHTML = function getHTML() {
    if (this.data.getData) {
      if (!this.types.length) {
        return this.data.getData('Text');
      } else if (this.types.indexOf('text/html') != -1) {
        return this.data.getData('text/html');
      }
    }
  };
  /**
   * Is this a link data transfer?
   *
   * @return {boolean}
   */


  _proto.isLink = function isLink() {
    return this.types.some(function (type) {
      return type.indexOf('Url') != -1 || type.indexOf('text/uri-list') != -1 || type.indexOf('text/x-moz-url');
    });
  };
  /**
   * Get a link url.
   *
   * @return {?string}
   */


  _proto.getLink = function getLink() {
    if (this.data.getData) {
      if (this.types.indexOf('text/x-moz-url') != -1) {
        var url = this.data.getData('text/x-moz-url').split('\n');
        return url[0];
      }

      return this.types.indexOf('text/uri-list') != -1 ? this.data.getData('text/uri-list') : this.data.getData('url');
    }

    return null;
  };
  /**
   * Is this an image data transfer?
   *
   * @return {boolean}
   */


  _proto.isImage = function isImage() {
    var isImage = this.types.some(function (type) {
      // Firefox will have a type of application/x-moz-file for images during
      // dragging
      return type.indexOf('application/x-moz-file') != -1;
    });

    if (isImage) {
      return true;
    }

    var items = this.getFiles();

    for (var i = 0; i < items.length; i++) {
      var type = items[i].type;

      if (!PhotosMimeType.isImage(type)) {
        return false;
      }
    }

    return true;
  };

  _proto.getCount = function getCount() {
    if (this.data.hasOwnProperty('items')) {
      return this.data.items.length;
    } else if (this.data.hasOwnProperty('mozItemCount')) {
      return this.data.mozItemCount;
    } else if (this.data.files) {
      return this.data.files.length;
    }

    return null;
  };
  /**
   * Get files.
   *
   * @return {array}
   */


  _proto.getFiles = function getFiles() {
    if (this.data.items) {
      // createArrayFromMixed doesn't properly handle DataTransferItemLists.
      return Array.prototype.slice.call(this.data.items).map(getFileFromDataTransfer).filter(emptyFunction.thatReturnsArgument);
    } else if (this.data.files) {
      return Array.prototype.slice.call(this.data.files);
    } else {
      return [];
    }
  };
  /**
   * Are there any files to fetch?
   *
   * @return {boolean}
   */


  _proto.hasFiles = function hasFiles() {
    return this.getFiles().length > 0;
  };

  return DataTransfer;
}();

module.exports = DataTransfer;