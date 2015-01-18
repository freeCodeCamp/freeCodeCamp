<!doctype html>

<title>CodeMirror: LiveScript mode</title>
<meta charset="utf-8"/>
<link rel=stylesheet href="../../doc/docs.css">

<link rel="stylesheet" href="../../lib/codemirror.css">
<link rel="stylesheet" href="../../theme/solarized.css">
<script src="../../lib/codemirror.js"></script>
<script src="livescript.js"></script>
<style>.CodeMirror {font-size: 80%;border-top: 1px solid silver; border-bottom: 1px solid silver;}</style>
<div id=nav>
  <a href="http://codemirror.net"><h1>CodeMirror</h1><img id=logo src="../../doc/logo.png"></a>

  <ul>
    <li><a href="../../index.html">Home</a>
    <li><a href="../../doc/manual.html">Manual</a>
    <li><a href="https://github.com/codemirror/codemirror">Code</a>
  </ul>
  <ul>
    <li><a href="../index.html">Language modes</a>
    <li><a class=active href="#">LiveScript</a>
  </ul>
</div>

<article>
<h2>LiveScript mode</h2>
<form><textarea id="code" name="code">
# LiveScript mode for CodeMirror
# The following script, prelude.ls, is used to
# demonstrate LiveScript mode for CodeMirror.
#   https://github.com/gkz/prelude-ls

export objToFunc = objToFunc = (obj) ->
  (key) -> obj[key]

export each = (f, xs) -->
  if typeof! xs is \Object
    for , x of xs then f x
  else
    for x in xs then f x
  xs

export map = (f, xs) -->
  f = objToFunc f if typeof! f isnt \Function
  type = typeof! xs
  if type is \Object
    {[key, f x] for key, x of xs}
  else
    result = [f x for x in xs]
    if type is \String then result * '' else result

export filter = (f, xs) -->
  f = objToFunc f if typeof! f isnt \Function
  type = typeof! xs
  if type is \Object
    {[key, x] for key, x of xs when f x}
  else
    result = [x for x in xs when f x]
    if type is \String then result * '' else result

export reject = (f, xs) -->
  f = objToFunc f if typeof! f isnt \Function
  type = typeof! xs
  if type is \Object
    {[key, x] for key, x of xs when not f x}
  else
    result = [x for x in xs when not f x]
    if type is \String then result * '' else result

export partition = (f, xs) -->
  f = objToFunc f if typeof! f isnt \Function
  type = typeof! xs
  if type is \Object
    passed = {}
    failed = {}
    for key, x of xs
      (if f x then passed else failed)[key] = x
  else
    passed = []
    failed = []
    for x in xs
      (if f x then passed else failed)push x
    if type is \String
      passed *= ''
      failed *= ''
  [passed, failed]

export find = (f, xs) -->
  f = objToFunc f if typeof! f isnt \Function
  if typeof! xs is \Object
    for , x of xs when f x then return x
  else
    for x in xs when f x then return x
  void

export head = export first = (xs) ->
  return void if not xs.length
  xs.0

export tail = (xs) ->
  return void if not xs.length
  xs.slice 1

export last = (xs) ->
  return void if not xs.length
  xs[*-1]

export initial = (xs) ->
  return void if not xs.length
  xs.slice 0 xs.length - 1

export empty = (xs) ->
  if typeof! xs is \Object
    for x of xs then return false
    return yes
  not xs.length

export values = (obj) ->
  [x for , x of obj]

export keys = (obj) ->
  [x for x of obj]

export len = (xs) ->
  xs = values xs if typeof! xs is \Object
  xs.length

export cons = (x, xs) -->
  if typeof! xs is \String then x + xs else [x] ++ xs

export append = (xs, ys) -->
  if typeof! ys is \String then xs + ys else xs ++ ys

export join = (sep, xs) -->
  xs = values xs if typeof! xs is \Object
  xs.join sep

export reverse = (xs) ->
  if typeof! xs is \String
  then (xs / '')reverse! * ''
  else xs.slice!reverse!

export fold = export foldl = (f, memo, xs) -->
  if typeof! xs is \Object
    for , x of xs then memo = f memo, x
  else
    for x in xs then memo = f memo, x
  memo

export fold1 = export foldl1 = (f, xs) --> fold f, xs.0, xs.slice 1

export foldr = (f, memo, xs) --> fold f, memo, xs.slice!reverse!

export foldr1 = (f, xs) -->
  xs.=slice!reverse!
  fold f, xs.0, xs.slice 1

export unfoldr = export unfold = (f, b) -->
  if (f b)?
    [that.0] ++ unfoldr f, that.1
  else
    []

export andList = (xs) ->
  for x in xs when not x
    return false
  true

export orList = (xs) ->
  for x in xs when x
    return true
  false

export any = (f, xs) -->
  f = objToFunc f if typeof! f isnt \Function
  for x in xs when f x
    return yes
  no

export all = (f, xs) -->
  f = objToFunc f if typeof! f isnt \Function
  for x in xs when not f x
    return no
  yes

export unique = (xs) ->
  result = []
  if typeof! xs is \Object
    for , x of xs when x not in result then result.push x
  else
    for x   in xs when x not in result then result.push x
  if typeof! xs is \String then result * '' else result

export sort = (xs) ->
  xs.concat!sort (x, y) ->
    | x > y =>  1
    | x < y => -1
    | _     =>  0

export sortBy = (f, xs) -->
  return [] unless xs.length
  xs.concat!sort f

export compare = (f, x, y) -->
  | (f x) > (f y) =>  1
  | (f x) < (f y) => -1
  | otherwise     =>  0

export sum = (xs) ->
  result = 0
  if typeof! xs is \Object
    for , x of xs then result += x
  else
    for x   in xs then result += x
  result

export product = (xs) ->
  result = 1
  if typeof! xs is \Object
    for , x of xs then result *= x
  else
    for x   in xs then result *= x
  result

export mean = export average = (xs) -> (sum xs) / len xs

export concat = (xss) -> fold append, [], xss

export concatMap = (f, xs) --> fold ((memo, x) -> append memo, f x), [], xs

export listToObj = (xs) ->
  {[x.0, x.1] for x in xs}

export maximum = (xs) -> fold1 (>?), xs

export minimum = (xs) -> fold1 (<?), xs

export scan = export scanl = (f, memo, xs) -->
  last = memo
  if typeof! xs is \Object
  then [memo] ++ [last = f last, x for , x of xs]
  else [memo] ++ [last = f last, x for x in xs]

export scan1 = export scanl1 = (f, xs) --> scan f, xs.0, xs.slice 1

export scanr = (f, memo, xs) -->
  xs.=slice!reverse!
  scan f, memo, xs .reverse!

export scanr1 = (f, xs) -->
  xs.=slice!reverse!
  scan f, xs.0, xs.slice 1 .reverse!

export replicate = (n, x) -->
  result = []
  i = 0
  while i < n, ++i then result.push x
  result

export take = (n, xs) -->
  | n <= 0
    if typeof! xs is \String then '' else []
  | not xs.length => xs
  | otherwise     => xs.slice 0, n

export drop = (n, xs) -->
  | n <= 0        => xs
  | not xs.length => xs
  | otherwise     => xs.slice n

export splitAt = (n, xs) --> [(take n, xs), (drop n, xs)]

export takeWhile = (p, xs) -->
  return xs if not xs.length
  p = objToFunc p if typeof! p isnt \Function
  result = []
  for x in xs
    break if not p x
    result.push x
  if typeof! xs is \String then result * '' else result

export dropWhile = (p, xs) -->
  return xs if not xs.length
  p = objToFunc p if typeof! p isnt \Function
  i = 0
  for x in xs
    break if not p x
    ++i
  drop i, xs

export span = (p, xs) --> [(takeWhile p, xs), (dropWhile p, xs)]

export breakIt = (p, xs) --> span (not) << p, xs

export zip = (xs, ys) -->
  result = []
  for zs, i in [xs, ys]
    for z, j in zs
      result.push [] if i is 0
      result[j]?push z
  result

export zipWith = (f,xs, ys) -->
  f = objToFunc f if typeof! f isnt \Function
  if not xs.length or not ys.length
    []
  else
    [f.apply this, zs for zs in zip.call this, xs, ys]

export zipAll = (...xss) ->
  result = []
  for xs, i in xss
    for x, j in xs
      result.push [] if i is 0
      result[j]?push x
  result

export zipAllWith = (f, ...xss) ->
  f = objToFunc f if typeof! f isnt \Function
  if not xss.0.length or not xss.1.length
    []
  else
    [f.apply this, xs for xs in zipAll.apply this, xss]

export compose = (...funcs) ->
  ->
    args = arguments
    for f in funcs
      args = [f.apply this, args]
    args.0

export curry = (f) ->
  curry$ f # using util method curry$ from livescript

export id = (x) -> x

export flip = (f, x, y) --> f y, x

export fix = (f) ->
  ( (g, x) -> -> f(g g) ...arguments ) do
    (g, x) -> -> f(g g) ...arguments

export lines = (str) ->
  return [] if not str.length
  str / \\n

export unlines = (strs) -> strs * \\n

export words = (str) ->
  return [] if not str.length
  str / /[ ]+/

export unwords = (strs) -> strs * ' '

export max = (>?)

export min = (<?)

export negate = (x) -> -x

export abs = Math.abs

export signum = (x) ->
  | x < 0     => -1
  | x > 0     =>  1
  | otherwise =>  0

export quot = (x, y) --> ~~(x / y)

export rem = (%)

export div = (x, y) --> Math.floor x / y

export mod = (%%)

export recip = (1 /)

export pi = Math.PI

export tau = pi * 2

export exp = Math.exp

export sqrt = Math.sqrt

# changed from log as log is a
# common function for logging things
export ln = Math.log

export pow = (^)

export sin = Math.sin

export tan = Math.tan

export cos = Math.cos

export asin = Math.asin

export acos = Math.acos

export atan = Math.atan

export atan2 = (x, y) --> Math.atan2 x, y

# sinh
# tanh
# cosh
# asinh
# atanh
# acosh

export truncate = (x) -> ~~x

export round = Math.round

export ceiling = Math.ceil

export floor = Math.floor

export isItNaN = (x) -> x isnt x

export even = (x) -> x % 2 == 0

export odd = (x) -> x % 2 != 0

export gcd = (x, y) -->
  x = Math.abs x
  y = Math.abs y
  until y is 0
    z = x % y
    x = y
    y = z
  x

export lcm = (x, y) -->
  Math.abs Math.floor (x / (gcd x, y) * y)

# meta
export installPrelude = !(target) ->
  unless target.prelude?isInstalled
    target <<< out$ # using out$ generated by livescript
    target <<< target.prelude.isInstalled = true

export prelude = out$
</textarea></form>
    <script>
      var editor = CodeMirror.fromTextArea(document.getElementById("code"), {
        theme: "solarized light",
        lineNumbers: true
      });
    </script>

    <p><strong>MIME types defined:</strong> <code>text/x-livescript</code>.</p>

    <p>The LiveScript mode was written by Kenneth Bentley.</p>

  </article>
