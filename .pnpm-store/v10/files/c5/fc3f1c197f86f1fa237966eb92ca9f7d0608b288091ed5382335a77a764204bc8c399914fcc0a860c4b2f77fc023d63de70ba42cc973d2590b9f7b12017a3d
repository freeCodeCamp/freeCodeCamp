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
"use strict";

/**
 * A Variable represents a locally scoped identifier. These include arguments to
 * functions.
 * @class Variable
 */
class Variable {
    constructor(name, scope) {

        /**
         * The variable name, as given in the source code.
         * @member {String} Variable#name
         */
        this.name = name;

        /**
         * List of defining occurrences of this variable (like in 'var ...'
         * statements or as parameter), as AST nodes.
         * @member {espree.Identifier[]} Variable#identifiers
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
    }
}

Variable.CatchClause = "CatchClause";
Variable.Parameter = "Parameter";
Variable.FunctionName = "FunctionName";
Variable.ClassName = "ClassName";
Variable.Variable = "Variable";
Variable.ImportBinding = "ImportBinding";
Variable.ImplicitGlobalVariable = "ImplicitGlobalVariable";

module.exports = Variable;

/* vim: set sw=4 ts=4 et tw=80 : */
