---
title: Bash shutdown
---

## Bash Command: shutdown

Typing the shutdown command will schedule your system to be shutdown at a given point in time.

### Usage

```bash
shutdown [options] when [message]
``` 

Most used options:
* `+m`, will specify the minutes until shutdown.

* `-h`, will specify the hours until shutdown.

* `-r`, will trigger a restart of the system after shutting it down.

Adding a message to the end of the command will display a message of your chosing prior to shutting it down.

#### More information:

* SS64: https://ss64.com/bash/shutdown.html
