(function () {

	if (typeof Prism === 'undefined') {
		return;
	}

	if (Prism.languages.css) {
		// check whether the selector is an advanced pattern before extending it
		if (Prism.languages.css.selector.pattern) {
			Prism.languages.css.selector.inside['pseudo-class'] = /:[\w-]+/;
			Prism.languages.css.selector.inside['pseudo-element'] = /::[\w-]+/;
		} else {
			Prism.languages.css.selector = {
				pattern: Prism.languages.css.selector,
				inside: {
					'pseudo-class': /:[\w-]+/,
					'pseudo-element': /::[\w-]+/
				}
			};
		}
	}

	if (Prism.languages.markup) {
		Prism.languages.markup.tag.inside.tag.inside['tag-id'] = /[\w-]+/;

		var Tags = {
			HTML: {
				'a': 1, 'abbr': 1, 'acronym': 1, 'b': 1, 'basefont': 1, 'bdo': 1, 'big': 1, 'blink': 1, 'cite': 1, 'code': 1, 'dfn': 1, 'em': 1, 'kbd': 1, 'i': 1,
				'rp': 1, 'rt': 1, 'ruby': 1, 's': 1, 'samp': 1, 'small': 1, 'spacer': 1, 'strike': 1, 'strong': 1, 'sub': 1, 'sup': 1, 'time': 1, 'tt': 1, 'u': 1,
				'var': 1, 'wbr': 1, 'noframes': 1, 'summary': 1, 'command': 1, 'dt': 1, 'dd': 1, 'figure': 1, 'figcaption': 1, 'center': 1, 'section': 1, 'nav': 1,
				'article': 1, 'aside': 1, 'hgroup': 1, 'header': 1, 'footer': 1, 'address': 1, 'noscript': 1, 'isIndex': 1, 'main': 1, 'mark': 1, 'marquee': 1,
				'meter': 1, 'menu': 1
			},
			SVG: {
				'animateColor': 1, 'animateMotion': 1, 'animateTransform': 1, 'glyph': 1, 'feBlend': 1, 'feColorMatrix': 1, 'feComponentTransfer': 1,
				'feFuncR': 1, 'feFuncG': 1, 'feFuncB': 1, 'feFuncA': 1, 'feComposite': 1, 'feConvolveMatrix': 1, 'feDiffuseLighting': 1, 'feDisplacementMap': 1,
				'feFlood': 1, 'feGaussianBlur': 1, 'feImage': 1, 'feMerge': 1, 'feMergeNode': 1, 'feMorphology': 1, 'feOffset': 1, 'feSpecularLighting': 1,
				'feTile': 1, 'feTurbulence': 1, 'feDistantLight': 1, 'fePointLight': 1, 'feSpotLight': 1, 'linearGradient': 1, 'radialGradient': 1, 'altGlyph': 1,
				'textPath': 1, 'tref': 1, 'altglyph': 1, 'textpath': 1, 'altglyphdef': 1, 'altglyphitem': 1, 'clipPath': 1, 'color-profile': 1, 'cursor': 1,
				'font-face': 1, 'font-face-format': 1, 'font-face-name': 1, 'font-face-src': 1, 'font-face-uri': 1, 'foreignObject': 1, 'glyphRef': 1,
				'hkern': 1, 'vkern': 1
			},
			MathML: {}
		};
	}

	var language;

	Prism.hooks.add('wrap', function (env) {
		if ((env.type == 'tag-id'
			|| (env.type == 'property' && env.content.indexOf('-') != 0)
			|| (env.type == 'rule' && env.content.indexOf('@-') != 0)
			|| (env.type == 'pseudo-class' && env.content.indexOf(':-') != 0)
			|| (env.type == 'pseudo-element' && env.content.indexOf('::-') != 0)
			|| (env.type == 'attr-name' && env.content.indexOf('data-') != 0)
		) && env.content.indexOf('<') === -1
		) {
			if (env.language == 'css'
				|| env.language == 'scss'
				|| env.language == 'markup'
			) {
				var href = 'https://webplatform.github.io/docs/';
				var content = env.content;

				if (env.language == 'css' || env.language == 'scss') {
					href += 'css/';

					if (env.type == 'property') {
						href += 'properties/';
					} else if (env.type == 'rule') {
						href += 'atrules/';
						content = content.substring(1);
					} else if (env.type == 'pseudo-class') {
						href += 'selectors/pseudo-classes/';
						content = content.substring(1);
					} else if (env.type == 'pseudo-element') {
						href += 'selectors/pseudo-elements/';
						content = content.substring(2);
					}
				} else if (env.language == 'markup') {
					if (env.type == 'tag-id') {
						// Check language
						language = getLanguage(env.content) || language;

						if (language) {
							href += language + '/elements/';
						} else {
							return; // Abort
						}
					} else if (env.type == 'attr-name') {
						if (language) {
							href += language + '/attributes/';
						} else {
							return; // Abort
						}
					}
				}

				href += content;
				env.tag = 'a';
				env.attributes.href = href;
				env.attributes.target = '_blank';
			}
		}
	});

	function getLanguage(tag) {
		var tagL = tag.toLowerCase();

		if (Tags.HTML[tagL]) {
			return 'html';
		} else if (Tags.SVG[tag]) {
			return 'svg';
		} else if (Tags.MathML[tag]) {
			return 'mathml';
		}

		// Not in dictionary, perform check
		if (Tags.HTML[tagL] !== 0 && typeof document !== 'undefined') {
			var htmlInterface = (document.createElement(tag).toString().match(/\[object HTML(.+)Element\]/) || [])[1];

			if (htmlInterface && htmlInterface != 'Unknown') {
				Tags.HTML[tagL] = 1;
				return 'html';
			}
		}

		Tags.HTML[tagL] = 0;

		if (Tags.SVG[tag] !== 0 && typeof document !== 'undefined') {
			var svgInterface = (document.createElementNS('http://www.w3.org/2000/svg', tag).toString().match(/\[object SVG(.+)Element\]/) || [])[1];

			if (svgInterface && svgInterface != 'Unknown') {
				Tags.SVG[tag] = 1;
				return 'svg';
			}
		}

		Tags.SVG[tag] = 0;

		// Lame way to detect MathML, but browsers don’t expose interface names there :(
		if (Tags.MathML[tag] !== 0) {
			if (tag.indexOf('m') === 0) {
				Tags.MathML[tag] = 1;
				return 'mathml';
			}
		}

		Tags.MathML[tag] = 0;

		return null;
	}

}());
