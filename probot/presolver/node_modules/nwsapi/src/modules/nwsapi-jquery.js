/*
 * Copyright (C) 2007-2017 Diego Perini
 * All rights reserved.
 *
 * this is just a small example to show
 * how an extension for NWMatcher could be
 * adapted to handle special jQuery selectors
 *
 * Child Selectors
 * :even, :odd, :eq, :lt, :gt, :first, :last, :nth
 *
 * Pseudo Selectors
 * :has, :button, :header, :input, :checkbox, :radio, :file, :image
 * :password, :reset, :submit, :text, :hidden, :visible, :parent
 *
 */

// for structural pseudo-classes extensions
NW.Dom.registerSelector(
  'jquery:child',
  /^\:((?:(nth|eq|lt|gt)\(([^()]*)\))|(?:even|odd|first|last))(.*)/i,
  (function(global) {

    return function(match, source, mode, callback) {

      var status = true,
      macro = mode ? NW.Dom.S_BODY : NW.Dom.M_BODY;

      macro = macro.replace('@', typeof callback == 'function' ? (mode ? NW.Dom.S_TEST : NW.Dom.M_TEST) : '');

      switch (match[1].toLowerCase()) {
        case 'odd':
          source = source.replace(macro, 'if((n=n^1)==0){' + macro + '}');
          break;
        case 'even':
          source = source.replace(macro, 'if((n=n^1)==1){' + macro + '}');
          break;
        case 'first':
          source = 'n=s.root.getElementsByTagName(e.nodeName);if(n.length&&n[0]===e){' + source + '}';
          break;
        case 'last':
          source = 'n=s.root.getElementsByTagName(e.nodeName);if(n.length&&n[n.length-1]===e){' + source + '}';
          break;
        default:
          switch (match[2].toLowerCase()) {
            case 'nth':
              source = 'n=s.root.getElementsByTagName(e.nodeName);if(n.length&&n[' + match[3] + ']===e){' + source + '}';
              break;
            case 'eq':
              source = source.replace(macro, 'if(x++==' + match[3] + '){' + macro + '}');
              break;
            case 'lt':
              source = source.replace(macro, 'if(x++<' + match[3] + '){' + macro + '}');
              break;
            case 'gt':
              source = source.replace(macro, 'if(x++>' + match[3] + '){' + macro + '}');
              break;
            default:
              status = false;
              break;
          }
          break;
      }

      // compiler will add this to "source"
      return {
        'source': source,
        'status': status,
        'modvar': 'x=0'
      };

    };

  })(this));

// for element pseudo-classes extensions
NW.Dom.registerSelector(
  'jquery:pseudo',
  /^\:(has|checkbox|file|image|password|radio|reset|submit|text|button|input|header|hidden|visible|parent)(?:\(\s*(["']*)?([^'"()]*)\2\s*\))?(.*)/i,
  (function(global) {

    return function(match, source, mode, callback) {

      var status = true,
      macro = mode ? NW.Dom.S_BODY : NW.Dom.M_BODY;

      macro = macro.replace('@', typeof callback == 'function' ? (mode ? NW.Dom.S_TEST : NW.Dom.M_TEST) : '');

      switch(match[1].toLowerCase()) {
        case 'has':
          source = source.replace(macro, 'if(e.getElementsByTagName("' + match[3].replace(/^\s|\s$/g, '') + '")[0]){' + macro + '}');
          break;
        case 'checkbox':
        case 'file':
        case 'image':
        case 'password':
        case 'radio':
        case 'reset':
        case 'submit':
        case 'text':
          // :checkbox, :file, :image, :password, :radio, :reset, :submit, :text
          source = 'if(/^' + match[1] + '$/i.test(e.type)){' + source + '}';
          break;
        case 'button':
        case 'input':
          source = 'if(e.type||/button/i.test(e.nodeName)){' + source + '}';
          break;
        case 'header':
          source = 'if(/h[1-6]/i.test(e.nodeName)){' + source + '}';
          break;
        case 'hidden':
          source = 'if(!e.offsetWidth&&!e.offsetHeight){' + source + '}';
          break;
        case 'visible':
          source = 'if(e.offsetWidth||e.offsetHeight){' + source + '}';
          break;
        case 'parent':
          source += 'if(e.firstChild){' + source + '}';
          break;
        default:
          status = false;
          break;
      }

      // compiler will add this to "source"
      return {
        'source': source,
        'status': status
      };

    };

  })(this));
