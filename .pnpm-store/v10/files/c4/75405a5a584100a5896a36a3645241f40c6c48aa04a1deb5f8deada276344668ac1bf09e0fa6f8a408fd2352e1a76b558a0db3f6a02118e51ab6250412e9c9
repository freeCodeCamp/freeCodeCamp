
# Benchmarks

`pino.info('hello world')`:

```

BASIC benchmark averages
Bunyan average: 377.434ms
Winston average: 270.249ms
Bole average: 172.690ms
Debug average: 220.527ms
LogLevel average: 222.802ms
Pino average: 114.801ms
PinoMinLength average: 70.968ms
PinoNodeStream average: 159.192ms

```

`pino.info({'hello': 'world'})`:

```

OBJECT benchmark averages
BunyanObj average: 410.379ms
WinstonObj average: 273.120ms
BoleObj average: 185.069ms
LogLevelObject average: 433.425ms
PinoObj average: 119.315ms
PinoMinLengthObj average: 76.968ms
PinoNodeStreamObj average: 164.268ms

```

`pino.info(aBigDeeplyNestedObject)`:

```

DEEP-OBJECT benchmark averages
BunyanDeepObj average: 1.839ms
WinstonDeepObj average: 5.604ms
BoleDeepObj average: 3.422ms
LogLevelDeepObj average: 11.716ms
PinoDeepObj average: 2.256ms
PinoMinLengthDeepObj average: 2.240ms
PinoNodeStreamDeepObj average: 2.595ms

```

`pino.info('hello %s %j %d', 'world', {obj: true}, 4, {another: 'obj'})`:

For a fair comparison, [LogLevel](http://npm.im/loglevel) was extended
to include a timestamp and [bole](http://npm.im/bole) had
`fastTime` mode switched on.

