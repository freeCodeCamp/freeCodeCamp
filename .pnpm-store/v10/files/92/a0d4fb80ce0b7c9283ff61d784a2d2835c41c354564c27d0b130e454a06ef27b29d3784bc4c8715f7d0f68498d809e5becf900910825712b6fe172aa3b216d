<a id="Systemd"></a>
## Systemd example

If you run your Node.js process via [Systemd](https://www.freedesktop.org/wiki/Software/systemd/) and you examine your logs with [journalctl](https://www.freedesktop.org/software/systemd/man/journalctl.html) some data will be duplicated. You can use a combination of `journalctl` options and `pino-pretty` options to shape the output.

For example viewing the prettified logs of a process named `monitor` with `journalctl -u monitor -f | pino-pretty`, might output something like this:

```
Apr 24 07:40:01 nanopi node[6080]: {"level":30,"time":1587706801902,"pid":6080,"hostname":"nanopi","msg":"TT
21","v":1}
```
As you can see, the timestamp, hostname, and pid are duplicated.
If you just want the bare prettified Pino logs you can strip out the duplicate items from the `journalctl` output with the `-o cat` option of `journalctl`: 
```
journalctl -u monitor -f -o cat | pino-pretty
```
the output now looks something like this:
```
[1587706801902] INFO  (6080 on nanopi): TT 21
```
Make the output even more human readable by using the pino-pretty options `-t` to format the timestamp and `-i pid, hostname` to filter out hostname and pid:
```
[2020-04-24 05:42:24.836 +0000] INFO : TT 21
``` 
