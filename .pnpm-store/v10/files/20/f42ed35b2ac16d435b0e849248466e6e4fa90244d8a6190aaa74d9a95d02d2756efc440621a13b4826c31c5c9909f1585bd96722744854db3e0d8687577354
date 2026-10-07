var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/loadCognitoIdentity.ts
var loadCognitoIdentity_exports = {};
__export(loadCognitoIdentity_exports, {
  CognitoIdentityClient: () => import_client_cognito_identity.CognitoIdentityClient,
  GetCredentialsForIdentityCommand: () => import_client_cognito_identity.GetCredentialsForIdentityCommand,
  GetIdCommand: () => import_client_cognito_identity.GetIdCommand
});
var import_client_cognito_identity;
var init_loadCognitoIdentity = __esm({
  "src/loadCognitoIdentity.ts"() {
    import_client_cognito_identity = require("@aws-sdk/client-cognito-identity");
  }
});

// src/index.ts
var src_exports = {};
__export(src_exports, {
  fromCognitoIdentity: () => fromCognitoIdentity,
  fromCognitoIdentityPool: () => fromCognitoIdentityPool
});
module.exports = __toCommonJS(src_exports);

// src/fromCognitoIdentity.ts
var import_property_provider = require("@smithy/property-provider");

// src/resolveLogins.ts
function resolveLogins(logins) {
  return Promise.all(
    Object.keys(logins).reduce((arr, name) => {
      const tokenOrProvider = logins[name];
      if (typeof tokenOrProvider === "string") {
        arr.push([name, tokenOrProvider]);
      } else {
        arr.push(tokenOrProvider().then((token) => [name, token]));
      }
      return arr;
    }, [])
  ).then(
    (resolvedPairs) => resolvedPairs.reduce((logins2, [key, value]) => {
      logins2[key] = value;
      return logins2;
    }, {})
  );
}
__name(resolveLogins, "resolveLogins");

// src/fromCognitoIdentity.ts
function fromCognitoIdentity(parameters) {
  return async () => {
    var _a, _b, _c;
    (_a = parameters.logger) == null ? void 0 : _a.debug("@aws-sdk/credential-provider-cognito-identity", "fromCognitoIdentity");
    const { GetCredentialsForIdentityCommand: GetCredentialsForIdentityCommand2, CognitoIdentityClient: CognitoIdentityClient2 } = await Promise.resolve().then(() => (init_loadCognitoIdentity(), loadCognitoIdentity_exports));
    const {
      Credentials: {
        AccessKeyId = throwOnMissingAccessKeyId(),
        Expiration,
        SecretKey = throwOnMissingSecretKey(),
        SessionToken
      } = throwOnMissingCredentials()
    } = await (parameters.client ?? new CognitoIdentityClient2(
      Object.assign({}, parameters.clientConfig ?? {}, {
        region: ((_b = parameters.clientConfig) == null ? void 0 : _b.region) ?? ((_c = parameters.parentClientConfig) == null ? void 0 : _c.region)
      })
    )).send(
      new GetCredentialsForIdentityCommand2({
        CustomRoleArn: parameters.customRoleArn,
        IdentityId: parameters.identityId,
        Logins: parameters.logins ? await resolveLogins(parameters.logins) : void 0
      })
    );
    return {
      identityId: parameters.identityId,
      accessKeyId: AccessKeyId,
      secretAccessKey: SecretKey,
      sessionToken: SessionToken,
      expiration: Expiration
    };
  };
}
__name(fromCognitoIdentity, "fromCognitoIdentity");
function throwOnMissingAccessKeyId() {
  throw new import_property_provider.CredentialsProviderError("Response from Amazon Cognito contained no access key ID");
}
__name(throwOnMissingAccessKeyId, "throwOnMissingAccessKeyId");
function throwOnMissingCredentials() {
  throw new import_property_provider.CredentialsProviderError("Response from Amazon Cognito contained no credentials");
}
__name(throwOnMissingCredentials, "throwOnMissingCredentials");
function throwOnMissingSecretKey() {
  throw new import_property_provider.CredentialsProviderError("Response from Amazon Cognito contained no secret key");
}
__name(throwOnMissingSecretKey, "throwOnMissingSecretKey");

// src/fromCognitoIdentityPool.ts


// src/IndexedDbStorage.ts
var STORE_NAME = "IdentityIds";
var _IndexedDbStorage = class _IndexedDbStorage {
  constructor(dbName = "aws:cognito-identity-ids") {
    this.dbName = dbName;
  }
  getItem(key) {
    return this.withObjectStore("readonly", (store) => {
      const req = store.get(key);
      return new Promise((resolve) => {
        req.onerror = () => resolve(null);
        req.onsuccess = () => resolve(req.result ? req.result.value : null);
      });
    }).catch(() => null);
  }
  removeItem(key) {
    return this.withObjectStore("readwrite", (store) => {
      const req = store.delete(key);
      return new Promise((resolve, reject) => {
        req.onerror = () => reject(req.error);
        req.onsuccess = () => resolve();
      });
    });
  }
  setItem(id, value) {
    return this.withObjectStore("readwrite", (store) => {
      const req = store.put({ id, value });
      return new Promise((resolve, reject) => {
        req.onerror = () => reject(req.error);
        req.onsuccess = () => resolve();
      });
    });
  }
  getDb() {
    const openDbRequest = self.indexedDB.open(this.dbName, 1);
    return new Promise((resolve, reject) => {
      openDbRequest.onsuccess = () => {
        resolve(openDbRequest.result);
      };
      openDbRequest.onerror = () => {
        reject(openDbRequest.error);
      };
      openDbRequest.onblocked = () => {
        reject(new Error("Unable to access DB"));
      };
      openDbRequest.onupgradeneeded = () => {
        const db = openDbRequest.result;
        db.onerror = () => {
          reject(new Error("Failed to create object store"));
        };
        db.createObjectStore(STORE_NAME, { keyPath: "id" });
      };
    });
  }
  withObjectStore(mode, action) {
    return this.getDb().then((db) => {
      const tx = db.transaction(STORE_NAME, mode);
      tx.oncomplete = () => db.close();
      return new Promise((resolve, reject) => {
        tx.onerror = () => reject(tx.error);
        resolve(action(tx.objectStore(STORE_NAME)));
      }).catch((err) => {
        db.close();
        throw err;
      });
    });
  }
};
__name(_IndexedDbStorage, "IndexedDbStorage");
var IndexedDbStorage = _IndexedDbStorage;

// src/InMemoryStorage.ts
var _InMemoryStorage = class _InMemoryStorage {
  constructor(store = {}) {
    this.store = store;
  }
  getItem(key) {
    if (key in this.store) {
      return this.store[key];
    }
    return null;
  }
  removeItem(key) {
    delete this.store[key];
  }
  setItem(key, value) {
    this.store[key] = value;
  }
};
__name(_InMemoryStorage, "InMemoryStorage");
var InMemoryStorage = _InMemoryStorage;

// src/localStorage.ts
var inMemoryStorage = new InMemoryStorage();
function localStorage() {
  if (typeof self === "object" && self.indexedDB) {
    return new IndexedDbStorage();
  }
  if (typeof window === "object" && window.localStorage) {
    return window.localStorage;
  }
  return inMemoryStorage;
}
__name(localStorage, "localStorage");

// src/fromCognitoIdentityPool.ts
function fromCognitoIdentityPool({
  accountId,
  cache = localStorage(),
  client,
  clientConfig,
  customRoleArn,
  identityPoolId,
  logins,
  userIdentifier = !logins || Object.keys(logins).length === 0 ? "ANONYMOUS" : void 0,
  logger,
  parentClientConfig
}) {
  logger == null ? void 0 : logger.debug("@aws-sdk/credential-provider-cognito-identity", "fromCognitoIdentity");
  const cacheKey = userIdentifier ? `aws:cognito-identity-credentials:${identityPoolId}:${userIdentifier}` : void 0;
  let provider = /* @__PURE__ */ __name(async () => {
    const { GetIdCommand: GetIdCommand2, CognitoIdentityClient: CognitoIdentityClient2 } = await Promise.resolve().then(() => (init_loadCognitoIdentity(), loadCognitoIdentity_exports));
    const _client = client ?? new CognitoIdentityClient2(
      Object.assign({}, clientConfig ?? {}, { region: (clientConfig == null ? void 0 : clientConfig.region) ?? (parentClientConfig == null ? void 0 : parentClientConfig.region) })
    );
    let identityId = cacheKey && await cache.getItem(cacheKey);
    if (!identityId) {
      const { IdentityId = throwOnMissingId() } = await _client.send(
        new GetIdCommand2({
          AccountId: accountId,
          IdentityPoolId: identityPoolId,
          Logins: logins ? await resolveLogins(logins) : void 0
        })
      );
      identityId = IdentityId;
      if (cacheKey) {
        Promise.resolve(cache.setItem(cacheKey, identityId)).catch(() => {
        });
      }
    }
    provider = fromCognitoIdentity({
      client: _client,
      customRoleArn,
      logins,
      identityId
    });
    return provider();
  }, "provider");
  return () => provider().catch(async (err) => {
    if (cacheKey) {
      Promise.resolve(cache.removeItem(cacheKey)).catch(() => {
      });
    }
    throw err;
  });
}
__name(fromCognitoIdentityPool, "fromCognitoIdentityPool");
function throwOnMissingId() {
  throw new import_property_provider.CredentialsProviderError("Response from Amazon Cognito contained no identity ID");
}
__name(throwOnMissingId, "throwOnMissingId");
// Annotate the CommonJS export names for ESM import in node:

0 && (module.exports = {
  fromCognitoIdentity,
  fromCognitoIdentityPool
});

