const providerHash = {
  facebook: ({ id }) => id,
  twitter: ({ username }) => username,
  linkedin({ _json }) {
    return _json && _json.publicProfileUrl || null;
  },
  google: ({ id }) => id
};

import request from 'request';

export function getUsernameFromProvider(provider, profile) {
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
    avatar_url: picture,
    email: githubEmail,
    created_at: joinedGithubOn,
    blog: website,
    location,
    bio,
    name
  }
) {
  return Object.assign(
    user,
    {
      name,
      email: user.email || githubEmail,
      username: username.toLowerCase(),
      location,
      bio,
      joinedGithubOn,
      website,
      isGithubCool: true,
      picture,
      githubId,
      githubURL,
      githubEmail,
      githubProfile: githubURL
    }
  );
}

export function setProfileFromRepoAccess(
  user,
  {
    profileUrl: githubURL,
    username
  },
  {
    id: githubId,
    avatar_url: picture,
    email: githubEmail,
    created_at: joinedGithubOn,
    blog: website,
    location,
    bio,
    name
  }
) {
  return Object.assign(
    user,
    {
      name,
      email: user.email || githubEmail,
      username: username.toLowerCase(),
      location,
      bio,
      joinedGithubOn,
      website,
      isGithubCool: true,
      isGithubRepoCool: true,
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

export function checkRepoAccess(token, callback) {
  const authToken = 'token ' + token;
  request({
      url: 'https://api.github.com/orgs/FreeCodeCamp',
      method: 'GET',
      headers: {
          Authorization: authToken,
          'user-agent': 'FreeCodeCamp-Export'
      }
  }, function(error, response) {
      const access = response.headers['x-oauth-scopes'].split(',');
      let returnBool = false;
      for (let i = 0; i < access.length; i++) {
        if (access[i] === 'repo') {
          returnBool = true;
        }
      }

      callback(returnBool);
  });
}

export function getSocialProvider(provider) {
  return provider.split('-')[0];
}
