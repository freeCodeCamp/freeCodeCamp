---
title: Sudoku
---
# Sudoku

---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```javascript
function solveSudoku(puzzle) {
  var solution;

  class DoX {
    constructor(V, H) {
      this.V = V;
      this.L = this;
      this.R = this;
      this.U = this;
      this.D = this;
      this.S = 1;
      this.H = H || this;
      H && (H.S += 1);
    }
  }

  const addRight = (e, n) => {
    n.R = e.R;
    n.L = e;
    e.R.L = n;
    return e.R = n;
  };

  const addBelow = (e, n) => {
    n.D = e.D;
    n.U = e;
    e.D.U = n;
    return e.D = n;
  };

  const search = function(h, s) {
    if (h.R == h) {
      printSol(s);
    } else {
      let c = chooseColumn(h);
      cover(c);
      for (let r = c.D; r != c; r = r.D) {
        s.push(r);
        for (let j = r.R; r != j; j = j.R) {
          cover(j.H);
        }
        search(h, s);
        r = s.pop();
        for (let j = r.R; j != r; j = j.R) {
          uncover(j.H);
        }
      }
      uncover(c);
    }
  };

  const chooseColumn = h => {
    let s = Number.POSITIVE_INFINITY;
    let c = h;
    for (let j = h.R; j != h; j = j.R) {
      if (j.S < s) {
        c = j;
        s = j.S;
      }
    }
    return c;
  };

  const cover = c => {
    c.L.R = c.R;
    c.R.L = c.L;
    for (let i = c.D; i != c; i = i.D) {
      for (let j = i.R; j != i; j = j.R) {
        j.U.D = j.D;
        j.D.U = j.U;
        j.H.S = j.H.S - 1;
      }
    }
  };

  const uncover = c => {
    for (let i = c.U; i != c; i = i.U) {
      for (let j = i.L; i != j; j = j.L) {
        j.H.S = j.H.S + 1;
        j.U.D = j;
        j.D.U = j;
      }
    }
    c.L.R = c;
    c.R.L = c;
  };

  const printSol = a => {
    solution = a.reduce((p, c) => {
      let [i, v] = c.V.split(':');
      p[i * 1] = v;
      return p;
    }, new Array(a.length).fill('.'));
  };

  const gridMeta = s => {
    const g = s.split('');
    const cellCount = g.length;
    const tokenCount = Math.sqrt(cellCount);
    const N = Math.sqrt(tokenCount);
    const g2D = g.map(e => isNaN(e * 1) ?
      new Array(tokenCount).fill(1).map((_, i) => i + 1) : [e * 1]);
    return [cellCount, N, tokenCount, g2D];
  };

  const indexesN = n => i => {
    let c = Math.floor(i / (n * n));
    i %= n * n;
    return [c, i, Math.floor(c / n) * n + Math.floor(i / n)];
  };

  const reduceGrid = puzString => {

    const [
      numCells, // The total number of cells in a grid (81 for a 9x9 grid)
      N, // the 'n' value of the grid. (3 for a 9x9 grid)
      U, // The total number of unique tokens to be placed.
      g2D // A 2D array representation of the grid, with each element
      // being an array of candidates for a cell. Known cells are
      // single element arrays.
    ] = gridMeta(puzString);

    const getIndex = indexesN(N);

    const headRow = new Array(4 * numCells)
      .fill('')
      .map((_, i) => new DoX(`H${i}`));

    let H = new DoX('ROOT');
    headRow.reduce((p, c) => addRight(p, c), H);

    for (let i = 0; i < numCells; i++) {
      const [ri, ci, bi] = getIndex(i);
      g2D[i].forEach(num => {
        let id = `${i}:${num}`;
        let candIdx = num - 1;

        // The 4 columns that we will populate.
        const A = headRow[i];
        const B = headRow[numCells + candIdx + (ri * U)];
        const C = headRow[(numCells * 2) + candIdx + (ci * U)];
        const D = headRow[(numCells * 3) + candIdx + (bi * U)];

        // The Row-Column Constraint
        let rcc = addBelow(A.U, new DoX(id, A));

        // The Row-Number Constraint
        let rnc = addBelow(B.U, addRight(rcc, new DoX(id, B)));

        // The Column-Number Constraint
        let cnc = addBelow(C.U, addRight(rnc, new DoX(id, C)));

        // The Block-Number Constraint
        addBelow(D.U, addRight(cnc, new DoX(id, D)));
      });
    }
    search(H, []);
  };

  var stringPuzzle = "";

  for (var i = 0; i < puzzle.length; i++) {
    puzzle[i].forEach(function(e) {
      if (e == -1)
        stringPuzzle += ".";
      else
        stringPuzzle += e;
    })
  }

  reduceGrid(stringPuzzle)

  var result = [];

  for (var i = 0; i < 9; i++) {
    result.push(solution.slice(i * 9, (i + 1) * 9).map(e => parseInt(e)))
  }

  return result;
}
```

</details>