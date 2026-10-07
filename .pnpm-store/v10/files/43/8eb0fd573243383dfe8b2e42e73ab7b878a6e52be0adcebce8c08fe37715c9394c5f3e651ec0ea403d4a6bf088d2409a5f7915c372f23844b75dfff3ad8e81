const {EnvKeys, EnvObject} = require('./config-env');
const staticSchema = require('./config-static');

module.exports = {
	type: 'object',
	additionalProperties: false,
	dependencies: {
		slot: {
			type: 'object',
			required: ['features'],
			properties: {
				 features: {
					 type: 'object',
					 required: ['cloud'],
					 properties: {
						 cloud: {
							 'const': 'v2'
						 }
					 }
				 }
			 }
		 }
	},
	properties: {
		'name': {
			type: 'string',
			minLength: 1
		},
		'alias': {
			type: [
				'string',
				'array'
			]
		},
		'env': { anyOf: [EnvObject, EnvKeys] },
		'build': {
			type: 'object',
			additionalProperties: false,
			properties: {
				env: EnvObject
			}
		},
		'scale': {
			type: 'object',
			patternProperties: {
				'.+': {
					type: 'object',
					required: ['max', 'min'],
					properties: {
						max: {
							anyOf: [
								{
									type: 'number',
									minimum: 1
								},
								{'const': 'auto'}
							]
						},
						min: {
							type: 'number',
							minimum: 0
						}
					}
				}
			},
			additionalProperties: false
		},
		'regions': {
			type: 'array'
		},
		'dotenv': {
			type: [
				'boolean',
				'string'
			]
		},
		'files': {
			type: 'array'
		},
		'type': {
			type: 'string'
		},
		'forwardNpm': {
			type: 'boolean'
		},
		'public': {
			type: 'boolean'
		},
		'engines': {
			type: 'object'
		},
		'api': {
			type: 'string'
		},
		'static': staticSchema,
		'limits': {
			type: 'object',
			properties: {
				duration: {
					type: 'number',
					minimum: 60000,
					maximum: 60000 * 15 // max 15m runtime
				},
				maxConcurrentReqs: {
					type: 'number',
					minimum: 1,
					maximum: 256
				},
				timeout: {
					type: 'number',
					minimum: 60000,
					maximum: 60000 * 15 // max duration
				}
			},
			additionalProperties: false
		},
		'features': {
			type: 'object',
			patternProperties: {
				'.*': {
					type: ['string', 'number', 'boolean']
				}
			}
		},
		'github': {
			type: 'object',
			properties: {
				enabled: {
					type: 'boolean'
				},
				aliasing: {
					type: 'boolean'
				},
				autoAlias: {
					type: 'boolean'
				}
			},
			additionalProperties: false
		},
		'slot': {
			type: 'string',
			pattern: 'c.125-m512|c1-m4096|staging-*'
		}
	}
};
