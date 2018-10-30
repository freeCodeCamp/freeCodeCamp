/* eslint-disable new-cap */
import Visitor from './visitor';

export function print(ast) {
  return new PrintVisitor().accept(ast);
}

export function PrintVisitor() {
  this.padding = 0;
}

PrintVisitor.prototype = new Visitor();

PrintVisitor.prototype.pad = function(string) {
  let out = '';

  for (let i = 0, l = this.padding; i < l; i++) {
    out += '  ';
  }

  out += string + '\n';
  return out;
};

PrintVisitor.prototype.Program = function(program) {
  let out = '',
      body = program.body,
      i, l;

  if (program.blockParams) {
    let blockParams = 'BLOCK PARAMS: [';
    for (i = 0, l = program.blockParams.length; i < l; i++) {
       blockParams += ' ' + program.blockParams[i];
    }
    blockParams += ' ]';
    out += this.pad(blockParams);
  }

  for (i = 0, l = body.length; i < l; i++) {
    out += this.accept(body[i]);
  }

  this.padding--;

  return out;
};

PrintVisitor.prototype.MustacheStatement = function(mustache) {
  return this.pad('{{ ' + this.SubExpression(mustache) + ' }}');
};
PrintVisitor.prototype.Decorator = function(mustache) {
  return this.pad('{{ DIRECTIVE ' + this.SubExpression(mustache) + ' }}');
};

PrintVisitor.prototype.BlockStatement =
PrintVisitor.prototype.DecoratorBlock = function(block) {
  let out = '';

  out += this.pad((block.type === 'DecoratorBlock' ? 'DIRECTIVE ' : '') + 'BLOCK:');
  this.padding++;
  out += this.pad(this.SubExpression(block));
  if (block.program) {
    out += this.pad('PROGRAM:');
    this.padding++;
    out += this.accept(block.program);
    this.padding--;
  }
  if (block.inverse) {
    if (block.program) { this.padding++; }
    out += this.pad('{{^}}');
    this.padding++;
    out += this.accept(block.inverse);
    this.padding--;
    if (block.program) { this.padding--; }
  }
  this.padding--;

  return out;
};

PrintVisitor.prototype.PartialStatement = function(partial) {
  let content = 'PARTIAL:' + partial.name.original;
  if (partial.params[0]) {
    content += ' ' + this.accept(partial.params[0]);
  }
  if (partial.hash) {
    content += ' ' + this.accept(partial.hash);
  }
  return this.pad('{{> ' + content + ' }}');
};
PrintVisitor.prototype.PartialBlockStatement = function(partial) {
  let content = 'PARTIAL BLOCK:' + partial.name.original;
  if (partial.params[0]) {
    content += ' ' + this.accept(partial.params[0]);
  }
  if (partial.hash) {
    content += ' ' + this.accept(partial.hash);
  }

  content += ' ' + this.pad('PROGRAM:');
  this.padding++;
  content += this.accept(partial.program);
  this.padding--;

  return this.pad('{{> ' + content + ' }}');
};

PrintVisitor.prototype.ContentStatement = function(content) {
  return this.pad("CONTENT[ '" + content.value + "' ]");
};

PrintVisitor.prototype.CommentStatement = function(comment) {
  return this.pad("{{! '" + comment.value + "' }}");
};

PrintVisitor.prototype.SubExpression = function(sexpr) {
  let params = sexpr.params,
      paramStrings = [],
      hash;

  for (let i = 0, l = params.length; i < l; i++) {
    paramStrings.push(this.accept(params[i]));
  }

  params = '[' + paramStrings.join(', ') + ']';

  hash = sexpr.hash ? ' ' + this.accept(sexpr.hash) : '';

  return this.accept(sexpr.path) + ' ' + params + hash;
};

PrintVisitor.prototype.PathExpression = function(id) {
  let path = id.parts.join('/');
  return (id.data ? '@' : '') + 'PATH:' + path;
};


PrintVisitor.prototype.StringLiteral = function(string) {
  return '"' + string.value + '"';
};

PrintVisitor.prototype.NumberLiteral = function(number) {
  return 'NUMBER{' + number.value + '}';
};

PrintVisitor.prototype.BooleanLiteral = function(bool) {
  return 'BOOLEAN{' + bool.value + '}';
};

PrintVisitor.prototype.UndefinedLiteral = function() {
  return 'UNDEFINED';
};

PrintVisitor.prototype.NullLiteral = function() {
  return 'NULL';
};

PrintVisitor.prototype.Hash = function(hash) {
  let pairs = hash.pairs,
      joinedPairs = [];

  for (let i = 0, l = pairs.length; i < l; i++) {
    joinedPairs.push(this.accept(pairs[i]));
  }

  return 'HASH{' + joinedPairs.join(', ') + '}';
};
PrintVisitor.prototype.HashPair = function(pair) {
  return pair.key + '=' + this.accept(pair.value);
};
/* eslint-enable new-cap */
