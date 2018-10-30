'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Definition = exports.ParameterDefinition = undefined;

var _variable = require('./variable');

var _variable2 = _interopRequireDefault(_variable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /*
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

/**
 * @class Definition
 */

var Definition = function Definition(type, name, node, parent, index, kind) {
  _classCallCheck(this, Definition);

  /**
   * @member {String} Definition#type - type of the occurrence (e.g. "Parameter", "Variable", ...).
   */
  this.type = type;
  /**
   * @member {esprima.Identifier} Definition#name - the identifier AST node of the occurrence.
   */
  this.name = name;
  /**
   * @member {esprima.Node} Definition#node - the enclosing node of the identifier.
   */
  this.node = node;
  /**
   * @member {esprima.Node?} Definition#parent - the enclosing statement node of the identifier.
   */
  this.parent = parent;
  /**
   * @member {Number?} Definition#index - the index in the declaration statement.
   */
  this.index = index;
  /**
   * @member {String?} Definition#kind - the kind of the declaration statement.
   */
  this.kind = kind;
};

/**
 * @class ParameterDefinition
 */


exports.default = Definition;

var ParameterDefinition = function (_Definition) {
  _inherits(ParameterDefinition, _Definition);

  function ParameterDefinition(name, node, index, rest) {
    _classCallCheck(this, ParameterDefinition);

    /**
     * Whether the parameter definition is a part of a rest parameter.
     * @member {boolean} ParameterDefinition#rest
     */

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ParameterDefinition).call(this, _variable2.default.Parameter, name, node, null, index, null));

    _this.rest = rest;
    return _this;
  }

  return ParameterDefinition;
}(Definition);

exports.ParameterDefinition = ParameterDefinition;
exports.Definition = Definition;

/* vim: set sw=4 ts=4 et tw=80 : */
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlZmluaXRpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQXdCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFLcUIsYUFDakIsU0FEaUIsVUFDakIsQ0FBWSxJQUFaLEVBQWtCLElBQWxCLEVBQXdCLElBQXhCLEVBQThCLE1BQTlCLEVBQXNDLEtBQXRDLEVBQTZDLElBQTdDLEVBQW1EO3dCQURsQyxZQUNrQzs7Ozs7QUFJL0MsT0FBSyxJQUFMLEdBQVksSUFBWjs7OztBQUorQyxNQVEvQyxDQUFLLElBQUwsR0FBWSxJQUFaOzs7O0FBUitDLE1BWS9DLENBQUssSUFBTCxHQUFZLElBQVo7Ozs7QUFaK0MsTUFnQi9DLENBQUssTUFBTCxHQUFjLE1BQWQ7Ozs7QUFoQitDLE1Bb0IvQyxDQUFLLEtBQUwsR0FBYSxLQUFiOzs7O0FBcEIrQyxNQXdCL0MsQ0FBSyxJQUFMLEdBQVksSUFBWixDQXhCK0M7Q0FBbkQ7Ozs7Ozs7a0JBRGlCOztJQWdDZjs7O0FBQ0YsV0FERSxtQkFDRixDQUFZLElBQVosRUFBa0IsSUFBbEIsRUFBd0IsS0FBeEIsRUFBK0IsSUFBL0IsRUFBcUM7MEJBRG5DLHFCQUNtQzs7Ozs7Ozt1RUFEbkMsZ0NBRVEsbUJBQVMsU0FBVCxFQUFvQixNQUFNLE1BQU0sTUFBTSxPQUFPLE9BRGxCOztBQU1qQyxVQUFLLElBQUwsR0FBWSxJQUFaLENBTmlDOztHQUFyQzs7U0FERTtFQUE0Qjs7UUFZOUI7UUFDQSIsImZpbGUiOiJkZWZpbml0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAgQ29weXJpZ2h0IChDKSAyMDE1IFl1c3VrZSBTdXp1a2kgPHV0YXRhbmUudGVhQGdtYWlsLmNvbT5cblxuICBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXRcbiAgbW9kaWZpY2F0aW9uLCBhcmUgcGVybWl0dGVkIHByb3ZpZGVkIHRoYXQgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zIGFyZSBtZXQ6XG5cbiAgICAqIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0XG4gICAgICBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG4gICAgKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlIGNvcHlyaWdodFxuICAgICAgbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyIGluIHRoZVxuICAgICAgZG9jdW1lbnRhdGlvbiBhbmQvb3Igb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlIGRpc3RyaWJ1dGlvbi5cblxuICBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTIFwiQVMgSVNcIlxuICBBTkQgQU5ZIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgVEhFXG4gIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFXG4gIEFSRSBESVNDTEFJTUVELiBJTiBOTyBFVkVOVCBTSEFMTCA8Q09QWVJJR0hUIEhPTERFUj4gQkUgTElBQkxFIEZPUiBBTllcbiAgRElSRUNULCBJTkRJUkVDVCwgSU5DSURFTlRBTCwgU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVNcbiAgKElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTO1xuICBMT1NTIE9GIFVTRSwgREFUQSwgT1IgUFJPRklUUzsgT1IgQlVTSU5FU1MgSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkRcbiAgT04gQU5ZIFRIRU9SWSBPRiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlRcbiAgKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSkgQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFIE9GXG4gIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEUgUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXG4qL1xuXG5pbXBvcnQgVmFyaWFibGUgZnJvbSAnLi92YXJpYWJsZSc7XG5cbi8qKlxuICogQGNsYXNzIERlZmluaXRpb25cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVmaW5pdGlvbiB7XG4gICAgY29uc3RydWN0b3IodHlwZSwgbmFtZSwgbm9kZSwgcGFyZW50LCBpbmRleCwga2luZCkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBEZWZpbml0aW9uI3R5cGUgLSB0eXBlIG9mIHRoZSBvY2N1cnJlbmNlIChlLmcuIFwiUGFyYW1ldGVyXCIsIFwiVmFyaWFibGVcIiwgLi4uKS5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtlc3ByaW1hLklkZW50aWZpZXJ9IERlZmluaXRpb24jbmFtZSAtIHRoZSBpZGVudGlmaWVyIEFTVCBub2RlIG9mIHRoZSBvY2N1cnJlbmNlLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge2VzcHJpbWEuTm9kZX0gRGVmaW5pdGlvbiNub2RlIC0gdGhlIGVuY2xvc2luZyBub2RlIG9mIHRoZSBpZGVudGlmaWVyLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge2VzcHJpbWEuTm9kZT99IERlZmluaXRpb24jcGFyZW50IC0gdGhlIGVuY2xvc2luZyBzdGF0ZW1lbnQgbm9kZSBvZiB0aGUgaWRlbnRpZmllci5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyP30gRGVmaW5pdGlvbiNpbmRleCAtIHRoZSBpbmRleCBpbiB0aGUgZGVjbGFyYXRpb24gc3RhdGVtZW50LlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nP30gRGVmaW5pdGlvbiNraW5kIC0gdGhlIGtpbmQgb2YgdGhlIGRlY2xhcmF0aW9uIHN0YXRlbWVudC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMua2luZCA9IGtpbmQ7XG4gICAgfVxufVxuXG4vKipcbiAqIEBjbGFzcyBQYXJhbWV0ZXJEZWZpbml0aW9uXG4gKi9cbmNsYXNzIFBhcmFtZXRlckRlZmluaXRpb24gZXh0ZW5kcyBEZWZpbml0aW9uIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBub2RlLCBpbmRleCwgcmVzdCkge1xuICAgICAgICBzdXBlcihWYXJpYWJsZS5QYXJhbWV0ZXIsIG5hbWUsIG5vZGUsIG51bGwsIGluZGV4LCBudWxsKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFdoZXRoZXIgdGhlIHBhcmFtZXRlciBkZWZpbml0aW9uIGlzIGEgcGFydCBvZiBhIHJlc3QgcGFyYW1ldGVyLlxuICAgICAgICAgKiBAbWVtYmVyIHtib29sZWFufSBQYXJhbWV0ZXJEZWZpbml0aW9uI3Jlc3RcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMucmVzdCA9IHJlc3Q7XG4gICAgfVxufVxuXG5leHBvcnQge1xuICAgIFBhcmFtZXRlckRlZmluaXRpb24sXG4gICAgRGVmaW5pdGlvblxufVxuXG4vKiB2aW06IHNldCBzdz00IHRzPTQgZXQgdHc9ODAgOiAqL1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
