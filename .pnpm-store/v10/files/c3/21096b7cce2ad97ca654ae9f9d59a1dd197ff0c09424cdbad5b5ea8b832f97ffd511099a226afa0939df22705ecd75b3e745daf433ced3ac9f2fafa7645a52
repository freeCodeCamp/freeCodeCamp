declare namespace convertHrtime {
	interface HRTime {
		seconds: number;
		milliseconds: number;
		nanoseconds: number;
	}
}

/**
Convert the result of [`process.hrtime()`](https://nodejs.org/api/process.html#process_process_hrtime_time) to seconds, milliseconds, nanoseconds.

@example
```
import convertHrtime = require('convert-hrtime');

convertHrtime(process.hrtime(process.hrtime()));
//=> {seconds: 0.000002399, milliseconds: 0.002399, nanoseconds: 2399}
```
*/
declare function convertHrtime(hrtime: [number, number]): convertHrtime.HRTime;

export = convertHrtime;
