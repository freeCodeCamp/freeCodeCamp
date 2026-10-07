// @flow strict-local

import assert from 'assert';
import {createEnvironment} from '../src/Environment';

describe('Environment', () => {
  it('assigns a default environment with nothing passed', () => {
    assert.deepEqual(createEnvironment(), {
      id: 'c242f987e3544367',
      context: 'browser',
      engines: {
        browsers: ['> 0.25%'],
      },
      includeNodeModules: true,
      outputFormat: 'global',
      isLibrary: false,
      shouldOptimize: false,
      shouldScopeHoist: false,
      sourceMap: undefined,
      loc: undefined,
      sourceType: 'module',
    });
  });

  it('assigns a node context if a node engine is given', () => {
    assert.deepEqual(createEnvironment({engines: {node: '>= 10.0.0'}}), {
      id: '69e0ab7220ee8f7a',
      context: 'node',
      engines: {
        node: '>= 10.0.0',
      },
      includeNodeModules: false,
      outputFormat: 'commonjs',
      isLibrary: false,
      shouldOptimize: false,
      shouldScopeHoist: false,
      sourceMap: undefined,
      loc: undefined,
      sourceType: 'module',
    });
  });

  it('assigns a browser context if browser engines are given', () => {
    assert.deepEqual(
      createEnvironment({engines: {browsers: ['last 1 version']}}),
      {
        id: '4b5c9005af8c5b19',
        context: 'browser',
        engines: {
          browsers: ['last 1 version'],
        },
        includeNodeModules: true,
        outputFormat: 'global',
        isLibrary: false,
        shouldOptimize: false,
        shouldScopeHoist: false,
        sourceMap: undefined,
        loc: undefined,
        sourceType: 'module',
      },
    );
  });

  it('assigns default engines for node', () => {
    assert.deepEqual(createEnvironment({context: 'node'}), {
      id: 'f7c9644283a8698f',
      context: 'node',
      engines: {
        node: '>= 8.0.0',
      },
      includeNodeModules: false,
      outputFormat: 'commonjs',
      isLibrary: false,
      shouldOptimize: false,
      shouldScopeHoist: false,
      sourceMap: undefined,
      loc: undefined,
      sourceType: 'module',
    });
  });

  it('assigns default engines for browsers', () => {
    assert.deepEqual(createEnvironment({context: 'browser'}), {
      id: 'c242f987e3544367',
      context: 'browser',
      engines: {
        browsers: ['> 0.25%'],
      },
      includeNodeModules: true,
      outputFormat: 'global',
      isLibrary: false,
      shouldOptimize: false,
      shouldScopeHoist: false,
      sourceMap: undefined,
      loc: undefined,
      sourceType: 'module',
    });
  });
});
