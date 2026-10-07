// @flow strict-local
import assert from 'assert';
import invariant from 'assert';
import nullthrows from 'nullthrows';
import AssetGraph, {
  nodeFromAssetGroup,
  nodeFromDep,
  nodeFromEntryFile,
  nodeFromAsset,
} from '../src/AssetGraph';
import {createDependency as _createDependency} from '../src/Dependency';
import {createAsset as _createAsset} from '../src/assetUtils';
import {DEFAULT_ENV, DEFAULT_TARGETS} from './test-utils';
import {toProjectPath as _toProjectPath} from '../src/projectPath';

const stats = {size: 0, time: 0};

function createAsset(opts) {
  return _createAsset('/', opts);
}

function createDependency(opts) {
  return _createDependency('/', opts);
}

function toProjectPath(p) {
  return _toProjectPath('/', p);
}

describe('AssetGraph', () => {
  it('initialization should create one root node with edges to entry_specifier nodes for each entry', () => {
    let graph = new AssetGraph();
    graph.setRootConnections({
      entries: [
        toProjectPath('/path/to/index1'),
        toProjectPath('/path/to/index2'),
      ],
    });

    assert(graph.hasNode(nullthrows(graph.rootNodeId)));
    assert(graph.hasContentKey('entry_specifier:path/to/index1'));
    assert(graph.hasContentKey('entry_specifier:path/to/index2'));
  });

  it('resolveEntry should connect an entry_specifier node to entry_file nodes', () => {
    let graph = new AssetGraph();
    graph.setRootConnections({
      entries: [
        toProjectPath('/path/to/index1'),
        toProjectPath('/path/to/index2'),
      ],
    });

    graph.resolveEntry(
      toProjectPath('/path/to/index1'),
      [
        {
          filePath: toProjectPath('/path/to/index1/src/main.js'),
          packagePath: toProjectPath('/path/to/index1'),
        },
      ],
      '123',
    );

    assert(
      graph.hasContentKey(
        nodeFromEntryFile({
          filePath: toProjectPath('/path/to/index1/src/main.js'),
          packagePath: toProjectPath('/path/to/index1'),
        }).id,
      ),
    );
    assert(
      graph.hasEdge(
        graph.getNodeIdByContentKey('entry_specifier:path/to/index1'),
        graph.getNodeIdByContentKey(
          nodeFromEntryFile({
            filePath: toProjectPath('/path/to/index1/src/main.js'),
            packagePath: toProjectPath('/path/to/index1'),
          }).id,
        ),
      ),
    );
  });

  it('resolveTargets should connect an entry_file node to dependencies for each target', () => {
    let graph = new AssetGraph();
    graph.setRootConnections({
      entries: [
        toProjectPath('/path/to/index1'),
        toProjectPath('/path/to/index2'),
      ],
    });

    graph.resolveEntry(
      toProjectPath('/path/to/index1'),
      [
        {
          filePath: toProjectPath('/path/to/index1/src/main.js'),
          packagePath: toProjectPath('/path/to/index1'),
        },
      ],
      '1',
    );
    graph.resolveEntry(
      toProjectPath('/path/to/index2'),
      [
        {
          filePath: toProjectPath('/path/to/index2/src/main.js'),
          packagePath: toProjectPath('/path/to/index2'),
        },
      ],
      '2',
    );

    graph.resolveTargets(
      {
        filePath: toProjectPath('/path/to/index1/src/main.js'),
        packagePath: toProjectPath('/path/to/index1'),
      },
      DEFAULT_TARGETS,
      '3',
    );
    graph.resolveTargets(
      {
        filePath: toProjectPath('/path/to/index2/src/main.js'),
        packagePath: toProjectPath('/path/to/index2'),
      },
      DEFAULT_TARGETS,
      '4',
    );

    assert(
      graph.hasContentKey(
        createDependency({
          specifier: 'path/to/index1/src/main.js',
          specifierType: 'esm',
          target: DEFAULT_TARGETS[0],
          env: DEFAULT_ENV,
        }).id,
      ),
    );
    assert(
      graph.hasContentKey(
        createDependency({
          specifier: 'path/to/index2/src/main.js',
          specifierType: 'esm',
          target: DEFAULT_TARGETS[0],
          env: DEFAULT_ENV,
        }).id,
      ),
    );
    assert.deepEqual(Array.from(graph.getAllEdges()), [
      {
        from: graph.rootNodeId,
        to: graph.getNodeIdByContentKey('entry_specifier:path/to/index1'),
        type: 1,
      },
      {
        from: graph.rootNodeId,
        to: graph.getNodeIdByContentKey('entry_specifier:path/to/index2'),
        type: 1,
      },
      {
        from: graph.getNodeIdByContentKey('entry_specifier:path/to/index1'),
        to: graph.getNodeIdByContentKey(
          nodeFromEntryFile({
            filePath: toProjectPath('/path/to/index1/src/main.js'),
            packagePath: toProjectPath('/path/to/index1'),
          }).id,
        ),
        type: 1,
      },
      {
        from: graph.getNodeIdByContentKey('entry_specifier:path/to/index2'),
        to: graph.getNodeIdByContentKey(
          nodeFromEntryFile({
            filePath: toProjectPath('/path/to/index2/src/main.js'),
            packagePath: toProjectPath('/path/to/index2'),
          }).id,
        ),
        type: 1,
      },
      {
        from: graph.getNodeIdByContentKey(
          nodeFromEntryFile({
            filePath: toProjectPath('/path/to/index1/src/main.js'),
            packagePath: toProjectPath('/path/to/index1'),
          }).id,
        ),
        to: graph.getNodeIdByContentKey(
          createDependency({
            specifier: 'path/to/index1/src/main.js',
            specifierType: 'esm',
            target: DEFAULT_TARGETS[0],
            env: DEFAULT_ENV,
          }).id,
        ),
        type: 1,
      },
      {
        from: graph.getNodeIdByContentKey(
          nodeFromEntryFile({
            filePath: toProjectPath('/path/to/index2/src/main.js'),
            packagePath: toProjectPath('/path/to/index2'),
          }).id,
        ),
        to: graph.getNodeIdByContentKey(
          createDependency({
            specifier: 'path/to/index2/src/main.js',
            specifierType: 'esm',
            target: DEFAULT_TARGETS[0],
            env: DEFAULT_ENV,
          }).id,
        ),
        type: 1,
      },
    ]);
  });

  it('resolveDependency should update the file a dependency is connected to', () => {
    let graph = new AssetGraph();
    graph.setRootConnections({
      targets: DEFAULT_TARGETS,
      entries: [toProjectPath('/path/to/index')],
    });

    graph.resolveEntry(
      toProjectPath('/path/to/index'),
      [
        {
          filePath: toProjectPath('/path/to/index/src/main.js'),
          packagePath: toProjectPath('/path/to/index'),
        },
      ],
      '1',
    );
    graph.resolveTargets(
      {
        filePath: toProjectPath('/path/to/index/src/main.js'),
        packagePath: toProjectPath('/path/to/index'),
      },
      DEFAULT_TARGETS,
      '2',
    );

    let dep = createDependency({
      specifier: 'path/to/index/src/main.js',
      specifierType: 'esm',
      target: DEFAULT_TARGETS[0],
      env: DEFAULT_ENV,
    });
    let req = {
      filePath: toProjectPath('/index.js'),
      env: DEFAULT_ENV,
    };

    graph.resolveDependency(dep, req, '3');
    let assetGroupNodeId = graph.getNodeIdByContentKey(
      nodeFromAssetGroup(req).id,
    );
    let dependencyNodeId = graph.getNodeIdByContentKey(dep.id);
    assert(graph.nodes.has(assetGroupNodeId));
    assert(graph.hasEdge(dependencyNodeId, assetGroupNodeId));

    let req2 = {
      filePath: toProjectPath('/index.jsx'),
      env: DEFAULT_ENV,
    };
    graph.resolveDependency(dep, req2, '4');

    let assetGroupNodeId2 = graph.getNodeIdByContentKey(
      nodeFromAssetGroup(req2).id,
    );
    assert(!graph.nodes.has(assetGroupNodeId));
    assert(graph.nodes.has(assetGroupNodeId2));
    assert(graph.hasEdge(dependencyNodeId, assetGroupNodeId2));
    assert(!graph.hasEdge(dependencyNodeId, assetGroupNodeId));

    graph.resolveDependency(dep, req2, '5');
    assert(graph.nodes.has(assetGroupNodeId2));
    assert(graph.hasEdge(dependencyNodeId, assetGroupNodeId2));
  });

  it('resolveAssetGroup should update the asset and dep nodes a file is connected to', () => {
    let graph = new AssetGraph();
    graph.setRootConnections({
      targets: DEFAULT_TARGETS,
      entries: [toProjectPath('/path/to/index')],
    });

    graph.resolveEntry(
      toProjectPath('/path/to/index'),
      [
        {
          filePath: toProjectPath('/path/to/index/src/main.js'),
          packagePath: toProjectPath('/path/to/index'),
        },
      ],
      '1',
    );
    graph.resolveTargets(
      {
        filePath: toProjectPath('/path/to/index/src/main.js'),
        packagePath: toProjectPath('/path/to/index'),
      },
      DEFAULT_TARGETS,
      '2',
    );

    let dep = createDependency({
      specifier: 'path/to/index/src/main.js',
      specifierType: 'esm',
      target: DEFAULT_TARGETS[0],
      env: DEFAULT_ENV,
      sourcePath: '',
    });
    let sourcePath = '/index.js';
    let filePath = toProjectPath(sourcePath);
    let req = {filePath, env: DEFAULT_ENV};
    graph.resolveDependency(dep, req, '3');
    let assets = [
      createAsset({
        id: '1',
        filePath,
        type: 'js',
        isSource: true,
        hash: '#1',
        stats,
        dependencies: new Map([
          [
            'utils',
            createDependency({
              specifier: './utils',
              specifierType: 'esm',
              env: DEFAULT_ENV,
              sourcePath,
            }),
          ],
        ]),
        env: DEFAULT_ENV,
      }),
      createAsset({
        id: '2',
        filePath,
        type: 'js',
        isSource: true,
        hash: '#2',
        stats,
        dependencies: new Map([
          [
            'styles',
            createDependency({
              specifier: './styles',
              specifierType: 'esm',
              env: DEFAULT_ENV,
              sourcePath,
            }),
          ],
        ]),
        env: DEFAULT_ENV,
      }),
      createAsset({
        id: '3',
        filePath,
        type: 'js',
        isSource: true,
        hash: '#3',
        dependencies: new Map(),
        env: DEFAULT_ENV,
        stats,
      }),
    ];

    graph.resolveAssetGroup(req, assets, '4');

    let nodeId1 = graph.getNodeIdByContentKey('1');
    let nodeId2 = graph.getNodeIdByContentKey('2');
    let nodeId3 = graph.getNodeIdByContentKey('3');

    let assetGroupNode = graph.getNodeIdByContentKey(
      nodeFromAssetGroup(req).id,
    );

    let dependencyNodeId1 = graph.getNodeIdByContentKey(
      [...assets[0].dependencies.values()][0].id,
    );
    let dependencyNodeId2 = graph.getNodeIdByContentKey(
      [...assets[1].dependencies.values()][0].id,
    );

    assert(graph.nodes.has(nodeId1));
    assert(graph.nodes.has(nodeId2));
    assert(graph.nodes.has(nodeId3));
    assert(graph.nodes.has(dependencyNodeId1));
    assert(graph.nodes.has(dependencyNodeId2));
    assert(graph.hasEdge(assetGroupNode, nodeId1));
    assert(graph.hasEdge(assetGroupNode, nodeId2));
    assert(graph.hasEdge(assetGroupNode, nodeId3));
    assert(graph.hasEdge(nodeId1, dependencyNodeId1));
    assert(graph.hasEdge(nodeId2, dependencyNodeId2));

    let assets2 = [
      createAsset({
        id: '1',
        filePath,
        type: 'js',
        isSource: true,
        hash: '#1',
        stats,
        dependencies: new Map([
          [
            'utils',
            createDependency({
              specifier: './utils',
              specifierType: 'esm',
              env: DEFAULT_ENV,
              sourcePath,
            }),
          ],
        ]),
        env: DEFAULT_ENV,
      }),
      createAsset({
        id: '2',
        filePath,
        type: 'js',
        isSource: true,
        hash: '#2',
        stats,
        dependencies: new Map(),
        env: DEFAULT_ENV,
      }),
    ];

    graph.resolveAssetGroup(req, assets2, '5');

    assert(graph.nodes.has(nodeId1));
    assert(graph.nodes.has(nodeId2));
    assert(!graph.nodes.has(nodeId3));
    assert(graph.nodes.has(dependencyNodeId1));
    assert(!graph.nodes.has(dependencyNodeId2));
    assert(graph.hasEdge(assetGroupNode, nodeId1));
    assert(graph.hasEdge(assetGroupNode, nodeId2));
    assert(!graph.hasEdge(assetGroupNode, nodeId3));
    assert(graph.hasEdge(nodeId1, dependencyNodeId1));
    assert(!graph.hasEdge(nodeId2, dependencyNodeId2));
  });

  // Assets can define dependent assets in the same asset group by declaring a dependency with a module
  // specifier that matches the dependent asset's unique key. These dependent assets are then connected
  // to the asset's dependency instead of the asset group.
  it('resolveAssetGroup should handle dependent assets in asset groups', () => {
    let graph = new AssetGraph();
    graph.setRootConnections({
      targets: DEFAULT_TARGETS,
      entries: [toProjectPath('/index')],
    });

    graph.resolveEntry(
      toProjectPath('/index'),
      [
        {
          filePath: toProjectPath('/path/to/index/src/main.js'),
          packagePath: toProjectPath('/path/to/index'),
        },
      ],
      '1',
    );
    graph.resolveTargets(
      {
        filePath: toProjectPath('/path/to/index/src/main.js'),
        packagePath: toProjectPath('/path/to/index'),
      },
      DEFAULT_TARGETS,
      '2',
    );

    let dep = createDependency({
      specifier: 'path/to/index/src/main.js',
      specifierType: 'esm',
      env: DEFAULT_ENV,
      target: DEFAULT_TARGETS[0],
    });
    let sourcePath = '/index.js';
    let filePath = toProjectPath(sourcePath);
    let req = {filePath, env: DEFAULT_ENV};
    graph.resolveDependency(dep, req, '123');
    let dep1 = createDependency({
      specifier: 'dependent-asset-1',
      specifierType: 'esm',
      env: DEFAULT_ENV,
      sourcePath,
    });
    let dep2 = createDependency({
      specifier: 'dependent-asset-2',
      specifierType: 'esm',
      env: DEFAULT_ENV,
      sourcePath,
    });
    let assets = [
      createAsset({
        id: '1',
        filePath,
        type: 'js',
        isSource: true,
        hash: '#1',
        stats,
        dependencies: new Map([['dep1', dep1]]),
        env: DEFAULT_ENV,
      }),
      createAsset({
        id: '2',
        uniqueKey: 'dependent-asset-1',
        filePath,
        type: 'js',
        isSource: true,
        hash: '#1',
        stats,
        dependencies: new Map([['dep2', dep2]]),
        env: DEFAULT_ENV,
      }),
      createAsset({
        id: '3',
        uniqueKey: 'dependent-asset-2',
        filePath,
        type: 'js',
        isSource: true,
        hash: '#1',
        stats,
        env: DEFAULT_ENV,
      }),
    ];

    graph.resolveAssetGroup(req, assets, '3');

    let nodeId1 = graph.getNodeIdByContentKey('1');
    let nodeId2 = graph.getNodeIdByContentKey('2');
    let nodeId3 = graph.getNodeIdByContentKey('3');

    let assetGroupNodeId = graph.getNodeIdByContentKey(
      nodeFromAssetGroup(req).id,
    );

    let depNodeId1 = graph.getNodeIdByContentKey(nodeFromDep(dep1).id);
    let depNodeId2 = graph.getNodeIdByContentKey(nodeFromDep(dep2).id);

    assert(nodeId1);
    assert(nodeId2);
    assert(nodeId3);
    assert(graph.hasEdge(assetGroupNodeId, nodeId1));
    assert(!graph.hasEdge(assetGroupNodeId, nodeId2));
    assert(!graph.hasEdge(assetGroupNodeId, nodeId3));
    assert(graph.hasEdge(nodeId1, depNodeId1));
    assert(graph.hasEdge(depNodeId1, nodeId2));
    assert(graph.hasEdge(nodeId2, depNodeId2));
    assert(graph.hasEdge(depNodeId2, nodeId3));
  });

  it('should support marking and unmarking all parents with hasDeferred', () => {
    let graph = new AssetGraph();

    // index
    let indexAssetGroup = {
      filePath: toProjectPath('/index.js'),
      env: DEFAULT_ENV,
    };
    graph.setRootConnections({assetGroups: [indexAssetGroup]});
    let indexFooDep = createDependency({
      specifier: './foo',
      specifierType: 'esm',
      env: DEFAULT_ENV,
      sourcePath: '/index.js',
    });
    let indexBarDep = createDependency({
      specifier: './bar',
      specifierType: 'esm',
      env: DEFAULT_ENV,
      sourcePath: '/index.js',
    });
    let indexAsset = createAsset({
      id: 'assetIndex',
      filePath: toProjectPath('/index.js'),
      type: 'js',
      isSource: true,
      hash: '#4',
      stats,
      dependencies: new Map([
        ['./foo', indexFooDep],
        ['./bar', indexBarDep],
      ]),
      env: DEFAULT_ENV,
    });
    graph.resolveAssetGroup(indexAssetGroup, [indexAsset], '0');

    // index imports foo
    let fooAssetGroup = {
      filePath: toProjectPath('/foo.js'),
      env: DEFAULT_ENV,
    };
    graph.resolveDependency(indexFooDep, fooAssetGroup, '0');
    let fooAssetGroupNode = nodeFromAssetGroup(fooAssetGroup);
    let fooUtilsDep = createDependency({
      specifier: './utils',
      specifierType: 'esm',
      env: DEFAULT_ENV,
      sourcePath: '/foo.js',
    });
    let fooUtilsDepNode = nodeFromDep(fooUtilsDep);
    let fooAsset = createAsset({
      id: 'assetFoo',
      filePath: toProjectPath('/foo.js'),
      type: 'js',
      isSource: true,
      hash: '#1',
      stats,
      dependencies: new Map([['./utils', fooUtilsDep]]),
      env: DEFAULT_ENV,
    });
    let fooAssetNode = nodeFromAsset(fooAsset);
    graph.resolveAssetGroup(fooAssetGroup, [fooAsset], '0');
    let utilsAssetGroup = {
      filePath: toProjectPath('/utils.js'),
      env: DEFAULT_ENV,
    };
    let utilsAssetGroupNode = nodeFromAssetGroup(utilsAssetGroup);
    graph.resolveDependency(fooUtilsDep, utilsAssetGroup, '0');

    // foo's dependency is deferred
    graph.markParentsWithHasDeferred(
      graph.getNodeIdByContentKey(fooUtilsDepNode.id),
    );
    let node = nullthrows(graph.getNodeByContentKey(fooAssetNode.id));
    invariant(node.type === 'asset');
    assert(node.hasDeferred);
    node = nullthrows(graph.getNodeByContentKey(fooAssetGroupNode.id));
    invariant(node.type === 'asset_group');
    assert(node.hasDeferred);

    // index also imports bar
    let barAssetGroup = {
      filePath: toProjectPath('/bar.js'),
      env: DEFAULT_ENV,
    };
    graph.resolveDependency(indexBarDep, barAssetGroup, '0');
    let barAssetGroupNode = nodeFromAssetGroup(barAssetGroup);
    let barUtilsDep = createDependency({
      specifier: './utils',
      specifierType: 'esm',
      env: DEFAULT_ENV,
      sourcePath: '/bar.js',
    });
    let barAsset = createAsset({
      id: 'assetBar',
      filePath: toProjectPath('/bar.js'),
      type: 'js',
      isSource: true,
      hash: '#2',
      stats,
      dependencies: new Map([['./utils', barUtilsDep]]),
      env: DEFAULT_ENV,
    });
    let barAssetNode = nodeFromAsset(barAsset);
    graph.resolveAssetGroup(barAssetGroup, [barAsset], '3');
    graph.resolveDependency(barUtilsDep, utilsAssetGroup, '4');

    // bar undeferres utils
    graph.unmarkParentsWithHasDeferred(
      graph.getNodeIdByContentKey(utilsAssetGroupNode.id),
    );
    node = nullthrows(graph.getNodeByContentKey(fooUtilsDep.id));
    invariant(node.type === 'dependency');
    assert(!node.hasDeferred);
    node = nullthrows(graph.getNodeByContentKey(fooAssetNode.id));
    invariant(node.type === 'asset');
    assert(!node.hasDeferred);
    node = nullthrows(graph.getNodeByContentKey(fooAssetGroupNode.id));
    invariant(node.type === 'asset_group');
    assert(!node.hasDeferred);
    node = nullthrows(graph.getNodeByContentKey(barUtilsDep.id));
    invariant(node.type === 'dependency');
    assert(!node.hasDeferred);
    node = nullthrows(graph.getNodeByContentKey(barAssetNode.id));
    invariant(node.type === 'asset');
    assert(!node.hasDeferred);
    node = nullthrows(graph.getNodeByContentKey(barAssetGroupNode.id));
    invariant(node.type === 'asset_group');
    assert(!node.hasDeferred);
  });
});
