import {
    createStream
} from './../../../src';
import expectTable from './expectTable';

describe('README.md usage/', () => {
  describe('process.stdout.write', () => {
    let processStdoutWriteBuffer;

    /**
     * @var {Function} Reference to the original process.stdout.write function.
     */
    const processStdoutWrite = process.stdout.write;

    /**
     * @returns {undefined}
     */
    const overwriteProcessStdoutWrite = () => {
      processStdoutWriteBuffer = '';

      process.stdout.write = (text) => {
        processStdoutWriteBuffer += text;
      };
    };

    /**
     * @returns {string}
     */
    const resetProcessStdoudWrite = () => {
      process.stdout.write = processStdoutWrite;

      return processStdoutWriteBuffer;
    };

    it('streaming', () => {
      const config = {
        columnCount: 3,
        columnDefault: {
          width: 2
        }
      };

      const stream = createStream(config);

      overwriteProcessStdoutWrite();

      stream.write(['0A', '0B', '0C']);
      stream.write(['1A', '1B', '1C']);
      stream.write(['2A', '2B', '2C']);

      const output = resetProcessStdoudWrite();

      expectTable(output + '\n', '╔════╤════╤════╗\n║ 0A │ 0B │ 0C ║\n╚════╧════╧════╝\r\u001b[K╟────┼────┼────╢\n║ 1A │ 1B │ 1C ║\n╚════╧════╧════╝\r\u001b[K╟────┼────┼────╢\n║ 2A │ 2B │ 2C ║\n╚════╧════╧════╝');
    });
  });
});
