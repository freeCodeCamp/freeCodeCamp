'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _estraverse = require('estraverse');

var _esrecurse = require('esrecurse');

var _esrecurse2 = _interopRequireDefault(_esrecurse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
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

function getLast(xs) {
    return xs[xs.length - 1] || null;
}

var PatternVisitor = function (_esrecurse$Visitor) {
    _inherits(PatternVisitor, _esrecurse$Visitor);

    _createClass(PatternVisitor, null, [{
        key: 'isPattern',
        value: function isPattern(node) {
            var nodeType = node.type;
            return nodeType === _estraverse.Syntax.Identifier || nodeType === _estraverse.Syntax.ObjectPattern || nodeType === _estraverse.Syntax.ArrayPattern || nodeType === _estraverse.Syntax.SpreadElement || nodeType === _estraverse.Syntax.RestElement || nodeType === _estraverse.Syntax.AssignmentPattern;
        }
    }]);

    function PatternVisitor(options, rootPattern, callback) {
        _classCallCheck(this, PatternVisitor);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(PatternVisitor).call(this, null, options));

        _this.rootPattern = rootPattern;
        _this.callback = callback;
        _this.assignments = [];
        _this.rightHandNodes = [];
        _this.restElements = [];
        return _this;
    }

    _createClass(PatternVisitor, [{
        key: 'Identifier',
        value: function Identifier(pattern) {
            var lastRestElement = getLast(this.restElements);
            this.callback(pattern, {
                topLevel: pattern === this.rootPattern,
                rest: lastRestElement != null && lastRestElement.argument === pattern,
                assignments: this.assignments
            });
        }
    }, {
        key: 'Property',
        value: function Property(property) {
            // Computed property's key is a right hand node.
            if (property.computed) {
                this.rightHandNodes.push(property.key);
            }

            // If it's shorthand, its key is same as its value.
            // If it's shorthand and has its default value, its key is same as its value.left (the value is AssignmentPattern).
            // If it's not shorthand, the name of new variable is its value's.
            this.visit(property.value);
        }
    }, {
        key: 'ArrayPattern',
        value: function ArrayPattern(pattern) {
            var i, iz, element;
            for (i = 0, iz = pattern.elements.length; i < iz; ++i) {
                element = pattern.elements[i];
                this.visit(element);
            }
        }
    }, {
        key: 'AssignmentPattern',
        value: function AssignmentPattern(pattern) {
            this.assignments.push(pattern);
            this.visit(pattern.left);
            this.rightHandNodes.push(pattern.right);
            this.assignments.pop();
        }
    }, {
        key: 'RestElement',
        value: function RestElement(pattern) {
            this.restElements.push(pattern);
            this.visit(pattern.argument);
            this.restElements.pop();
        }
    }, {
        key: 'MemberExpression',
        value: function MemberExpression(node) {
            // Computed property's key is a right hand node.
            if (node.computed) {
                this.rightHandNodes.push(node.property);
            }
            // the object is only read, write to its property.
            this.rightHandNodes.push(node.object);
        }

        //
        // ForInStatement.left and AssignmentExpression.left are LeftHandSideExpression.
        // By spec, LeftHandSideExpression is Pattern or MemberExpression.
        //   (see also: https://github.com/estree/estree/pull/20#issuecomment-74584758)
        // But espree 2.0 and esprima 2.0 parse to ArrayExpression, ObjectExpression, etc...
        //

    }, {
        key: 'SpreadElement',
        value: function SpreadElement(node) {
            this.visit(node.argument);
        }
    }, {
        key: 'ArrayExpression',
        value: function ArrayExpression(node) {
            node.elements.forEach(this.visit, this);
        }
    }, {
        key: 'AssignmentExpression',
        value: function AssignmentExpression(node) {
            this.assignments.push(node);
            this.visit(node.left);
            this.rightHandNodes.push(node.right);
            this.assignments.pop();
        }
    }, {
        key: 'CallExpression',
        value: function CallExpression(node) {
            var _this2 = this;

            // arguments are right hand nodes.
            node.arguments.forEach(function (a) {
                _this2.rightHandNodes.push(a);
            });
            this.visit(node.callee);
        }
    }]);

    return PatternVisitor;
}(_esrecurse2.default.Visitor);

/* vim: set sw=4 ts=4 et tw=80 : */


exports.default = PatternVisitor;
//# sourceMappingURL=data:application/json;base64,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Ozs7OztzQ0FnQlQsTUFBTTtBQUNoQixpQkFBSyxLQUFMLENBQVcsS0FBSyxRQUFMLENBQVgsQ0FEZ0I7Ozs7d0NBSUosTUFBTTtBQUNsQixpQkFBSyxRQUFMLENBQWMsT0FBZCxDQUFzQixLQUFLLEtBQUwsRUFBWSxJQUFsQyxFQURrQjs7Ozs2Q0FJRCxNQUFNO0FBQ3ZCLGlCQUFLLFdBQUwsQ0FBaUIsSUFBakIsQ0FBc0IsSUFBdEIsRUFEdUI7QUFFdkIsaUJBQUssS0FBTCxDQUFXLEtBQUssSUFBTCxDQUFYLENBRnVCO0FBR3ZCLGlCQUFLLGNBQUwsQ0FBb0IsSUFBcEIsQ0FBeUIsS0FBSyxLQUFMLENBQXpCLENBSHVCO0FBSXZCLGlCQUFLLFdBQUwsQ0FBaUIsR0FBakIsR0FKdUI7Ozs7dUNBT1osTUFBTTs7OztBQUVqQixpQkFBSyxTQUFMLENBQWUsT0FBZixDQUF1QixhQUFLO0FBQUUsdUJBQUssY0FBTCxDQUFvQixJQUFwQixDQUF5QixDQUF6QixFQUFGO2FBQUwsQ0FBdkIsQ0FGaUI7QUFHakIsaUJBQUssS0FBTCxDQUFXLEtBQUssTUFBTCxDQUFYLENBSGlCOzs7O1dBL0ZKO0VBQXVCLG9CQUFVLE9BQVY7Ozs7O2tCQUF2QiIsImZpbGUiOiJwYXR0ZXJuLXZpc2l0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICBDb3B5cmlnaHQgKEMpIDIwMTUgWXVzdWtlIFN1enVraSA8dXRhdGFuZS50ZWFAZ21haWwuY29tPlxuXG4gIFJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dFxuICBtb2RpZmljYXRpb24sIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlIG1ldDpcblxuICAgICogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHRcbiAgICAgIG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lci5cbiAgICAqIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmUgY29weXJpZ2h0XG4gICAgICBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIgaW4gdGhlXG4gICAgICBkb2N1bWVudGF0aW9uIGFuZC9vciBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGUgZGlzdHJpYnV0aW9uLlxuXG4gIFRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgQlkgVEhFIENPUFlSSUdIVCBIT0xERVJTIEFORCBDT05UUklCVVRPUlMgXCJBUyBJU1wiXG4gIEFORCBBTlkgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBUSEVcbiAgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0VcbiAgQVJFIERJU0NMQUlNRUQuIElOIE5PIEVWRU5UIFNIQUxMIDxDT1BZUklHSFQgSE9MREVSPiBCRSBMSUFCTEUgRk9SIEFOWVxuICBESVJFQ1QsIElORElSRUNULCBJTkNJREVOVEFMLCBTUEVDSUFMLCBFWEVNUExBUlksIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFU1xuICAoSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFBST0NVUkVNRU5UIE9GIFNVQlNUSVRVVEUgR09PRFMgT1IgU0VSVklDRVM7XG4gIExPU1MgT0YgVVNFLCBEQVRBLCBPUiBQUk9GSVRTOyBPUiBCVVNJTkVTUyBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORFxuICBPTiBBTlkgVEhFT1JZIE9GIExJQUJJTElUWSwgV0hFVEhFUiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVFxuICAoSU5DTFVESU5HIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKSBBUklTSU5HIElOIEFOWSBXQVkgT1VUIE9GIFRIRSBVU0UgT0ZcbiAgVEhJUyBTT0ZUV0FSRSwgRVZFTiBJRiBBRFZJU0VEIE9GIFRIRSBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cbiovXG5cbmltcG9ydCB7IFN5bnRheCB9IGZyb20gJ2VzdHJhdmVyc2UnO1xuaW1wb3J0IGVzcmVjdXJzZSBmcm9tICdlc3JlY3Vyc2UnO1xuXG5mdW5jdGlvbiBnZXRMYXN0KHhzKSB7XG4gICAgcmV0dXJuIHhzW3hzLmxlbmd0aCAtIDFdIHx8IG51bGw7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhdHRlcm5WaXNpdG9yIGV4dGVuZHMgZXNyZWN1cnNlLlZpc2l0b3Ige1xuICAgIHN0YXRpYyBpc1BhdHRlcm4obm9kZSkge1xuICAgICAgICB2YXIgbm9kZVR5cGUgPSBub2RlLnR5cGU7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICBub2RlVHlwZSA9PT0gU3ludGF4LklkZW50aWZpZXIgfHxcbiAgICAgICAgICAgIG5vZGVUeXBlID09PSBTeW50YXguT2JqZWN0UGF0dGVybiB8fFxuICAgICAgICAgICAgbm9kZVR5cGUgPT09IFN5bnRheC5BcnJheVBhdHRlcm4gfHxcbiAgICAgICAgICAgIG5vZGVUeXBlID09PSBTeW50YXguU3ByZWFkRWxlbWVudCB8fFxuICAgICAgICAgICAgbm9kZVR5cGUgPT09IFN5bnRheC5SZXN0RWxlbWVudCB8fFxuICAgICAgICAgICAgbm9kZVR5cGUgPT09IFN5bnRheC5Bc3NpZ25tZW50UGF0dGVyblxuICAgICAgICApO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMsIHJvb3RQYXR0ZXJuLCBjYWxsYmFjaykge1xuICAgICAgICBzdXBlcihudWxsLCBvcHRpb25zKTtcbiAgICAgICAgdGhpcy5yb290UGF0dGVybiA9IHJvb3RQYXR0ZXJuO1xuICAgICAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgICAgIHRoaXMuYXNzaWdubWVudHMgPSBbXTtcbiAgICAgICAgdGhpcy5yaWdodEhhbmROb2RlcyA9IFtdO1xuICAgICAgICB0aGlzLnJlc3RFbGVtZW50cyA9IFtdO1xuICAgIH1cblxuICAgIElkZW50aWZpZXIocGF0dGVybikge1xuICAgICAgICBjb25zdCBsYXN0UmVzdEVsZW1lbnQgPSBnZXRMYXN0KHRoaXMucmVzdEVsZW1lbnRzKTtcbiAgICAgICAgdGhpcy5jYWxsYmFjayhwYXR0ZXJuLCB7XG4gICAgICAgICAgICB0b3BMZXZlbDogcGF0dGVybiA9PT0gdGhpcy5yb290UGF0dGVybixcbiAgICAgICAgICAgIHJlc3Q6IGxhc3RSZXN0RWxlbWVudCAhPSBudWxsICYmIGxhc3RSZXN0RWxlbWVudC5hcmd1bWVudCA9PT0gcGF0dGVybixcbiAgICAgICAgICAgIGFzc2lnbm1lbnRzOiB0aGlzLmFzc2lnbm1lbnRzXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIFByb3BlcnR5KHByb3BlcnR5KSB7XG4gICAgICAgIC8vIENvbXB1dGVkIHByb3BlcnR5J3Mga2V5IGlzIGEgcmlnaHQgaGFuZCBub2RlLlxuICAgICAgICBpZiAocHJvcGVydHkuY29tcHV0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMucmlnaHRIYW5kTm9kZXMucHVzaChwcm9wZXJ0eS5rZXkpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgaXQncyBzaG9ydGhhbmQsIGl0cyBrZXkgaXMgc2FtZSBhcyBpdHMgdmFsdWUuXG4gICAgICAgIC8vIElmIGl0J3Mgc2hvcnRoYW5kIGFuZCBoYXMgaXRzIGRlZmF1bHQgdmFsdWUsIGl0cyBrZXkgaXMgc2FtZSBhcyBpdHMgdmFsdWUubGVmdCAodGhlIHZhbHVlIGlzIEFzc2lnbm1lbnRQYXR0ZXJuKS5cbiAgICAgICAgLy8gSWYgaXQncyBub3Qgc2hvcnRoYW5kLCB0aGUgbmFtZSBvZiBuZXcgdmFyaWFibGUgaXMgaXRzIHZhbHVlJ3MuXG4gICAgICAgIHRoaXMudmlzaXQocHJvcGVydHkudmFsdWUpO1xuICAgIH1cblxuICAgIEFycmF5UGF0dGVybihwYXR0ZXJuKSB7XG4gICAgICAgIHZhciBpLCBpeiwgZWxlbWVudDtcbiAgICAgICAgZm9yIChpID0gMCwgaXogPSBwYXR0ZXJuLmVsZW1lbnRzLmxlbmd0aDsgaSA8IGl6OyArK2kpIHtcbiAgICAgICAgICAgIGVsZW1lbnQgPSBwYXR0ZXJuLmVsZW1lbnRzW2ldO1xuICAgICAgICAgICAgdGhpcy52aXNpdChlbGVtZW50KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEFzc2lnbm1lbnRQYXR0ZXJuKHBhdHRlcm4pIHtcbiAgICAgICAgdGhpcy5hc3NpZ25tZW50cy5wdXNoKHBhdHRlcm4pO1xuICAgICAgICB0aGlzLnZpc2l0KHBhdHRlcm4ubGVmdCk7XG4gICAgICAgIHRoaXMucmlnaHRIYW5kTm9kZXMucHVzaChwYXR0ZXJuLnJpZ2h0KTtcbiAgICAgICAgdGhpcy5hc3NpZ25tZW50cy5wb3AoKTtcbiAgICB9XG5cbiAgICBSZXN0RWxlbWVudChwYXR0ZXJuKSB7XG4gICAgICAgIHRoaXMucmVzdEVsZW1lbnRzLnB1c2gocGF0dGVybik7XG4gICAgICAgIHRoaXMudmlzaXQocGF0dGVybi5hcmd1bWVudCk7XG4gICAgICAgIHRoaXMucmVzdEVsZW1lbnRzLnBvcCgpO1xuICAgIH1cblxuICAgIE1lbWJlckV4cHJlc3Npb24obm9kZSkge1xuICAgICAgICAvLyBDb21wdXRlZCBwcm9wZXJ0eSdzIGtleSBpcyBhIHJpZ2h0IGhhbmQgbm9kZS5cbiAgICAgICAgaWYgKG5vZGUuY29tcHV0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMucmlnaHRIYW5kTm9kZXMucHVzaChub2RlLnByb3BlcnR5KTtcbiAgICAgICAgfVxuICAgICAgICAvLyB0aGUgb2JqZWN0IGlzIG9ubHkgcmVhZCwgd3JpdGUgdG8gaXRzIHByb3BlcnR5LlxuICAgICAgICB0aGlzLnJpZ2h0SGFuZE5vZGVzLnB1c2gobm9kZS5vYmplY3QpO1xuICAgIH1cblxuICAgIC8vXG4gICAgLy8gRm9ySW5TdGF0ZW1lbnQubGVmdCBhbmQgQXNzaWdubWVudEV4cHJlc3Npb24ubGVmdCBhcmUgTGVmdEhhbmRTaWRlRXhwcmVzc2lvbi5cbiAgICAvLyBCeSBzcGVjLCBMZWZ0SGFuZFNpZGVFeHByZXNzaW9uIGlzIFBhdHRlcm4gb3IgTWVtYmVyRXhwcmVzc2lvbi5cbiAgICAvLyAgIChzZWUgYWxzbzogaHR0cHM6Ly9naXRodWIuY29tL2VzdHJlZS9lc3RyZWUvcHVsbC8yMCNpc3N1ZWNvbW1lbnQtNzQ1ODQ3NTgpXG4gICAgLy8gQnV0IGVzcHJlZSAyLjAgYW5kIGVzcHJpbWEgMi4wIHBhcnNlIHRvIEFycmF5RXhwcmVzc2lvbiwgT2JqZWN0RXhwcmVzc2lvbiwgZXRjLi4uXG4gICAgLy9cblxuICAgIFNwcmVhZEVsZW1lbnQobm9kZSkge1xuICAgICAgICB0aGlzLnZpc2l0KG5vZGUuYXJndW1lbnQpO1xuICAgIH1cblxuICAgIEFycmF5RXhwcmVzc2lvbihub2RlKSB7XG4gICAgICAgIG5vZGUuZWxlbWVudHMuZm9yRWFjaCh0aGlzLnZpc2l0LCB0aGlzKTtcbiAgICB9XG5cbiAgICBBc3NpZ25tZW50RXhwcmVzc2lvbihub2RlKSB7XG4gICAgICAgIHRoaXMuYXNzaWdubWVudHMucHVzaChub2RlKTtcbiAgICAgICAgdGhpcy52aXNpdChub2RlLmxlZnQpO1xuICAgICAgICB0aGlzLnJpZ2h0SGFuZE5vZGVzLnB1c2gobm9kZS5yaWdodCk7XG4gICAgICAgIHRoaXMuYXNzaWdubWVudHMucG9wKCk7XG4gICAgfVxuXG4gICAgQ2FsbEV4cHJlc3Npb24obm9kZSkge1xuICAgICAgICAvLyBhcmd1bWVudHMgYXJlIHJpZ2h0IGhhbmQgbm9kZXMuXG4gICAgICAgIG5vZGUuYXJndW1lbnRzLmZvckVhY2goYSA9PiB7IHRoaXMucmlnaHRIYW5kTm9kZXMucHVzaChhKTsgfSk7XG4gICAgICAgIHRoaXMudmlzaXQobm9kZS5jYWxsZWUpO1xuICAgIH1cbn1cblxuLyogdmltOiBzZXQgc3c9NCB0cz00IGV0IHR3PTgwIDogKi9cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
