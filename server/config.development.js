module.exports = {
  host: '127.0.0.1',
  sessionSecret: process.env.SESSION_SECRET,

  trello: {
    key: process.env.TRELLO_KEY,
    secret: process.env.TRELLO_SECRET
  },

  blogger: {
    key: process.env.BLOGGER_KEY
  },

  github: {
    clientID: process.env.GITHUB_ID,
    clientSecret: process.env.GITHUB_SECRET
  }
};
