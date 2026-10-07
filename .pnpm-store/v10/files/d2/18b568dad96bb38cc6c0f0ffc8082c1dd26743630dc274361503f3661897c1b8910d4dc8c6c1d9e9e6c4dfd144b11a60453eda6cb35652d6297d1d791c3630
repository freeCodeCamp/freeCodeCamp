/***********************************************************************

  A JavaScript tokenizer / parser / beautifier / compressor.
  https://github.com/mishoo/UglifyJS2

  -------------------------------- (C) ---------------------------------

                           Author: Mihai Bazon
                         <mihai.bazon@gmail.com>
                       http://mihai.bazon.net/blog

  Distributed under the BSD license:

    Copyright 2012 (c) Mihai Bazon <mihai.bazon@gmail.com>

    Redistribution and use in source and binary forms, with or without
    modification, are permitted provided that the following conditions
    are met:

        * Redistributions of source code must retain the above
          copyright notice, this list of conditions and the following
          disclaimer.

        * Redistributions in binary form must reproduce the above
          copyright notice, this list of conditions and the following
          disclaimer in the documentation and/or other materials
          provided with the distribution.

    THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDER “AS IS” AND ANY
    EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
    IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
    PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER BE
    LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY,
    OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
    PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
    PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
    THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR
    TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF
    THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF
    SUCH DAMAGE.

 ***********************************************************************/

// bitfield flags to be stored in node.flags.
// These are set and unset during compression, and store information in the node without requiring multiple fields.
export const UNUSED = 0b00000001;
export const TRUTHY = 0b00000010;
export const FALSY = 0b00000100;
export const UNDEFINED = 0b00001000;
export const INLINED = 0b00010000;
// Nodes to which values are ever written. Used when keep_assign is part of the unused option string.
export const WRITE_ONLY = 0b00100000;

// information specific to a single compression pass
export const SQUEEZED = 0b0000000100000000;
export const OPTIMIZED = 0b0000001000000000;
export const TOP = 0b0000010000000000;
export const CLEAR_BETWEEN_PASSES = SQUEEZED | OPTIMIZED | TOP;

export const has_flag = (node, flag) => node.flags & flag;
export const set_flag = (node, flag) => { node.flags |= flag; };
export const clear_flag = (node, flag) => { node.flags &= ~flag; };
