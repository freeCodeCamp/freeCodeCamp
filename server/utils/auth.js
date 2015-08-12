import assign from 'object.assign';

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
