Prism.languages.liquid = {
	'comment': {
		pattern: /(^\{%\s*comment\s*%\})[\s\S]+(?=\{%\s*endcomment\s*%\}$)/,
		lookbehind: true
	},
	'delimiter': {
		pattern: /^\{(?:\{\{|[%\{])-?|-?(?:\}\}|[%\}])\}$/,
		alias: 'punctuation'
	},
	'string': {
		pattern: /"[^"]*"|'[^']*'/,
		greedy: true
	},
	'keyword': /\b(?:as|assign|break|(?:end)?(?:capture|case|comment|for|form|if|paginate|raw|style|tablerow|unless)|continue|cycle|decrement|echo|else|elsif|in|include|increment|limit|liquid|offset|range|render|reversed|section|when|with)\b/,
	'object': /\b(?:address|all_country_option_tags|article|block|blog|cart|checkout|collection|color|country|country_option_tags|currency|current_page|current_tags|customer|customer_address|date|discount_allocation|discount_application|external_video|filter|filter_value|font|forloop|fulfillment|generic_file|gift_card|group|handle|image|line_item|link|linklist|localization|location|measurement|media|metafield|model|model_source|order|page|page_description|page_image|page_title|part|policy|product|product_option|recommendations|request|robots|routes|rule|script|search|selling_plan|selling_plan_allocation|selling_plan_group|shipping_method|shop|shop_locale|sitemap|store_availability|tax_line|template|theme|transaction|unit_price_measurement|user_agent|variant|video|video_source)\b/,
	'function': [
		{
			pattern: /(\|\s*)\w+/,
			lookbehind: true,
			alias: 'filter'
		},
		{
			// array functions
			pattern: /(\.\s*)(?:first|last|size)/,
			lookbehind: true
		}
	],
	'boolean': /\b(?:false|nil|true)\b/,
	'range': {
		pattern: /\.\./,
		alias: 'operator'
	},
	// https://github.com/Shopify/liquid/blob/698f5e0d967423e013f6169d9111bd969bd78337/lib/liquid/lexer.rb#L21
	'number': /\b\d+(?:\.\d+)?\b/,
	'operator': /[!=]=|<>|[<>]=?|[|?:=-]|\b(?:and|contains(?=\s)|or)\b/,
	'punctuation': /[.,\[\]()]/,
	'empty': {
		pattern: /\bempty\b/,
		alias: 'keyword'
	},
};

Prism.hooks.add('before-tokenize', function (env) {
	var liquidPattern = /\{%\s*comment\s*%\}[\s\S]*?\{%\s*endcomment\s*%\}|\{(?:%[\s\S]*?%|\{\{[\s\S]*?\}\}|\{[\s\S]*?\})\}/g;
	var insideRaw = false;

	Prism.languages['markup-templating'].buildPlaceholders(env, 'liquid', liquidPattern, function (match) {
		var tagMatch = /^\{%-?\s*(\w+)/.exec(match);
		if (tagMatch) {
			var tag = tagMatch[1];
			if (tag === 'raw' && !insideRaw) {
				insideRaw = true;
				return true;
			} else if (tag === 'endraw') {
				insideRaw = false;
				return true;
			}
		}

		return !insideRaw;
	});
});

Prism.hooks.add('after-tokenize', function (env) {
	Prism.languages['markup-templating'].tokenizePlaceholders(env, 'liquid');
});
