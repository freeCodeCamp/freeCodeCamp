define(['exports', 'module', '../exception'], function (exports, module, _exception) {
  'use strict';

  // istanbul ignore next

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _Exception = _interopRequireDefault(_exception);

  function Visitor() {
    this.parents = [];
  }

  Visitor.prototype = {
    constructor: Visitor,
    mutating: false,

    // Visits a given value. If mutating, will replace the value if necessary.
    acceptKey: function acceptKey(node, name) {
      var value = this.accept(node[name]);
      if (this.mutating) {
        // Hacky sanity check: This may have a few false positives for type for the helper
        // methods but will generally do the right thing without a lot of overhead.
        if (value && !Visitor.prototype[value.type]) {
          throw new _Exception['default']('Unexpected node type "' + value.type + '" found when accepting ' + name + ' on ' + node.type);
        }
        node[name] = value;
      }
    },

    // Performs an accept operation with added sanity check to ensure
    // required keys are not removed.
    acceptRequired: function acceptRequired(node, name) {
      this.acceptKey(node, name);

      if (!node[name]) {
        throw new _Exception['default'](node.type + ' requires ' + name);
      }
    },

    // Traverses a given array. If mutating, empty respnses will be removed
    // for child elements.
    acceptArray: function acceptArray(array) {
      for (var i = 0, l = array.length; i < l; i++) {
        this.acceptKey(array, i);

        if (!array[i]) {
          array.splice(i, 1);
          i--;
          l--;
        }
      }
    },

    accept: function accept(object) {
      if (!object) {
        return;
      }

      /* istanbul ignore next: Sanity code */
      if (!this[object.type]) {
        throw new _Exception['default']('Unknown type: ' + object.type, object);
      }

      if (this.current) {
        this.parents.unshift(this.current);
      }
      this.current = object;

      var ret = this[object.type](object);

      this.current = this.parents.shift();

      if (!this.mutating || ret) {
        return ret;
      } else if (ret !== false) {
        return object;
      }
    },

    Program: function Program(program) {
      this.acceptArray(program.body);
    },

    MustacheStatement: visitSubExpression,
    Decorator: visitSubExpression,

    BlockStatement: visitBlock,
    DecoratorBlock: visitBlock,

    PartialStatement: visitPartial,
    PartialBlockStatement: function PartialBlockStatement(partial) {
      visitPartial.call(this, partial);

      this.acceptKey(partial, 'program');
    },

    ContentStatement: function ContentStatement() /* content */{},
    CommentStatement: function CommentStatement() /* comment */{},

    SubExpression: visitSubExpression,

    PathExpression: function PathExpression() /* path */{},

    StringLiteral: function StringLiteral() /* string */{},
    NumberLiteral: function NumberLiteral() /* number */{},
    BooleanLiteral: function BooleanLiteral() /* bool */{},
    UndefinedLiteral: function UndefinedLiteral() /* literal */{},
    NullLiteral: function NullLiteral() /* literal */{},

    Hash: function Hash(hash) {
      this.acceptArray(hash.pairs);
    },
    HashPair: function HashPair(pair) {
      this.acceptRequired(pair, 'value');
    }
  };

  function visitSubExpression(mustache) {
    this.acceptRequired(mustache, 'path');
    this.acceptArray(mustache.params);
    this.acceptKey(mustache, 'hash');
  }
  function visitBlock(block) {
    visitSubExpression.call(this, block);

    this.acceptKey(block, 'program');
    this.acceptKey(block, 'inverse');
  }
  function visitPartial(partial) {
    this.acceptRequired(partial, 'name');
    this.acceptArray(partial.params);
    this.acceptKey(partial, 'hash');
  }

  module.exports = Visitor;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2NvbXBpbGVyL3Zpc2l0b3IuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRUEsV0FBUyxPQUFPLEdBQUc7QUFDakIsUUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7R0FDbkI7O0FBRUQsU0FBTyxDQUFDLFNBQVMsR0FBRztBQUNsQixlQUFXLEVBQUUsT0FBTztBQUNwQixZQUFRLEVBQUUsS0FBSzs7O0FBR2YsYUFBUyxFQUFFLG1CQUFTLElBQUksRUFBRSxJQUFJLEVBQUU7QUFDOUIsVUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUNwQyxVQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7OztBQUdqQixZQUFJLEtBQUssSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFO0FBQzNDLGdCQUFNLDBCQUFjLHdCQUF3QixHQUFHLEtBQUssQ0FBQyxJQUFJLEdBQUcseUJBQXlCLEdBQUcsSUFBSSxHQUFHLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDcEg7QUFDRCxZQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDO09BQ3BCO0tBQ0Y7Ozs7QUFJRCxrQkFBYyxFQUFFLHdCQUFTLElBQUksRUFBRSxJQUFJLEVBQUU7QUFDbkMsVUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7O0FBRTNCLFVBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7QUFDZixjQUFNLDBCQUFjLElBQUksQ0FBQyxJQUFJLEdBQUcsWUFBWSxHQUFHLElBQUksQ0FBQyxDQUFDO09BQ3REO0tBQ0Y7Ozs7QUFJRCxlQUFXLEVBQUUscUJBQVMsS0FBSyxFQUFFO0FBQzNCLFdBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENB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SSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7R0FDbEM7QUFDRCxXQUFTLFVBQVUsQ0FBQyxLQUFLLEVBQUU7QUFDekIsc0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQzs7QUFFckMsUUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsU0FBUyxDQUFDLENBQUM7QUFDakMsUUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsU0FBUyxDQUFDLENBQUM7R0FDbEM7QUFDRCxXQUFTLFlBQVksQ0FBQyxPQUFPLEVBQUU7QUFDN0IsUUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDckMsUUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDakMsUUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7R0FDakM7O21CQUVjLE9BQU8iLCJmaWxlIjoidmlzaXRvci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBFeGNlcHRpb24gZnJvbSAnLi4vZXhjZXB0aW9uJztcblxuZnVuY3Rpb24gVmlzaXRvcigpIHtcbiAgdGhpcy5wYXJlbnRzID0gW107XG59XG5cblZpc2l0b3IucHJvdG90eXBlID0ge1xuICBjb25zdHJ1Y3RvcjogVmlzaXRvcixcbiAgbXV0YXRpbmc6IGZhbHNlLFxuXG4gIC8vIFZpc2l0cyBhIGdpdmVuIHZhbHVlLiBJZiBtdXRhdGluZywgd2lsbCByZXBsYWNlIHRoZSB2YWx1ZSBpZiBuZWNlc3NhcnkuXG4gIGFjY2VwdEtleTogZnVuY3Rpb24obm9kZSwgbmFtZSkge1xuICAgIGxldCB2YWx1ZSA9IHRoaXMuYWNjZXB0KG5vZGVbbmFtZV0pO1xuICAgIGlmICh0aGlzLm11dGF0aW5nKSB7XG4gICAgICAvLyBIYWNreSBzYW5pdHkgY2hlY2s6IFRoaXMgbWF5IGhhdmUgYSBmZXcgZmFsc2UgcG9zaXRpdmVzIGZvciB0eXBlIGZvciB0aGUgaGVscGVyXG4gICAgICAvLyBtZXRob2RzIGJ1dCB3aWxsIGdlbmVyYWxseSBkbyB0aGUgcmlnaHQgdGhpbmcgd2l0aG91dCBhIGxvdCBvZiBvdmVyaGVhZC5cbiAgICAgIGlmICh2YWx1ZSAmJiAhVmlzaXRvci5wcm90b3R5cGVbdmFsdWUudHlwZV0pIHtcbiAgICAgICAgdGhyb3cgbmV3IEV4Y2VwdGlvbignVW5leHBlY3RlZCBub2RlIHR5cGUgXCInICsgdmFsdWUudHlwZSArICdcIiBmb3VuZCB3aGVuIGFjY2VwdGluZyAnICsgbmFtZSArICcgb24gJyArIG5vZGUudHlwZSk7XG4gICAgICB9XG4gICAgICBub2RlW25hbWVdID0gdmFsdWU7XG4gICAgfVxuICB9LFxuXG4gIC8vIFBlcmZvcm1zIGFuIGFjY2VwdCBvcGVyYXRpb24gd2l0aCBhZGRlZCBzYW5pdHkgY2hlY2sgdG8gZW5zdXJlXG4gIC8vIHJlcXVpcmVkIGtleXMgYXJlIG5vdCByZW1vdmVkLlxuICBhY2NlcHRSZXF1aXJlZDogZnVuY3Rpb24obm9kZSwgbmFtZSkge1xuICAgIHRoaXMuYWNjZXB0S2V5KG5vZGUsIG5hbWUpO1xuXG4gICAgaWYgKCFub2RlW25hbWVdKSB7XG4gICAgICB0aHJvdyBuZXcgRXhjZXB0aW9uKG5vZGUudHlwZSArICcgcmVxdWlyZXMgJyArIG5hbWUpO1xuICAgIH1cbiAgfSxcblxuICAvLyBUcmF2ZXJzZXMgYSBnaXZlbiBhcnJheS4gSWYgbXV0YXRpbmcsIGVtcHR5IHJlc3Buc2VzIHdpbGwgYmUgcmVtb3ZlZFxuICAvLyBmb3IgY2hpbGQgZWxlbWVudHMuXG4gIGFjY2VwdEFycmF5OiBmdW5jdGlvbihhcnJheSkge1xuICAgIGZvciAobGV0IGkgPSAwLCBsID0gYXJyYXkubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICB0aGlzLmFjY2VwdEtleShhcnJheSwgaSk7XG5cbiAgICAgIGlmICghYXJyYXlbaV0pIHtcbiAgICAgICAgYXJyYXkuc3BsaWNlKGksIDEpO1xuICAgICAgICBpLS07XG4gICAgICAgIGwtLTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgYWNjZXB0OiBmdW5jdGlvbihvYmplY3QpIHtcbiAgICBpZiAoIW9iamVjdCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0OiBTYW5pdHkgY29kZSAqL1xuICAgIGlmICghdGhpc1tvYmplY3QudHlwZV0pIHtcbiAgICAgIHRocm93IG5ldyBFeGNlcHRpb24oJ1Vua25vd24gdHlwZTogJyArIG9iamVjdC50eXBlLCBvYmplY3QpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmN1cnJlbnQpIHtcbiAgICAgIHRoaXMucGFyZW50cy51bnNoaWZ0KHRoaXMuY3VycmVudCk7XG4gICAgfVxuICAgIHRoaXMuY3VycmVudCA9IG9iamVjdDtcblxuICAgIGxldCByZXQgPSB0aGlzW29iamVjdC50eXBlXShvYmplY3QpO1xuXG4gICAgdGhpcy5jdXJyZW50ID0gdGhpcy5wYXJlbnRzLnNoaWZ0KCk7XG5cbiAgICBpZiAoIXRoaXMubXV0YXRpbmcgfHwgcmV0KSB7XG4gICAgICByZXR1cm4gcmV0O1xuICAgIH0gZWxzZSBpZiAocmV0ICE9PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIG9iamVjdDtcbiAgICB9XG4gIH0sXG5cbiAgUHJvZ3JhbTogZnVuY3Rpb24ocHJvZ3JhbSkge1xuICAgIHRoaXMuYWNjZXB0QXJyYXkocHJvZ3JhbS5ib2R5KTtcbiAgfSxcblxuICBNdXN0YWNoZVN0YXRlbWVudDogdmlzaXRTdWJFeHByZXNzaW9uLFxuICBEZWNvcmF0b3I6IHZpc2l0U3ViRXhwcmVzc2lvbixcblxuICBCbG9ja1N0YXRlbWVudDogdmlzaXRCbG9jayxcbiAgRGVjb3JhdG9yQmxvY2s6IHZpc2l0QmxvY2ssXG5cbiAgUGFydGlhbFN0YXRlbWVudDogdmlzaXRQYXJ0aWFsLFxuICBQYXJ0aWFsQmxvY2tTdGF0ZW1lbnQ6IGZ1bmN0aW9uKHBhcnRpYWwpIHtcbiAgICB2aXNpdFBhcnRpYWwuY2FsbCh0aGlzLCBwYXJ0aWFsKTtcblxuICAgIHRoaXMuYWNjZXB0S2V5KHBhcnRpYWwsICdwcm9ncmFtJyk7XG4gIH0sXG5cbiAgQ29udGVudFN0YXRlbWVudDogZnVuY3Rpb24oLyogY29udGVudCAqLykge30sXG4gIENvbW1lbnRTdGF0ZW1lbnQ6IGZ1bmN0aW9uKC8qIGNvbW1lbnQgKi8pIHt9LFxuXG4gIFN1YkV4cHJlc3Npb246IHZpc2l0U3ViRXhwcmVzc2lvbixcblxuICBQYXRoRXhwcmVzc2lvbjogZnVuY3Rpb24oLyogcGF0aCAqLykge30sXG5cbiAgU3RyaW5nTGl0ZXJhbDogZnVuY3Rpb24oLyogc3RyaW5nICovKSB7fSxcbiAgTnVtYmVyTGl0ZXJhbDogZnVuY3Rpb24oLyogbnVtYmVyICovKSB7fSxcbiAgQm9vbGVhbkxpdGVyYWw6IGZ1bmN0aW9uKC8qIGJvb2wgKi8pIHt9LFxuICBVbmRlZmluZWRMaXRlcmFsOiBmdW5jdGlvbigvKiBsaXRlcmFsICovKSB7fSxcbiAgTnVsbExpdGVyYWw6IGZ1bmN0aW9uKC8qIGxpdGVyYWwgKi8pIHt9LFxuXG4gIEhhc2g6IGZ1bmN0aW9uKGhhc2gpIHtcbiAgICB0aGlzLmFjY2VwdEFycmF5KGhhc2gucGFpcnMpO1xuICB9LFxuICBIYXNoUGFpcjogZnVuY3Rpb24ocGFpcikge1xuICAgIHRoaXMuYWNjZXB0UmVxdWlyZWQocGFpciwgJ3ZhbHVlJyk7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIHZpc2l0U3ViRXhwcmVzc2lvbihtdXN0YWNoZSkge1xuICB0aGlzLmFjY2VwdFJlcXVpcmVkKG11c3RhY2hlLCAncGF0aCcpO1xuICB0aGlzLmFjY2VwdEFycmF5KG11c3RhY2hlLnBhcmFtcyk7XG4gIHRoaXMuYWNjZXB0S2V5KG11c3RhY2hlLCAnaGFzaCcpO1xufVxuZnVuY3Rpb24gdmlzaXRCbG9jayhibG9jaykge1xuICB2aXNpdFN1YkV4cHJlc3Npb24uY2FsbCh0aGlzLCBibG9jayk7XG5cbiAgdGhpcy5hY2NlcHRLZXkoYmxvY2ssICdwcm9ncmFtJyk7XG4gIHRoaXMuYWNjZXB0S2V5KGJsb2NrLCAnaW52ZXJzZScpO1xufVxuZnVuY3Rpb24gdmlzaXRQYXJ0aWFsKHBhcnRpYWwpIHtcbiAgdGhpcy5hY2NlcHRSZXF1aXJlZChwYXJ0aWFsLCAnbmFtZScpO1xuICB0aGlzLmFjY2VwdEFycmF5KHBhcnRpYWwucGFyYW1zKTtcbiAgdGhpcy5hY2NlcHRLZXkocGFydGlhbCwgJ2hhc2gnKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVmlzaXRvcjtcbiJdfQ==
