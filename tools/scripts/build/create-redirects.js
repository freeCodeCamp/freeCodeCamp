const apiPlaceholderRE = /#\{\{API\}\}/g;
const newsPlaceholderRE = /#\{\{NEWS\}\}/g;
const forumPlacehilderRE = /#\{\{FORUM\}\}/g;

exports.createRedirects = function createRedirects(locations) {
  const { api, news, forum } = locations;

  if (!(api && news && forum)) {
    throw new Error(`One or more locations are missing, all are required.

    api: ${api}
    news: ${news}
    forum: ${forum}

    `);
  }

  return template
    .replace(apiPlaceholderRE, api)
    .replace(newsPlaceholderRE, news)
    .replace(forumPlacehilderRE, forum);
};

/* eslint-disable max-len */
const template = `#api redirect

# client-route proxy
/internal/*                                   #{{API}}/internal/:splat 200

# applications
/news/*                                       #{{NEWS}}/:splat 200
/forum/*                                      #{{FORUM}}/:splat 200

# pages
/about                                        #{{NEWS}}/about
/terms-of-service                             #{{NEWS}}/terms-of-service
/terms                                        #{{NEWS}}/terms-of-service
/academic-honesty                             #{{NEWS}}/academic-honesty
/code-of-conduct                              #{{NEWS}}/code-of-conduct
/privacy-policy                               #{{NEWS}}/privacy-policy
/privacy                                      #{{NEWS}}/privacy-policy

# auth redirects
/signin                                       #{{API}}/signin 200
/signup                                       #{{API}}/signin 200
/email-signin                                 #{{API}}/signin 200
/login                                        #{{API}}/signin 200
/deprecated-signin                            #{{API}}/signin 200
/logout                                       #{{API}}/signout 200
/passwordless-change                          #{{API}}/confirm-email 200

# certification redirects
/:username/front-end-certification            /certification/:username/legacy-front-end 301
/:username/data-visualization-certification   /certification/:username/legacy-data-visualization 301
/:username/back-end-certification             /certification/:username/legacy-back-end 301
/:username/full-stack-certification           /certification/:username/full-stack 301

# unsunscribe redirects
/u/*                                          #{{API}}/u/:splat 200
/unsunscribe/*                                #{{API}}/unsunscribe/:splat 200
/ue/*                                         #{{API}}/ue/:splat 200

# misc redirects
/agile                                        / 301
/chat                                         https://gitter.im/FreeCodeCamp/FreeCodeCamp 301
/twitch                                       https://twitch.tv/freecodecamp 301
/nonprofits-form                              / 301
/nonprofits                                   / 301
/Nonprofits                                   / 301
/pmi-acp-agile-project-managers               / 301
/pmi-acp-agile-project-managers-form          / 301
/stories                                      / 301
/all-stories                                  / 301
/field-guide/*                                / 301
/learn-to-code                                /learn 301
/map                                          /learn 200
/nonprofit-project-instructions               / 301
/how-nonprofit-projects-work                  / 301

`;
/* eslint-enable max-len */
