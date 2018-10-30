import table from './../../../src';
import expectTable from './expectTable';

describe('README.md usage/', () => {
  it('text_truncating', () => {
    const data = [
      ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pulvinar nibh sed mauris convallis dapibus. Nunc venenatis tempus nulla sit amet viverra.']
    ];

    const config = {
      columns: {
        0: {
          truncate: 100,
          width: 20
        }
      }
    };

    const output = table(data, config);

    // eslint-disable-next-line no-restricted-syntax
    expectTable(output, `
╔══════════════════════╗
║ Lorem ipsum dolor si ║
║ t amet, consectetur  ║
║ adipiscing elit. Pha ║
║ sellus pulvinar nibh ║
║ sed mauris conva...  ║
╚══════════════════════╝
        `);
  });
});
