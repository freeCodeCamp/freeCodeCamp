const rateLimit = require("express-rate-limit");

const limitHandler = (req, res) => {
  console.log('handler activated'); // Why does this never fire?
  res
    .status(429)
    .json({
      status: 'bad',
      message: ''
    }
  );
};

const rateLimitOptions = {
  windowMs: 5 * 60 * 1000, // 5 minutes
  max: 10,
  message: 'rate limit activated',
  handler: limitHandler,
  onLimitReached: limitHandler
};

const reqLimiter = rateLimit(rateLimitOptions);

module.exports = { reqLimiter };