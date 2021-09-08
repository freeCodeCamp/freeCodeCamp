const isAudited = require('./is-audited');
// @ponicode
describe('isAudited.isAuditedCert', () => {
  test('0', () => {
    let callFunction = () => {
      isAudited.isAuditedCert(NaN, NaN);
    };

    expect(callFunction).toThrow(
      'Both arguments must be provided for auditing'
    );
  });

  test('1', () => {
    let callFunction = () => {
      isAudited.isAuditedCert('english', null);
    };

    expect(callFunction).toThrow(
      'Both arguments must be provided for auditing'
    );
  });

  test('2', () => {
    let result = isAudited.isAuditedCert('english', '!Lov3MyPianoPony');
    expect(result).toBe(true);
  });
});
