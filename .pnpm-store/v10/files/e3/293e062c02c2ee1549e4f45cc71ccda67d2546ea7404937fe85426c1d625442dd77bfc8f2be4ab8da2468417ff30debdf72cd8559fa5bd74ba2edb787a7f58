module.exports = {
	type: 'object',
	properties: {
		'public': {
			type: 'string'
		},
		'cleanUrls': {
			type: [
				'boolean',
				'array'
			]
		},
		'rewrites': {
			type: 'array'
		},
		'redirects': {
			type: 'array'
		},
		'headers': {
			type: 'array',
			maxItems: 50,
			minItems: 1,
			uniqueItems: true,
			items: {
				type: 'object',
				required: ['source', 'headers'],
				properties: {
					source: {
						type: 'string',
						maxLength: 100,
						minLength: 1
					},
					headers: {
						type: 'array',
						maxItems: 50,
						minItems: 1,
						uniqueItems: true,
						items: {
							type: 'object',
							required: ['key', 'value'],
							properties: {
								key: {
									type: 'string',
									minLength: 1,
									maxLength: 128,
									pattern: "^[a-zA-Z0-9_!#$%&'*+.^`|~-]+$"
								},
								value: {
									type: 'string',
									minLength: 1,
									maxLength: 2048,
									pattern: "^[a-zA-Z0-9_!#$%&'*+.;/:, =^`|~-]+$"
								}
							},
							additionalProperties: false
						}
					}
				},
				additionalProperties: false
			}
		},
		'directoryListing': {
			type: [
				'boolean',
				'array'
			]
		},
		'unlisted': {
			type: 'array'
		},
		'trailingSlash': {
			type: 'boolean'
		},
		'renderSingle': {
			type: 'boolean'
		}
	},
	additionalProperties: false
};
