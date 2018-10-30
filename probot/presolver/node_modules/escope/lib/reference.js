"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
  Copyright (C) 2015 Yusuke Suzuki <utatane.tea@gmail.com>

  Redistribution and use in source and binary forms, with or without
  modification, are permitted provided that the following conditions are met:

    * Redistributions of source code must retain the above copyright
      notice, this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above copyright
      notice, this list of conditions and the following disclaimer in the
      documentation and/or other materials provided with the distribution.

  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
  AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
  IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
  ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
  DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
  (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
  LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
  ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
  (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
  THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

var READ = 0x1;
var WRITE = 0x2;
var RW = READ | WRITE;

/**
 * A Reference represents a single occurrence of an identifier in code.
 * @class Reference
 */

var Reference = function () {
  function Reference(ident, scope, flag, writeExpr, maybeImplicitGlobal, partial, init) {
    _classCallCheck(this, Reference);

    /**
     * Identifier syntax node.
     * @member {esprima#Identifier} Reference#identifier
     */
    this.identifier = ident;
    /**
     * Reference to the enclosing Scope.
     * @member {Scope} Reference#from
     */
    this.from = scope;
    /**
     * Whether the reference comes from a dynamic scope (such as 'eval',
     * 'with', etc.), and may be trapped by dynamic scopes.
     * @member {boolean} Reference#tainted
     */
    this.tainted = false;
    /**
     * The variable this reference is resolved with.
     * @member {Variable} Reference#resolved
     */
    this.resolved = null;
    /**
     * The read-write mode of the reference. (Value is one of {@link
     * Reference.READ}, {@link Reference.RW}, {@link Reference.WRITE}).
     * @member {number} Reference#flag
     * @private
     */
    this.flag = flag;
    if (this.isWrite()) {
      /**
       * If reference is writeable, this is the tree being written to it.
       * @member {esprima#Node} Reference#writeExpr
       */
      this.writeExpr = writeExpr;
      /**
       * Whether the Reference might refer to a partial value of writeExpr.
       * @member {boolean} Reference#partial
       */
      this.partial = partial;
      /**
       * Whether the Reference is to write of initialization.
       * @member {boolean} Reference#init
       */
      this.init = init;
    }
    this.__maybeImplicitGlobal = maybeImplicitGlobal;
  }

  /**
   * Whether the reference is static.
   * @method Reference#isStatic
   * @return {boolean}
   */


  _createClass(Reference, [{
    key: "isStatic",
    value: function isStatic() {
      return !this.tainted && this.resolved && this.resolved.scope.isStatic();
    }

    /**
     * Whether the reference is writeable.
     * @method Reference#isWrite
     * @return {boolean}
     */

  }, {
    key: "isWrite",
    value: function isWrite() {
      return !!(this.flag & Reference.WRITE);
    }

    /**
     * Whether the reference is readable.
     * @method Reference#isRead
     * @return {boolean}
     */

  }, {
    key: "isRead",
    value: function isRead() {
      return !!(this.flag & Reference.READ);
    }

    /**
     * Whether the reference is read-only.
     * @method Reference#isReadOnly
     * @return {boolean}
     */

  }, {
    key: "isReadOnly",
    value: function isReadOnly() {
      return this.flag === Reference.READ;
    }

    /**
     * Whether the reference is write-only.
     * @method Reference#isWriteOnly
     * @return {boolean}
     */

  }, {
    key: "isWriteOnly",
    value: function isWriteOnly() {
      return this.flag === Reference.WRITE;
    }

    /**
     * Whether the reference is read-write.
     * @method Reference#isReadWrite
     * @return {boolean}
     */

  }, {
    key: "isReadWrite",
    value: function isReadWrite() {
      return this.flag === Reference.RW;
    }
  }]);

  return Reference;
}();

/**
 * @constant Reference.READ
 * @private
 */


exports.default = Reference;
Reference.READ = READ;
/**
 * @constant Reference.WRITE
 * @private
 */
Reference.WRITE = WRITE;
/**
 * @constant Reference.RW
 * @private
 */
Reference.RW = RW;

/* vim: set sw=4 ts=4 et tw=80 : */
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZmVyZW5jZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0JBLElBQU0sT0FBTyxHQUFQO0FBQ04sSUFBTSxRQUFRLEdBQVI7QUFDTixJQUFNLEtBQUssT0FBTyxLQUFQOzs7Ozs7O0lBTVU7QUFDakIsV0FEaUIsU0FDakIsQ0FBWSxLQUFaLEVBQW1CLEtBQW5CLEVBQTBCLElBQTFCLEVBQWlDLFNBQWpDLEVBQTRDLG1CQUE1QyxFQUFpRSxPQUFqRSxFQUEwRSxJQUExRSxFQUFnRjswQkFEL0QsV0FDK0Q7Ozs7OztBQUs1RSxTQUFLLFVBQUwsR0FBa0IsS0FBbEI7Ozs7O0FBTDRFLFFBVTVFLENBQUssSUFBTCxHQUFZLEtBQVo7Ozs7OztBQVY0RSxRQWdCNUUsQ0FBSyxPQUFMLEdBQWUsS0FBZjs7Ozs7QUFoQjRFLFFBcUI1RSxDQUFLLFFBQUwsR0FBZ0IsSUFBaEI7Ozs7Ozs7QUFyQjRFLFFBNEI1RSxDQUFLLElBQUwsR0FBWSxJQUFaLENBNUI0RTtBQTZCNUUsUUFBSSxLQUFLLE9BQUwsRUFBSixFQUFvQjs7Ozs7QUFLaEIsV0FBSyxTQUFMLEdBQWlCLFNBQWpCOzs7OztBQUxnQixVQVVoQixDQUFLLE9BQUwsR0FBZSxPQUFmOzs7OztBQVZnQixVQWVoQixDQUFLLElBQUwsR0FBWSxJQUFaLENBZmdCO0tBQXBCO0FBaUJBLFNBQUsscUJBQUwsR0FBNkIsbUJBQTdCLENBOUM0RTtHQUFoRjs7Ozs7Ozs7O2VBRGlCOzsrQkF1RE47QUFDUCxhQUFPLENBQUMsS0FBSyxPQUFMLElBQWdCLEtBQUssUUFBTCxJQUFpQixLQUFLLFFBQUwsQ0FBYyxLQUFkLENBQW9CLFFBQXBCLEVBQWxDLENBREE7Ozs7Ozs7Ozs7OzhCQVNEO0FBQ04sYUFBTyxDQUFDLEVBQUUsS0FBSyxJQUFMLEdBQVksVUFBVSxLQUFWLENBQWQsQ0FERjs7Ozs7Ozs7Ozs7NkJBU0Q7QUFDTCxhQUFPLENBQUMsRUFBRSxLQUFLLElBQUwsR0FBWSxVQUFVLElBQVYsQ0FBZCxDQURIOzs7Ozs7Ozs7OztpQ0FTSTtBQUNULGFBQU8sS0FBSyxJQUFMLEtBQWMsVUFBVSxJQUFWLENBRFo7Ozs7Ozs7Ozs7O2tDQVNDO0FBQ1YsYUFBTyxLQUFLLElBQUwsS0FBYyxVQUFVLEtBQVYsQ0FEWDs7Ozs7Ozs7Ozs7a0NBU0E7QUFDVixhQUFPLEtBQUssSUFBTCxLQUFjLFVBQVUsRUFBVixDQURYOzs7O1NBcEdHOzs7Ozs7Ozs7O0FBNkdyQixVQUFVLElBQVYsR0FBaUIsSUFBakI7Ozs7O0FBS0EsVUFBVSxLQUFWLEdBQWtCLEtBQWxCOzs7OztBQUtBLFVBQVUsRUFBVixHQUFlLEVBQWYiLCJmaWxlIjoicmVmZXJlbmNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAgQ29weXJpZ2h0IChDKSAyMDE1IFl1c3VrZSBTdXp1a2kgPHV0YXRhbmUudGVhQGdtYWlsLmNvbT5cblxuICBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXRcbiAgbW9kaWZpY2F0aW9uLCBhcmUgcGVybWl0dGVkIHByb3ZpZGVkIHRoYXQgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zIGFyZSBtZXQ6XG5cbiAgICAqIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0XG4gICAgICBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG4gICAgKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlIGNvcHlyaWdodFxuICAgICAgbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyIGluIHRoZVxuICAgICAgZG9jdW1lbnRhdGlvbiBhbmQvb3Igb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlIGRpc3RyaWJ1dGlvbi5cblxuICBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTIFwiQVMgSVNcIlxuICBBTkQgQU5ZIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgVEhFXG4gIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFXG4gIEFSRSBESVNDTEFJTUVELiBJTiBOTyBFVkVOVCBTSEFMTCA8Q09QWVJJR0hUIEhPTERFUj4gQkUgTElBQkxFIEZPUiBBTllcbiAgRElSRUNULCBJTkRJUkVDVCwgSU5DSURFTlRBTCwgU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVNcbiAgKElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTO1xuICBMT1NTIE9GIFVTRSwgREFUQSwgT1IgUFJPRklUUzsgT1IgQlVTSU5FU1MgSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkRcbiAgT04gQU5ZIFRIRU9SWSBPRiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlRcbiAgKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSkgQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFIE9GXG4gIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEUgUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXG4qL1xuXG5jb25zdCBSRUFEID0gMHgxO1xuY29uc3QgV1JJVEUgPSAweDI7XG5jb25zdCBSVyA9IFJFQUQgfCBXUklURTtcblxuLyoqXG4gKiBBIFJlZmVyZW5jZSByZXByZXNlbnRzIGEgc2luZ2xlIG9jY3VycmVuY2Ugb2YgYW4gaWRlbnRpZmllciBpbiBjb2RlLlxuICogQGNsYXNzIFJlZmVyZW5jZVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWZlcmVuY2Uge1xuICAgIGNvbnN0cnVjdG9yKGlkZW50LCBzY29wZSwgZmxhZywgIHdyaXRlRXhwciwgbWF5YmVJbXBsaWNpdEdsb2JhbCwgcGFydGlhbCwgaW5pdCkge1xuICAgICAgICAvKipcbiAgICAgICAgICogSWRlbnRpZmllciBzeW50YXggbm9kZS5cbiAgICAgICAgICogQG1lbWJlciB7ZXNwcmltYSNJZGVudGlmaWVyfSBSZWZlcmVuY2UjaWRlbnRpZmllclxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5pZGVudGlmaWVyID0gaWRlbnQ7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZWZlcmVuY2UgdG8gdGhlIGVuY2xvc2luZyBTY29wZS5cbiAgICAgICAgICogQG1lbWJlciB7U2NvcGV9IFJlZmVyZW5jZSNmcm9tXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmZyb20gPSBzY29wZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFdoZXRoZXIgdGhlIHJlZmVyZW5jZSBjb21lcyBmcm9tIGEgZHluYW1pYyBzY29wZSAoc3VjaCBhcyAnZXZhbCcsXG4gICAgICAgICAqICd3aXRoJywgZXRjLiksIGFuZCBtYXkgYmUgdHJhcHBlZCBieSBkeW5hbWljIHNjb3Blcy5cbiAgICAgICAgICogQG1lbWJlciB7Ym9vbGVhbn0gUmVmZXJlbmNlI3RhaW50ZWRcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMudGFpbnRlZCA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHZhcmlhYmxlIHRoaXMgcmVmZXJlbmNlIGlzIHJlc29sdmVkIHdpdGguXG4gICAgICAgICAqIEBtZW1iZXIge1ZhcmlhYmxlfSBSZWZlcmVuY2UjcmVzb2x2ZWRcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMucmVzb2x2ZWQgPSBudWxsO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHJlYWQtd3JpdGUgbW9kZSBvZiB0aGUgcmVmZXJlbmNlLiAoVmFsdWUgaXMgb25lIG9mIHtAbGlua1xuICAgICAgICAgKiBSZWZlcmVuY2UuUkVBRH0sIHtAbGluayBSZWZlcmVuY2UuUld9LCB7QGxpbmsgUmVmZXJlbmNlLldSSVRFfSkuXG4gICAgICAgICAqIEBtZW1iZXIge251bWJlcn0gUmVmZXJlbmNlI2ZsYWdcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZmxhZyA9IGZsYWc7XG4gICAgICAgIGlmICh0aGlzLmlzV3JpdGUoKSkge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBJZiByZWZlcmVuY2UgaXMgd3JpdGVhYmxlLCB0aGlzIGlzIHRoZSB0cmVlIGJlaW5nIHdyaXR0ZW4gdG8gaXQuXG4gICAgICAgICAgICAgKiBAbWVtYmVyIHtlc3ByaW1hI05vZGV9IFJlZmVyZW5jZSN3cml0ZUV4cHJcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdGhpcy53cml0ZUV4cHIgPSB3cml0ZUV4cHI7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFdoZXRoZXIgdGhlIFJlZmVyZW5jZSBtaWdodCByZWZlciB0byBhIHBhcnRpYWwgdmFsdWUgb2Ygd3JpdGVFeHByLlxuICAgICAgICAgICAgICogQG1lbWJlciB7Ym9vbGVhbn0gUmVmZXJlbmNlI3BhcnRpYWxcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdGhpcy5wYXJ0aWFsID0gcGFydGlhbDtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogV2hldGhlciB0aGUgUmVmZXJlbmNlIGlzIHRvIHdyaXRlIG9mIGluaXRpYWxpemF0aW9uLlxuICAgICAgICAgICAgICogQG1lbWJlciB7Ym9vbGVhbn0gUmVmZXJlbmNlI2luaXRcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdGhpcy5pbml0ID0gaW5pdDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9fbWF5YmVJbXBsaWNpdEdsb2JhbCA9IG1heWJlSW1wbGljaXRHbG9iYWw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogV2hldGhlciB0aGUgcmVmZXJlbmNlIGlzIHN0YXRpYy5cbiAgICAgKiBAbWV0aG9kIFJlZmVyZW5jZSNpc1N0YXRpY1xuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAgICovXG4gICAgaXNTdGF0aWMoKSB7XG4gICAgICAgIHJldHVybiAhdGhpcy50YWludGVkICYmIHRoaXMucmVzb2x2ZWQgJiYgdGhpcy5yZXNvbHZlZC5zY29wZS5pc1N0YXRpYygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgdGhlIHJlZmVyZW5jZSBpcyB3cml0ZWFibGUuXG4gICAgICogQG1ldGhvZCBSZWZlcmVuY2UjaXNXcml0ZVxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAgICovXG4gICAgaXNXcml0ZSgpIHtcbiAgICAgICAgcmV0dXJuICEhKHRoaXMuZmxhZyAmIFJlZmVyZW5jZS5XUklURSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogV2hldGhlciB0aGUgcmVmZXJlbmNlIGlzIHJlYWRhYmxlLlxuICAgICAqIEBtZXRob2QgUmVmZXJlbmNlI2lzUmVhZFxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAgICovXG4gICAgaXNSZWFkKCkge1xuICAgICAgICByZXR1cm4gISEodGhpcy5mbGFnICYgUmVmZXJlbmNlLlJFQUQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgdGhlIHJlZmVyZW5jZSBpcyByZWFkLW9ubHkuXG4gICAgICogQG1ldGhvZCBSZWZlcmVuY2UjaXNSZWFkT25seVxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAgICovXG4gICAgaXNSZWFkT25seSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmxhZyA9PT0gUmVmZXJlbmNlLlJFQUQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogV2hldGhlciB0aGUgcmVmZXJlbmNlIGlzIHdyaXRlLW9ubHkuXG4gICAgICogQG1ldGhvZCBSZWZlcmVuY2UjaXNXcml0ZU9ubHlcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgICAqL1xuICAgIGlzV3JpdGVPbmx5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5mbGFnID09PSBSZWZlcmVuY2UuV1JJVEU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogV2hldGhlciB0aGUgcmVmZXJlbmNlIGlzIHJlYWQtd3JpdGUuXG4gICAgICogQG1ldGhvZCBSZWZlcmVuY2UjaXNSZWFkV3JpdGVcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgICAqL1xuICAgIGlzUmVhZFdyaXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5mbGFnID09PSBSZWZlcmVuY2UuUlc7XG4gICAgfVxufVxuXG4vKipcbiAqIEBjb25zdGFudCBSZWZlcmVuY2UuUkVBRFxuICogQHByaXZhdGVcbiAqL1xuUmVmZXJlbmNlLlJFQUQgPSBSRUFEO1xuLyoqXG4gKiBAY29uc3RhbnQgUmVmZXJlbmNlLldSSVRFXG4gKiBAcHJpdmF0ZVxuICovXG5SZWZlcmVuY2UuV1JJVEUgPSBXUklURTtcbi8qKlxuICogQGNvbnN0YW50IFJlZmVyZW5jZS5SV1xuICogQHByaXZhdGVcbiAqL1xuUmVmZXJlbmNlLlJXID0gUlc7XG5cbi8qIHZpbTogc2V0IHN3PTQgdHM9NCBldCB0dz04MCA6ICovXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
