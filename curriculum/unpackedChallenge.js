/* eslint-disable no-inline-comments */
import fs from 'fs-extra';
import path from 'path';
import _ from 'lodash';
import { dasherize } from './utils';

const jsonLinePrefix = '//--JSON:';
const paragraphBreak = '<!--break-->';

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

    function removeLeadingEmptyLines(array) {
      let emptyString = /^\s*$/;
      while (array && Array.isArray(array) && emptyString.test(array[0])) {
        array.shift();
      }
    }

    let chunkEnd = /(<!|\/\*)--end--/;
    let index = 0;

    function endOfFile() {
      return index === lines.length;
    }

    function nextLine() {
      if (endOfFile()) {
        return null;
      }
      return lines[index++].toString();
    }

    function readDescription() {
      let description = [];
      let currentParagraph = [];

      function pushParagraph() {
        removeLeadingEmptyLines(currentParagraph);
        description.push(currentParagraph.join('\n'));
        currentParagraph = [];
      }

      while (!endOfFile()) {
        let line = nextLine();
        if (chunkEnd.test(line)) {
          pushParagraph();
          return description;
        } else if (line === paragraphBreak) {
          pushParagraph();
        } else {
          currentParagraph.push(line);
        }
      }
      throw `Unexpected end of the file while reading a description.
        ${this.filePath()}`;
    }

    function readTranslations() {
      let translations = {};
      let langChunk = /<!--(\w+(-\w+)*)-->/;

      while (!endOfFile()) {
        let line = nextLine();
        if (chunkEnd.test(line)) {
          return translations;
        } else if (langChunk.test(line)) {
          let langCode = line.match(langChunk)[1];
          translations[langCode] = readProperties();
          line = nextLine();
          if (!chunkEnd.test(line)) {
            throw `Expected --end--:
              ${line}`;
          }
        }
      }
      throw `Unexpected end of the file while reading translations.
        ${this.filePath()}`;
    }

    function readFiles() {
      let files = {};
      let fileChunk = /<!--(\w+)\.(\w+)-->/;
      while (!endOfFile()) {
        let line = nextLine();
        if (chunkEnd.test(line)) {
          return files;
        } else if (fileChunk.test(line)) {
          let name = line.match(fileChunk)[1];
          let ext = line.match(fileChunk)[2];
          let key = name + ext;
          files[key] = {};
          files[key].key = key;
          files[key].ext = ext;
          files[key].name = name;
          Object.assign(files[key], readProperties());
          line = nextLine();
          if (!chunkEnd.test(line)) {
            throw `Expected --end--:
              ${line}`;
          }
        }
      }
      throw `Unexpected end of the file while reading files.
        ${this.filePath()}`;
    }

    function readProperty() {
      let property = [];
      while (!endOfFile()) {
        let line = nextLine();
        if (chunkEnd.test(line)) {
          removeLeadingEmptyLines(property);
          return property;
        } else if (line.startsWith(jsonLinePrefix)) {
          line = JSON.parse(line.slice(jsonLinePrefix.length));
          property.push(line);
        } else {
          property.push(line);
        }
      }
      throw `Unexpected end of the file while reading a property.
        ${this.filePath()}`;
    }

    function readProperties() {
      let properties = {};
      let chunkStart = /(<!|\/\*)--(\w+)--/;

      while (!endOfFile()) {
        let line = nextLine();
        if (chunkEnd.test(line)) {
          index--; // must to do step back
          return properties;
        } else if (chunkStart.test(line)) {
          let chunkName = line.match(chunkStart)[2];
          if (chunkName === 'description') {
            properties[chunkName] = readDescription();
          } else if (chunkName === 'translations') {
            properties[chunkName] = readTranslations();
          } else if (chunkName === 'files') {
            properties[chunkName] = readFiles();
          } else {
            properties[chunkName] = readProperty();
            if (chunkName === 'releasedOn' || chunkName === 'title') {
              properties[chunkName] = properties[chunkName].join('\n');
            }
          }
        }
      }
      return properties;
    }

    let chunks = readProperties();

    if (!endOfFile()) {
      throw `Unexpected content of file: ${this.filePath()}`;
    }

    // hack to deal with solutions field being an array of a single string
    // instead of an array of lines like some other fields
    if (chunks.solutions) {
      chunks.solutions = [chunks.solutions.join('\n')];
      removeLeadingEmptyLines(chunks.solutions);
    }

    // console.log(JSON.stringify(chunks, null, 2));
    return chunks;
  }
}

export { ChallengeFile };

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
    this.challengeFile().write(this.unpackedHTML());
  }

  challengeFile() {
    return new ChallengeFile(this.targetDir, this.baseName(), '.html');
  }

  baseName() {
    // eslint-disable-next-line no-nested-ternary
    let prefix =
      (this.index < 10 ? '00' : this.index < 100 ? '0' : '') + this.index;
    return `${prefix}-${dasherize(this.challenge.title)}-${this.challenge.id}`;
  }

  expandedDescription(description) {
    let out = [];
    description.forEach(part => {
      if (_.isString(part)) {
        out.push(part.toString());
        out.push(paragraphBreak);
      } else {
        // Descriptions are weird since sometimes they're text and sometimes
        // they're "steps" which appear one at a time with optional pix and
        // captions and links, or "questions" with choices and explanations...
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

    if (out[out.length - 1] === paragraphBreak) {
      out.pop();
    }
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

    text.push(`<p>Edit this HTML file (between &lt;!-- marks only!)
       and run <code>npm run repack</code>
       to incorporate your changes into the challenge database.</p>`);

    text.push('<h2>Title</h2>');
    text.push('<!--title-->');
    text.push(this.challenge.title);
    text.push('<!--end-->');

    text.push('');
    text.push('<h2>Description</h2>');
    text.push('<div class="unpacked description">');
    text.push('<!--description-->');
    if (this.challenge.description.length) {
      text.push(
        this.expandedDescription(this.challenge.description).join('\n')
      );
    }
    text.push('<!--end-->');
    text.push('</div>');
    text.push('');
    text.push('<h2>Translations</h2>');
    text.push(`
      <p>Format of translation unit:</p>
        <p>
          <code>
            &lt!--<em>language-code</em>--&gt<br>
            &lt!--<em>title</em>--&gt<br>
            <em>Title</em><br>
            &lt!--<em>end</em>--&gt<br>
            &lt!--<em>description</em>--&gt<br>
            <em>Description</em><br>
            &lt!--<em>end</em>--&gt<br>
            &lt!--<em>end</em>--&gt<br>
          </code>
        </p>`);
    text.push('<div class="unpacked">');
    text.push('<!--translations-->');
    if (this.challenge.hasOwnProperty('translations')) {
      const translations = this.challenge.translations;
      const keys = Object.keys(translations);
      if (keys) {
        keys.forEach(lang => {
          text.push(`<h2>${lang}</h2>`);
          text.push(`<!--${lang}-->`);
          const translation = translations[lang];
          if (translation.title) {
            text.push('<h3>Title</h3>');
            text.push('<!--title-->');
            text.push(translation.title);
            text.push('<!--end-->');
          }
          if (translation.description && translation.description.length) {
            text.push('<h3>Description</h3>');
            text.push('<!--description-->');
            text.push(
              this.expandedDescription(translation.description).join('\n')
            );
            text.push('<!--end-->');
          }
          text.push('<!--end-->');
        });
      }
    }
    text.push('<!--end-->');
    text.push('</div>');

    text.push('');
    text.push('<h2>Files</h2>');
    text.push(`
      <p>Format of file:</p>
        <p>
          <code>
            &lt!--<em>name.ext</em>--&gt<br>
            &lt!--<em>contents</em>--&gt<br>
            <em>Contents</em><br>
            &lt!--<em>end</em>--&gt<br>
            &lt!--<em>head</em>--&gt<br>
            <em>Head</em><br>
            &lt!--<em>end</em>--&gt<br>
            &lt!--<em>tail</em>--&gt<br>
            <em>Tail</em><br>
            &lt!--<em>end</em>--&gt<br>
            &lt!--<em>end</em>--&gt<br>
          </code>
        </p>`);
    text.push('<div class="unpacked">');
    text.push('<!--files-->');
    if (this.challenge.files) {
      Object.keys(this.challenge.files).forEach(key => {
        let file = this.challenge.files[key];
        let { contents, head, tail } = file;
        text.push(`<h3>${file.name + '.' + file.ext}</h3>`);
        text.push(`<!--${file.name + '.' + file.ext}-->`);
        text.push('<h4>Contents</h4>');
        text.push('<pre>');
        text.push(_.escape(contents.join('\n')));
        text.push('</pre>');
        text.push('<pre style="display: none;">');
        text.push('<!--contents-->');
        text.push(contents.join('\n'));
        text.push('<!--end-->');
        text.push('</pre>');

        text.push('<h4>Head</h4>');
        text.push('<pre>');
        text.push(_.escape(head.join('\n')));
        text.push('</pre>');
        text.push('<pre style="display: none;">');
        text.push('<!--head-->');
        text.push(head.join('\n'));
        text.push('<!--end-->');
        text.push('</pre>');

        text.push('<h4>Tail</h4>');
        text.push('<pre>');
        text.push(_.escape(tail.join('\n')));
        text.push('</pre>');
        text.push('<pre style="display: none;">');
        text.push('<!--tail-->');
        text.push(tail.join('\n'));
        text.push('<!--end-->');
        text.push('</pre>');
        text.push('<!--end-->');
      });
    }
    text.push('<!--end-->');
    text.push('</div>');

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
    text.push('<h2>Tests</h2>');
    text.push('<script class="unpacked tests">');
    text.push(
      `test(\'${this.challenge.title} challenge tests\', ` + 'function(t) {'
    );
    text.push('let assert = addAssertsToTapTest(t);');
    text.push("let code = document.getElementById('solution').innerText;");
    text.push(
      't.plan(' +
        (this.challenge.tests ? this.challenge.tests.length : 0) +
        ');'
    );
    text.push('/*--tests--*/');
    text.push(this.expandedTests(this.challenge.tests).join('\n'));
    text.push('/*--end--*/');
    text.push('});');
    text.push('</script>');

    text.push('');
    text.push('</body>');
    text.push('</html>');
    return text;
  }
}

export { UnpackedChallenge };
