---
title: Knight's tour
---
# Knight's tour

---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```javascript
function knightTour (w, h) {
  var b, cnt=0;

  var dx = [ -2, -2, -1, 1, 2,  2,  1, -1 ];
  var dy = [ -1,  1,  2, 2, 1, -1, -2, -2 ];

  function init_board()
  {
  	var i, j, k, x, y;
  	// * b is board; a is board with 2 rows padded at each side

    for(i=0;i<h;i++){
      for(j=0;j<w;j++){
        b[i][j]=255
      }
    }

  	for (i = 0; i < h; i++) {
  		for (j = 0; j < w; j++) {
  			for (k = 0; k < 8; k++) {
  				x = j + dx[k], y = i + dy[k];
  				if (b[i][j] == 255) b[i][j] = 0;
  				if(x >= 0 && x < w && y >= 0 && y < h) b[i][j]++;
  			}
  		}
  	}
  }

  function walk_board(x, y)
  {
  	var i, nx, ny, least;
  	var steps = 0;
  	// printf(E"H"E"J"E"%d;%dH"E"32m[]"E"m", y + 1, 1 + 2 * x);

  	while (1) {
  		// * occupy cell
  		b[y][x] = 255;

  		// * reduce all neighbors' neighbor count
  		for (i = 0; i < 8; i++)
        if(y+dy[i] >= 0 && x+dx[i] >= 0 && y+dy[i] < h && x+dx[i] < w)
  			b[ y + dy[i] ][ x + dx[i] ]--;

  		// find neighbor with lowest neighbor count
  		least = 255;
  		for (i = 0; i < 8; i++) {
        if(y+dy[i] >= 0 && x+dx[i] >= 0 && y+dy[i] < h && x+dx[i] < w)
  			if (b[ y + dy[i] ][ x + dx[i] ] < least) {
  				nx = x + dx[i];
  				ny = y + dy[i];
  				least = b[ny][nx];
  			}
  		}

  		if (least > 7) {
  			return steps == w * h - 1;
  		}

      steps++;
  		x = nx, y = ny;
  	}
  }

  function solve (x, y) {
    b=new Array(h);
    for(var i=0;i<h;i++)
      b[i]=new Array(w)

		init_board();
		if (walk_board(x, y)) {
      cnt++;
		}
  }

  for(var i=0;i<h;i++){
    for(var j=0;j<w;j++){
      solve(j, i);
    }
  }

  return cnt;
}
```

</details>