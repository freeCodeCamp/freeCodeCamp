import { parse } from 'graphql';

import {
  DocumentNode,
  DefinitionNode,
  Location,
} from 'graphql/language/ast';

// A map docString -> graphql document
const docCache = new Map<string, DocumentNode>();

// A map fragmentName -> [normalized source]
const fragmentSourceMap = new Map<string, Set<string>>();

let printFragmentWarnings = true;
let experimentalFragmentVariables = false;

// Strip insignificant whitespace
// Note that this could do a lot more, such as reorder fields etc.
function normalize(string: string) {
  return string.replace(/[\s,]+/g, ' ').trim();
}

function cacheKeyFromLoc(loc: Location) {
  return normalize(loc.source.body.substring(loc.start, loc.end));
}

// Take a unstripped parsed document (query/mutation or even fragment), and
// check all fragment definitions, checking for name->source uniqueness.
// We also want to make sure only unique fragments exist in the document.
function processFragments(ast: DocumentNode) {
  const seenKeys = new Set<string>();
  const definitions: DefinitionNode[] = [];

  ast.definitions.forEach(fragmentDefinition => {
    if (fragmentDefinition.kind === 'FragmentDefinition') {
      var fragmentName = fragmentDefinition.name.value;
      var sourceKey = cacheKeyFromLoc(fragmentDefinition.loc!);

      // We know something about this fragment
      let sourceKeySet = fragmentSourceMap.get(fragmentName)!;
      if (sourceKeySet && !sourceKeySet.has(sourceKey)) {
        // this is a problem because the app developer is trying to register another fragment with
        // the same name as one previously registered. So, we tell them about it.
        if (printFragmentWarnings) {
          console.warn("Warning: fragment with name " + fragmentName + " already exists.\n"
            + "graphql-tag enforces all fragment names across your application to be unique; read more about\n"
            + "this in the docs: http://dev.apollodata.com/core/fragments.html#unique-names");
        }
      } else if (!sourceKeySet) {
        fragmentSourceMap.set(fragmentName, sourceKeySet = new Set);
      }

      sourceKeySet.add(sourceKey);

      if (!seenKeys.has(sourceKey)) {
        seenKeys.add(sourceKey);
        definitions.push(fragmentDefinition);
      }
    } else {
      definitions.push(fragmentDefinition);
    }
  });

  return {
    ...ast,
    definitions,
  };
}

function stripLoc(doc: DocumentNode) {
  const workSet = new Set<Record<string, any>>(doc.definitions);

  workSet.forEach(node => {
    if (node.loc) delete node.loc;
    Object.keys(node).forEach(key => {
      const value = node[key];
      if (value && typeof value === 'object') {
        workSet.add(value);
      }
    });
  });

  const loc = doc.loc as Record<string, any>;
  if (loc) {
    delete loc.startToken;
    delete loc.endToken;
  }

  return doc;
}

function parseDocument(source: string) {
  var cacheKey = normalize(source);
  if (!docCache.has(cacheKey)) {
    const parsed = parse(source, {
      experimentalFragmentVariables,
      allowLegacyFragmentVariables: experimentalFragmentVariables,
    } as any);
    if (!parsed || parsed.kind !== 'Document') {
      throw new Error('Not a valid GraphQL document.');
    }
    docCache.set(
      cacheKey,
      // check that all "new" fragments inside the documents are consistent with
      // existing fragments of the same name
      stripLoc(processFragments(parsed)),
    );
  }
  return docCache.get(cacheKey)!;
}

// XXX This should eventually disallow arbitrary string interpolation, like Relay does
export function gql(
  literals: string | readonly string[],
  ...args: any[]
) {

  if (typeof literals === 'string') {
    literals = [literals];
  }

  let result = literals[0];

  args.forEach((arg, i) => {
    if (arg && arg.kind === 'Document') {
      result += arg.loc.source.body;
    } else {
      result += arg;
    }
    result += literals[i + 1];
  });

  return parseDocument(result);
}

export function resetCaches() {
  docCache.clear();
  fragmentSourceMap.clear();
}

export function disableFragmentWarnings() {
  printFragmentWarnings = false;
}

export function enableExperimentalFragmentVariables() {
  experimentalFragmentVariables = true;
}

export function disableExperimentalFragmentVariables() {
  experimentalFragmentVariables = false;
}

const extras = {
  gql,
  resetCaches,
  disableFragmentWarnings,
  enableExperimentalFragmentVariables,
  disableExperimentalFragmentVariables,
};

export namespace gql {
  export const {
    gql,
    resetCaches,
    disableFragmentWarnings,
    enableExperimentalFragmentVariables,
    disableExperimentalFragmentVariables,
  } = extras;
}

gql.default = gql;

export default gql;
