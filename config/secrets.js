module.exports = {

  db: process.env.MONGODB || process.env.MONGOHQ_URL,

  sessionSecret: process.env.SESSION_SECRET,

  trello: {
    key: process.env.TRELLO_KEY,
    secret: process.env.TRELLO_SECRET
  },

  blogger: {
    key: process.env.BLOGGER_KEY
  },

  mandrill: {
    user: process.env.MANDRILL_USER,
    password: process.env.MANDRILL_PASSWORD
  }
};
