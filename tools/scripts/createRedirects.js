//constant 
const apiPlaceholderRE = /#\{\{API\}\}/g;
const homePlaceholderRE = /#\{\{HOME\}\}/g;
const forumPlacehilderRE = /#\{\{FORUM\}\}/g;
const forumProxyPlaceholderRE = /#\{\{FORUM_PROXY\}\}/g;

exports.createRedirects = function createRedirects(locations) {
  const { api, home, forum, forumProxy } = locations;

  if (!(api && home && forum && forumProxy)) {
    throw new Error(`One or more locations are missing, all are required.

    api: ${api}
    home: ${home}
    forum: ${forum}
    forumProxy: ${forumProxy}

    `);
  }

  return template
    .replace(apiPlaceholderRE, api)
    .replace(homePlaceholderRE, home)
    .replace(forumPlacehilderRE, forum)
    .replace(forumProxyPlaceholderRE, forumProxy);
};

/* eslint-disable max-len */
const template = `#api redirect

/internal/*                                   #{{API}}/internal/:splat

# auth redirects
/signup                                       /signin 301
/email-signin                                 /signin 301
/login                                        /signin 301
/deprecated-signin                            /signin 301
/logout                                       /signout 301
/passwordless-change                          /confirm-email 301

# certification redirects
/:username/front-end-certification            /certification/:username/legacy-front-end 301
/:username/data-visualization-certification   /certification/:username/legacy-data-visualization 301
/:username/back-end-certification             /certification/:username/legacy-back-end 301
/:username/full-stack-certification           /certification/:username/full-stack 301

# unsunscribe redirects
/u/*                                          #{{API}}/u/:splat
/unsunscribe/*                                #{{API}}/unsunscribe/:splat
/ue/*                                         #{{API}}/ue/:splat

# misc redirects
/agile                                        / 200
/chat                                         https://gitter.im/FreeCodeCamp/FreeCodeCamp 301
/twitch                                       https://twitch.tv/freecodecamp 301
/nonprofits-form                              / 200
/pmi-acp-agile-project-managers               / 200
/pmi-acp-agile-project-managers-form          / 200
/stories                                      / 200
/all-stories                                  / 200
/field-guide/*                                #{{FORUM}} 301
/learn-to-code                                /learn 200
/map                                          /learn 200
/forum/*                                      #{{FORUM_PROXY}} 200
/privacy                                      #{{HOME}}/forum/t/free-code-camp-privacy-policy/19545 301
/nonprofit-project-instructions               #{{HOME}}/forum/t/how-free-code-camps-nonprofits-projects-work/19547 301
/how-nonprofit-projects-work                  https://medium.freecodecamp.org/open-source-for-good-1a0ea9f32d5a 301

`;
/* eslint-enable max-len */
