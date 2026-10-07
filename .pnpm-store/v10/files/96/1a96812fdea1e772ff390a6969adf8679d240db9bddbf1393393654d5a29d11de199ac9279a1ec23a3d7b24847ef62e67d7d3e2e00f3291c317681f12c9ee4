"use strict";

exports.__esModule = true;
exports.htmlReducer = htmlReducer;
const FLAG_DIRTY_CLEARED_CACHE = 0b0000001;
const FLAG_DIRTY_NEW_ENTRY = 0b0000010;
const FLAG_DIRTY_DATA_CHANGED = 0b0000100;
const FLAG_DIRTY_STATIC_QUERY_FIRST_RUN = 0b0001000;
const FLAG_DIRTY_STATIC_QUERY_RESULT_CHANGED = 0b0010000;
const FLAG_DIRTY_BROWSER_COMPILATION_HASH = 0b0100000;
const FLAG_DIRTY_SSR_COMPILATION_HASH = 0b1000000;
function initialState() {
  return {
    trackedHtmlFiles: new Map(),
    slicesProps: {
      bySliceId: new Map(),
      byPagePath: new Map(),
      bySliceName: new Map()
    },
    browserCompilationHash: ``,
    ssrCompilationHash: ``,
    trackedStaticQueryResults: new Map(),
    unsafeBuiltinWasUsedInSSR: false,
    templateCompilationHashes: {},
    pagesThatNeedToStitchSlices: new Set()
  };
}
function htmlReducer(state = initialState(), action) {
  switch (action.type) {
    case `DELETE_CACHE`:
      {
        if (action.cacheIsCorrupt) {
          // `public` doesn't exist so we can start fresh
          return initialState();
        } else {
          // we can't just clear the cache here - we want to keep track of pages, so we mark them all as "deleted"
          // if they are recreated "isDeleted" flag will be removed
          state.browserCompilationHash = ``;
          state.ssrCompilationHash = ``;
          state.templateCompilationHashes = {};
          state.trackedStaticQueryResults.clear();
          state.unsafeBuiltinWasUsedInSSR = false;
          state.trackedHtmlFiles.forEach(htmlFile => {
            htmlFile.isDeleted = true;
            // there was a change somewhere, so just in case we mark those files are dirty as well
            htmlFile.dirty |= FLAG_DIRTY_CLEARED_CACHE;
          });
          // slice html don't need to be deleted, they are just cleared
          state.slicesProps = {
            bySliceId: new Map(),
            byPagePath: new Map(),
            bySliceName: new Map()
          };
          state.pagesThatNeedToStitchSlices = new Set();
          return state;
        }
      }
    case `CREATE_PAGE`:
      {
        // CREATE_PAGE can be called even if page already exist, so we only want to do anything
        // if we don't track given page yet or if page is marked as deleted
        const {
          path
        } = action.payload;
        let htmlFile = state.trackedHtmlFiles.get(path);
        if (!htmlFile) {
          htmlFile = {
            dirty: FLAG_DIRTY_NEW_ENTRY,
            isDeleted: false,
            pageDataHash: ``
          };
          state.trackedHtmlFiles.set(path, htmlFile);
        } else if (htmlFile.isDeleted) {
          // page was recreated so we remove `isDeleted` flag
          // TBD if dirtiness need to change
          htmlFile.isDeleted = false;
        }
        return state;
      }
    case `CREATE_SLICE`:
      {
        const existing = state.slicesProps.bySliceName.get(action.payload.name);
        if (!existing) {
          state.slicesProps.bySliceName.set(action.payload.name, {
            dirty: FLAG_DIRTY_NEW_ENTRY,
            props: new Set(),
            sliceDataHash: ``
          });
        }
        return state;
      }
    case `DELETE_PAGE`:
      {
        const {
          path
        } = action.payload;
        const htmlFile = state.trackedHtmlFiles.get(path);
        if (!htmlFile) {
          // invariant
          throw new Error(`[html reducer] how can I delete page that wasn't created (?)`);
        }
        htmlFile.isDeleted = true;
        // TBD if dirtiness need to change
        return state;
      }
    case `PAGE_QUERY_RUN`:
      {
        // Despite action name, this action is actually emitted for both page and static queries.
        // In here we actually only care about static query result (particularly its hash).
        // We don't care about page query result because we don't actually use page query result
        // directly when generating html. We care about page-data (which contains page query result).
        // Handling of page-data that transitively handles page query result is done in handler for
        // `ADD_PAGE_DATA_STATS` action.
        if (action.payload.queryType === `static`) {
          // static query case
          let staticQueryResult = state.trackedStaticQueryResults.get(action.payload.queryHash);
          if (!staticQueryResult) {
            staticQueryResult = {
              dirty: FLAG_DIRTY_STATIC_QUERY_FIRST_RUN,
              staticQueryResultHash: action.payload.resultHash
            };
            state.trackedStaticQueryResults.set(action.payload.queryHash, staticQueryResult);
          } else if (staticQueryResult.staticQueryResultHash !== action.payload.resultHash) {
            staticQueryResult.dirty |= FLAG_DIRTY_STATIC_QUERY_RESULT_CHANGED;
            staticQueryResult.staticQueryResultHash = action.payload.resultHash;
          }
        }
        return state;
      }
    case `ADD_PAGE_DATA_STATS`:
      {
        const htmlFile = state.trackedHtmlFiles.get(action.payload.pagePath);
        if (!htmlFile) {
          // invariant
          throw new Error(`[html reducer] I received event that query for a page finished running, but I'm not aware of the page it ran for (?)`);
        }
        if (htmlFile.pageDataHash !== action.payload.pageDataHash) {
          htmlFile.pageDataHash = action.payload.pageDataHash;
          htmlFile.dirty |= FLAG_DIRTY_DATA_CHANGED;
        }
        return state;
      }
    case `SET_WEBPACK_COMPILATION_HASH`:
      {
        if (!("5" === `5` && process.env.GATSBY_SLICES)) {
          if (state.browserCompilationHash !== action.payload) {
            state.browserCompilationHash = action.payload;
            state.trackedHtmlFiles.forEach(htmlFile => {
              htmlFile.dirty |= FLAG_DIRTY_BROWSER_COMPILATION_HASH;
            });
          }
        }
        return state;
      }
    case `ADD_SLICE_DATA_STATS`:
      {
        const sliceProps = state.slicesProps.bySliceName.get(action.payload.sliceName);
        if (!sliceProps) {
          throw new Error(`no slice props for ${action.payload.sliceName}`);
        }
        if (sliceProps.sliceDataHash !== action.payload.sliceDataHash) {
          sliceProps.sliceDataHash = action.payload.sliceDataHash;
          sliceProps.dirty |= FLAG_DIRTY_DATA_CHANGED;
        }
        return state;
      }
    case `SET_SSR_TEMPLATE_WEBPACK_COMPILATION_HASH`:
      {
        if (state.templateCompilationHashes[action.payload.templatePath] !== action.payload.templateHash) {
          state.templateCompilationHashes[action.payload.templatePath] = action.payload.templateHash;
          if (action.payload.isSlice) {
            for (const sliceName of action.payload.pages) {
              const sliceTemplate = state.slicesProps.bySliceName.get(sliceName);
              if (sliceTemplate) {
                sliceTemplate.dirty |= FLAG_DIRTY_SSR_COMPILATION_HASH;
              }
            }
          } else {
            if (action.payload.pages) {
              action.payload.pages.forEach(pagePath => {
                const htmlFile = state.trackedHtmlFiles.get(pagePath);
                if (htmlFile) {
                  htmlFile.dirty |= FLAG_DIRTY_SSR_COMPILATION_HASH;
                }
              });
            } else {
              process.stdout.write(`---no pages for:\n${JSON.stringify(action.payload, null, 2)}\n`);
            }
          }
        }
        return state;
      }
    case `SET_SSR_WEBPACK_COMPILATION_HASH`:
      {
        if (state.ssrCompilationHash !== action.payload) {
          state.ssrCompilationHash = action.payload;
          // we will mark every html file as dirty, so we can safely reset
          // unsafeBuiltinWasUsedInSSR flag, which might be set again if
          // ssr bundle continue to use those
          state.unsafeBuiltinWasUsedInSSR = false;
          state.trackedHtmlFiles.forEach(htmlFile => {
            htmlFile.dirty |= FLAG_DIRTY_SSR_COMPILATION_HASH;
          });
        }
        return state;
      }
    case `HTML_REMOVED`:
      {
        state.trackedHtmlFiles.delete(action.payload);
        return state;
      }
    case `HTML_TRACKED_PAGES_CLEANUP`:
      {
        // this is to cleanup variants of page paths that don't result in artifacts deletion
        // but page path should be pruned for cases like page changing path from "/foo" to "/foo/" (or vice versa)
        // where produced artifacts filenames are the same and we don't want to delete them after building,
        // but we still want to cleanup state here.
        for (const path of action.payload) {
          state.trackedHtmlFiles.delete(path);
        }
        return state;
      }
    case `HTML_GENERATED`:
      {
        for (const path of action.payload) {
          const htmlFile = state.trackedHtmlFiles.get(path);
          if (htmlFile) {
            htmlFile.dirty = 0;
            // if we regenerated html, slice placeholders will be empty and we will have to fill
            // them in, so we are marking that page for stitching
            state.pagesThatNeedToStitchSlices.add(path);
          }
        }
        return state;
      }
    case `HTML_MARK_DIRTY_BECAUSE_STATIC_QUERY_RESULT_CHANGED`:
      {
        // mark pages as dirty
        for (const path of action.payload.pages) {
          const htmlFile = state.trackedHtmlFiles.get(path);
          if (htmlFile) {
            htmlFile.dirty |= FLAG_DIRTY_STATIC_QUERY_RESULT_CHANGED;
          }
        }
        if ("5" === `5` && process.env.GATSBY_SLICES) {
          // mark slices as dirty
          for (const sliceName of action.payload.slices) {
            const sliceProps = state.slicesProps.bySliceName.get(sliceName);
            if (sliceProps) {
              sliceProps.dirty |= FLAG_DIRTY_STATIC_QUERY_RESULT_CHANGED;
            }
          }
        }

        // mark static queries as not dirty anymore (we flushed their dirtiness into pages)
        for (const staticQueryHash of action.payload.staticQueryHashes) {
          const staticQueryResult = state.trackedStaticQueryResults.get(staticQueryHash);
          if (staticQueryResult) {
            staticQueryResult.dirty = 0;
          }
        }
        if ("5" === `5` && process.env.GATSBY_SLICES) {
          // loop through slice names and mark their slice props as dirty
          for (const sliceNameInfo of state.slicesProps.bySliceName.values()) {
            if (sliceNameInfo.dirty) {
              for (const sliceId of sliceNameInfo.props) {
                const slicePropInfo = state.slicesProps.bySliceId.get(sliceId);
                if (slicePropInfo) {
                  slicePropInfo.dirty |= sliceNameInfo.dirty;
                }
              }
              sliceNameInfo.dirty = 0;
            }
          }
        }
        return state;
      }
    case `SSR_USED_UNSAFE_BUILTIN`:
      {
        state.unsafeBuiltinWasUsedInSSR = true;
        return state;
      }
    case `SET_SLICES_PROPS`:
      {
        for (const [pagePath, slicesDataBySliceId] of Object.entries(action.payload)) {
          const newListOfSlices = new Set();
          for (const [sliceId, {
            props,
            sliceName,
            hasChildren
          }] of Object.entries(slicesDataBySliceId)) {
            newListOfSlices.add(sliceId);
            let sliceInfo = state.slicesProps.bySliceId.get(sliceId);
            if (!sliceInfo) {
              sliceInfo = {
                pages: new Set([pagePath]),
                props,
                sliceName,
                hasChildren,
                dirty: FLAG_DIRTY_NEW_ENTRY
              };
              state.slicesProps.bySliceId.set(sliceId, sliceInfo);
              let existingBySliceName = state.slicesProps.bySliceName.get(sliceName);
              if (!existingBySliceName) {
                existingBySliceName = {
                  dirty: 0,
                  sliceDataHash: ``,
                  props: new Set()
                };
                state.slicesProps.bySliceName.set(sliceName, existingBySliceName);
              }
              existingBySliceName.props.add(sliceId);
            } else {
              sliceInfo.pages.add(pagePath);
              if (hasChildren) {
                sliceInfo.hasChildren = true;
              }
            }
          }
          const oldListOfSlices = state.slicesProps.byPagePath.get(pagePath);
          if (oldListOfSlices) {
            for (const sliceId of oldListOfSlices) {
              if (!newListOfSlices.has(sliceId)) {
                oldListOfSlices.delete(sliceId);
                const sliceInfo = state.slicesProps.bySliceId.get(sliceId);
                if (sliceInfo) {
                  sliceInfo.pages.delete(pagePath);
                }
              }
            }
          }
          state.slicesProps.byPagePath.set(pagePath, newListOfSlices);
        }
        return state;
      }
    case `SLICES_PROPS_REMOVE_STALE`:
      {
        for (const [sliceId, {
          pages,
          sliceName
        }] of state.slicesProps.bySliceId.entries()) {
          if (pages.size <= 0) {
            state.slicesProps.bySliceId.delete(sliceId);
            const slicePropsListForThisSliceName = state.slicesProps.bySliceName.get(sliceName);
            if (slicePropsListForThisSliceName) {
              slicePropsListForThisSliceName.props.delete(sliceId);
            }
          }
        }
        return state;
      }
    case `SLICES_PROPS_RENDERED`:
      {
        for (const {
          sliceId
        } of action.payload) {
          const sliceState = state.slicesProps.bySliceId.get(sliceId);
          if (sliceState) {
            sliceState.dirty = 0;
            for (const pagePath of sliceState.pages) {
              state.pagesThatNeedToStitchSlices.add(pagePath);
            }
          }
        }
        return state;
      }
    case `SLICES_SCRIPTS_REGENERATED`:
      {
        for (const [pagePath, htmlPageState] of state.trackedHtmlFiles) {
          if (!htmlPageState.isDeleted) {
            state.pagesThatNeedToStitchSlices.add(pagePath);
          }
        }
        return state;
      }
    case `SLICES_STITCHED`:
      {
        state.pagesThatNeedToStitchSlices.clear();
        return state;
      }
  }
  return state;
}
//# sourceMappingURL=html.js.map