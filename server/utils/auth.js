import assign from 'object.assign';

const providerHash = {
  facebook: ({ id }) => id,
  twitter: ({ username }) => username,
  linkedin({ _json }) {
    return _json && _json.publicProfileUrl || null;
  },
  google: ({ id }) => id
};

export function getUsernameFromProvider(provider, profile) {
  console.log(profile);
  return typeof providerHash[provider] === 'function' ?
    providerHash[provider](profile) :
    null;
}

// using es6 argument destructing
export function setProfileFromGithub(
  user,
  {
    profileUrl: githubURL,
    username
  },
  {
    id: githubId,
    'avatar_url': picture,
    email: githubEmail,
    'created_at': joinedGithubOn,
    blog: website,
    location,
    name
  }
) {
  return assign(
    user,
    { isGithubCool: true, isMigrationGrandfathered: false },
    {
      name,
      username: username.toLowerCase(),
      location,
      joinedGithubOn,
      website,
      picture,
      githubId,
      githubURL,
      githubEmail,
      githubProfile: githubURL
    }
  );
}

export function getFirstImageFromProfile(profile) {
  return profile && profile.photos && profile.photos[0] ?
    profile.photos[0].value :
    null;
}

export function getSocialProvider(provider) {
  return provider.split('-')[0];
}
