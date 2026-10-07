"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.websocketManager = exports.WebsocketManager = void 0;
var _redux = require("../redux");
var _internal = require("../redux/actions/internal");
var _url = _interopRequireDefault(require("url"));
var _findPageByPath = require("./find-page-by-path");
var _socket = require("socket.io");
var _pageMode = require("./page-mode");
/* eslint-disable no-invalid-this */

class WebsocketManager {
  activePaths = new Set();
  clients = new Set();
  errors = new Map();
  staticQueryResults = new Map();
  init = ({
    server
  }) => {
    // make typescript happy, else it complained about this.websocket being undefined
    const websocket = new _socket.Server(server, {
      // we see ping-pong timeouts on gatsby-cloud when socket.io is running for a while
      // increasing it should help
      // @see https://github.com/socketio/socket.io/issues/3259#issuecomment-448058937
      pingTimeout: 30000,
      // whitelist all (https://github.com/expressjs/cors#configuration-options)
      cors: {
        origin: true
      },
      cookie: true
    });
    this.websocket = websocket;
    const updateServerActivePaths = () => {
      const serverActivePaths = new Set();
      for (const client of this.clients) {
        if (client.activePath) {
          serverActivePaths.add(client.activePath);
        }
      }
      this.activePaths = serverActivePaths;
    };
    websocket.on(`connection`, socket => {
      var _socket$handshake, _socket$handshake$hea;
      const clientInfo = {
        activePath: null,
        socket
      };
      this.clients.add(clientInfo);
      const setActivePath = (newActivePath, fallbackTo404 = false) => {
        let activePagePath = null;
        if (newActivePath) {
          const page = (0, _findPageByPath.findPageByPath)(_redux.store.getState(), newActivePath, fallbackTo404);
          if (page) {
            // when it's SSR we don't want to return the page path but the actualy url used,
            // this is necessary when matchPaths are used.
            if ((0, _pageMode.getPageMode)(page) === `SSR`) {
              activePagePath = newActivePath;
            } else {
              activePagePath = page.path;
            }
          }
        }
        clientInfo.activePath = activePagePath;
        updateServerActivePaths();
      };
      if (socket !== null && socket !== void 0 && (_socket$handshake = socket.handshake) !== null && _socket$handshake !== void 0 && (_socket$handshake$hea = _socket$handshake.headers) !== null && _socket$handshake$hea !== void 0 && _socket$handshake$hea.referer) {
        const path = _url.default.parse(socket.handshake.headers.referer).path;
        setActivePath(path, true);
      }
      this.errors.forEach((message, errorID) => {
        socket.send({
          type: `overlayError`,
          payload: {
            id: errorID,
            message
          }
        });
      });
      socket.on(`registerPath`, path => {
        setActivePath(path, true);
      });
      socket.on(`disconnect`, () => {
        setActivePath(null);
        this.clients.delete(clientInfo);
      });
      socket.on(`unregisterPath`, _path => {
        setActivePath(null);
      });
    });
    if (process.env.GATSBY_QUERY_ON_DEMAND) {
      // page-data marked stale due to dirty query tracking
      const boundEmitStalePageDataPathsFromDirtyQueryTracking = this.emitStalePageDataPathsFromDirtyQueryTracking.bind(this);
      _redux.emitter.on(`CREATE_PAGE`, boundEmitStalePageDataPathsFromDirtyQueryTracking);
      _redux.emitter.on(`CREATE_NODE`, boundEmitStalePageDataPathsFromDirtyQueryTracking);
      _redux.emitter.on(`DELETE_NODE`, boundEmitStalePageDataPathsFromDirtyQueryTracking);
      _redux.emitter.on(`QUERY_EXTRACTED`, boundEmitStalePageDataPathsFromDirtyQueryTracking);
    }

    // page-data marked stale due to static query hashes change
    _redux.emitter.on(`ADD_PENDING_TEMPLATE_DATA_WRITE`, this.emitStalePageDataPathsFromStaticQueriesAssignment.bind(this));
    return websocket;
  };
  getSocket = () => this.websocket;
  emitStaticQueryData = data => {
    this.staticQueryResults.set(data.id, data);
    if (this.websocket) {
      this.websocket.send({
        type: `staticQueryResult`,
        payload: data
      });
    }
  };
  emitPageData = data => {
    if (this.websocket) {
      this.websocket.send({
        type: `pageQueryResult`,
        payload: data
      });
    }
  };
  emitSliceData = data => {
    if (this.websocket) {
      this.websocket.send({
        type: `sliceQueryResult`,
        payload: data
      });
    }
  };
  emitError = (id, message) => {
    if (message) {
      this.errors.set(id, message);
    } else {
      this.errors.delete(id);
    }
    if (this.websocket) {
      this.websocket.send({
        type: `overlayError`,
        payload: {
          id,
          message
        }
      });
    }
  };
  emitStalePageDataPathsFromDirtyQueryTracking() {
    const dirtyQueries = _redux.store.getState().queries.dirtyQueriesListToEmitViaWebsocket;
    if (this.emitStalePageDataPaths(dirtyQueries)) {
      _redux.store.dispatch((0, _internal.clearDirtyQueriesListToEmitViaWebsocket)());
    }
  }
  emitStalePageDataPathsFromStaticQueriesAssignment(pendingTemplateDataWrite) {
    this.emitStalePageDataPaths(Array.from(pendingTemplateDataWrite.payload.pages));
  }
  emitStalePageDataPaths(stalePageDataPaths) {
    if (stalePageDataPaths.length > 0) {
      if (this.websocket) {
        this.websocket.send({
          type: `stalePageData`,
          payload: {
            stalePageDataPaths
          }
        });
        return true;
      }
    }
    return false;
  }
  emitStaleServerData() {
    if (this.websocket) {
      this.websocket.send({
        type: `staleServerData`
      });
      return true;
    }
    return false;
  }
}
exports.WebsocketManager = WebsocketManager;
const websocketManager = new WebsocketManager();
exports.websocketManager = websocketManager;
//# sourceMappingURL=websocket-manager.js.map