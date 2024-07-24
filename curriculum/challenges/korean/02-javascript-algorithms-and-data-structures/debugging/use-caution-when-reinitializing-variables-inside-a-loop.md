---
id: 587d7b86367417b2b2512b3c
title: 반복문 내부의 변수를 초기화할 때 주의하기
challengeType: 1
forumTopicId: 301194
dashedName: use-caution-when-reinitializing-variables-inside-a-loop
---

# --description--

반복문 안에서 정보를 저장하거나 카운터를 늘리거나 변수를 다시 설정해야 하는 경우가 있습니다. 잠재적인 문제는 변수를 다시 초기화해야 하는데 그렇게 하지 않은 경우 또는 그 반대의 경우입니다. 종료 조건에 사용 중인 변수를 실수로 재설정하여 무한 루프를 유발하는 경우에 특히 위험합니다.

`console.log()`를 사용하여 루프의 각 주기마다 변수 값을 출력하면 변수를 재설정하거나 재설정하지 않는 것와 관련된 버그가 있는 동작을 발견할 수 있습니다.

# --instructions--

다음 함수는 `m`개의 행과 `n`개의 열로 구성된 0으로 채워진 2차원 배열을 생성해야 합니다. 안타깝게도 바깥에 있는 루프에서 `row` 변수가 다시 초기화(빈 배열로 다시 설정) 되지 않아 출력 기대값을 생성하지 못하고 있습니다. `[[0, 0], [0, 0], [0, 0]]`와 같이 올바른 0의 3x2 배열을 반환하도록 코드를 수정합니다.

# --hints--

코드에서 `matrix` 변수를 각각 2개 열로 구성된 3행을 갖는 0으로 채워진 배열로 설정해야 합니다.

```js
assert(JSON.stringify(matrix) == '[[0,0],[0,0],[0,0]]');
```

`matrix` 변수는 3개의 행이 있어야 합니다.

```js
assert(matrix.length == 3);
```

`matrix` 변수는 각 행당 2개의 열이 있어야 합니다.

```js
assert(
  matrix[0].length == 2 && matrix[1].length === 2 && matrix[2].length === 2
);
```

`zeroArray(4,3)`는 각각 0이 3개 열로 구성된 4개의 행을 포함하는 배열을 반환해야 합니다.

```js
assert(JSON.stringify(zeroArray(4,3)) == '[[0,0,0],[0,0,0],[0,0,0],[0,0,0]]');
```

# --seed--

## --seed-contents--

```js
function zeroArray(m, n) {
  // Creates a 2-D array with m rows and n columns of zeroes
  let newArray = [];
  let row = [];
  for (let i = 0; i < m; i++) {
    // Adds the m-th row into newArray

    for (let j = 0; j < n; j++) {
      // Pushes n zeroes into the current row to create the columns
      row.push(0);
    }
    // Pushes the current row, which now has n zeroes in it, to the array
    newArray.push(row);
  }
  return newArray;
}

let matrix = zeroArray(3, 2);
console.log(matrix);

```

# --solutions--

```js
function zeroArray(m, n) {
 // Creates a 2-D array with m rows and n columns of zeroes
 let newArray = [];
 for (let i = 0; i < m; i++) {
   let row = [];
   // Adds the m-th row into newArray

   for (let j = 0; j < n; j++) {
     // Pushes n zeroes into the current row to create the columns
     row.push(0);
   }
   // Pushes the current row, which now has n zeroes in it, to the array
   newArray.push(row);
 }
 return newArray;
}

let matrix = zeroArray(3, 2);
console.log(matrix);

```
