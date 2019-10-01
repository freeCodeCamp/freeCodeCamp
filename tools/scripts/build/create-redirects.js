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
const template = `
#
# WARNING: The order of this list is very important.
#

#api redirect
/internal/*                                   #{{API}}/internal/:splat 200

# pages
/about                                        #{{NEWS}}/about 200
/academic-honesty                             #{{NEWS}}/academic-honesty 200
/code-of-conduct                              #{{NEWS}}/code-of-conduct 200
/copyright                                    #{{NEWS}}/copyright-policy 200
/copyright-policy                             #{{NEWS}}/copyright-policy 200
/privacy                                      #{{NEWS}}/privacy-policy 200
/privacy-policy                               #{{NEWS}}/privacy-policy 200
/shop                                         #{{NEWS}}/shop 200
/software-resources-for-nonprofits            #{{NEWS}}/software-resources-for-nonprofits 200
/sponsors                                     #{{NEWS}}/sponsors 200
/support                                      #{{NEWS}}/support 200
/terms                                        #{{NEWS}}/terms-of-service 200
/terms-of-service                             #{{NEWS}}/terms-of-service 200

# applications
/forum/*                                      #{{FORUM}}/:splat 200
/news                                         #{{NEWS}}/ 200
/news/*                                       #{{NEWS}}/:splat 200

# auth redirects
/deprecated-signin                            #{{API}}/signin 200
/email-signin                                 #{{API}}/signin 200
/login                                        #{{API}}/signin 200
/logout                                       #{{API}}/signout 200
/passwordless-change                          #{{API}}/confirm-email 200
/signin                                       #{{API}}/signin 200
/signup                                       #{{API}}/signin 200

# certification redirects
/:username/front-end-certification            /certification/:username/legacy-front-end 301
/:username/data-visualization-certification   /certification/:username/legacy-data-visualization 301
/:username/back-end-certification             /certification/:username/legacy-back-end 301
/:username/full-stack-certification           /certification/:username/full-stack 301

# unsubscribe redirects
/u/*                                          #{{API}}/u/:splat 200
/ue/*                                         #{{API}}/ue/:splat 200
/unsubscribe/*                                #{{API}}/unsubscribe/:splat 200

# misc redirects
/agile                                        / 301
/all-stories                                  / 301
/chat                                         https://gitter.im/FreeCodeCamp/FreeCodeCamp 301
/field-guide/*                                / 301
/how-nonprofit-projects-work                  / 301
/learn-to-code                                /learn 301
/map                                          /learn 200
/nonprofit-project-instructions               / 301
/Nonprofits                                   / 301
/nonprofits                                   / 301
/nonprofits-form                              / 301
/pmi-acp-agile-project-managers               / 301
/pmi-acp-agile-project-managers-form          / 301
/stories                                      / 301
/twitch                                       https://twitch.tv/freecodecamp 301
/welcome                                      / 200

`;
/* eslint-enable max-len */
