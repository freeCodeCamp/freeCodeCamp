'use strict';

exports.__esModule = true;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _exception = require('../exception');

var _exception2 = _interopRequireDefault(_exception);

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
        throw new _exception2['default']('Unexpected node type "' + value.type + '" found when accepting ' + name + ' on ' + node.type);
      }
      node[name] = value;
    }
  },

  // Performs an accept operation with added sanity check to ensure
  // required keys are not removed.
  acceptRequired: function acceptRequired(node, name) {
    this.acceptKey(node, name);

    if (!node[name]) {
      throw new _exception2['default'](node.type + ' requires ' + name);
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
      throw new _exception2['default']('Unknown type: ' + object.type, object);
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

exports['default'] = Visitor;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2NvbXBpbGVyL3Zpc2l0b3IuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozt5QkFBc0IsY0FBYzs7OztBQUVwQyxTQUFTLE9BQU8sR0FBRztBQUNqQixNQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztDQUNuQjs7QUFFRCxPQUFPLENBQUMsU0FBUyxHQUFHO0FBQ2xCLGFBQVcsRUFBRSxPQUFPO0FBQ3BCLFVBQVEsRUFBRSxLQUFLOzs7QUFHZixXQUFTLEVBQUUsbUJBQVMsSUFBSSxFQUFFLElBQUksRUFBRTtBQUM5QixRQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQ3BDLFFBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTs7O0FBR2pCLFVBQUksS0FBSyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUU7QUFDM0MsY0FBTSwyQkFBYyx3QkFBd0IsR0FBRyxLQUFLLENBQUMsSUFBSSxHQUFHLHlCQUF5QixHQUFHLElBQUksR0FBRyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO09BQ3BIO0FBQ0QsVUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQztLQUNwQjtHQUNGOzs7O0FBSUQsZ0JBQWMsRUFBRSx3QkFBUyxJQUFJLEVBQUUsSUFBSSxFQUFFO0FBQ25DLFFBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDOztBQUUzQixRQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO0FBQ2YsWUFBTSwyQkFBYyxJQUFJLENBQUMsSUFBSSxHQUFHLFlBQVksR0FBRyxJQUFJLENBQUMsQ0FBQztLQUN0RDtHQUNGOzs7O0FBSUQsYUFBVyxFQUFFLHFCQUFTLEtBQUssRUFBRTtBQUMzQixTQUFLLElBQUksQ0FBQyxHQUFH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O0FBQ2xDLE1BQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0NBQ2xDO0FBQ0QsU0FBUyxVQUFVLENBQUMsS0FBSyxFQUFFO0FBQ3pCLG9CQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7O0FBRXJDLE1BQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0FBQ2pDLE1BQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0NBQ2xDO0FBQ0QsU0FBUyxZQUFZLENBQUMsT0FBTyxFQUFFO0FBQzdCLE1BQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQ3JDLE1BQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ2pDLE1BQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0NBQ2pDOztxQkFFYyxPQUFPIiwiZmlsZSI6InZpc2l0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRXhjZXB0aW9uIGZyb20gJy4uL2V4Y2VwdGlvbic7XG5cbmZ1bmN0aW9uIFZpc2l0b3IoKSB7XG4gIHRoaXMucGFyZW50cyA9IFtdO1xufVxuXG5WaXNpdG9yLnByb3RvdHlwZSA9IHtcbiAgY29uc3RydWN0b3I6IFZpc2l0b3IsXG4gIG11dGF0aW5nOiBmYWxzZSxcblxuICAvLyBWaXNpdHMgYSBnaXZlbiB2YWx1ZS4gSWYgbXV0YXRpbmcsIHdpbGwgcmVwbGFjZSB0aGUgdmFsdWUgaWYgbmVjZXNzYXJ5LlxuICBhY2NlcHRLZXk6IGZ1bmN0aW9uKG5vZGUsIG5hbWUpIHtcbiAgICBsZXQgdmFsdWUgPSB0aGlzLmFjY2VwdChub2RlW25hbWVdKTtcbiAgICBpZiAodGhpcy5tdXRhdGluZykge1xuICAgICAgLy8gSGFja3kgc2FuaXR5IGNoZWNrOiBUaGlzIG1heSBoYXZlIGEgZmV3IGZhbHNlIHBvc2l0aXZlcyBmb3IgdHlwZSBmb3IgdGhlIGhlbHBlclxuICAgICAgLy8gbWV0aG9kcyBidXQgd2lsbCBnZW5lcmFsbHkgZG8gdGhlIHJpZ2h0IHRoaW5nIHdpdGhvdXQgYSBsb3Qgb2Ygb3ZlcmhlYWQuXG4gICAgICBpZiAodmFsdWUgJiYgIVZpc2l0b3IucHJvdG90eXBlW3ZhbHVlLnR5cGVdKSB7XG4gICAgICAgIHRocm93IG5ldyBFeGNlcHRpb24oJ1VuZXhwZWN0ZWQgbm9kZSB0eXBlIFwiJyArIHZhbHVlLnR5cGUgKyAnXCIgZm91bmQgd2hlbiBhY2NlcHRpbmcgJyArIG5hbWUgKyAnIG9uICcgKyBub2RlLnR5cGUpO1xuICAgICAgfVxuICAgICAgbm9kZVtuYW1lXSA9IHZhbHVlO1xuICAgIH1cbiAgfSxcblxuICAvLyBQZXJmb3JtcyBhbiBhY2NlcHQgb3BlcmF0aW9uIHdpdGggYWRkZWQgc2FuaXR5IGNoZWNrIHRvIGVuc3VyZVxuICAvLyByZXF1aXJlZCBrZXlzIGFyZSBub3QgcmVtb3ZlZC5cbiAgYWNjZXB0UmVxdWlyZWQ6IGZ1bmN0aW9uKG5vZGUsIG5hbWUpIHtcbiAgICB0aGlzLmFjY2VwdEtleShub2RlLCBuYW1lKTtcblxuICAgIGlmICghbm9kZVtuYW1lXSkge1xuICAgICAgdGhyb3cgbmV3IEV4Y2VwdGlvbihub2RlLnR5cGUgKyAnIHJlcXVpcmVzICcgKyBuYW1lKTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gVHJhdmVyc2VzIGEgZ2l2ZW4gYXJyYXkuIElmIG11dGF0aW5nLCBlbXB0eSByZXNwbnNlcyB3aWxsIGJlIHJlbW92ZWRcbiAgLy8gZm9yIGNoaWxkIGVsZW1lbnRzLlxuICBhY2NlcHRBcnJheTogZnVuY3Rpb24oYXJyYXkpIHtcbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IGFycmF5Lmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgdGhpcy5hY2NlcHRLZXkoYXJyYXksIGkpO1xuXG4gICAgICBpZiAoIWFycmF5W2ldKSB7XG4gICAgICAgIGFycmF5LnNwbGljZShpLCAxKTtcbiAgICAgICAgaS0tO1xuICAgICAgICBsLS07XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIGFjY2VwdDogZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgaWYgKCFvYmplY3QpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dDogU2FuaXR5IGNvZGUgKi9cbiAgICBpZiAoIXRoaXNbb2JqZWN0LnR5cGVdKSB7XG4gICAgICB0aHJvdyBuZXcgRXhjZXB0aW9uKCdVbmtub3duIHR5cGU6ICcgKyBvYmplY3QudHlwZSwgb2JqZWN0KTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5jdXJyZW50KSB7XG4gICAgICB0aGlzLnBhcmVudHMudW5zaGlmdCh0aGlzLmN1cnJlbnQpO1xuICAgIH1cbiAgICB0aGlzLmN1cnJlbnQgPSBvYmplY3Q7XG5cbiAgICBsZXQgcmV0ID0gdGhpc1tvYmplY3QudHlwZV0ob2JqZWN0KTtcblxuICAgIHRoaXMuY3VycmVudCA9IHRoaXMucGFyZW50cy5zaGlmdCgpO1xuXG4gICAgaWYgKCF0aGlzLm11dGF0aW5nIHx8IHJldCkge1xuICAgICAgcmV0dXJuIHJldDtcbiAgICB9IGVsc2UgaWYgKHJldCAhPT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiBvYmplY3Q7XG4gICAgfVxuICB9LFxuXG4gIFByb2dyYW06IGZ1bmN0aW9uKHByb2dyYW0pIHtcbiAgICB0aGlzLmFjY2VwdEFycmF5KHByb2dyYW0uYm9keSk7XG4gIH0sXG5cbiAgTXVzdGFjaGVTdGF0ZW1lbnQ6IHZpc2l0U3ViRXhwcmVzc2lvbixcbiAgRGVjb3JhdG9yOiB2aXNpdFN1YkV4cHJlc3Npb24sXG5cbiAgQmxvY2tTdGF0ZW1lbnQ6IHZpc2l0QmxvY2ssXG4gIERlY29yYXRvckJsb2NrOiB2aXNpdEJsb2NrLFxuXG4gIFBhcnRpYWxTdGF0ZW1lbnQ6IHZpc2l0UGFydGlhbCxcbiAgUGFydGlhbEJsb2NrU3RhdGVtZW50OiBmdW5jdGlvbihwYXJ0aWFsKSB7XG4gICAgdmlzaXRQYXJ0aWFsLmNhbGwodGhpcywgcGFydGlhbCk7XG5cbiAgICB0aGlzLmFjY2VwdEtleShwYXJ0aWFsLCAncHJvZ3JhbScpO1xuICB9LFxuXG4gIENvbnRlbnRTdGF0ZW1lbnQ6IGZ1bmN0aW9uKC8qIGNvbnRlbnQgKi8pIHt9LFxuICBDb21tZW50U3RhdGVtZW50OiBmdW5jdGlvbigvKiBjb21tZW50ICovKSB7fSxcblxuICBTdWJFeHByZXNzaW9uOiB2aXNpdFN1YkV4cHJlc3Npb24sXG5cbiAgUGF0aEV4cHJlc3Npb246IGZ1bmN0aW9uKC8qIHBhdGggKi8pIHt9LFxuXG4gIFN0cmluZ0xpdGVyYWw6IGZ1bmN0aW9uKC8qIHN0cmluZyAqLykge30sXG4gIE51bWJlckxpdGVyYWw6IGZ1bmN0aW9uKC8qIG51bWJlciAqLykge30sXG4gIEJvb2xlYW5MaXRlcmFsOiBmdW5jdGlvbigvKiBib29sICovKSB7fSxcbiAgVW5kZWZpbmVkTGl0ZXJhbDogZnVuY3Rpb24oLyogbGl0ZXJhbCAqLykge30sXG4gIE51bGxMaXRlcmFsOiBmdW5jdGlvbigvKiBsaXRlcmFsICovKSB7fSxcblxuICBIYXNoOiBmdW5jdGlvbihoYXNoKSB7XG4gICAgdGhpcy5hY2NlcHRBcnJheShoYXNoLnBhaXJzKTtcbiAgfSxcbiAgSGFzaFBhaXI6IGZ1bmN0aW9uKHBhaXIpIHtcbiAgICB0aGlzLmFjY2VwdFJlcXVpcmVkKHBhaXIsICd2YWx1ZScpO1xuICB9XG59O1xuXG5mdW5jdGlvbiB2aXNpdFN1YkV4cHJlc3Npb24obXVzdGFjaGUpIHtcbiAgdGhpcy5hY2NlcHRSZXF1aXJlZChtdXN0YWNoZSwgJ3BhdGgnKTtcbiAgdGhpcy5hY2NlcHRBcnJheShtdXN0YWNoZS5wYXJhbXMpO1xuICB0aGlzLmFjY2VwdEtleShtdXN0YWNoZSwgJ2hhc2gnKTtcbn1cbmZ1bmN0aW9uIHZpc2l0QmxvY2soYmxvY2spIHtcbiAgdmlzaXRTdWJFeHByZXNzaW9uLmNhbGwodGhpcywgYmxvY2spO1xuXG4gIHRoaXMuYWNjZXB0S2V5KGJsb2NrLCAncHJvZ3JhbScpO1xuICB0aGlzLmFjY2VwdEtleShibG9jaywgJ2ludmVyc2UnKTtcbn1cbmZ1bmN0aW9uIHZpc2l0UGFydGlhbChwYXJ0aWFsKSB7XG4gIHRoaXMuYWNjZXB0UmVxdWlyZWQocGFydGlhbCwgJ25hbWUnKTtcbiAgdGhpcy5hY2NlcHRBcnJheShwYXJ0aWFsLnBhcmFtcyk7XG4gIHRoaXMuYWNjZXB0S2V5KHBhcnRpYWwsICdoYXNoJyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFZpc2l0b3I7XG4iXX0=
