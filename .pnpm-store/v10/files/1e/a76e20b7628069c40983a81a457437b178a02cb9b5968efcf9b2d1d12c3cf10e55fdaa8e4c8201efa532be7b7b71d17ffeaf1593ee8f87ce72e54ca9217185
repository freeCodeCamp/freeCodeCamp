/**
 * Copyright (c) 2014-2024 The xterm.js authors. All rights reserved.
 * @license MIT
 *
 * Copyright (c) 2012-2013, Christopher Jeffrey (MIT License)
 * @license MIT
 *
 * Originally forked from (with the author's permission):
 *   Fabrice Bellard's javascript vt100 for jslinux:
 *   http://bellard.org/jslinux/
 *   Copyright (c) 2011 Fabrice Bellard
 */
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var h=2,_=1,o=class{activate(e){this._terminal=e}dispose(){}fit(){let e=this.proposeDimensions();if(!e||!this._terminal||isNaN(e.cols)||isNaN(e.rows))return;let t=this._terminal._core;(this._terminal.rows!==e.rows||this._terminal.cols!==e.cols)&&(t._renderService.clear(),this._terminal.resize(e.cols,e.rows))}proposeDimensions(){if(!this._terminal||!this._terminal.element||!this._terminal.element.parentElement)return;let t=this._terminal._core._renderService.dimensions;if(t.css.cell.width===0||t.css.cell.height===0)return;let s=this._terminal.options.scrollback===0?0:this._terminal.options.overviewRuler?.width||14,r=window.getComputedStyle(this._terminal.element.parentElement),l=parseInt(r.getPropertyValue("height")),a=Math.max(0,parseInt(r.getPropertyValue("width"))),i=window.getComputedStyle(this._terminal.element),n={top:parseInt(i.getPropertyValue("padding-top")),bottom:parseInt(i.getPropertyValue("padding-bottom")),right:parseInt(i.getPropertyValue("padding-right")),left:parseInt(i.getPropertyValue("padding-left"))},m=n.top+n.bottom,d=n.right+n.left,c=l-m,p=a-d-s;return{cols:Math.max(h,Math.floor(p/t.css.cell.width)),rows:Math.max(_,Math.floor(c/t.css.cell.height))}}};export{o as FitAddon};
//# sourceMappingURL=addon-fit.mjs.map
