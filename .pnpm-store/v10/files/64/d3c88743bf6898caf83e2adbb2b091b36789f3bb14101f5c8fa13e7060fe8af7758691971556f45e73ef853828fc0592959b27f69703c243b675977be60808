// @flow

import type {Asset, BundleBehavior} from '@parcel/types';
import type {Graph} from '@parcel/graph';
import type {AssetGraphNode, BundleGraphNode, Environment} from './types';
import {bundleGraphEdgeTypes} from './BundleGraph';
import {requestGraphEdgeTypes} from './RequestTracker';

import path from 'path';
import {fromNodeId} from '@parcel/graph';
import {fromProjectPathRelative} from './projectPath';
import {SpecifierType, Priority} from './types';

const COLORS = {
  root: 'gray',
  asset: 'green',
  dependency: 'orange',
  transformer_request: 'cyan',
  file: 'gray',
  default: 'white',
};

const TYPE_COLORS = {
  // bundle graph
  bundle: 'blue',
  contains: 'grey',
  internal_async: 'orange',
  references: 'red',
  sibling: 'green',
  // asset graph
  // request graph
  invalidated_by_create: 'green',
  invalidated_by_create_above: 'orange',
  invalidate_by_update: 'cyan',
  invalidated_by_delete: 'red',
};

export default async function dumpGraphToGraphViz(
  graph:
    | Graph<AssetGraphNode>
    | Graph<{|
        assets: Set<Asset>,
        sourceBundles: Set<number>,
        bundleBehavior?: ?BundleBehavior,
      |}>
    | Graph<BundleGraphNode>,
  name: string,
  edgeTypes?: typeof bundleGraphEdgeTypes | typeof requestGraphEdgeTypes,
): Promise<void> {
  if (
    process.env.PARCEL_BUILD_ENV === 'production' ||
    process.env.PARCEL_DUMP_GRAPHVIZ == null ||
    // $FlowFixMe
    process.env.PARCEL_DUMP_GRAPHVIZ == false
  ) {
    return;
  }
  let detailedSymbols = process.env.PARCEL_DUMP_GRAPHVIZ === 'symbols';

  const graphviz = require('graphviz');
  const tempy = require('tempy');
  let g = graphviz.digraph('G');
  for (let [id, node] of graph.nodes) {
    let n = g.addNode(nodeId(id));
    // $FlowFixMe default is fine. Not every type needs to be in the map.
    n.set('color', COLORS[node.type || 'default']);
    n.set('shape', 'box');
    n.set('style', 'filled');
    let label;
    if (typeof node === 'string') {
      label = node;
    } else if (node.assets) {
      label = `(${nodeId(id)}), (assetIds: ${[...node.assets]
        .map(a => {
          let arr = a.filePath.split('/');
          return arr[arr.length - 1];
        })
        .join(', ')}) (sourceBundles: ${[...node.sourceBundles].join(
        ', ',
      )}) (bb ${node.bundleBehavior ?? 'none'})`;
    } else if (node.type) {
      label = `[${fromNodeId(id)}] ${node.type || 'No Type'}: [${node.id}]: `;
      if (node.type === 'dependency') {
        label += node.value.specifier;
        let parts = [];
        if (node.value.priority !== Priority.sync) {
          parts.push(
            Object.entries(Priority).find(
              ([, v]) => v === node.value.priority,
            )?.[0],
          );
        }
        if (node.value.isOptional) parts.push('optional');
        if (node.value.specifierType === SpecifierType.url) parts.push('url');
        if (node.hasDeferred) parts.push('deferred');
        if (node.excluded) parts.push('excluded');
        if (parts.length) label += ' (' + parts.join(', ') + ')';
        if (node.value.env) label += ` (${getEnvDescription(node.value.env)})`;
        let depSymbols = node.value.symbols;
        if (detailedSymbols) {
          if (depSymbols) {
            if (depSymbols.size) {
              label +=
                '\\nsymbols: ' +
                [...depSymbols].map(([e, {local}]) => [e, local]).join(';');
            }
            let weakSymbols = [...depSymbols]
              .filter(([, {isWeak}]) => isWeak)
              .map(([s]) => s);
            if (weakSymbols.length) {
              label += '\\nweakSymbols: ' + weakSymbols.join(',');
            }
            if (node.usedSymbolsUp.size > 0) {
              label +=
                '\\nusedSymbolsUp: ' +
                [...node.usedSymbolsUp]
                  .map(([s, sAsset]) =>
                    sAsset
                      ? `${s}(${sAsset.asset}.${sAsset.symbol ?? ''})`
                      : sAsset === null
                      ? `${s}(external)`
                      : `${s}(ambiguous)`,
                  )
                  .join(',');
            }
            if (node.usedSymbolsDown.size > 0) {
              label +=
                '\\nusedSymbolsDown: ' + [...node.usedSymbolsDown].join(',');
            }
          } else {
            label += '\\nsymbols: cleared';
          }
        }
      } else if (node.type === 'asset') {
        label +=
          path.basename(fromProjectPathRelative(node.value.filePath)) +
          '#' +
          node.value.type;
        if (detailedSymbols) {
          if (!node.value.symbols) {
            label += '\\nsymbols: cleared';
          } else if (node.value.symbols.size) {
            label +=
              '\\nsymbols: ' +
              [...node.value.symbols]
                .map(([e, {local}]) => [e, local])
                .join(';');
          }
          if (node.usedSymbols.size) {
            label += '\\nusedSymbols: ' + [...node.usedSymbols].join(',');
          }
        } else {
          label += '\\nsymbols: cleared';
        }
      } else if (node.type === 'asset_group') {
        if (node.deferred) label += '(deferred)';
      } else if (node.type === 'file') {
        label += path.basename(node.value.filePath);
      } else if (node.type === 'transformer_request') {
        label +=
          path.basename(node.value.filePath) +
          ` (${getEnvDescription(node.value.env)})`;
      } else if (node.type === 'bundle') {
        let parts = [];
        if (node.value.needsStableName) parts.push('stable name');
        parts.push(node.value.name);
        parts.push('bb:' + (node.value.bundleBehavior ?? 'null'));
        if (parts.length) label += ' (' + parts.join(', ') + ')';
        if (node.value.env) label += ` (${getEnvDescription(node.value.env)})`;
      } else if (node.type === 'request') {
        label = node.value.type + ':' + node.id;
      }
    }
    n.set('label', label);
  }

  let edgeNames;
  if (edgeTypes) {
    edgeNames = Object.fromEntries(
      Object.entries(edgeTypes).map(([k, v]) => [v, k]),
    );
  }

  for (let edge of graph.getAllEdges()) {
    let gEdge = g.addEdge(nodeId(edge.from), nodeId(edge.to));
    let color = null;
    if (edge.type != 1 && edgeNames) {
      color = TYPE_COLORS[edgeNames[edge.type]];
    }
    if (color != null) {
      gEdge.set('color', color);
    }
  }
  let tmp = tempy.file({name: `${name}.png`});
  await g.output('png', tmp);
  // eslint-disable-next-line no-console
  console.log('Dumped', tmp);
}

function nodeId(id) {
  // $FlowFixMe
  return `node${id}`;
}

function getEnvDescription(env: Environment) {
  let description;
  if (typeof env.engines.browsers === 'string') {
    description = `${env.context}: ${env.engines.browsers}`;
  } else if (Array.isArray(env.engines.browsers)) {
    description = `${env.context}: ${env.engines.browsers.join(', ')}`;
  } else if (env.engines.node) {
    description = `node: ${env.engines.node}`;
  } else if (env.engines.electron) {
    description = `electron: ${env.engines.electron}`;
  }

  return description ?? '';
}
