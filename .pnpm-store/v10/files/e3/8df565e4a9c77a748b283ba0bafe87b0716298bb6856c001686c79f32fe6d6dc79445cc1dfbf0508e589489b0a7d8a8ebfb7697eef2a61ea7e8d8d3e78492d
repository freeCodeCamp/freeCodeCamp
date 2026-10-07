/**
 * @license
 * Copyright 2019 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import { Target, TargetType } from '../api/Target.js';
import { debugError } from '../common/util.js';
import { Deferred } from '../util/Deferred.js';
import { CdpPage } from './Page.js';
import { CdpWebWorker } from './WebWorker.js';
/**
 * @internal
 */
export var InitializationStatus;
(function (InitializationStatus) {
    InitializationStatus["SUCCESS"] = "success";
    InitializationStatus["ABORTED"] = "aborted";
})(InitializationStatus || (InitializationStatus = {}));
/**
 * @internal
 */
export class CdpTarget extends Target {
    #browserContext;
    #session;
    #targetInfo;
    #targetManager;
    #sessionFactory;
    #childTargets = new Set();
    _initializedDeferred = Deferred.create();
    _isClosedDeferred = Deferred.create();
    _targetId;
    _asPagePromise;
    /** @internal */
    pagePromise;
    /**
     * To initialize the target for use, call initialize.
     *
     * @internal
     */
    constructor(targetInfo, session, browserContext, targetManager, sessionFactory) {
        super();
        this.#session = session;
        this.#targetManager = targetManager;
        this.#targetInfo = targetInfo;
        this.#browserContext = browserContext;
        this._targetId = targetInfo.targetId;
        this.#sessionFactory = sessionFactory;
        if (this.#session) {
            this.#session.setTarget(this);
        }
    }
    async asPage() {
        if (this.pagePromise) {
            const page = await this.pagePromise;
            if (page) {
                return page;
            }
        }
        if (!this._asPagePromise) {
            const session = this._session();
            this._asPagePromise = (session
                ? Promise.resolve(session)
                : this._sessionFactory()(/* isAutoAttachEmulated=*/ false)).then(client => {
                return CdpPage._create(client, this, null);
            });
        }
        return (await this._asPagePromise) ?? null;
    }
    _subtype() {
        return this.#targetInfo.subtype;
    }
    _session() {
        return this.#session;
    }
    _addChildTarget(target) {
        this.#childTargets.add(target);
    }
    _removeChildTarget(target) {
        this.#childTargets.delete(target);
    }
    _childTargets() {
        return this.#childTargets;
    }
    _sessionFactory() {
        if (!this.#sessionFactory) {
            throw new Error('sessionFactory is not initialized');
        }
        return this.#sessionFactory;
    }
    createCDPSession() {
        if (!this.#sessionFactory) {
            throw new Error('sessionFactory is not initialized');
        }
        return this.#sessionFactory(false).then(session => {
            session.setTarget(this);
            return session;
        });
    }
    url() {
        return this.#targetInfo.url;
    }
    type() {
        const type = this.#targetInfo.type;
        switch (type) {
            case 'page':
                return TargetType.PAGE;
            case 'background_page':
                return TargetType.BACKGROUND_PAGE;
            case 'service_worker':
                return TargetType.SERVICE_WORKER;
            case 'shared_worker':
                return TargetType.SHARED_WORKER;
            case 'browser':
                return TargetType.BROWSER;
            case 'webview':
                return TargetType.WEBVIEW;
            case 'tab':
                return TargetType.TAB;
            default:
                return TargetType.OTHER;
        }
    }
    _targetManager() {
        if (!this.#targetManager) {
            throw new Error('targetManager is not initialized');
        }
        return this.#targetManager;
    }
    _getTargetInfo() {
        return this.#targetInfo;
    }
    browser() {
        if (!this.#browserContext) {
            throw new Error('browserContext is not initialized');
        }
        return this.#browserContext.browser();
    }
    browserContext() {
        if (!this.#browserContext) {
            throw new Error('browserContext is not initialized');
        }
        return this.#browserContext;
    }
    opener() {
        const { openerId } = this.#targetInfo;
        if (!openerId) {
            return;
        }
        return this.browser()
            .targets()
            .find(target => {
            return target._targetId === openerId;
        });
    }
    _targetInfoChanged(targetInfo) {
        this.#targetInfo = targetInfo;
        this._checkIfInitialized();
    }
    _initialize() {
        this._initializedDeferred.resolve(InitializationStatus.SUCCESS);
    }
    _isTargetExposed() {
        return this.type() !== TargetType.TAB && !this._subtype();
    }
    _checkIfInitialized() {
        if (!this._initializedDeferred.resolved()) {
            this._initializedDeferred.resolve(InitializationStatus.SUCCESS);
        }
    }
}
/**
 * @internal
 */
export class PageTarget extends CdpTarget {
    #defaultViewport;
    constructor(targetInfo, session, browserContext, targetManager, sessionFactory, defaultViewport) {
        super(targetInfo, session, browserContext, targetManager, sessionFactory);
        this.#defaultViewport = defaultViewport ?? undefined;
    }
    _initialize() {
        this._initializedDeferred
            .valueOrThrow()
            .then(async (result) => {
            if (result === InitializationStatus.ABORTED) {
                return;
            }
            const opener = this.opener();
            if (!(opener instanceof PageTarget)) {
                return;
            }
            if (!opener || !opener.pagePromise || this.type() !== 'page') {
                return true;
            }
            const openerPage = await opener.pagePromise;
            if (!openerPage.listenerCount("popup" /* PageEvent.Popup */)) {
                return true;
            }
            const popupPage = await this.page();
            openerPage.emit("popup" /* PageEvent.Popup */, popupPage);
            return true;
        })
            .catch(debugError);
        this._checkIfInitialized();
    }
    async page() {
        if (!this.pagePromise) {
            const session = this._session();
            this.pagePromise = (session
                ? Promise.resolve(session)
                : this._sessionFactory()(/* isAutoAttachEmulated=*/ false)).then(client => {
                return CdpPage._create(client, this, this.#defaultViewport ?? null);
            });
        }
        return (await this.pagePromise) ?? null;
    }
    _checkIfInitialized() {
        if (this._initializedDeferred.resolved()) {
            return;
        }
        if (this._getTargetInfo().url !== '') {
            this._initializedDeferred.resolve(InitializationStatus.SUCCESS);
        }
    }
}
/**
 * @internal
 */
export class DevToolsTarget extends PageTarget {
}
/**
 * @internal
 */
export class WorkerTarget extends CdpTarget {
    #workerPromise;
    async worker() {
        if (!this.#workerPromise) {
            const session = this._session();
            this.#workerPromise = (session
                ? Promise.resolve(session)
                : this._sessionFactory()(/* isAutoAttachEmulated=*/ false)).then(client => {
                return new CdpWebWorker(client, this._getTargetInfo().url, this._targetId, this.type(), () => { } /* exceptionThrown */, undefined /* networkManager */);
            });
        }
        return await this.#workerPromise;
    }
}
/**
 * @internal
 */
export class OtherTarget extends CdpTarget {
}
//# sourceMappingURL=Target.js.map