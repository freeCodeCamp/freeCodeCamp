function romanToInt(str) {
  const romanMap = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};
  let i = 0, num = 0;
  while (i < str.length) {
    if (i + 1 < str.length && romanMap[str.slice(i, i+2)]) {
      num += romanMap[str.slice(i, i+2)];
      i += 2;
    } else {
      num += romanMap[str[i]];
      i++;
    }
  }
  return num;
}

function intToMinimalRoman(num) {
  const map = [
    ['M', 1000], ['CM', 900], ['D', 500], ['CD', 400],
    ['C', 100], ['XC', 90], ['L', 50], ['XL', 40],
    ['X', 10], ['IX', 9], ['V', 5], ['IV', 4], ['I', 1]
  ];
  let result = '';
  for (const [roman, val] of map) {
    while (num >= val) {
      result += roman;
      num -= val;
    }
  }
  return result;
}

function romanNumerals(arr) {
  return arr.reduce((acc, roman) => {
    const value = romanToInt(roman);
    const minimal = intToMinimalRoman(value);
    return acc + (roman.length - minimal.length);
  }, 0);
}
const _testNumerals1 = ['XIIIIII', 'XVI', 'MMMCCLXVIIII', 'XXXXVI', 'MMMMXX', 'CCLI', 'CCCCXX', 'MMMMDCXXXXI', 'DCCCCIIII', 'MXVIIII'];
console.log(romanNumerals(_testNumerals1)); // should print 21
