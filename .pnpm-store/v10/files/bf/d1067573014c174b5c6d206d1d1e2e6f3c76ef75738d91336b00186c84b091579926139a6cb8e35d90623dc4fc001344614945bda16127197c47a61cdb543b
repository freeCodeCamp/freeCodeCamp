# Diagnostics

Pino provides [tracing channel](tc) events that allow insight into the
internal workings of the library. The currently supported events are:

+ `tracing:pino_asJson:start`: emitted when the final serialization process
  of logs is started. The emitted event payload has the following fields:
  - `instance`: the Pino instance associated with the function
  - `arguments`: the arguments passed to the function
+ `tracing:pino_asJson:end`: emitted at the end of the final serialization
  process. The emitted event payload has the following fields:
  - `instance`: the Pino instance associated with the function
  - `arguments`: the arguments passed to the function
  - `result`: the finalized, newline delimited, log line as a string

[tc]: https://nodejs.org/docs/latest/api/diagnostics_channel.html#tracingchannel-channels
