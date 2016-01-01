import test from 'tape';

function convertDisplayValue(displayVal) {
    if (displayVal instanceof Array) {
      return `[${displayVal.map(convertDisplayValue).join(', ')}]`;
    } else if (typeof displayVal === 'string') {
      return `"${displayVal}"`;
    }
    return '' + displayVal;
  }

test('output display', (t) => {
  t.plan(2);

  let displayVal = ['1', 2, [3, '4']];
  t.equal(convertDisplayValue(displayVal), '["1", 2, [3, "4"]]');

  displayVal = [true, false, 1, '3', [4, '5', [6, '7'], false]];
  console.log(convertDisplayValue(displayVal));
  t.equal(convertDisplayValue(displayVal),
    '[true, false, 1, "3", [4, "5", [6, "7"], false]]');
});
