import { parse } from '@babel/parser';
import {
  BlockStatement,
  Node,
  Program,
  VariableDeclaration,
  VariableDeclarator
} from '@babel/types';

type Scope = BlockStatement | Program;

type Value = string | number | boolean | null | undefined;

interface Variable extends VariableDeclaration {
  scope: Scope;
  value: Value;
}

export default class JSHelp {
  public name: string;
  private code: string;
  constructor(code: string) {
    this.name = 'JSHelp';
    this.code = code;
  }
  public parse() {
    return parse(this.code);
  }
  public get body() {
    return this.parse().program.body;
  }

  private recurseVariables(node: Node): Variable[] {
    const variables: Variable[] = [];
    if (node.type === 'VariableDeclaration') {
      node.declarations.forEach((declaration: VariableDeclarator) => {
        const scope = this.getNearestScope(node);
        const variable = { ...node, scope, value: declaration?.init?.value };
        variables.push(variable);
      });
    }
    if (node?.body) {
      node.body.forEach((item: Node) => {
        variables.push(...this.recurseVariables(item));
      });
    }
    return variables;
  }
  /**
   * Searches for all `VariableDeclaration` types in the body of the code.
   * @param name - Name of variable
   * @returns An array of `Variable` objects.
   */
  public getVariables(name: string) {
    const variables: Variable[] = [];

    return variables;
  }

  public getNearestScope(node: Node): Scope {
    if (node.type === 'Program') {
      return node;
    }
    if (node.type === 'BlockStatement') {
      return node;
    }
    return this.getNearestScope(node.parent);
  }

  public getFunctions(name: string) {
    return this.body.find((item: Node) => {
      return item.type === 'FunctionDeclaration' && item.id?.name === name;
    });
  }
  public getCalls(name: string) {
    return this.body.find((item: Node) => {
      return item.type === 'CallExpression' && item.callee?.name === name;
    });
  }
}
