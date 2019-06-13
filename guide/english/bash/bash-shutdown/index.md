---
title: Bash shutdown
---

## Bash Command: shutdown

Typing the shutdown command will schedule your system to be shutdown at a given point in time.

### Usage

```bash
shutdown [options] [when] [message]
``` 

#### Options

* `-h`, shutdown then halt the system

* `-r`, will trigger a restart of the system after shutting it down

* `-c`, cancel a planned shutdown

* `-P`, shutdown then power down

* `-k`, do not shutdown, but send the message as if you were

#### When

* `now`, triggers an immediate shutdown (still displays any message specified)

* `hh:mm`, shutdown initiates at the specified hour(`hh`) and minute(`mm`)

* `+m`, wait `m` minutes before inititiating shutdown

#### Message

* Adding a message to the end of the command will display a message of your chosing prior to shutting it down.

#### More information:

* SS64: https://ss64.com/bash/shutdown.html
