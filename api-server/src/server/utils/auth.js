const githubRegex = /github/i;
const providerHash = {
  facebook: ({ id }) => id,
  github: ({ username }) => username,
  twitter: ({ username }) => username,
  linkedin({ _json }) {
    return (_json && _json.publicProfileUrl) || null;
  },
  google: ({ id }) => id
};

export function getUsernameFromProvider(provider, profile) {
  return typeof providerHash[provider] === 'function'
    ? providerHash[provider](profile)
    : null;
}

// createProfileAttributes(provider: String, profile: {}) => Object
export function createUserUpdatesFromProfile(provider, profile) {
  if (githubRegex.test(provider)) {
    return createProfileAttributesFromGithub(profile);
  }
  return {
    [getSocialProvider(provider)]: getUsernameFromProvider(
      getSocialProvider(provider),
      profile
    )
  };
}
// createProfileAttributes(profile) => profileUpdate
function createProfileAttributesFromGithub(profile) {
  const {
    profileUrl: githubProfile,
    username,
    _json: { avatar_url: picture, blog: website, location, bio, name } = {}
  } = profile;
  return {
    name,
    username: username.toLowerCase(),
    location,
    bio,
    website,
    picture,
    githubProfile
  };
}

export function getSocialProvider(provider) {
  return provider.split('-')[0];
}
