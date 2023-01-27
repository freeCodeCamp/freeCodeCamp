---
id: 5900f3cc1000cf542c50fedf
title: 'Problema 96: Su Doku'
challengeType: 1
forumTopicId: 302213
dashedName: problem-96-su-doku
---

# --description--

Su Doku (in giapponese significa *posto del numero*) è il nome dato a un popolare tipo di puzzle. La sua origine non è chiara, ma il merito deve essere attribuito a Leonhard Euler che ha inventato un'idea di puzzle simile e molto più complicata chiamata Quadrati Latini. L'obiettivo del puzzle Su Doku, tuttavia, è quello di sostituire gli spazi vuoti (o zero) in una griglia 9 per 9 in modo che ogni riga, colonna e casella 3 per 3 contengano ciascuna delle cifre da 1 a 9. Di seguito è riportato un esempio di una tipica griglia puzzle iniziale e la sua griglia di soluzione.

<div style="margin: auto; background-color: white; padding: 10px; width: 80%; text-align: center;">
  <table border="0" cellpadding="0" cellspacing="0" align="center">
    <tbody>
      <tr>
        <td>
          <table cellpadding="5" cellspacing="0" border="1">
            <tbody>
              <tr>
                <td style="font-family:'courier new';font-size:14pt; color: black; padding: 5px; border: 2px solid black;">
                  0 0 3<br />9 0 0<br />0 0 1
                </td>
                <td style="font-family:'courier new';font-size:14pt; color: black; padding: 5px; border: 2px solid black;">
                  0 2 0<br />3 0 5<br />8 0 6
                </td>
                <td style="font-family:'courier new';font-size:14pt; color: black; padding: 5px; border: 2px solid black;">
                  6 0 0<br />0 0 1<br />4 0 0
                </td>
              </tr>
              <tr>
                <td style="font-family:'courier new';font-size:14pt; color: black; padding: 5px; border: 2px solid black;">
                  0 0 8<br />7 0 0<br />0 0 6
                </td>
                <td style="font-family:'courier new';font-size:14pt; color: black; padding: 5px; border: 2px solid black;">
                  1 0 2<br />0 0 0<br />7 0 8
                </td>
                <td style="font-family:'courier new';font-size:14pt; color: black; padding: 5px; border: 2px solid black;">
                  9 0 0<br />0 0 8<br />2 0 0
                </td>
              </tr>
              <tr>
                <td style="font-family:'courier new';font-size:14pt; color: black; padding: 5px; border: 2px solid black;">
                  0 0 2<br />8 0 0<br />0 0 5
                </td>
                <td style="font-family:'courier new';font-size:14pt; color: black; padding: 5px; border: 2px solid black;">
                  6 0 9<br />2 0 3<br />0 1 0
                </td>
                <td style="font-family:'courier new';font-size:14pt; color: black; padding: 5px; border: 2px solid black;">
                  5 0 0<br />0 0 9<br />3 0 0
                </td>
              </tr>
            </tbody>
          </table>
        </td>
        <td width="50">
          <img src="images/spacer.gif" width="50" height="1" alt="" /><br />
        </td>
        <td>
          <table cellpadding="5" cellspacing="0" border="1">
            <tbody>
              <tr>
                <td style="font-family:'courier new';font-size:14pt; color: black; padding: 5px; border: 2px solid black;">
                  4 8 3<br />9 6 7<br />2 5 1
                </td>
                <td style="font-family:'courier new';font-size:14pt; color: black; padding: 5px; border: 2px solid black;">
                  9 2 1<br />3 4 5<br />8 7 6
                </td>
                <td style="font-family:'courier new';font-size:14pt; color: black; padding: 5px; border: 2px solid black;">
                  6 5 7<br />8 2 1<br />4 9 3
                </td>
              </tr>
              <tr>
                <td style="font-family:'courier new';font-size:14pt; color: black; padding: 5px; border: 2px solid black;">
                  5 4 8<br />7 2 9<br />1 3 6
                </td>
                <td style="font-family:'courier new';font-size:14pt; color: black; padding: 5px; border: 2px solid black;">
                  1 3 2<br />5 6 4<br />7 9 8
                </td>
                <td style="font-family:'courier new';font-size:14pt; color: black; padding: 5px; border: 2px solid black;">
                  9 7 6<br />1 3 8<br />2 4 5
                </td>
              </tr>
              <tr>
                <td style="font-family:'courier new';font-size:14pt; color: black; padding: 5px; border: 2px solid black;">
                  3 7 2<br />8 1 4<br />6 9 5
                </td>
                <td style="font-family:'courier new';font-size:14pt; color: black; padding: 5px; border: 2px solid black;">
                  6 8 9<br />2 5 3<br />4 1 7
                </td>
                <td style="font-family:'courier new';font-size:14pt; color: black; padding: 5px; border: 2px solid black;">
                  5 1 4<br />7 6 9<br />3 8 2
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </table>
</div>

Un puzzle Su Doku ben costruito ha una soluzione unica e può essere risolto con la logica, anche se può essere necessario utilizzare metodi "tenta e prova" per eliminare le opzioni (ci sono molti pareri discordanti su questo). La complessità della ricerca determina la difficoltà del puzzle; l'esempio di cui sopra è considerato facile perché può essere risolto con deduzione diretta in avanti.

L'array `puzzlesArr` contiene diverse stringhe di puzzle Su Doku che variano in difficoltà, ma tutte con soluzioni uniche.

Risolvendo tutti i puzzle in `puzzlesArr`, trova la somma dei numeri a 3 cifre trovati nell'angolo in alto a sinistra di ogni griglia di soluzione; ad esempio, 483 è il numero a 3 cifre trovato nell'angolo in alto a sinistra della griglia della soluzione sopra.

# --hints--

`suDoku(testPuzzles1)` dovrebbe restituire un numero.

```js
assert(typeof suDoku(_testPuzzles1) === 'number');
```

`suDoku(testPuzzles1)` dovrebbe restituire `1190`.

```js
assert.strictEqual(suDoku(_testPuzzles1), 1190);
```

`suDoku(testPuzzles2)` dovrebbe restituire `24702`.

```js
assert.strictEqual(suDoku(_testPuzzles2), 24702);
```

# --seed--

## --after-user-code--

```js
const _testPuzzles1 = [
  '003020600900305001001806400008102900700000008006708200002609500800203009005010300',
  '200080300060070084030500209000105408000000000402706000301007040720040060004010003',
  '000000907000420180000705026100904000050000040000507009920108000034059000507000000'
];

const _testPuzzles2 = [
  '003020600900305001001806400008102900700000008006708200002609500800203009005010300',
  '200080300060070084030500209000105408000000000402706000301007040720040060004010003',
  '000000907000420180000705026100904000050000040000507009920108000034059000507000000',
  '030050040008010500460000012070502080000603000040109030250000098001020600080060020',
  '020810740700003100090002805009040087400208003160030200302700060005600008076051090',
  '100920000524010000000000070050008102000000000402700090060000000000030945000071006',
  '043080250600000000000001094900004070000608000010200003820500000000000005034090710',
  '480006902002008001900370060840010200003704100001060049020085007700900600609200018',
  '000900002050123400030000160908000000070000090000000205091000050007439020400007000',
  '001900003900700160030005007050000009004302600200000070600100030042007006500006800',
  '000125400008400000420800000030000095060902010510000060000003049000007200001298000',
  '062340750100005600570000040000094800400000006005830000030000091006400007059083260',
  '300000000005009000200504000020000700160000058704310600000890100000067080000005437',
  '630000000000500008005674000000020000003401020000000345000007004080300902947100080',
  '000020040008035000000070602031046970200000000000501203049000730000000010800004000',
  '361025900080960010400000057008000471000603000259000800740000005020018060005470329',
  '050807020600010090702540006070020301504000908103080070900076205060090003080103040',
  '080005000000003457000070809060400903007010500408007020901020000842300000000100080',
  '003502900000040000106000305900251008070408030800763001308000104000020000005104800',
  '000000000009805100051907420290401065000000000140508093026709580005103600000000000',
  '020030090000907000900208005004806500607000208003102900800605007000309000030020050',
  '005000006070009020000500107804150000000803000000092805907006000030400010200000600',
  '040000050001943600009000300600050002103000506800020007005000200002436700030000040',
  '004000000000030002390700080400009001209801307600200008010008053900040000000000800',
  '360020089000361000000000000803000602400603007607000108000000000000418000970030014',
  '500400060009000800640020000000001008208000501700500000000090084003000600060003002',
  '007256400400000005010030060000508000008060200000107000030070090200000004006312700',
  '000000000079050180800000007007306800450708096003502700700000005016030420000000000',
  '030000080009000500007509200700105008020090030900402001004207100002000800070000090',
  '200170603050000100000006079000040700000801000009050000310400000005000060906037002',
  '000000080800701040040020030374000900000030000005000321010060050050802006080000000',
  '000000085000210009960080100500800016000000000890006007009070052300054000480000000',
  '608070502050608070002000300500090006040302050800050003005000200010704090409060701',
  '050010040107000602000905000208030501040070020901080406000401000304000709020060010',
  '053000790009753400100000002090080010000907000080030070500000003007641200061000940',
  '006080300049070250000405000600317004007000800100826009000702000075040190003090600',
  '005080700700204005320000084060105040008000500070803010450000091600508007003010600',
  '000900800128006400070800060800430007500000009600079008090004010003600284001007000',
  '000080000270000054095000810009806400020403060006905100017000620460000038000090000',
  '000602000400050001085010620038206710000000000019407350026040530900020007000809000',
  '000900002050123400030000160908000000070000090000000205091000050007439020400007000',
  '380000000000400785009020300060090000800302009000040070001070500495006000000000092',
  '000158000002060800030000040027030510000000000046080790050000080004070100000325000',
  '010500200900001000002008030500030007008000500600080004040100700000700006003004050',
  '080000040000469000400000007005904600070608030008502100900000005000781000060000010',
  '904200007010000000000706500000800090020904060040002000001607000000000030300005702',
  '000700800006000031040002000024070000010030080000060290000800070860000500002006000',
  '001007090590080001030000080000005800050060020004100000080000030100020079020700400',
  '000003017015009008060000000100007000009000200000500004000000020500600340340200000',
  '300200000000107000706030500070009080900020004010800050009040301000702000000008006'
];
```

## --seed-contents--

```js
function suDoku(puzzlesArr) {

  return true;
}

// Only change code above this line

const testPuzzles1 = [
  '003020600900305001001806400008102900700000008006708200002609500800203009005010300',
  '200080300060070084030500209000105408000000000402706000301007040720040060004010003',
  '000000907000420180000705026100904000050000040000507009920108000034059000507000000'
];

suDoku(testPuzzles1);
```

# --solutions--

```js
function suDoku(puzzlesArr) {
  function solve(puzzle) {
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        if (puzzle[row][col] > 0) {
          continue;
        }

        const allowedNumbers = getAllowedNumbers(puzzle, row, col);

        for (let number = 1; number <= 9; number++) {
          if (allowedNumbers[number]) {
            puzzle[row][col] = number;
            if (solve(puzzle)) {
              return true;
            }
          }
        }

        puzzle[row][col] = 0;
        return false;
      }
    }
    return true;
  }

  function getAllowedNumbers(puzzle, row, col) {
    const allowed = new Array(10).fill(true);
    allowed[0] = false;

    for (let i = 0; i < 9; i++) {
      const numberInSameRow = puzzle[row][i];
      if (numberInSameRow > 0) {
        allowed[numberInSameRow] = false;
      }

      const numberInSameCol = puzzle[i][col];
      if (numberInSameCol > 0) {
        allowed[numberInSameCol] = false;
      }
    }

    const rowOfSubGrid = Math.floor(row / 3) * 3;
    const colOfSubGrid = Math.floor(col / 3) * 3;
    for (let rowInSubGrid = 0; rowInSubGrid < 3; rowInSubGrid++) {
      for (let colInSubGrid = 0; colInSubGrid < 3; colInSubGrid++) {
        const numberInSameSubGrid =
          puzzle[rowOfSubGrid + rowInSubGrid][colOfSubGrid + colInSubGrid];
        if (numberInSameSubGrid > 0) {
          allowed[numberInSameSubGrid] = false;
        }
      }
    }

    return allowed;
  }

  function parsePuzzle(string) {
    const puzzle = [];
    for (let row = 0; row < 9; row++) {
      puzzle.push(
        string
          .slice(row * 9, 9 + row * 9)
          .split('')
          .map(x => parseInt(x, 10))
      );
    }
    return puzzle;
  }

  let sum = 0;
  for (let i = 0; i < puzzlesArr.length; i++) {
    const puzzle = parsePuzzle(puzzlesArr[i]);
    if (solve(puzzle)) {
      sum += 100 * puzzle[0][0] + 10 * puzzle[0][1] + puzzle[0][2];
    }
  }

  return sum;
}
```
