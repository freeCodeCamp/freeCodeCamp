/*!
	PURE Unobtrusive Rendering Engine for HTML

	Licensed under the MIT licenses.
	More information at: http://www.opensource.org

	Copyright (c) 2010 Michael Cvilic - BeeBole.com

	Thanks to Rog Peppe for the functional JS jump
	revision: 2.33
*/
exports.pureInit = function(window, document) {
  var $p, pure = $p = function(){
	  var sel = arguments[0],
		  ctxt = false;

	  if(typeof sel === 'string'){
		  ctxt = arguments[1] || false;
	  }
	  return $p.core(sel, ctxt);
  };

  $p.core = function(sel, ctxt, plugins){
	  //get an instance of the plugins
	  var plugins = getPlugins(),
		  templates = [];

	  //search for the template node(s)
	  switch(typeof sel){
		  case 'string':
			  templates = plugins.find(ctxt || document, sel);
			  if(templates.length === 0) {
				  error('The template "' + sel + '" was not found');
			  }
		  break;
		  case 'undefined':
			  error('The template root is undefined, check your selector');
		  break;
		  default:
			  templates = [sel];
	  }

	  for(var i = 0, ii = templates.length; i < ii; i++){
		  plugins[i] = templates[i];
	  }
	  plugins.length = ii;

	  // set the signature string that will be replaced at render time
	  var Sig = '_s' + Math.floor( Math.random() * 1000000 ) + '_',
		  // another signature to prepend to attributes and avoid checks: style, height, on[events]...
		  attPfx = '_a' + Math.floor( Math.random() * 1000000 ) + '_',
		  // rx to parse selectors, e.g. "+tr.foo[class]"
		  selRx = /^(\+)?([^\@\+]+)?\@?([^\+]+)?(\+)?$/,
		  // set automatically attributes for some tags
		  autoAttr = {
			  IMG:'src',
			  INPUT:'value'
		  };

	  return plugins;


	  /* * * * * * * * * * * * * * * * * * * * * * * * * *
		  core functions
	   * * * * * * * * * * * * * * * * * * * * * * * * * */


	  // error utility
	  function error(e){
		  window.alert(e);
		  if(typeof console !== 'undefined'){
			  console.log(e);
			  debugger;
		  }
		  throw('pure error: ' + e);
	  }

	  //return a new instance of plugins
	  function getPlugins(){
		  var plugins = $p.plugins,
			  f = function(){};
		  f.prototype = plugins;

		  // do not overwrite functions if external definition
		  f.prototype.compile    = plugins.compile || compile;
		  f.prototype.render     = plugins.render || render;
		  f.prototype.autoRender = plugins.autoRender || autoRender;
		  f.prototype.find       = plugins.find || find;

		  // give the compiler and the error handling to the plugin context
		  f.prototype._compiler  = compiler;
		  f.prototype._error     = error;

		  return new f();
	  }

	  // returns the outer HTML of a node
	  function outerHTML(node){
		  // if IE take the internal method otherwise build one
		  return node.outerHTML || (
			  function(n){
          		var div = document.createElement('div'), h;
	          	div.appendChild( n.cloneNode(true) );
				  h = div.innerHTML;
				  div = null;
				  return h;
			  })(node);
	  }

	  // check if the argument is an array
	  function isArray(o){
		  return Object.prototype.toString.call( o ) === "[object Array]";
	  }

	  // returns the string generator function
	  function wrapquote(qfn, f){
		  return function(ctxt){
			  return qfn('' + f.call(ctxt.context, ctxt));
		  };
	  }

	  // convert a JSON HTML structure to a dom node and returns the leaf
	  function domify(ns, pa){
		  pa = pa || document.createDocumentFragment();
		  var nn, leaf;
		  for(var n in ns){
			  nn = document.createElement(n);
			  pa.appendChild(nn);
			  if(typeof ns[n] === 'object'){
				  leaf = domify(ns[n], nn);
			  }else{
				  leaf = document.createElement(ns[n]);
				  nn.appendChild(leaf);
			  }
		  }
		  return leaf;
	  };

	  // default find using querySelector when available on the browser
	  function find(n, sel){
		  if(typeof n === 'string'){
			  sel = n;
			  n = false;
		  }
		  if(typeof document.querySelectorAll !== 'undefined'){
			  return (n||document).querySelectorAll( sel );
		  }else{
			  error('You can test PURE standalone with: iPhone, FF3.5+, Safari4+ and IE8+\n\nTo run PURE on your browser, you need a JS library/framework with a CSS selector engine');
		  }
	  }

	  // create a function that concatenates constant string
	  // sections (given in parts) and the results of called
	  // functions to fill in the gaps between parts (fns).
	  // fns[n] fills in the gap between parts[n-1] and parts[n];
	  // fns[0] is unused.
	  // this is the inner template evaluation loop.
	  function concatenator(parts, fns){
		  return function(ctxt){
			  var strs = [ parts[ 0 ] ],
				  n = parts.length,
				  fnVal, pVal, attLine, pos;

			  for(var i = 1; i < n; i++){
				  fnVal = fns[i]( ctxt );
				  pVal = parts[i];

				  // if the value is empty and attribute, remove it
				  if(fnVal === ''){
					  attLine = strs[ strs.length - 1 ];
					  if( ( pos = attLine.search( /[\w]+=\"?$/ ) ) > -1){
						  strs[ strs.length - 1 ] = attLine.substring( 0, pos );
						  pVal = pVal.substr( 1 );
					  }
				  }

				  strs[ strs.length ] = fnVal;
				  strs[ strs.length ] = pVal;
			  }
			  return strs.join('');
		  };
	  }

	  // parse and check the loop directive
	  function parseloopspec(p){
		  var m = p.match( /^(\w+)\s*<-\s*(\S+)?$/ );
		  if(m === null){
			  error('bad loop spec: "' + p + '"');
		  }
		  if(m[1] === 'item'){
			  error('"item<-..." is a reserved word for the current running iteration.\n\nPlease choose another name for your loop.');
		  }
		  if( !m[2] || (m[2] && (/context/i).test(m[2]))){ //undefined or space(IE)
			  m[2] = function(ctxt){return ctxt.context;};
		  }
		  return {name: m[1], sel: m[2]};
	  }

	  // parse a data selector and return a function that
	  // can traverse the data accordingly, given a context.
	  function dataselectfn(sel){
		  if(typeof(sel) === 'function'){
			  return sel;
		  }
		  //check for a valid js variable name with hyphen(for properties only) and $
		  var m = sel.match(/^[a-zA-Z$_][\w$]*(\.[\w$-]*[^\.])*$/);
		  if(m === null){
			  var found = false, s = sel, parts = [], pfns = [], i = 0, retStr;
			  // check if literal
			  if(/\'|\"/.test( s.charAt(0) )){
				  if(/\'|\"/.test( s.charAt(s.length-1) )){
					  retStr = s.substring(1, s.length-1);
					  return function(){ return retStr; };
				  }
			  }else{
				  // check if literal + #{var}
				  while((m = s.match(/#\{([^{}]+)\}/)) !== null){
					  found = true;
					  parts[i++] = s.slice(0, m.index);
					  pfns[i] = dataselectfn(m[1]);
					  s = s.slice(m.index + m[0].length, s.length);
				  }
			  }
			  if(!found){
				  error('bad data selector syntax: ' + sel);
			  }
			  parts[i] = s;
			  return concatenator(parts, pfns);
		  }
		  m = sel.split('.');
		  return function(ctxt){
			  var data = ctxt.context;
			  if(!data){
				  return '';
			  }
			  var	v = ctxt[m[0]],
				  i = 0;
			  if(v && v.item){
				  data = v.item;
				  i += 1;
			  }
			  var n = m.length;
			  for(; i < n; i++){
				  if(!data){break;}
				  data = data[m[i]];
			  }
			  return (!data && data !== 0) ? '':data;
		  };
	  }

	  // wrap in an object the target node/attr and their properties
	  function gettarget(dom, sel, isloop){
		  var osel, prepend, selector, attr, append, target = [];
		  if( typeof sel === 'string' ){
			  osel = sel;
			  var m = sel.match(selRx);
			  if( !m ){
				  error( 'bad selector syntax: ' + sel );
			  }

			  prepend = m[1];
			  selector = m[2];
			  attr = m[3];
			  append = m[4];

			  if(selector === '.' || ( !selector && attr ) ){
				  target[0] = dom;
			  }else{
				  target = plugins.find(dom, selector);
			  }
			  if(!target || target.length === 0){
				  return error('The node "' + sel + '" was not found in the template');
			  }
		  }else{
			  // autoRender node
			  prepend = sel.prepend;
			  attr = sel.attr;
			  append = sel.append;
			  target = [dom];
		  }

		  if( prepend || append ){
			  if( prepend && append ){
				  error('append/prepend cannot take place at the same time');
			  }else if( isloop ){
				  error('no append/prepend/replace modifiers allowed for loop target');
			  }else if( append && isloop ){
				  error('cannot append with loop (sel: ' + osel + ')');
			  }
		  }
		  var setstr, getstr, quotefn, isStyle, isClass, attName;
		  if(attr){
			  isStyle = (/^style$/i).test(attr);
			  isClass = (/^class$/i).test(attr);
			  attName = isClass ? 'className' : attr;
			  setstr = function(node, s) {
				  node.setAttribute(attPfx + attr, s);
				  if (attName in node && !isStyle) {
					  node[attName] = '';
				  }
				  if (node.nodeType === 1) {
					  node.removeAttribute(attr);
					  isClass && node.removeAttribute(attName);
				  }
			  };
			  if(isStyle) {
				  getstr = function(node){ return node.style.cssText; };
			  }else if(isClass) {
				  getstr = function(node){ return node.className;	};
			  }else{
				  getstr = function(node){ return node.getAttribute(attr); };
			  }
			  if (isStyle || isClass) {//IE no quotes special care
				  quotefn = function(s){ return s.replace(/\"/g, '&quot;'); };
			  }else {
				  quotefn = function(s){ return s.replace(/\"/g, '&quot;').replace(/\s/g, '&nbsp;'); };
			  }
		  }else{
			  if(isloop){
				  setstr = function(node, s){
					  // we can have a null parent node
					  // if we get overlapping targets.
					  var pn = node.parentNode;
					  if(pn){
						  //replace node with s
						  pn.insertBefore( document.createTextNode( s ), node.nextSibling );
						  pn.removeChild( node );
					  }
				  };
			  }else{
				  getstr = function(node){
					  return node.innerHTML;
				  };
				  setstr = function(node, s, ap){
					  if(ap === true){
						  node.innerHTML = s;
					  }else{
						  node.innerHTML = '';
						  node.appendChild( document.createTextNode( s ));
					  }
				  };
			  }
			  quotefn = function(s){
				  return s;
			  };
		  }
		  var setfn;
		  if(prepend){
			  setfn = function(node, s){
				  setstr( node, s + getstr( node ) , true);
			  };
		  }else if(append){
			  setfn = function(node, s){
				  setstr( node, getstr( node ) + s , true);
			  };
		  }else{
			  setfn = function(node, s){
				  setstr( node, s );
			  };
		  }
		  return {attr: attr, nodes: target, set: setfn, sel: osel, quotefn: quotefn};
	  }

	  function setsig(target, n){
		  var sig = Sig + n + ':';
		  for(var i = 0; i < target.nodes.length; i++){
			  // could check for overlapping targets here.
			  target.set( target.nodes[i], sig );
		  }
	  }

	  // read de loop data, and pass it to the inner rendering function
	  function loopfn(name, dselect, inner, sorter){
		  return function(ctxt){
			  var a = dselect(ctxt),
				  old = ctxt[name],
				  temp = { items : a },
				  strs = [],
				  buildArg = function(idx, temp){
					  ctxt.pos = temp.pos = idx;
					  ctxt.item = temp.item = a[ idx ];
					  ctxt.items = a;
					  strs.push( inner.call(temp, ctxt ) );
				  };
			  ctxt[name] = temp;
			  if( isArray(a) ){
				  if(typeof sorter !== 'undefined'){
					  a.sort(sorter);
				  }
				  //loop on array
				  for(var i = 0, ii = a.length || 0; i < ii; i++){
					  buildArg(i, temp);
				  }
			  }else{
				  if(typeof sorter !== 'undefined'){
					  error('sort is only available on arrays, not objects');
				  }
				  //loop on collections
				  for(var prop in a){
					  a.hasOwnProperty( prop ) && buildArg(prop, temp);
				  }
			  }

			  typeof old !== 'undefined' ? ctxt[name] = old : delete ctxt[name];
			  return strs.join('');
		  };
	  }
	  // generate the template for a loop node
	  function loopgen(dom, sel, loop, fns){
		  var already = false, ls, sorter, prop;
		  for(prop in loop){
			  if(loop.hasOwnProperty(prop)){
				  if(prop === 'sort'){
					  sorter = loop.sort;
					  continue;
				  }
				  if(already){
					  error('cannot have more than one loop on a target');
				  }
				  ls = prop;
				  already = true;
			  }
		  }
		  if(!ls){
			  error('no loop spec');
		  }
		  var dsel = loop[ls];
		  // if it's a simple data selector then we default to contents, not replacement.
		  if(typeof(dsel) === 'string' || typeof(dsel) === 'function'){
			  loop = {};
			  loop[ls] = {root: dsel};
			  return loopgen(dom, sel, loop, fns);
		  }
		  var spec = parseloopspec(ls),
			  itersel = dataselectfn(spec.sel),
			  target = gettarget(dom, sel, true),
			  nodes = target.nodes;

		  for(i = 0; i < nodes.length; i++){
			  var node = nodes[i],
				  inner = compiler(node, dsel);
			  fns[fns.length] = wrapquote(target.quotefn, loopfn(spec.name, itersel, inner, sorter));
			  target.nodes = [node];		// N.B. side effect on target.
			  setsig(target, fns.length - 1);
		  }
	  }

	  function getAutoNodes(n, data){
		  var ns = n.getElementsByTagName('*'),
			  an = [],
			  openLoops = {a:[],l:{}},
			  cspec,
			  isNodeValue,
			  i, ii, j, jj, ni, cs, cj;
		  //for each node found in the template
		  for(i = -1, ii = ns.length; i < ii; i++){
			  ni = i > -1 ?ns[i]:n;
			  if(ni.nodeType === 1 && ni.className !== ''){
				  //when a className is found
				  cs = ni.className.split(' ');
				  // for each className
				  for(j = 0, jj=cs.length;j<jj;j++){
					  cj = cs[j];
					  // check if it is related to a context property
					  cspec = checkClass(cj, ni.tagName);
					  // if so, store the node, plus the type of data
					  if(cspec !== false){
						  isNodeValue = (/nodevalue/i).test(cspec.attr);
						  if(cspec.sel.indexOf('@') > -1 || isNodeValue){
							  ni.className = ni.className.replace('@'+cspec.attr, '');
							  if(isNodeValue){
								  cspec.attr = false;
							  }
						  }
						  an.push({n:ni, cspec:cspec});
					  }
				  }
			  }
		  }
		  return an;

		  function checkClass(c, tagName){
			  // read the class
			  var ca = c.match(selRx),
				  attr = ca[3] || autoAttr[tagName],
				  cspec = {prepend:!!ca[1], prop:ca[2], attr:attr, append:!!ca[4], sel:c},
				  i, ii, loopi, loopil, val;
			  // check in existing open loops
			  for(i = openLoops.a.length-1; i >= 0; i--){
				  loopi = openLoops.a[i];
				  loopil = loopi.l[0];
				  val = loopil && loopil[cspec.prop];
				  if(typeof val !== 'undefined'){
					  cspec.prop = loopi.p + '.' + cspec.prop;
					  if(openLoops.l[cspec.prop] === true){
						  val = val[0];
					  }
					  break;
				  }
			  }
			  // not found check first level of data
			  if(typeof val === 'undefined'){
				  val = isArray(data) ? data[0][cspec.prop] : data[cspec.prop];
				  // nothing found return
				  if(typeof val === 'undefined'){
					  return false;
				  }
			  }
			  // set the spec for autoNode
			  if(isArray(val)){
				  openLoops.a.push( {l:val, p:cspec.prop} );
				  openLoops.l[cspec.prop] = true;
				  cspec.t = 'loop';
			  }else{
				  cspec.t = 'str';
			  }
			  return cspec;
		  }
	  }

	  // returns a function that, given a context argument,
	  // will render the template defined by dom and directive.
	  function compiler(dom, directive, data, ans){
		  var fns = [];
		  // autoRendering nodes parsing -> auto-nodes
		  ans = ans || data && getAutoNodes(dom, data);
		  if(data){
			  var j, jj, cspec, n, target, nodes, itersel, node, inner;
			  // for each auto-nodes
			  while(ans.length > 0){
				  cspec = ans[0].cspec;
				  n = ans[0].n;
				  ans.splice(0, 1);
				  if(cspec.t === 'str'){
					  // if the target is a value
					  target = gettarget(n, cspec, false);
					  setsig(target, fns.length);
					  fns[fns.length] = wrapquote(target.quotefn, dataselectfn(cspec.prop));
				  }else{
					  // if the target is a loop
					  itersel = dataselectfn(cspec.sel);
					  target = gettarget(n, cspec, true);
					  nodes = target.nodes;
					  for(j = 0, jj = nodes.length; j < jj; j++){
						  node = nodes[j];
						  inner = compiler(node, false, data, ans);
						  fns[fns.length] = wrapquote(target.quotefn, loopfn(cspec.sel, itersel, inner));
						  target.nodes = [node];
						  setsig(target, fns.length - 1);
					  }
				  }
			  }
		  }
		  // read directives
		  var target, dsel;
		  for(var sel in directive){
			  if(directive.hasOwnProperty(sel)){
				  dsel = directive[sel];
				  if(typeof(dsel) === 'function' || typeof(dsel) === 'string'){
					  // set the value for the node/attr
					  target = gettarget(dom, sel, false);
					  setsig(target, fns.length);
					  fns[fns.length] = wrapquote(target.quotefn, dataselectfn(dsel));
				  }else{
					  // loop on node
					  loopgen(dom, sel, dsel, fns);
				  }
			  }
		  }
          // convert node to a string
          var h = outerHTML(dom), pfns = [];
		  // IE adds an unremovable "selected, value" attribute
		  // hard replace while waiting for a better solution
          h = h.replace(/<([^>]+)\s(value\=""|selected)\s?([^>]*)>/ig, "<$1 $3>");

          // remove attribute prefix
          h = h.split(attPfx).join('');

		  // slice the html string at "Sig"
		  var parts = h.split( Sig ), p;
		  // for each slice add the return string of
		  for(var i = 1; i < parts.length; i++){
			  p = parts[i];
			  // part is of the form "fn-number:..." as placed there by setsig.
			  pfns[i] = fns[ parseInt(p, 10) ];
			  parts[i] = p.substring( p.indexOf(':') + 1 );
		  }
		  return concatenator(parts, pfns);
	  }
	  // compile the template with directive
	  // if a context is passed, the autoRendering is triggered automatically
	  // return a function waiting the data as argument
	  function compile(directive, ctxt, template){
		  var rfn = compiler( ( template || this[0] ).cloneNode(true), directive, ctxt);
		  return function(context){
			  return rfn({context:context});
		  };
	  }
	  //compile with the directive as argument
	  // run the template function on the context argument
	  // return an HTML string
	  // should replace the template and return this
	  function render(ctxt, directive){
		  var fn = typeof directive === 'function' ? directive : plugins.compile( directive, false, this[0] );
		  for(var i = 0, ii = this.length; i < ii; i++){
			  this[i] = replaceWith( this[i], fn( ctxt, false ));
		  }
		  context = null;
		  return this;
	  }

	  // compile the template with autoRender
	  // run the template function on the context argument
	  // return an HTML string
	  function autoRender(ctxt, directive){
		  var fn = plugins.compile( directive, ctxt, this[0] );
		  for(var i = 0, ii = this.length; i < ii; i++){
			  this[i] = replaceWith( this[i], fn( ctxt, false));
		  }
		  context = null;
		  return this;
	  }

	  function replaceWith(elm, html){
		  var tagName = elm.tagName, ne, pa, ep, parent = {TABLE:{}};
		  if((/TD|TR|TH/).test(tagName)){
			  var parents = {	TR:{TABLE:'TBODY'}, TD:{TABLE:{TBODY:'TR'}}, TH:{TABLE:{THEAD:'TR'}} };
			  pa = domify( parents[ tagName ] );
		  }else if( ( /TBODY|THEAD|TFOOT/ ).test( tagName )){
			  pa = document.createElement('TABLE');
		  }else{
			  pa = document.createElement('SPAN');
		  }

		  ep = elm.parentNode;
		  // avoid IE mem leak
		  ep.insertBefore(pa, elm);
		  ep.removeChild(elm);
//		  pa.style.display = 'none';
		  pa.innerHTML = html;
		  ne = pa.firstChild;
		  ep.insertBefore(ne, pa);
		  ep.removeChild(pa);
		  elm = ne;

		  pa = ne = ep = null;
		  return elm;
	  }
  };

  $p.plugins = {};

  $p.libs = {
	  dojo:function(){
		  if(typeof document.querySelector === 'undefined'){
			  $p.plugins.find = function(n, sel){
				  return dojo.query(sel, n);
			  };
		  }
	  },
	  domassistant:function(){
		  if(typeof document.querySelector === 'undefined'){
			  $p.plugins.find = function(n, sel){
				  return $(n).cssSelect(sel);
			  };
		  }
		  DOMAssistant.attach({
			  publicMethods : [ 'compile', 'render', 'autoRender'],
			  compile:function(directive, ctxt){ return $p(this).compile(directive, ctxt); },
			  render:function(ctxt, directive){ return $( $p(this).render(ctxt, directive) )[0]; },
			  autoRender:function(ctxt, directive){ return $( $p(this).autoRender(ctxt, directive) )[0]; }
		  });
	  },
	  jquery:function(){
		  if(typeof document.querySelector === 'undefined'){
			  $p.plugins.find = function(n, sel){
				  return $(n).find(sel);
			  };
		  }
		  jQuery.fn.extend({
			  compile:function(directive, ctxt){ return $p(this[0]).compile(directive, ctxt); },
			  render:function(ctxt, directive){ return jQuery( $p( this[0] ).render( ctxt, directive ) ); },
			  autoRender:function(ctxt, directive){ return jQuery( $p( this[0] ).autoRender( ctxt, directive ) ); }
		  });
	  },
	  mootools:function(){
		  if(typeof document.querySelector === 'undefined'){
			  $p.plugins.find = function(n, sel){
				  return $(n).getElements(sel);
			  };
		  }
		  Element.implement({
			  compile:function(directive, ctxt){ return $p(this).compile(directive, ctxt); },
			  render:function(ctxt, directive){ return $p(this).render(ctxt, directive); },
			  autoRender:function(ctxt, directive){ return $p(this).autoRender(ctxt, directive); }
		  });
	  },
	  prototype:function(){
		  if(typeof document.querySelector === 'undefined'){
			  $p.plugins.find = function(n, sel){
				  n = n === document ? n.body : n;
				  return typeof n === 'string' ? $$(n) : $(n).select(sel);
			  };
		  }
		  Element.addMethods({
			  compile:function(element, directive, ctxt){ return $p(element).compile(directive, ctxt); },
			  render:function(element, ctxt, directive){ return $p(element).render(ctxt, directive); },
			  autoRender:function(element, ctxt, directive){ return $p(element).autoRender(ctxt, directive); }
		  });
	  },
	  sizzle:function(){
		  if(typeof document.querySelector === 'undefined'){
			  $p.plugins.find = function(n, sel){
				  return window.Sizzle(sel, n);
			  };
		  }
	  },
	  sly:function(){
		  if(typeof document.querySelector === 'undefined'){
			  $p.plugins.find = function(n, sel){
				  return Sly(sel, n);
			  };
		  }
	  }
  };

  // get lib specifics if available
  (function(){
	  var libkey =
		  typeof dojo         !== 'undefined' && 'dojo' ||
		  typeof DOMAssistant !== 'undefined' && 'domassistant' ||
		  typeof jQuery       !== 'undefined' && 'jquery' ||
		  typeof MooTools     !== 'undefined' && 'mootools' ||
		  typeof Prototype    !== 'undefined' && 'prototype' ||
		  typeof window.Sizzle       !== 'undefined' && 'sizzle' ||
		  typeof Sly          !== 'undefined' && 'sly';

	  libkey && $p.libs[libkey]();
  })();
  return pure;
};

