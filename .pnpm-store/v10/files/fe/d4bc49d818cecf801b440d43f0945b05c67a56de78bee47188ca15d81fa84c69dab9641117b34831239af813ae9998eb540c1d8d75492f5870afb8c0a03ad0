"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addCertificateToNSSCertDB = addCertificateToNSSCertDB;
exports.removeCertificateFromNSSCertDB = removeCertificateFromNSSCertDB;
exports.closeFirefox = closeFirefox;
exports.openCertificateInFirefox = openCertificateInFirefox;
exports.assertNotTouchingFiles = assertNotTouchingFiles;
const path_1 = __importDefault(require("path"));
const debug_1 = __importDefault(require("debug"));
const assert_1 = __importDefault(require("assert"));
const http_1 = __importDefault(require("http"));
const fs_1 = __importDefault(require("fs"));
const utils_1 = require("../utils");
const constants_1 = require("../constants");
const user_interface_1 = __importDefault(require("../user-interface"));
const child_process_1 = require("child_process");
const debug = (0, debug_1.default)('devcert:platforms:shared');
async function* iterateNSSCertDBPaths(nssDirGlob) {
    const globIdx = nssDirGlob.indexOf('*');
    if (globIdx === -1) {
        try {
            const stat = fs_1.default.statSync(nssDirGlob);
            if (stat.isDirectory()) {
                yield nssDirGlob;
            }
        }
        catch (_error) {
            // no matching directory found
        }
    }
    else if (globIdx === nssDirGlob.length - 1) {
        const targetDir = path_1.default.dirname(nssDirGlob);
        for (const entry of await fs_1.default.promises.readdir(targetDir, { withFileTypes: true })) {
            if (entry.isDirectory()) {
                yield path_1.default.join(targetDir, entry.name);
            }
        }
    }
    else {
        throw new Error('Internal: Invalid `nssDirGlob` specified');
    }
}
async function* iterateNSSCertDBs(nssDirGlob) {
    for await (const dir of iterateNSSCertDBPaths(nssDirGlob)) {
        debug(`checking to see if ${dir} is a valid NSS database directory`);
        if (fs_1.default.existsSync(path_1.default.join(dir, 'cert8.db'))) {
            debug(`Found legacy NSS database in ${dir}, emitting...`);
            yield { dir, version: 'legacy' };
        }
        if (fs_1.default.existsSync(path_1.default.join(dir, 'cert9.db'))) {
            debug(`Found modern NSS database in ${dir}, running callback...`);
            yield { dir, version: 'modern' };
        }
    }
}
/**
 *  Given a directory or glob pattern of directories, attempt to install the
 *  CA certificate to each directory containing an NSS database.
 */
async function addCertificateToNSSCertDB(nssDirGlob, certPath, certutilPath) {
    debug(`trying to install certificate into NSS databases in ${nssDirGlob}`);
    for await (const { dir, version } of iterateNSSCertDBs(nssDirGlob)) {
        const dirArg = version === 'modern' ? `sql:${dir}` : dir;
        (0, utils_1.run)(certutilPath, ['-A', '-d', dirArg, '-t', 'C,,', '-i', certPath, '-n', 'devcert']);
    }
    debug(`finished scanning & installing certificate in NSS databases in ${nssDirGlob}`);
}
async function removeCertificateFromNSSCertDB(nssDirGlob, certPath, certutilPath) {
    debug(`trying to remove certificates from NSS databases in ${nssDirGlob}`);
    for await (const { dir, version } of iterateNSSCertDBs(nssDirGlob)) {
        const dirArg = version === 'modern' ? `sql:${dir}` : dir;
        try {
            (0, utils_1.run)(certutilPath, ['-A', '-d', dirArg, '-t', 'C,,', '-i', certPath, '-n', 'devcert']);
        }
        catch (e) {
            debug(`failed to remove ${certPath} from ${dir}, continuing. ${e.toString()}`);
        }
    }
    debug(`finished scanning & installing certificate in NSS databases in ${nssDirGlob}`);
}
/**
 *  Check to see if Firefox is still running, and if so, ask the user to close
 *  it. Poll until it's closed, then return.
 *
 * This is needed because Firefox appears to load the NSS database in-memory on
 * startup, and overwrite on exit. So we have to ask the user to quite Firefox
 * first so our changes don't get overwritten.
 */
async function closeFirefox() {
    if (isFirefoxOpen()) {
        await user_interface_1.default.closeFirefoxBeforeContinuing();
        while (isFirefoxOpen()) {
            await sleep(50);
        }
    }
}
/**
 * Check if Firefox is currently open
 */
function isFirefoxOpen() {
    // NOTE: We use some Windows-unfriendly methods here (ps) because Windows
    // never needs to check this, because it doesn't update the NSS DB
    // automaticaly.
    (0, assert_1.default)(constants_1.isMac || constants_1.isLinux, 'checkForOpenFirefox was invoked on a platform other than Mac or Linux');
    return (0, child_process_1.execSync)('ps aux').indexOf('firefox') > -1;
}
async function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
/**
 * Firefox manages it's own trust store for SSL certificates, which can be
 * managed via the certutil command (supplied by NSS tooling packages). In the
 * event that certutil is not already installed, and either can't be installed
 * (Windows) or the user doesn't want to install it (skipCertutilInstall:
 * true), it means that we can't programmatically tell Firefox to trust our
 * root CA certificate.
 *
 * There is a recourse though. When a Firefox tab is directed to a URL that
 * responds with a certificate, it will automatically prompt the user if they
 * want to add it to their trusted certificates. So if we can't automatically
 * install the certificate via certutil, we instead start a quick web server
 * and host our certificate file. Then we open the hosted cert URL in Firefox
 * to kick off the GUI flow.
 *
 * This method does all this, along with providing user prompts in the terminal
 * to walk them through this process.
 */
async function openCertificateInFirefox(firefoxPath, certPath) {
    debug('Adding devert to Firefox trust stores manually. Launching a webserver to host our certificate temporarily ...');
    let port;
    const server = http_1.default.createServer(async (req, res) => {
        let { pathname } = new URL(req.url);
        if (pathname === '/certificate') {
            res.writeHead(200, { 'Content-type': 'application/x-x509-ca-cert' });
            res.write(fs_1.default.readFileSync(certPath));
            res.end();
        }
        else {
            res.writeHead(200);
            res.write(await user_interface_1.default.firefoxWizardPromptPage(`http://localhost:${port}/certificate`));
            res.end();
        }
    });
    port = await new Promise((resolve, reject) => {
        server.on('error', reject);
        server.listen(() => {
            resolve(server.address().port);
        });
    });
    try {
        debug('Certificate server is up. Printing instructions for user and launching Firefox with hosted certificate URL');
        await user_interface_1.default.startFirefoxWizard(`http://localhost:${port}`);
        (0, utils_1.run)(firefoxPath, [`http://localhost:${port}`]);
        await user_interface_1.default.waitForFirefoxWizard();
    }
    finally {
        server.close();
    }
}
function assertNotTouchingFiles(filepath, operation) {
    if (!filepath.startsWith(constants_1.configDir) && !filepath.startsWith((0, constants_1.getLegacyConfigDir)())) {
        throw new Error(`Devcert cannot ${operation} ${filepath}; it is outside known devcert config directories!`);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJwbGF0Zm9ybXMvc2hhcmVkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBc0RBLDhEQU9DO0FBRUQsd0VBV0M7QUFVRCxvQ0FPQztBQW1DRCw0REE2QkM7QUFFRCx3REFJQztBQWpLRCxnREFBd0I7QUFDeEIsa0RBQWdDO0FBQ2hDLG9EQUE0QjtBQUU1QixnREFBd0I7QUFDeEIsNENBQW9CO0FBQ3BCLG9DQUErQjtBQUMvQiw0Q0FBOEU7QUFDOUUsdUVBQW1DO0FBQ25DLGlEQUFpRDtBQUVqRCxNQUFNLEtBQUssR0FBRyxJQUFBLGVBQVcsRUFBQywwQkFBMEIsQ0FBQyxDQUFDO0FBRXRELEtBQUssU0FBUyxDQUFDLENBQUMscUJBQXFCLENBQUMsVUFBa0I7SUFDdEQsTUFBTSxPQUFPLEdBQUcsVUFBVSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN4QyxJQUFJLE9BQU8sS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQztZQUNILE1BQU0sSUFBSSxHQUFHLFlBQUUsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDckMsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQztnQkFDdkIsTUFBTSxVQUFVLENBQUM7WUFDbkIsQ0FBQztRQUNILENBQUM7UUFBQyxPQUFPLE1BQU0sRUFBRSxDQUFDO1lBQ2hCLDhCQUE4QjtRQUNoQyxDQUFDO0lBQ0gsQ0FBQztTQUFNLElBQUksT0FBTyxLQUFLLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUM7UUFDN0MsTUFBTSxTQUFTLEdBQUcsY0FBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMzQyxLQUFLLE1BQU0sS0FBSyxJQUFJLE1BQU0sWUFBRSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQztZQUNsRixJQUFJLEtBQUssQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDO2dCQUN4QixNQUFNLGNBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN6QyxDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7U0FBTSxDQUFDO1FBQ04sTUFBTSxJQUFJLEtBQUssQ0FBQywwQ0FBMEMsQ0FBQyxDQUFDO0lBQzlELENBQUM7QUFDSCxDQUFDO0FBRUQsS0FBSyxTQUFTLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxVQUFrQjtJQUNsRCxJQUFJLEtBQUssRUFBRSxNQUFNLEdBQUcsSUFBSSxxQkFBcUIsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDO1FBQzFELEtBQUssQ0FBQyxzQkFBc0IsR0FBRyxvQ0FBb0MsQ0FBQyxDQUFDO1FBQ3JFLElBQUksWUFBRSxDQUFDLFVBQVUsQ0FBQyxjQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxVQUFVLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDOUMsS0FBSyxDQUFDLGdDQUFnQyxHQUFHLGVBQWUsQ0FBQyxDQUFDO1lBQzFELE1BQU0sRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxDQUFDO1FBQ25DLENBQUM7UUFDRCxJQUFJLFlBQUUsQ0FBQyxVQUFVLENBQUMsY0FBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsVUFBVSxDQUFDLENBQUMsRUFBRSxDQUFDO1lBQzlDLEtBQUssQ0FBQyxnQ0FBZ0MsR0FBRyx1QkFBdUIsQ0FBQyxDQUFBO1lBQ2pFLE1BQU0sRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxDQUFDO1FBQ25DLENBQUM7SUFDSCxDQUFDO0FBQ0gsQ0FBQztBQUVEOzs7R0FHRztBQUNJLEtBQUssVUFBVSx5QkFBeUIsQ0FBQyxVQUFrQixFQUFFLFFBQWdCLEVBQUUsWUFBb0I7SUFDeEcsS0FBSyxDQUFDLHVEQUF3RCxVQUFXLEVBQUUsQ0FBQyxDQUFDO0lBQzdFLElBQUksS0FBSyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLElBQUksaUJBQWlCLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQztRQUNuRSxNQUFNLE1BQU0sR0FBRyxPQUFPLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxPQUFRLEdBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDM0QsSUFBQSxXQUFHLEVBQUMsWUFBWSxFQUFFLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQ3hGLENBQUM7SUFDRCxLQUFLLENBQUMsa0VBQW1FLFVBQVcsRUFBRSxDQUFDLENBQUM7QUFDMUYsQ0FBQztBQUVNLEtBQUssVUFBVSw4QkFBOEIsQ0FBQyxVQUFrQixFQUFFLFFBQWdCLEVBQUUsWUFBb0I7SUFDN0csS0FBSyxDQUFDLHVEQUF3RCxVQUFXLEVBQUUsQ0FBQyxDQUFDO0lBQzdFLElBQUksS0FBSyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLElBQUksaUJBQWlCLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQztRQUNuRSxNQUFNLE1BQU0sR0FBRyxPQUFPLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxPQUFRLEdBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDM0QsSUFBSSxDQUFDO1lBQ0gsSUFBQSxXQUFHLEVBQUMsWUFBWSxFQUFFLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBQ3hGLENBQUM7UUFBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1lBQ1gsS0FBSyxDQUFDLG9CQUFxQixRQUFTLFNBQVUsR0FBSSxpQkFBa0IsQ0FBQyxDQUFDLFFBQVEsRUFBRyxFQUFFLENBQUMsQ0FBQTtRQUN0RixDQUFDO0lBQ0gsQ0FBQztJQUNELEtBQUssQ0FBQyxrRUFBbUUsVUFBVyxFQUFFLENBQUMsQ0FBQztBQUMxRixDQUFDO0FBRUQ7Ozs7Ozs7R0FPRztBQUNJLEtBQUssVUFBVSxZQUFZO0lBQ2hDLElBQUksYUFBYSxFQUFFLEVBQUUsQ0FBQztRQUNwQixNQUFNLHdCQUFFLENBQUMsNEJBQTRCLEVBQUUsQ0FBQztRQUN4QyxPQUFNLGFBQWEsRUFBRSxFQUFFLENBQUM7WUFDdEIsTUFBTSxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDbEIsQ0FBQztJQUNILENBQUM7QUFDSCxDQUFDO0FBRUQ7O0dBRUc7QUFDSCxTQUFTLGFBQWE7SUFDcEIseUVBQXlFO0lBQ3pFLGtFQUFrRTtJQUNsRSxnQkFBZ0I7SUFDaEIsSUFBQSxnQkFBTSxFQUFDLGlCQUFLLElBQUksbUJBQU8sRUFBRSx1RUFBdUUsQ0FBQyxDQUFDO0lBQ2xHLE9BQU8sSUFBQSx3QkFBSSxFQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUNoRCxDQUFDO0FBRUQsS0FBSyxVQUFVLEtBQUssQ0FBQyxFQUFVO0lBQzdCLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUMzRCxDQUFDO0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBaUJHO0FBQ0ksS0FBSyxVQUFVLHdCQUF3QixDQUFDLFdBQW1CLEVBQUUsUUFBZ0I7SUFDbEYsS0FBSyxDQUFDLCtHQUErRyxDQUFDLENBQUM7SUFDdkgsSUFBSSxJQUFZLENBQUM7SUFDakIsTUFBTSxNQUFNLEdBQUcsY0FBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFO1FBQ2xELElBQUksRUFBRSxRQUFRLEVBQUUsR0FBRyxJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDcEMsSUFBSSxRQUFRLEtBQUssY0FBYyxFQUFFLENBQUM7WUFDaEMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxjQUFjLEVBQUUsNEJBQTRCLEVBQUUsQ0FBQyxDQUFDO1lBQ3JFLEdBQUcsQ0FBQyxLQUFLLENBQUMsWUFBRSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ3JDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNaLENBQUM7YUFBTSxDQUFDO1lBQ04sR0FBRyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNuQixHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sd0JBQUUsQ0FBQyx1QkFBdUIsQ0FBQyxvQkFBb0IsSUFBSSxjQUFjLENBQUMsQ0FBQyxDQUFDO1lBQ3BGLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNaLENBQUM7SUFDSCxDQUFDLENBQUMsQ0FBQztJQUNILElBQUksR0FBRyxNQUFNLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1FBQzNDLE1BQU0sQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQzNCLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFO1lBQ2pCLE9BQU8sQ0FBRSxNQUFNLENBQUMsT0FBTyxFQUFzQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RELENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDSCxJQUFJLENBQUM7UUFDSCxLQUFLLENBQUMsNEdBQTRHLENBQUMsQ0FBQztRQUNwSCxNQUFNLHdCQUFFLENBQUMsa0JBQWtCLENBQUMsb0JBQW9CLElBQUksRUFBRSxDQUFDLENBQUM7UUFDeEQsSUFBQSxXQUFHLEVBQUMsV0FBVyxFQUFFLENBQUMsb0JBQXFCLElBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNqRCxNQUFNLHdCQUFFLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztJQUNsQyxDQUFDO1lBQVMsQ0FBQztRQUNULE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNqQixDQUFDO0FBQ0gsQ0FBQztBQUVELFNBQWdCLHNCQUFzQixDQUFDLFFBQWdCLEVBQUUsU0FBaUI7SUFDdEUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMscUJBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFBLDhCQUFrQixHQUFFLENBQUMsRUFBRSxDQUFDO1FBQ2xGLE1BQU0sSUFBSSxLQUFLLENBQUMsa0JBQW1CLFNBQVUsSUFBSyxRQUFTLG1EQUFtRCxDQUFDLENBQUM7SUFDbEgsQ0FBQztBQUNMLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCBjcmVhdGVEZWJ1ZyBmcm9tICdkZWJ1Zyc7XG5pbXBvcnQgYXNzZXJ0IGZyb20gJ2Fzc2VydCc7XG5pbXBvcnQgbmV0IGZyb20gJ25ldCc7XG5pbXBvcnQgaHR0cCBmcm9tICdodHRwJztcbmltcG9ydCBmcyBmcm9tICdmcyc7XG5pbXBvcnQgeyBydW4gfSBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgeyBpc01hYywgaXNMaW51eCAsIGNvbmZpZ0RpciwgZ2V0TGVnYWN5Q29uZmlnRGlyIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCBVSSBmcm9tICcuLi91c2VyLWludGVyZmFjZSc7XG5pbXBvcnQgeyBleGVjU3luYyBhcyBleGVjIH0gZnJvbSAnY2hpbGRfcHJvY2Vzcyc7XG5cbmNvbnN0IGRlYnVnID0gY3JlYXRlRGVidWcoJ2RldmNlcnQ6cGxhdGZvcm1zOnNoYXJlZCcpO1xuXG5hc3luYyBmdW5jdGlvbiogaXRlcmF0ZU5TU0NlcnREQlBhdGhzKG5zc0Rpckdsb2I6IHN0cmluZyk6IEFzeW5jR2VuZXJhdG9yPHN0cmluZz4ge1xuICBjb25zdCBnbG9iSWR4ID0gbnNzRGlyR2xvYi5pbmRleE9mKCcqJyk7XG4gIGlmIChnbG9iSWR4ID09PSAtMSkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBzdGF0ID0gZnMuc3RhdFN5bmMobnNzRGlyR2xvYik7XG4gICAgICBpZiAoc3RhdC5pc0RpcmVjdG9yeSgpKSB7XG4gICAgICAgIHlpZWxkIG5zc0Rpckdsb2I7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoX2Vycm9yKSB7XG4gICAgICAvLyBubyBtYXRjaGluZyBkaXJlY3RvcnkgZm91bmRcbiAgICB9XG4gIH0gZWxzZSBpZiAoZ2xvYklkeCA9PT0gbnNzRGlyR2xvYi5sZW5ndGggLSAxKSB7XG4gICAgY29uc3QgdGFyZ2V0RGlyID0gcGF0aC5kaXJuYW1lKG5zc0Rpckdsb2IpO1xuICAgIGZvciAoY29uc3QgZW50cnkgb2YgYXdhaXQgZnMucHJvbWlzZXMucmVhZGRpcih0YXJnZXREaXIsIHsgd2l0aEZpbGVUeXBlczogdHJ1ZSB9KSkge1xuICAgICAgaWYgKGVudHJ5LmlzRGlyZWN0b3J5KCkpIHtcbiAgICAgICAgeWllbGQgcGF0aC5qb2luKHRhcmdldERpciwgZW50cnkubmFtZSk7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcignSW50ZXJuYWw6IEludmFsaWQgYG5zc0Rpckdsb2JgIHNwZWNpZmllZCcpO1xuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uKiBpdGVyYXRlTlNTQ2VydERCcyhuc3NEaXJHbG9iOiBzdHJpbmcpOiBBc3luY0dlbmVyYXRvcjx7IGRpcjogc3RyaW5nOyB2ZXJzaW9uOiAnbGVnYWN5JyB8ICdtb2Rlcm4nIH0+IHtcbiAgZm9yIGF3YWl0IChjb25zdCBkaXIgb2YgaXRlcmF0ZU5TU0NlcnREQlBhdGhzKG5zc0Rpckdsb2IpKSB7XG4gICAgZGVidWcoYGNoZWNraW5nIHRvIHNlZSBpZiAke2Rpcn0gaXMgYSB2YWxpZCBOU1MgZGF0YWJhc2UgZGlyZWN0b3J5YCk7XG4gICAgaWYgKGZzLmV4aXN0c1N5bmMocGF0aC5qb2luKGRpciwgJ2NlcnQ4LmRiJykpKSB7XG4gICAgICBkZWJ1ZyhgRm91bmQgbGVnYWN5IE5TUyBkYXRhYmFzZSBpbiAke2Rpcn0sIGVtaXR0aW5nLi4uYCk7XG4gICAgICB5aWVsZCB7IGRpciwgdmVyc2lvbjogJ2xlZ2FjeScgfTtcbiAgICB9XG4gICAgaWYgKGZzLmV4aXN0c1N5bmMocGF0aC5qb2luKGRpciwgJ2NlcnQ5LmRiJykpKSB7XG4gICAgICBkZWJ1ZyhgRm91bmQgbW9kZXJuIE5TUyBkYXRhYmFzZSBpbiAke2Rpcn0sIHJ1bm5pbmcgY2FsbGJhY2suLi5gKVxuICAgICAgeWllbGQgeyBkaXIsIHZlcnNpb246ICdtb2Rlcm4nIH07XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogIEdpdmVuIGEgZGlyZWN0b3J5IG9yIGdsb2IgcGF0dGVybiBvZiBkaXJlY3RvcmllcywgYXR0ZW1wdCB0byBpbnN0YWxsIHRoZVxuICogIENBIGNlcnRpZmljYXRlIHRvIGVhY2ggZGlyZWN0b3J5IGNvbnRhaW5pbmcgYW4gTlNTIGRhdGFiYXNlLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRkQ2VydGlmaWNhdGVUb05TU0NlcnREQihuc3NEaXJHbG9iOiBzdHJpbmcsIGNlcnRQYXRoOiBzdHJpbmcsIGNlcnR1dGlsUGF0aDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gIGRlYnVnKGB0cnlpbmcgdG8gaW5zdGFsbCBjZXJ0aWZpY2F0ZSBpbnRvIE5TUyBkYXRhYmFzZXMgaW4gJHsgbnNzRGlyR2xvYiB9YCk7XG4gIGZvciBhd2FpdCAoY29uc3QgeyBkaXIsIHZlcnNpb24gfSBvZiBpdGVyYXRlTlNTQ2VydERCcyhuc3NEaXJHbG9iKSkge1xuICAgIGNvbnN0IGRpckFyZyA9IHZlcnNpb24gPT09ICdtb2Rlcm4nID8gYHNxbDokeyBkaXIgfWAgOiBkaXI7XG4gICAgcnVuKGNlcnR1dGlsUGF0aCwgWyctQScsICctZCcsIGRpckFyZywgJy10JywgJ0MsLCcsICctaScsIGNlcnRQYXRoLCAnLW4nLCAnZGV2Y2VydCddKTtcbiAgfVxuICBkZWJ1ZyhgZmluaXNoZWQgc2Nhbm5pbmcgJiBpbnN0YWxsaW5nIGNlcnRpZmljYXRlIGluIE5TUyBkYXRhYmFzZXMgaW4gJHsgbnNzRGlyR2xvYiB9YCk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZW1vdmVDZXJ0aWZpY2F0ZUZyb21OU1NDZXJ0REIobnNzRGlyR2xvYjogc3RyaW5nLCBjZXJ0UGF0aDogc3RyaW5nLCBjZXJ0dXRpbFBhdGg6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICBkZWJ1ZyhgdHJ5aW5nIHRvIHJlbW92ZSBjZXJ0aWZpY2F0ZXMgZnJvbSBOU1MgZGF0YWJhc2VzIGluICR7IG5zc0Rpckdsb2IgfWApO1xuICBmb3IgYXdhaXQgKGNvbnN0IHsgZGlyLCB2ZXJzaW9uIH0gb2YgaXRlcmF0ZU5TU0NlcnREQnMobnNzRGlyR2xvYikpIHtcbiAgICBjb25zdCBkaXJBcmcgPSB2ZXJzaW9uID09PSAnbW9kZXJuJyA/IGBzcWw6JHsgZGlyIH1gIDogZGlyO1xuICAgIHRyeSB7XG4gICAgICBydW4oY2VydHV0aWxQYXRoLCBbJy1BJywgJy1kJywgZGlyQXJnLCAnLXQnLCAnQywsJywgJy1pJywgY2VydFBhdGgsICctbicsICdkZXZjZXJ0J10pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGRlYnVnKGBmYWlsZWQgdG8gcmVtb3ZlICR7IGNlcnRQYXRoIH0gZnJvbSAkeyBkaXIgfSwgY29udGludWluZy4gJHsgZS50b1N0cmluZygpIH1gKVxuICAgIH1cbiAgfVxuICBkZWJ1ZyhgZmluaXNoZWQgc2Nhbm5pbmcgJiBpbnN0YWxsaW5nIGNlcnRpZmljYXRlIGluIE5TUyBkYXRhYmFzZXMgaW4gJHsgbnNzRGlyR2xvYiB9YCk7XG59XG5cbi8qKlxuICogIENoZWNrIHRvIHNlZSBpZiBGaXJlZm94IGlzIHN0aWxsIHJ1bm5pbmcsIGFuZCBpZiBzbywgYXNrIHRoZSB1c2VyIHRvIGNsb3NlXG4gKiAgaXQuIFBvbGwgdW50aWwgaXQncyBjbG9zZWQsIHRoZW4gcmV0dXJuLlxuICpcbiAqIFRoaXMgaXMgbmVlZGVkIGJlY2F1c2UgRmlyZWZveCBhcHBlYXJzIHRvIGxvYWQgdGhlIE5TUyBkYXRhYmFzZSBpbi1tZW1vcnkgb25cbiAqIHN0YXJ0dXAsIGFuZCBvdmVyd3JpdGUgb24gZXhpdC4gU28gd2UgaGF2ZSB0byBhc2sgdGhlIHVzZXIgdG8gcXVpdGUgRmlyZWZveFxuICogZmlyc3Qgc28gb3VyIGNoYW5nZXMgZG9uJ3QgZ2V0IG92ZXJ3cml0dGVuLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY2xvc2VGaXJlZm94KCk6IFByb21pc2U8dm9pZD4ge1xuICBpZiAoaXNGaXJlZm94T3BlbigpKSB7XG4gICAgYXdhaXQgVUkuY2xvc2VGaXJlZm94QmVmb3JlQ29udGludWluZygpO1xuICAgIHdoaWxlKGlzRmlyZWZveE9wZW4oKSkge1xuICAgICAgYXdhaXQgc2xlZXAoNTApO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIENoZWNrIGlmIEZpcmVmb3ggaXMgY3VycmVudGx5IG9wZW5cbiAqL1xuZnVuY3Rpb24gaXNGaXJlZm94T3BlbigpIHtcbiAgLy8gTk9URTogV2UgdXNlIHNvbWUgV2luZG93cy11bmZyaWVuZGx5IG1ldGhvZHMgaGVyZSAocHMpIGJlY2F1c2UgV2luZG93c1xuICAvLyBuZXZlciBuZWVkcyB0byBjaGVjayB0aGlzLCBiZWNhdXNlIGl0IGRvZXNuJ3QgdXBkYXRlIHRoZSBOU1MgREJcbiAgLy8gYXV0b21hdGljYWx5LlxuICBhc3NlcnQoaXNNYWMgfHwgaXNMaW51eCwgJ2NoZWNrRm9yT3BlbkZpcmVmb3ggd2FzIGludm9rZWQgb24gYSBwbGF0Zm9ybSBvdGhlciB0aGFuIE1hYyBvciBMaW51eCcpO1xuICByZXR1cm4gZXhlYygncHMgYXV4JykuaW5kZXhPZignZmlyZWZveCcpID4gLTE7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHNsZWVwKG1zOiBudW1iZXIpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSk7XG59XG5cbi8qKlxuICogRmlyZWZveCBtYW5hZ2VzIGl0J3Mgb3duIHRydXN0IHN0b3JlIGZvciBTU0wgY2VydGlmaWNhdGVzLCB3aGljaCBjYW4gYmVcbiAqIG1hbmFnZWQgdmlhIHRoZSBjZXJ0dXRpbCBjb21tYW5kIChzdXBwbGllZCBieSBOU1MgdG9vbGluZyBwYWNrYWdlcykuIEluIHRoZVxuICogZXZlbnQgdGhhdCBjZXJ0dXRpbCBpcyBub3QgYWxyZWFkeSBpbnN0YWxsZWQsIGFuZCBlaXRoZXIgY2FuJ3QgYmUgaW5zdGFsbGVkXG4gKiAoV2luZG93cykgb3IgdGhlIHVzZXIgZG9lc24ndCB3YW50IHRvIGluc3RhbGwgaXQgKHNraXBDZXJ0dXRpbEluc3RhbGw6XG4gKiB0cnVlKSwgaXQgbWVhbnMgdGhhdCB3ZSBjYW4ndCBwcm9ncmFtbWF0aWNhbGx5IHRlbGwgRmlyZWZveCB0byB0cnVzdCBvdXJcbiAqIHJvb3QgQ0EgY2VydGlmaWNhdGUuXG4gKlxuICogVGhlcmUgaXMgYSByZWNvdXJzZSB0aG91Z2guIFdoZW4gYSBGaXJlZm94IHRhYiBpcyBkaXJlY3RlZCB0byBhIFVSTCB0aGF0XG4gKiByZXNwb25kcyB3aXRoIGEgY2VydGlmaWNhdGUsIGl0IHdpbGwgYXV0b21hdGljYWxseSBwcm9tcHQgdGhlIHVzZXIgaWYgdGhleVxuICogd2FudCB0byBhZGQgaXQgdG8gdGhlaXIgdHJ1c3RlZCBjZXJ0aWZpY2F0ZXMuIFNvIGlmIHdlIGNhbid0IGF1dG9tYXRpY2FsbHlcbiAqIGluc3RhbGwgdGhlIGNlcnRpZmljYXRlIHZpYSBjZXJ0dXRpbCwgd2UgaW5zdGVhZCBzdGFydCBhIHF1aWNrIHdlYiBzZXJ2ZXJcbiAqIGFuZCBob3N0IG91ciBjZXJ0aWZpY2F0ZSBmaWxlLiBUaGVuIHdlIG9wZW4gdGhlIGhvc3RlZCBjZXJ0IFVSTCBpbiBGaXJlZm94XG4gKiB0byBraWNrIG9mZiB0aGUgR1VJIGZsb3cuXG4gKlxuICogVGhpcyBtZXRob2QgZG9lcyBhbGwgdGhpcywgYWxvbmcgd2l0aCBwcm92aWRpbmcgdXNlciBwcm9tcHRzIGluIHRoZSB0ZXJtaW5hbFxuICogdG8gd2FsayB0aGVtIHRocm91Z2ggdGhpcyBwcm9jZXNzLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gb3BlbkNlcnRpZmljYXRlSW5GaXJlZm94KGZpcmVmb3hQYXRoOiBzdHJpbmcsIGNlcnRQYXRoOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgZGVidWcoJ0FkZGluZyBkZXZlcnQgdG8gRmlyZWZveCB0cnVzdCBzdG9yZXMgbWFudWFsbHkuIExhdW5jaGluZyBhIHdlYnNlcnZlciB0byBob3N0IG91ciBjZXJ0aWZpY2F0ZSB0ZW1wb3JhcmlseSAuLi4nKTtcbiAgbGV0IHBvcnQ6IG51bWJlcjtcbiAgY29uc3Qgc2VydmVyID0gaHR0cC5jcmVhdGVTZXJ2ZXIoYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gICAgbGV0IHsgcGF0aG5hbWUgfSA9IG5ldyBVUkwocmVxLnVybCk7XG4gICAgaWYgKHBhdGhuYW1lID09PSAnL2NlcnRpZmljYXRlJykge1xuICAgICAgcmVzLndyaXRlSGVhZCgyMDAsIHsgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi94LXg1MDktY2EtY2VydCcgfSk7XG4gICAgICByZXMud3JpdGUoZnMucmVhZEZpbGVTeW5jKGNlcnRQYXRoKSk7XG4gICAgICByZXMuZW5kKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlcy53cml0ZUhlYWQoMjAwKTtcbiAgICAgIHJlcy53cml0ZShhd2FpdCBVSS5maXJlZm94V2l6YXJkUHJvbXB0UGFnZShgaHR0cDovL2xvY2FsaG9zdDoke3BvcnR9L2NlcnRpZmljYXRlYCkpO1xuICAgICAgcmVzLmVuZCgpO1xuICAgIH1cbiAgfSk7XG4gIHBvcnQgPSBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgc2VydmVyLm9uKCdlcnJvcicsIHJlamVjdCk7XG4gICAgc2VydmVyLmxpc3RlbigoKSA9PiB7XG4gICAgICByZXNvbHZlKChzZXJ2ZXIuYWRkcmVzcygpIGFzIG5ldC5BZGRyZXNzSW5mbykucG9ydCk7XG4gICAgfSk7XG4gIH0pO1xuICB0cnkge1xuICAgIGRlYnVnKCdDZXJ0aWZpY2F0ZSBzZXJ2ZXIgaXMgdXAuIFByaW50aW5nIGluc3RydWN0aW9ucyBmb3IgdXNlciBhbmQgbGF1bmNoaW5nIEZpcmVmb3ggd2l0aCBob3N0ZWQgY2VydGlmaWNhdGUgVVJMJyk7XG4gICAgYXdhaXQgVUkuc3RhcnRGaXJlZm94V2l6YXJkKGBodHRwOi8vbG9jYWxob3N0OiR7cG9ydH1gKTtcbiAgICBydW4oZmlyZWZveFBhdGgsIFtgaHR0cDovL2xvY2FsaG9zdDokeyBwb3J0IH1gXSk7XG4gICAgYXdhaXQgVUkud2FpdEZvckZpcmVmb3hXaXphcmQoKTtcbiAgfSBmaW5hbGx5IHtcbiAgICBzZXJ2ZXIuY2xvc2UoKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzZXJ0Tm90VG91Y2hpbmdGaWxlcyhmaWxlcGF0aDogc3RyaW5nLCBvcGVyYXRpb246IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICghZmlsZXBhdGguc3RhcnRzV2l0aChjb25maWdEaXIpICYmICFmaWxlcGF0aC5zdGFydHNXaXRoKGdldExlZ2FjeUNvbmZpZ0RpcigpKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBEZXZjZXJ0IGNhbm5vdCAkeyBvcGVyYXRpb24gfSAkeyBmaWxlcGF0aCB9OyBpdCBpcyBvdXRzaWRlIGtub3duIGRldmNlcnQgY29uZmlnIGRpcmVjdG9yaWVzIWApO1xuICAgIH1cbn1cbiJdfQ==