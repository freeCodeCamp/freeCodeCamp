import {
    expect
} from 'chai';
import mapDataUsingRowHeightIndex from './../src/mapDataUsingRowHeightIndex';

describe('mapDataUsingRowHeightIndex', () => {
  context('no data spans multiple rows', () => {
    it('maps data to a single cell', () => {
      const config = {
        columns: {
          0: {
            width: 2
          }
        }
      };

      const rowSpanIndex = [
        1
      ];

      const data = [
        [
          'aa'
        ]
      ];

      const mappedData = mapDataUsingRowHeightIndex(data, rowSpanIndex, config);

      expect(mappedData).to.deep.equal([
        [
          'aa'
        ]
      ]);
    });
  });

  context('single cell spans multiple rows', () => {
    it('maps data to multiple rows', () => {
      const config = {
        columns: {
          0: {
            width: 2
          }
        }
      };

      const rowSpanIndex = [
        5
      ];

      const data = [
        [
          'aabbccddee'
        ]
      ];

      const mappedData = mapDataUsingRowHeightIndex(data, rowSpanIndex, config);

      expect(mappedData).to.deep.equal([
        ['aa'],
        ['bb'],
        ['cc'],
        ['dd'],
        ['ee']
      ]);
    });
  });

  context('multiple cells spans multiple rows', () => {
    it('maps data to multiple rows', () => {
      const config = {
        columns: {
          0: {
            width: 2
          },
          1: {
            width: 4
          }
        }
      };

      const rowSpanIndex = [
        5
      ];

      const data = [
        [
          'aabbccddee',
          '00001111'
        ]
      ];

      const mappedData = mapDataUsingRowHeightIndex(data, rowSpanIndex, config);

      expect(mappedData).to.deep.equal([
        [
          'aa',
          '0000'
        ],
        [
          'bb',
          '1111'
        ],
        [
          'cc',
          ''
        ],
        [
          'dd',
          ''
        ],
        [
          'ee',
          ''
        ]
      ]);
    });
  });
});
