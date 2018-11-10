const rateLimiter = (delay) => {
  return new Promise(resolve => setTimeout(() => resolve(true), delay));
};

module.exports = { rateLimiter };
