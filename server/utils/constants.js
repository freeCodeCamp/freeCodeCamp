let alphabet = '';

for (let i = 0; i < 26; i++) {
  alphabet = alphabet.concat(String.fromCharCode(97 + i));
}

export const blacklistedUsernames = [
  ...alphabet.split(''),
  'about',
  'academic-honesty',
  'account',
  'agile',
  'all-stories',
  'api',
  'backend-challenge-completed',
  'bonfire',
  'cats.json',
  'challenge',
  'challenge-completed',
  'challenges',
  'chat',
  'coding-bootcamp-cost-calculator',
  'completed-bonfire',
  'completed-challenge',
  'completed-field-guide',
  'completed-zipline-or-basejump',
  'donate',
  'events',
  'explorer',
  'external',
  'field-guide',
  'forgot',
  'forum',
  'get-help',
  'get-help',
  'get-pai',
  'guide',
  'how-nonprofit-projects-work',
  'internal',
  'jobs',
  'jobs-form',
  'learn-to-code',
  'login',
  'logout',
  'map',
  'modern-challenge-completed',
  'news',
  'nonprofits',
  'nonproifts-form',
  'open-api',
  'pmi-acp-agile-project-managers',
  'pmi-acp-agile-project-managers-form',
  'privacy',
  'privacy',
  'project-completed',
  'reset',
  'services',
  'signin',
  'signout',
  'sitemap.xml',
  'software-resources-for-nonprofits',
  'status',
  'stories',
  'terms',
  'the-fastest-web-page-on-the-internet',
  'twitch',
  'unsubscribe',
  'unsubscribed',
  'update-my-portfolio',
  'update-my-profile-ui',
  'update-my-projects',
  'update-my-theme',
  'update-my-username',
  'user',
  'wiki'
];
