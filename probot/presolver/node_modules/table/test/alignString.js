/* eslint-disable max-nested-callbacks */

import {
    expect
} from 'chai';
import chalk from 'chalk';
import alignString from './../src/alignString';

describe('alignString', () => {
  context('subject parameter value is not a string', () => {
    it('throws an error', () => {
      expect(() => {
        alignString();
      }).to.throw(Error, 'Subject parameter value must be a string.');
    });
  });
  context('container width parameter value is not a string', () => {
    it('throws an error', () => {
      expect(() => {
        alignString('');
      }).to.throw(Error, 'Container width parameter value must be a number.');
    });
  });
  context('subject parameter value width is greater than the container width', () => {
    it('throws an error', () => {
      expect(() => {
        alignString('aa', 1, 'left');
      }).to.throw(Error, 'Subject parameter value width cannot be greater than the container width.');
    });
  });
  context('container alignment parameter value is not a string', () => {
    it('throws an error', () => {
      expect(() => {
        alignString('', 1);
      }).to.throw(Error, 'Alignment parameter value must be a string.');
    });
  });
  context('container alignment parameter value is not a known alignment parameter value', () => {
    it('throws an error', () => {
      expect(() => {
        alignString('', 1, 'foo');
      }).to.throw(Error, 'Alignment parameter value must be a known alignment parameter value (left, right, center).');
    });
  });
  context('subject parameter value', () => {
    context('0 width', () => {
      it('produces a string consisting of container width number of whitespace characters', () => {
        expect(alignString('', 5, 'left')).to.equal('     ', 'left');
        expect(alignString('', 5, 'center')).to.equal('     ', 'center');
        expect(alignString('', 5, 'right')).to.equal('     ', 'right');
      });
    });
    context('plain text', () => {
      context('alignment', () => {
        context('left', () => {
          it('pads the string on the right side using a whitespace character', () => {
            expect(alignString('aa', 6, 'left')).to.equal('aa    ');
          });
        });
        context('right', () => {
          it('pads the string on the left side using a whitespace character', () => {
            expect(alignString('aa', 6, 'right')).to.equal('    aa');
          });
        });
        context('center', () => {
          it('pads the string on both sides using a whitespace character', () => {
            expect(alignString('aa', 6, 'center')).to.equal('  aa  ');
          });
          context('uneven number of available with', () => {
            it('floors the available width; adds extra space to the end of the string', () => {
              expect(alignString('aa', 7, 'center')).to.equal('  aa   ');
            });
          });
        });
      });
    });
    context('text containing ANSI escape codes', () => {
      context('alignment', () => {
        context('left', () => {
          it('pads the string on the right side using a whitespace character', () => {
            expect(alignString(chalk.red('aa'), 6, 'left')).to.equal(chalk.red('aa') + '    ');
          });
        });
        context('right', () => {
          it('pads the string on the left side using a whitespace character', () => {
            expect(alignString(chalk.red('aa'), 6, 'right')).to.equal('    ' + chalk.red('aa'));
          });
        });
        context('center', () => {
          it('pads the string on both sides using a whitespace character', () => {
            expect(alignString(chalk.red('aa'), 6, 'center')).to.equal('  ' + chalk.red('aa') + '  ');
          });
          context('uneven number of available with', () => {
            it('floors the available width; adds extra space to the end of the string', () => {
              expect(alignString(chalk.red('aa'), 7, 'center')).to.equal('  ' + chalk.red('aa') + '   ');
            });
          });
        });
      });
    });
  });
});
