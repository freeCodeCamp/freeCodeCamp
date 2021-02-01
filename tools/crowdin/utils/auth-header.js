require('dotenv').config();

const authHeader = {
  Authorization: `Bearer ${process.env.CROWDIN_PERSONAL_TOKEN}`
};

module.exports = authHeader;
