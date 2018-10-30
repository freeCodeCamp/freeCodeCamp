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

const READ = 0x1;
const WRITE = 0x2;
const RW = READ | WRITE;

/**
 * A Reference represents a single occurrence of an identifier in code.
 * @class Reference
 */
export default class Reference {
    constructor(ident, scope, flag,  writeExpr, maybeImplicitGlobal, partial, init) {
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
    isStatic() {
        return !this.tainted && this.resolved && this.resolved.scope.isStatic();
    }

    /**
     * Whether the reference is writeable.
     * @method Reference#isWrite
     * @return {boolean}
     */
    isWrite() {
        return !!(this.flag & Reference.WRITE);
    }

    /**
     * Whether the reference is readable.
     * @method Reference#isRead
     * @return {boolean}
     */
    isRead() {
        return !!(this.flag & Reference.READ);
    }

    /**
     * Whether the reference is read-only.
     * @method Reference#isReadOnly
     * @return {boolean}
     */
    isReadOnly() {
        return this.flag === Reference.READ;
    }

    /**
     * Whether the reference is write-only.
     * @method Reference#isWriteOnly
     * @return {boolean}
     */
    isWriteOnly() {
        return this.flag === Reference.WRITE;
    }

    /**
     * Whether the reference is read-write.
     * @method Reference#isReadWrite
     * @return {boolean}
     */
    isReadWrite() {
        return this.flag === Reference.RW;
    }
}

/**
 * @constant Reference.READ
 * @private
 */
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
