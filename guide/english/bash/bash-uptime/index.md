---
title: Bash Uptime
---
# Bash Uptime

The command  `uptime` displays the following:
 *current time
 *how long the system has been running
 *how many users are currently logged on
 *the system load averages (for the past 1, 5, and 15 minutes)

### Usage

`uptime [options]` Displays the amount of time the system has been consistently running when entered with no options.

### Options

 `-p`, `--pretty`   show uptime in pretty format
 `-h`, `--help`     display this help and exit
 `-s`, `--since`    system up since
 `-V`, `--version`  output version information and exit
 
### Example

```bash
[~]# uptime -p
up 11 weeks, 3 days, 23 hours, 49 minutes
```
### References
[uptime Linux Man Pages](https://linux.die.net/man/1/uptime)
