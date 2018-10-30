import _ from 'lodash';
import chalk from 'chalk';
import table, {
    getBorderCharacters
} from './../../../src';

describe('README.md usage/', () => {
  it('moon_mission', () => {
    const data = [
      [
        chalk.bold('Spacecraft'),
        chalk.bold('Launch Date'),
        chalk.bold('Operator'),
        chalk.bold('Outcome'),
        chalk.bold('Remarks')
      ],
      [
        'Able I',
        '17 August 1958',
        'USAF',
        chalk.white.bold.bgRed('Launch failure'),
        'First attempted launch beyond Earth orbit; failed to orbit due to turbopump gearbox malfunction resulting in first stage explosion.[3] Reached apogee of 16 kilometres (9.9 mi)'
      ],
      [
        'Luna 2',
        '12 September 1959',
        'OKB-1',
        chalk.black.bgGreen('Successful'),
        'Successful impact at 21:02 on 14 September 1959. First spacecraft to reach lunar surface'
      ],
      [
        'Lunar Orbiter 1',
        '10 August 1966',
        'NASA',
        chalk.black.bgYellow('Partial failure'),
        'Orbital insertion at around 15:36 UTC on 14 August. Deorbited early due to lack of fuel and to avoid communications interference with the next mission, impacted the Moon at 13:30 UTC on 29 October 1966.'
      ],
      [
        'Apollo 8',
        '21 December 1968',
        'NASA',
        chalk.black.bgGreen('Successful'),
        'First manned mission to the Moon; entered orbit around the Moon with four-minute burn beginning at 09:59:52 UTC on 24 December. Completed ten orbits of the Moon before returning to Earth with an engine burn at 06:10:16 UTC on 25 December. Landed in the Pacific Ocean at 15:51 UTC on 27 December.'
      ],
      [
        'Apollo 11',
        '16 July 1969',
        'NASA',
        chalk.black.bgGreen('Successful'),
        'First manned landing on the Moon. LM landed at 20:17 UTC on 20 July 1969'
      ]
    ];

    const tableBorder = _.mapValues(getBorderCharacters('honeywell'), (char) => {
      return chalk.gray(char);
    });

    table(data, {
      border: tableBorder,
      columns: {
        4: {
          width: 50
        }
      }
    });
  });
});
