/** 
 * JSON Schema link handler
 * Copyright (c) 2007 Kris Zyp SitePen (www.sitepen.com)
 * Licensed under the MIT (MIT-LICENSE.txt) license.
 */
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define([], function () {
            return factory();
        });
    } else if (typeof module === 'object' && module.exports) {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory();
    } else {
        // Browser globals
        root.jsonSchemaLinks = factory();
    }
}(this, function () {// setup primitive classes to be JSON Schema types
var exports = {};
exports.cacheLinks = true;
exports.getLink = function(relation, instance, schema){
	// gets the URI of the link for the given relation based on the instance and schema
	// for example:
	// getLink(
	// 		"brother", 
	// 		{"brother_id":33}, 
	// 		{links:[{rel:"brother", href:"Brother/{brother_id}"}]}) ->
	//	"Brother/33"
	var links = schema.__linkTemplates; 
	if(!links){
		links = {};
		var schemaLinks = schema.links;
		if(schemaLinks && schemaLinks instanceof Array){
			schemaLinks.forEach(function(link){
	/*			// TODO: allow for multiple same-name relations
				if(links[link.rel]){
					if(!(links[link.rel] instanceof Array)){
						links[link.rel] = [links[link.rel]];
					}
				}*/
				links[link.rel] = link.href;
			});
		}
		if(exports.cacheLinks){
			schema.__linkTemplates = links;
		}
	}
	var linkTemplate = links[relation];
	return linkTemplate && exports.substitute(linkTemplate, instance);
};

exports.substitute = function(linkTemplate, instance){
	return linkTemplate.replace(/\{([^\}]*)\}/g, function(t, property){
			var value = instance[decodeURIComponent(property)];
			if(value instanceof Array){
				// the value is an array, it should produce a URI like /Table/(4,5,8) and store.get() should handle that as an array of values
				return '(' + value.join(',') + ')';
			}
			return value;
		});
};
return exports;
}));