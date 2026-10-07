const Username = {
	type: 'string',
	minLength: 1,
	maxLength: 48,
	pattern: '^[a-z][a-z0-9_-]*$'
};

const Name = {
	type: 'string',
	minLength: 1,
	maxLength: 32
};

const Avatar = {
	type: 'string',
	minLength: 40,
	maxLength: 40,
	pattern: '^[0-9a-f]+$'
};

const DefaultDeploymentDomain = {
	type: 'string'
};

const User = {
	type: 'object',
	additionalProperties: false,
	properties: {
		username: Username,
		name: Name,
		billingChecked: {type: 'boolean'},
		avatar: Avatar,
		defaultDeploymentDomain: DefaultDeploymentDomain
	}
};

module.exports = {
	User,
	Username,
	Name,
	Avatar,
	DefaultDeploymentDomain
};
