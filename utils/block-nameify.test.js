const blockNameify = require('./block-nameify');
// @ponicode
describe('blockNameify.blockNameify', () => {
  test('0', () => {
    let result = blockNameify.blockNameify(
      "I'll reboot the neural SMTP pixel, that should transmitter the SDD monitor!"
    );
    expect(result).toBe(
      "I'll reboot the neural SMTP pixel, that should transmitter the SDD monitor!"
    );
  });

  test('1', () => {
    let result = blockNameify.blockNameify(
      "I'll reboot the neural SMTP pixel, that should transmitter the SDD monitor!!-"
    );
    expect(result).toBe(
      "I'll reboot the neural SMTP pixel, that should transmitter the SDD monitor!! "
    );
  });

  test('2', () => {
    let result = blockNameify.blockNameify('');
    expect(result).toBe('');
  });
});
