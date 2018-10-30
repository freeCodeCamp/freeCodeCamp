module.exports = function btoa(str) {
  return new Buffer(str).toString('base64')
}
