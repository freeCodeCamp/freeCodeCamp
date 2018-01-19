/* eslint-disable no-inline-comments */
import fs from 'fs-extra';
import path from 'path';
import _ from 'lodash';

const jsonLinePrefix = '//--JSON:';

class ChallengeFile {
  constructor(dir, name, suffix) {
    this.dir = dir;
    this.name = name;
    this.suffix = suffix;
  }

  filePath() {
    return path.join(this.dir, this.name + this.suffix);
  }

  write(contents) {
    if (_.isArray(contents)) {
      contents = contents.join('\n');
    }
    fs.writeFile(this.filePath(), contents, err => {
      if (err) {
        throw err;
      }
    });
  }

  readChunks() {
    // todo: make this work async
    // todo: make sure it works with encodings
    let data = fs.readFileSync(this.filePath());
    let lines = data.toString().split(/(?:\r\n|\r|\n)/g);
    let chunks = {};
    let readingChunk = null;
    lines.forEach(line => {
      let chunkEnd = /(<!|\/\*)--end--/;
      let chunkStart = /(<!|\/\*)--(\w+)--/;

      line = line.toString();

      if (chunkEnd.test(line)) {
        if (!readingChunk) {
          throw 'Encountered --end-- without being in a chunk';
        }
        readingChunk = null;
      } else if (chunkStart.test(line)) {
        let chunkName = line.match(chunkStart)[ 2 ];
        if (readingChunk) {
          throw `Encountered chunk ${chunkName} start `
          + `while already reading ${readingChunk}:
           ${line}`;
        }
        readingChunk = chunkName;
      } else if (readingChunk) {
        if (line.startsWith(jsonLinePrefix)) {
          line = JSON.parse(line.slice(jsonLinePrefix.length));
        }
        if (!chunks[readingChunk]) {
          chunks[readingChunk] = [];
        }
        // don't push empty top lines
        if (!(!line && chunks[readingChunk].length === 0)) {
          chunks[ readingChunk ].push(line);
        }
      }
    });

    // hack to deal with solutions field being an array of a single string
    // instead of an array of lines like other fields
    if (chunks.solutions) {
      chunks.solutions = [chunks.solutions.join('\n')];
    }

    // console.log(JSON.stringify(chunks, null, 2));
    return chunks;
  }
}

export {ChallengeFile};

class UnpackedChallenge {
  constructor(targetDir, challengeJson, index) {
    this.targetDir = targetDir;
    this.index = index;

    // todo: merge challengeJson properties into this object?
    this.challenge = challengeJson;

    // extract names of block and superblock from path
    // note: this is a bit redundant with the
    // fileName,superBlock,superOrder fields
    // that getChallenges() adds to the challenge JSON
    let targetDirPath = path.parse(targetDir);
    let parentDirPath = path.parse(targetDirPath.dir);
    // superBlockName e.g. "03-front-end-libraries"
    this.superBlockName = parentDirPath.base;
    // challengeBlockName e.g. "bootstrap"
    this.challengeBlockName = targetDirPath.base;
  }

  unpack() {
    this.challengeFile()
      .write(this.unpackedHTML());
  }

  challengeFile() {
    return new ChallengeFile(this.targetDir, this.baseName(), '.html');
  }

  baseName() {
    // eslint-disable-next-line no-nested-ternary
    let prefix = ((this.index < 10) ? '00' : (this.index < 100) ? '0' : '')
      + this.index;
    return `${prefix}-${this.challenge.id}`;
  }

  expandedDescription(description) {
    let out = [];
    description.forEach(part => {
      if (_.isString(part)) {
        out.push(part.toString());
      } else {
        // Descriptions are weird since sometimes they're text and sometimes
        // they're "steps" which appear one at a time with optional pix and
        // captions and links, or "questions" with choices and expanations...
        // For now we preserve non-string descriptions via JSON but this is
        // not a great solution.
        // It would be better if "steps" and "description" were separate fields.
        // For the record, the (unnamed) fields in step are:
        // 0: image URL
        // 1: caption
        // 2: text
        // 3: link URL
        out.push(jsonLinePrefix + JSON.stringify(part));
      }
    });
    // indent by 2
    return out;
  }

  expandedTests(tests) {
    if (!tests) {
      return [];
    }
    let out = [];
    tests.forEach(test => {
      if (_.isString(test)) {
        out.push(test);
      } else {
        // todo: figure out what to do about these id-title challenge links
        out.push(jsonLinePrefix + JSON.stringify(test));
      }
    });
    return out;
  }

  unpackedHTML() {
    let text = [];
    text.push('<html>');
    text.push('<head>');
    text.push('<link rel="stylesheet" href="../../../unpacked.css">');
    text.push('<!-- shim to enable running the tests in-browser -->');
    text.push('<script src="../../unpacked-bundle.js"></script>');
    text.push('</head>');
    text.push('<body>');
    text.push(`<h1>${this.challenge.title}</h1>`);
    text.push(`<p>This is the <b>unpacked</b> version of 
        <code>${this.superBlockName}/${this.challengeBlockName}</code> 
        (challenge id <code>${this.challenge.id}</code>).</p>`);
    text.push('<p>Open the JavaScript console to see test results.</p>');

    // text.push(`<p>Edit this HTML file (between &lt;!--s only!)
    //    and run <code>npm repack ???</code>
    //    to incorporate your changes into the challenge database.</p>`);

    text.push('');
    text.push('<h2>Description</h2>');
    text.push('<div class="unpacked description">');
    text.push('<!--description-->');
    text.push(this.expandedDescription(this.challenge.description).join('\n'));
    text.push('<!--end-->');
    text.push('</div>');

    text.push('');
    text.push('<h2>Seed</h2>');
    text.push('<!--seed--><pre class="unpacked">');
    if (this.challenge.seed) {
      text.push(text, this.challenge.seed.join('\n'));
    }
    text.push('<!--end-->');
    text.push('</pre>');

    // Q: What is the difference between 'seed' and 'challengeSeed' ?
    text.push('');
    text.push('<h2>Challenge Seed</h2>');
    text.push('<!--challengeSeed--><pre class="unpacked">');
    if (this.challenge.challengeSeed) {
      text.push(text, this.challenge.challengeSeed.join('\n'));
    }
    text.push('<!--end-->');
    text.push('</pre>');

    text.push('');
    text.push('<h2>Head</h2>');
    text.push('<!--head--><script class="unpacked head">');
    if (this.challenge.head) {
      text.push(text, this.challenge.head.join('\n'));
    }
    text.push('</script><!--end-->');

    text.push('');
    text.push('<h2>Solution</h2>');
    text.push(
      '<!--solutions--><script class="unpacked solution" id="solution">'
    );
    // Note: none of the challenges have more than one solution
    // todo: should we deal with multiple solutions or not?
    if (this.challenge.solutions && this.challenge.solutions.length > 0) {
      let solution = this.challenge.solutions[0];
      text.push(solution);
    }
    text.push('</script><!--end-->');

    text.push('');
    text.push('<h2>Tail</h2>');
    text.push('<!--tail--><script class="unpacked tail">');
    if (this.challenge.tail) {
      text.push(text, this.challenge.tail.join('\n'));
    }
    text.push('</script><!--end-->');

    text.push('');
    text.push('<h2>Tests</h2>');
    text.push('<script class="unpacked tests">');
    text.push(`test(\'${this.challenge.title} challenge tests\', ` +
      'function(t) {');
    text.push('let assert = addAssertsToTapTest(t);');
    text.push('let code = document.getElementById(\'solution\').innerText;');
    text.push('t.plan(' +
      (this.challenge.tests ? this.challenge.tests.length : 0) +
      ');');
    text.push('/*--tests--*/');
    text.push(this.expandedTests(this.challenge.tests).join('\n'));
    text.push('/*--end--*/');
    text.push('});')
    text.push('</script>');

    text.push('');
    text.push('</body>');
    text.push('</html>');
    return text;
  }
}

export {UnpackedChallenge};

