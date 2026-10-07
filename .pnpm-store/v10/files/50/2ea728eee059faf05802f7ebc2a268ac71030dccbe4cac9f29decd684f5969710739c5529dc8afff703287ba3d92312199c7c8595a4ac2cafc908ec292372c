# physical-cpu-count

Returns the number of physical CPU cores.

## Example

```js
const physicalCpuCount = require('physical-cpu-count')
// 4

const logicalCpuCount = require('os').cpus().length
// 8
```

## Use Case

Working with clusters of Node.js processes it is common to see code using `os.cpus().length` as the number of child workers to fork. For some workloads this can negatively impact performance on CPUs that use simultaneous multithreading (SMT). Latency is doubled because two processes share the same physical CPU core to get their work done. Additionally there is memory spent for each running worker, as well as time to spawn their processes. It is better to fork no more child processes than there are physical cores.

## Known Limitations

Implemented for Linux, macOS, and Windows.

Other platforms use a naive approach that only looks at Intel CPUs, and assumes every Intel CPU supports, and has enabled, Hyper-Threading with two threads per physical core. These assumptions are not always correct.

Power management might also make CPU cores unavailable.

## See also:

- [Issue `nodejs/node#7730` to implement physical core detection natively in Node.js.](https://github.com/nodejs/node/issues/7730)
- [Relevant Stack Overflow answer for macOS and Linux.](https://stackoverflow.com/a/23378780)
- [Solutions for Windows WMIC from the command prompt.](http://superuser.com/questions/226552/how-to-tell-how-many-cpus-cores-you-have-on-windows-7)
