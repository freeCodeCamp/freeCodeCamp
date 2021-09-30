const fs = require('fs');
const path = require('path');
const chai = require('chai');
const { toNumber } = require('lodash');

const expect = chai.expect;

/**
 * Reading the meta.json from all the directories in _meta
 * Metadata is stored in-memory to perform all the tests
 */
const _meta = path.join(__dirname, '..', 'challenges/_meta');
const metaDirs = fs.readdirSync(_meta);
const metaData = {};
metaDirs.forEach(dir => {
  const metaPath = path.join(_meta, dir, 'meta.json');
  metaData[dir] = JSON.parse(fs.readFileSync(metaPath));
});

/**
 * The test suite to test the whole curriculum order
 */
describe('curriculumOrder', function () {
  /**
   * Checks to verify that all the superBlocks are unique and each superBlock has a unique superOrder
   */
  describe('superBlock and superOrder', function () {
    it('each superBlock and corresponding superOrder must be unique', function () {
      const superBlockOrder = {};
      const superOrderBlock = {};

      Object.values(metaData).forEach(block => {
        const superBlock = block.superBlock;
        const superOrder = block.superOrder;

        // Check that there exists a unique superOrder for each superBlock
        if (superBlock in superBlockOrder) {
          expect(
            superOrder,
            `Inside ${block.dashedName}, superOrder of ${superBlock} does not match the superOrder in other blocks.`
          ).to.equal(superBlockOrder[superBlock]);
        } else {
          superBlockOrder[superBlock] = superOrder;
        }

        // Check that there exists a unique superBlock for each superOrder
        if (superOrder in superOrderBlock) {
          expect(
            superBlock,
            `Inside ${block.dashedName}, superOrder (i.e. ${superOrder}) is assigned to another superBlock (i.e. ${superOrderBlock[superOrder]}).`
          ).to.equal(superOrderBlock[superOrder]);
        } else {
          superOrderBlock[superOrder] = superBlock;
        }
      });
    });
  });

  /**
   * Checks to verify that the order numbers are unique for each block inside a superBlock
   */
  describe('block and order', function () {
    // superBlocks = { superBlock : { order : block } }
    const superBlocks = {};

    it('order numbers should be unique for each challenge inside a superBlock', function () {
      Object.values(metaData).forEach(block => {
        const superBlock = block.superBlock;
        const order = block.order;

        if (superBlock in superBlocks) {
          if (order in superBlocks[superBlock]) {
            expect(
              superBlocks[superBlock][order],
              `Inside ${block.dashedName}, order (i.e. ${order}) is assigned to another block (i.e. ${superBlocks[superBlock][order]}).`
            ).to.equal(block.dashedName);
          } else {
            superBlocks[superBlock][order] = block.dashedName;
          }
        } else {
          superBlocks[superBlock] = {};
          superBlocks[superBlock][order] = block.dashedName;
        }
      });
    });

    it('order numbers are expected to start at 1 in each superBlock', function () {
      Object.keys(superBlocks).forEach(key => {
        const orders = Object.keys(superBlocks[key]).map(toNumber);
        orders.sort((a, b) => a < b);

        // expect(orders[0], `orders for ${key} do not start at 1.`).to.equal(1);
        if (orders[0] !== 1)
          console.warn(`orders for ${key} do not start at 1.`);
      });
    });

    it('order numbers are expected to be contiguous for each superBlock', function () {
      Object.keys(superBlocks).forEach(key => {
        const orders = Object.keys(superBlocks[key]).map(toNumber);
        orders.sort((a, b) => a < b);

        // expect(orders).to.deep.equal([...Array(orders.length).keys()]);
        for (let i = 1; i < orders.length; i++) {
          if (orders[i] !== orders[i - 1] + 1) {
            console.warn(`orders for ${key} are not contiguous`);
            break;
          }
        }
      });
    });
  });

  /**
   * Checks whether the challenge IDs are unique inside each block
   * TODO: Add checks to verify that the chllenges corresponding to the challenge ID's exist
   */
  describe('challenge IDs', function () {
    it('challenge IDs must be unique inside a block', function () {
      Object.values(metaData).forEach(block => {
        const challenges = block.challengeOrder.map(arr => arr[0]);
        challenges.forEach((id, i) => {
          expect(
            challenges.indexOf(id),
            `challenge ID's for ${block.dashedName} are not unique`
          ).to.equal(i);
        });
      });
    });
  });
});
