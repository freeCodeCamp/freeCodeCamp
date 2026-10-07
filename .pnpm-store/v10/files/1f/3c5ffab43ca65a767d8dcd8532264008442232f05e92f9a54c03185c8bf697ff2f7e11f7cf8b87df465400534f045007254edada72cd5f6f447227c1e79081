import { Extension } from '../api/api.js';
import { debugError } from '../common/util.js';
import { isErrorLike } from '../util/ErrorLike.js';
import { isTargetClosedError } from './Connection.js';
export class CdpExtension extends Extension {
    // needed to access the CDPSession to trigger an extension action.
    #browser;
    /*
     * @internal
     */
    constructor(id, version, name, path, enabled, browser) {
        super(id, version, name, path, enabled);
        this.#browser = browser;
    }
    async workers() {
        const targets = this.#browser.targets();
        const extensionWorkers = targets.filter((target) => {
            const targetUrl = target.url();
            return (target.type() === 'service_worker' &&
                targetUrl.startsWith('chrome-extension://' + this.id));
        });
        const workers = [];
        for (const target of extensionWorkers) {
            try {
                const worker = await target.worker();
                if (worker) {
                    workers.push(worker);
                }
            }
            catch (err) {
                if (this.#canIgnoreError(err)) {
                    debugError(err);
                    continue;
                }
                throw err;
            }
        }
        return workers;
    }
    async pages() {
        const targets = this.#browser.targets();
        const extensionPages = targets.filter((target) => {
            const targetUrl = target.url();
            return ((target.type() === 'page' || target.type() === 'background_page') &&
                targetUrl.startsWith('chrome-extension://' + this.id));
        });
        const pages = await Promise.all(extensionPages.map(async (target) => {
            try {
                return await target.asPage();
            }
            catch (err) {
                if (this.#canIgnoreError(err)) {
                    debugError(err);
                    return null;
                }
                throw err;
            }
        }));
        return pages.filter((page) => {
            return page !== null;
        });
    }
    async triggerAction(page) {
        await this.#browser._connection.send('Extensions.triggerAction', {
            id: this.id,
            targetId: page._tabId,
        });
    }
    #canIgnoreError(error) {
        return (isErrorLike(error) &&
            (isTargetClosedError(error) ||
                error.message.includes('No target with given id found')));
    }
}
//# sourceMappingURL=Extension.js.map