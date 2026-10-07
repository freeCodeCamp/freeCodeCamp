import rc from 'rc';

export default function registryUrl(scope) {
	const result = rc('npm', {registry: 'https://registry.npmjs.org/'});
	const url = result[`${scope}:registry`] || result.config_registry || result.registry;
	return url.slice(-1) === '/' ? url : `${url}/`;
}
