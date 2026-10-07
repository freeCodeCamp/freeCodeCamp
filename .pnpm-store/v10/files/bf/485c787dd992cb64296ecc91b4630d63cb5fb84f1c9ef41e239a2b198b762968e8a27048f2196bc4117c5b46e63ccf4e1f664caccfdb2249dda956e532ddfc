// @flow strict-local

import assert from 'assert';
import {loadConfig} from '../src/config';
import {inputFS as fs} from '@parcel/test-utils';
import path from 'path';

describe('loadConfig', () => {
  it('load config with json', async () => {
    assert.deepEqual(
      (
        await loadConfig(
          fs,
          path.join(__dirname, './input/config/config.json'),
          ['config.json'],
          path.join(__dirname, './input/config/'),
        )
      )?.config,
      {
        hoge: 'fuga',
      },
    );
  });

  it('should throw error with empty string json', async () => {
    // $FlowFixMe[prop-missing]
    await assert.rejects(async () => {
      await loadConfig(
        fs,
        path.join(__dirname, './input/config/empty.json'),
        ['empty.json'],
        path.join(__dirname, './input/config/'),
      );
    });
  });

  it('should load with empty string config toml', async () => {
    assert.deepEqual(
      (
        await loadConfig(
          fs,
          path.join(__dirname, './input/config/empty.toml'),
          ['empty.toml'],
          path.join(__dirname, './input/config/'),
        )
      )?.config,
      {},
    );
  });

  it('should load with js', async () => {
    assert.deepEqual(
      (
        await loadConfig(
          fs,
          path.join(__dirname, './input/config/config.js'),
          ['config.js'],
          path.join(__dirname, './input/config/'),
        )
      )?.config,
      {
        hoge: 'fuga',
      },
    );
  });

  it('should load with cjs', async () => {
    assert.deepEqual(
      (
        await loadConfig(
          fs,
          path.join(__dirname, './input/config/config.cjs'),
          ['config.cjs'],
          path.join(__dirname, './input/config/'),
        )
      )?.config,
      {
        hoge: 'fuga',
      },
    );
  });

  it('should load without an extension as json', async () => {
    assert.deepEqual(
      (
        await loadConfig(
          fs,
          path.join(__dirname, './input/config/.testrc'),
          ['.testrc'],
          path.join(__dirname, './input/config/'),
        )
      )?.config,
      {
        hoge: 'fuga',
      },
    );
  });
});
