/**
Regular expression for matching a [shebang](https://en.wikipedia.org/wiki/Shebang_(Unix)) line.

@example
```
import shebangRegex = require('shebang-regex');

const string = '#!/usr/bin/env node\nconsole.log("unicorns");';

shebangRegex.test(string);
//=> true

shebangRegex.exec(string)[0];
//=> '#!/usr/bin/env node'

shebangRegex.exec(string)[1];
//=> '/usr/bin/env node'
```
*/
declare const shebangRegex: RegExp;

export = shebangRegex;
