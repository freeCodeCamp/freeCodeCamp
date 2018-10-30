'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

/**
 * A Variable represents a locally scoped identifier. These include arguments to
 * functions.
 * @class Variable
 */

var Variable = function Variable(name, scope) {
  _classCallCheck(this, Variable);

  /**
   * The variable name, as given in the source code.
   * @member {String} Variable#name
   */
  this.name = name;
  /**
   * List of defining occurrences of this variable (like in 'var ...'
   * statements or as parameter), as AST nodes.
   * @member {esprima.Identifier[]} Variable#identifiers
   */
  this.identifiers = [];
  /**
   * List of {@link Reference|references} of this variable (excluding parameter entries)
   * in its defining scope and all nested scopes. For defining
   * occurrences only see {@link Variable#defs}.
   * @member {Reference[]} Variable#references
   */
  this.references = [];

  /**
   * List of defining occurrences of this variable (like in 'var ...'
   * statements or as parameter), as custom objects.
   * @member {Definition[]} Variable#defs
   */
  this.defs = [];

  this.tainted = false;
  /**
   * Whether this is a stack variable.
   * @member {boolean} Variable#stack
   */
  this.stack = true;
  /**
   * Reference to the enclosing Scope.
   * @member {Scope} Variable#scope
   */
  this.scope = scope;
};

exports.default = Variable;


Variable.CatchClause = 'CatchClause';
Variable.Parameter = 'Parameter';
Variable.FunctionName = 'FunctionName';
Variable.ClassName = 'ClassName';
Variable.Variable = 'Variable';
Variable.ImportBinding = 'ImportBinding';
Variable.TDZ = 'TDZ';
Variable.ImplicitGlobalVariable = 'ImplicitGlobalVariable';

/* vim: set sw=4 ts=4 et tw=80 : */
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZhcmlhYmxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBNkJxQixXQUNqQixTQURpQixRQUNqQixDQUFZLElBQVosRUFBa0IsS0FBbEIsRUFBeUI7d0JBRFIsVUFDUTs7Ozs7O0FBS3JCLE9BQUssSUFBTCxHQUFZLElBQVo7Ozs7OztBQUxxQixNQVdyQixDQUFLLFdBQUwsR0FBbUIsRUFBbkI7Ozs7Ozs7QUFYcUIsTUFrQnJCLENBQUssVUFBTCxHQUFrQixFQUFsQjs7Ozs7OztBQWxCcUIsTUF5QnJCLENBQUssSUFBTCxHQUFZLEVBQVosQ0F6QnFCOztBQTJCckIsT0FBSyxPQUFMLEdBQWUsS0FBZjs7Ozs7QUEzQnFCLE1BZ0NyQixDQUFLLEtBQUwsR0FBYSxJQUFiOzs7OztBQWhDcUIsTUFxQ3JCLENBQUssS0FBTCxHQUFhLEtBQWIsQ0FyQ3FCO0NBQXpCOztrQkFEaUI7OztBQTBDckIsU0FBUyxXQUFULEdBQXVCLGFBQXZCO0FBQ0EsU0FBUyxTQUFULEdBQXFCLFdBQXJCO0FBQ0EsU0FBUyxZQUFULEdBQXdCLGNBQXhCO0FBQ0EsU0FBUyxTQUFULEdBQXFCLFdBQXJCO0FBQ0EsU0FBUyxRQUFULEdBQW9CLFVBQXBCO0FBQ0EsU0FBUyxhQUFULEdBQXlCLGVBQXpCO0FBQ0EsU0FBUyxHQUFULEdBQWUsS0FBZjtBQUNBLFNBQVMsc0JBQVQsR0FBa0Msd0JBQWxDIiwiZmlsZSI6InZhcmlhYmxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAgQ29weXJpZ2h0IChDKSAyMDE1IFl1c3VrZSBTdXp1a2kgPHV0YXRhbmUudGVhQGdtYWlsLmNvbT5cblxuICBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXRcbiAgbW9kaWZpY2F0aW9uLCBhcmUgcGVybWl0dGVkIHByb3ZpZGVkIHRoYXQgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zIGFyZSBtZXQ6XG5cbiAgICAqIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0XG4gICAgICBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG4gICAgKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlIGNvcHlyaWdodFxuICAgICAgbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyIGluIHRoZVxuICAgICAgZG9jdW1lbnRhdGlvbiBhbmQvb3Igb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlIGRpc3RyaWJ1dGlvbi5cblxuICBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTIFwiQVMgSVNcIlxuICBBTkQgQU5ZIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgVEhFXG4gIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFXG4gIEFSRSBESVNDTEFJTUVELiBJTiBOTyBFVkVOVCBTSEFMTCA8Q09QWVJJR0hUIEhPTERFUj4gQkUgTElBQkxFIEZPUiBBTllcbiAgRElSRUNULCBJTkRJUkVDVCwgSU5DSURFTlRBTCwgU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVNcbiAgKElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTO1xuICBMT1NTIE9GIFVTRSwgREFUQSwgT1IgUFJPRklUUzsgT1IgQlVTSU5FU1MgSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkRcbiAgT04gQU5ZIFRIRU9SWSBPRiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlRcbiAgKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSkgQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFIE9GXG4gIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEUgUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXG4qL1xuXG4vKipcbiAqIEEgVmFyaWFibGUgcmVwcmVzZW50cyBhIGxvY2FsbHkgc2NvcGVkIGlkZW50aWZpZXIuIFRoZXNlIGluY2x1ZGUgYXJndW1lbnRzIHRvXG4gKiBmdW5jdGlvbnMuXG4gKiBAY2xhc3MgVmFyaWFibGVcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmFyaWFibGUge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIHNjb3BlKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgdmFyaWFibGUgbmFtZSwgYXMgZ2l2ZW4gaW4gdGhlIHNvdXJjZSBjb2RlLlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IFZhcmlhYmxlI25hbWVcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBMaXN0IG9mIGRlZmluaW5nIG9jY3VycmVuY2VzIG9mIHRoaXMgdmFyaWFibGUgKGxpa2UgaW4gJ3ZhciAuLi4nXG4gICAgICAgICAqIHN0YXRlbWVudHMgb3IgYXMgcGFyYW1ldGVyKSwgYXMgQVNUIG5vZGVzLlxuICAgICAgICAgKiBAbWVtYmVyIHtlc3ByaW1hLklkZW50aWZpZXJbXX0gVmFyaWFibGUjaWRlbnRpZmllcnNcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuaWRlbnRpZmllcnMgPSBbXTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIExpc3Qgb2Yge0BsaW5rIFJlZmVyZW5jZXxyZWZlcmVuY2VzfSBvZiB0aGlzIHZhcmlhYmxlIChleGNsdWRpbmcgcGFyYW1ldGVyIGVudHJpZXMpXG4gICAgICAgICAqIGluIGl0cyBkZWZpbmluZyBzY29wZSBhbmQgYWxsIG5lc3RlZCBzY29wZXMuIEZvciBkZWZpbmluZ1xuICAgICAgICAgKiBvY2N1cnJlbmNlcyBvbmx5IHNlZSB7QGxpbmsgVmFyaWFibGUjZGVmc30uXG4gICAgICAgICAqIEBtZW1iZXIge1JlZmVyZW5jZVtdfSBWYXJpYWJsZSNyZWZlcmVuY2VzXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnJlZmVyZW5jZXMgPSBbXTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogTGlzdCBvZiBkZWZpbmluZyBvY2N1cnJlbmNlcyBvZiB0aGlzIHZhcmlhYmxlIChsaWtlIGluICd2YXIgLi4uJ1xuICAgICAgICAgKiBzdGF0ZW1lbnRzIG9yIGFzIHBhcmFtZXRlciksIGFzIGN1c3RvbSBvYmplY3RzLlxuICAgICAgICAgKiBAbWVtYmVyIHtEZWZpbml0aW9uW119IFZhcmlhYmxlI2RlZnNcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZGVmcyA9IFtdO1xuXG4gICAgICAgIHRoaXMudGFpbnRlZCA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICogV2hldGhlciB0aGlzIGlzIGEgc3RhY2sgdmFyaWFibGUuXG4gICAgICAgICAqIEBtZW1iZXIge2Jvb2xlYW59IFZhcmlhYmxlI3N0YWNrXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnN0YWNrID0gdHJ1ZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlZmVyZW5jZSB0byB0aGUgZW5jbG9zaW5nIFNjb3BlLlxuICAgICAgICAgKiBAbWVtYmVyIHtTY29wZX0gVmFyaWFibGUjc2NvcGVcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcbiAgICB9XG59XG5cblZhcmlhYmxlLkNhdGNoQ2xhdXNlID0gJ0NhdGNoQ2xhdXNlJztcblZhcmlhYmxlLlBhcmFtZXRlciA9ICdQYXJhbWV0ZXInO1xuVmFyaWFibGUuRnVuY3Rpb25OYW1lID0gJ0Z1bmN0aW9uTmFtZSc7XG5WYXJpYWJsZS5DbGFzc05hbWUgPSAnQ2xhc3NOYW1lJztcblZhcmlhYmxlLlZhcmlhYmxlID0gJ1ZhcmlhYmxlJztcblZhcmlhYmxlLkltcG9ydEJpbmRpbmcgPSAnSW1wb3J0QmluZGluZyc7XG5WYXJpYWJsZS5URFogPSAnVERaJztcblZhcmlhYmxlLkltcGxpY2l0R2xvYmFsVmFyaWFibGUgPSAnSW1wbGljaXRHbG9iYWxWYXJpYWJsZSc7XG5cbi8qIHZpbTogc2V0IHN3PTQgdHM9NCBldCB0dz04MCA6ICovXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
