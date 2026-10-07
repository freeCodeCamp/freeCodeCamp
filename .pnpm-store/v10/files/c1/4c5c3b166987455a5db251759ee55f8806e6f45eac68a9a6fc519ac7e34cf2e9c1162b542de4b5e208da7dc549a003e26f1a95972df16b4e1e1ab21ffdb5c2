"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_readline_1 = __importDefault(require("node:readline"));
const utils_1 = require("./utils");
async function passwordPrompt(prompt) {
    const input = node_readline_1.default.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    return new Promise((resolve, reject) => {
        input.on('SIGINT', () => {
            reject(new Error('SIGINT'));
        });
        input.question(prompt, (answer) => {
            node_readline_1.default.moveCursor(process.stdout, 0, -1);
            node_readline_1.default.clearLine(process.stdout, 0);
            input.write(prompt + answer.replace(/./g, '*') + '\n');
            input.close();
            resolve(answer);
        });
    });
}
const DefaultUI = {
    async getWindowsEncryptionPassword() {
        return await passwordPrompt('devcert password (http://bit.ly/devcert-what-password?):');
    },
    async warnChromeOnLinuxWithoutCertutil() {
        console.warn(`
      WARNING: It looks like you have Chrome installed, but you specified
      'skipCertutilInstall: true'. Unfortunately, without installing
      certutil, it's impossible get Chrome to trust devcert's certificates
      The certificates will work, but Chrome will continue to warn you that
      they are untrusted.
    `);
    },
    async closeFirefoxBeforeContinuing() {
        console.log('Please close Firefox before continuing');
    },
    async startFirefoxWizard(certificateHost) {
        console.log(`
      devcert was unable to automatically configure Firefox. You'll need to
      complete this process manually. Don't worry though - Firefox will walk
      you through it.

      When you're ready, hit any key to continue. Firefox will launch and
      display a wizard to walk you through how to trust the devcert
      certificate. When you are finished, come back here and we'll finish up.

      (If Firefox doesn't start, go ahead and start it and navigate to
      ${certificateHost} in a new tab.)

      If you are curious about why all this is necessary, check out
      https://github.com/davewasmer/devcert#how-it-works

      <Press any key to launch Firefox wizard>
    `);
        await (0, utils_1.waitForUser)();
    },
    async firefoxWizardPromptPage(certificateURL) {
        return `
      <html>
        <head>
          <meta http-equiv="refresh" content="0; url=${certificateURL}" />
        </head>
      </html>
    `;
    },
    async waitForFirefoxWizard() {
        console.log(`
      Launching Firefox ...

      Great! Once you've finished the Firefox wizard for adding the devcert
      certificate, just hit any key here again and we'll wrap up.

      <Press any key to continue>
    `);
        await (0, utils_1.waitForUser)();
    }
};
exports.default = DefaultUI;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1pbnRlcmZhY2UuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbInVzZXItaW50ZXJmYWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsa0VBQXFDO0FBQ3JDLG1DQUFzQztBQVd0QyxLQUFLLFVBQVUsY0FBYyxDQUFDLE1BQWM7SUFDMUMsTUFBTSxLQUFLLEdBQUcsdUJBQVEsQ0FBQyxlQUFlLENBQUM7UUFDckMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxLQUFLO1FBQ3BCLE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTTtLQUN2QixDQUFDLENBQUM7SUFDSCxPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1FBQ3JDLEtBQUssQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRTtZQUN0QixNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUM5QixDQUFDLENBQUMsQ0FBQztRQUNILEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLEVBQUU7WUFDaEMsdUJBQVEsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMzQyx1QkFBUSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3RDLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO1lBQ3ZELEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNkLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNsQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQztBQUVELE1BQU0sU0FBUyxHQUFrQjtJQUMvQixLQUFLLENBQUMsNEJBQTRCO1FBQ2hDLE9BQU8sTUFBTSxjQUFjLENBQUMsMERBQTBELENBQUMsQ0FBQztJQUMxRixDQUFDO0lBQ0QsS0FBSyxDQUFDLGdDQUFnQztRQUNwQyxPQUFPLENBQUMsSUFBSSxDQUFDOzs7Ozs7S0FNWixDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0QsS0FBSyxDQUFDLDRCQUE0QjtRQUNoQyxPQUFPLENBQUMsR0FBRyxDQUFDLHdDQUF3QyxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUNELEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxlQUFlO1FBQ3RDLE9BQU8sQ0FBQyxHQUFHLENBQUM7Ozs7Ozs7Ozs7UUFVUCxlQUFnQjs7Ozs7O0tBTXBCLENBQUMsQ0FBQztRQUNILE1BQU0sSUFBQSxtQkFBVyxHQUFFLENBQUM7SUFDdEIsQ0FBQztJQUNELEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxjQUFzQjtRQUNsRCxPQUFPOzs7dURBRzRDLGNBQWM7OztLQUdoRSxDQUFDO0lBQ0osQ0FBQztJQUNELEtBQUssQ0FBQyxvQkFBb0I7UUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQzs7Ozs7OztLQU9YLENBQUMsQ0FBQTtRQUNGLE1BQU0sSUFBQSxtQkFBVyxHQUFFLENBQUM7SUFDdEIsQ0FBQztDQUNGLENBQUE7QUFFRCxrQkFBZSxTQUFTLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmVhZGxpbmUgZnJvbSAnbm9kZTpyZWFkbGluZSc7XG5pbXBvcnQgeyB3YWl0Rm9yVXNlciB9IGZyb20gJy4vdXRpbHMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFVzZXJJbnRlcmZhY2Uge1xuICBnZXRXaW5kb3dzRW5jcnlwdGlvblBhc3N3b3JkKCk6IFByb21pc2U8c3RyaW5nPjtcbiAgd2FybkNocm9tZU9uTGludXhXaXRob3V0Q2VydHV0aWwoKTogUHJvbWlzZTx2b2lkPjtcbiAgY2xvc2VGaXJlZm94QmVmb3JlQ29udGludWluZygpOiBQcm9taXNlPHZvaWQ+O1xuICBzdGFydEZpcmVmb3hXaXphcmQoY2VydGlmaWNhdGVIb3N0OiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+O1xuICBmaXJlZm94V2l6YXJkUHJvbXB0UGFnZShjZXJ0aWZpY2F0ZVVSTDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+O1xuICB3YWl0Rm9yRmlyZWZveFdpemFyZCgpOiBQcm9taXNlPHZvaWQ+O1xufVxuXG5hc3luYyBmdW5jdGlvbiBwYXNzd29yZFByb21wdChwcm9tcHQ6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG4gIGNvbnN0IGlucHV0ID0gcmVhZGxpbmUuY3JlYXRlSW50ZXJmYWNlKHtcbiAgICBpbnB1dDogcHJvY2Vzcy5zdGRpbixcbiAgICBvdXRwdXQ6IHByb2Nlc3Muc3Rkb3V0LFxuICB9KTtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBpbnB1dC5vbignU0lHSU5UJywgKCkgPT4ge1xuICAgICAgcmVqZWN0KG5ldyBFcnJvcignU0lHSU5UJykpO1xuICAgIH0pO1xuICAgIGlucHV0LnF1ZXN0aW9uKHByb21wdCwgKGFuc3dlcikgPT4ge1xuICAgICAgcmVhZGxpbmUubW92ZUN1cnNvcihwcm9jZXNzLnN0ZG91dCwgMCwgLTEpO1xuICAgICAgcmVhZGxpbmUuY2xlYXJMaW5lKHByb2Nlc3Muc3Rkb3V0LCAwKTtcbiAgICAgIGlucHV0LndyaXRlKHByb21wdCArIGFuc3dlci5yZXBsYWNlKC8uL2csICcqJykgKyAnXFxuJyk7XG4gICAgICBpbnB1dC5jbG9zZSgpO1xuICAgICAgcmVzb2x2ZShhbnN3ZXIpO1xuICAgIH0pO1xuICB9KTtcbn1cblxuY29uc3QgRGVmYXVsdFVJOiBVc2VySW50ZXJmYWNlID0ge1xuICBhc3luYyBnZXRXaW5kb3dzRW5jcnlwdGlvblBhc3N3b3JkKCkge1xuICAgIHJldHVybiBhd2FpdCBwYXNzd29yZFByb21wdCgnZGV2Y2VydCBwYXNzd29yZCAoaHR0cDovL2JpdC5seS9kZXZjZXJ0LXdoYXQtcGFzc3dvcmQ/KTonKTtcbiAgfSxcbiAgYXN5bmMgd2FybkNocm9tZU9uTGludXhXaXRob3V0Q2VydHV0aWwoKSB7XG4gICAgY29uc29sZS53YXJuKGBcbiAgICAgIFdBUk5JTkc6IEl0IGxvb2tzIGxpa2UgeW91IGhhdmUgQ2hyb21lIGluc3RhbGxlZCwgYnV0IHlvdSBzcGVjaWZpZWRcbiAgICAgICdza2lwQ2VydHV0aWxJbnN0YWxsOiB0cnVlJy4gVW5mb3J0dW5hdGVseSwgd2l0aG91dCBpbnN0YWxsaW5nXG4gICAgICBjZXJ0dXRpbCwgaXQncyBpbXBvc3NpYmxlIGdldCBDaHJvbWUgdG8gdHJ1c3QgZGV2Y2VydCdzIGNlcnRpZmljYXRlc1xuICAgICAgVGhlIGNlcnRpZmljYXRlcyB3aWxsIHdvcmssIGJ1dCBDaHJvbWUgd2lsbCBjb250aW51ZSB0byB3YXJuIHlvdSB0aGF0XG4gICAgICB0aGV5IGFyZSB1bnRydXN0ZWQuXG4gICAgYCk7XG4gIH0sXG4gIGFzeW5jIGNsb3NlRmlyZWZveEJlZm9yZUNvbnRpbnVpbmcoKSB7XG4gICAgY29uc29sZS5sb2coJ1BsZWFzZSBjbG9zZSBGaXJlZm94IGJlZm9yZSBjb250aW51aW5nJyk7XG4gIH0sXG4gIGFzeW5jIHN0YXJ0RmlyZWZveFdpemFyZChjZXJ0aWZpY2F0ZUhvc3QpIHtcbiAgICBjb25zb2xlLmxvZyhgXG4gICAgICBkZXZjZXJ0IHdhcyB1bmFibGUgdG8gYXV0b21hdGljYWxseSBjb25maWd1cmUgRmlyZWZveC4gWW91J2xsIG5lZWQgdG9cbiAgICAgIGNvbXBsZXRlIHRoaXMgcHJvY2VzcyBtYW51YWxseS4gRG9uJ3Qgd29ycnkgdGhvdWdoIC0gRmlyZWZveCB3aWxsIHdhbGtcbiAgICAgIHlvdSB0aHJvdWdoIGl0LlxuXG4gICAgICBXaGVuIHlvdSdyZSByZWFkeSwgaGl0IGFueSBrZXkgdG8gY29udGludWUuIEZpcmVmb3ggd2lsbCBsYXVuY2ggYW5kXG4gICAgICBkaXNwbGF5IGEgd2l6YXJkIHRvIHdhbGsgeW91IHRocm91Z2ggaG93IHRvIHRydXN0IHRoZSBkZXZjZXJ0XG4gICAgICBjZXJ0aWZpY2F0ZS4gV2hlbiB5b3UgYXJlIGZpbmlzaGVkLCBjb21lIGJhY2sgaGVyZSBhbmQgd2UnbGwgZmluaXNoIHVwLlxuXG4gICAgICAoSWYgRmlyZWZveCBkb2Vzbid0IHN0YXJ0LCBnbyBhaGVhZCBhbmQgc3RhcnQgaXQgYW5kIG5hdmlnYXRlIHRvXG4gICAgICAkeyBjZXJ0aWZpY2F0ZUhvc3QgfSBpbiBhIG5ldyB0YWIuKVxuXG4gICAgICBJZiB5b3UgYXJlIGN1cmlvdXMgYWJvdXQgd2h5IGFsbCB0aGlzIGlzIG5lY2Vzc2FyeSwgY2hlY2sgb3V0XG4gICAgICBodHRwczovL2dpdGh1Yi5jb20vZGF2ZXdhc21lci9kZXZjZXJ0I2hvdy1pdC13b3Jrc1xuXG4gICAgICA8UHJlc3MgYW55IGtleSB0byBsYXVuY2ggRmlyZWZveCB3aXphcmQ+XG4gICAgYCk7XG4gICAgYXdhaXQgd2FpdEZvclVzZXIoKTtcbiAgfSxcbiAgYXN5bmMgZmlyZWZveFdpemFyZFByb21wdFBhZ2UoY2VydGlmaWNhdGVVUkw6IHN0cmluZykge1xuICAgIHJldHVybiBgXG4gICAgICA8aHRtbD5cbiAgICAgICAgPGhlYWQ+XG4gICAgICAgICAgPG1ldGEgaHR0cC1lcXVpdj1cInJlZnJlc2hcIiBjb250ZW50PVwiMDsgdXJsPSR7Y2VydGlmaWNhdGVVUkx9XCIgLz5cbiAgICAgICAgPC9oZWFkPlxuICAgICAgPC9odG1sPlxuICAgIGA7XG4gIH0sXG4gIGFzeW5jIHdhaXRGb3JGaXJlZm94V2l6YXJkKCkge1xuICAgIGNvbnNvbGUubG9nKGBcbiAgICAgIExhdW5jaGluZyBGaXJlZm94IC4uLlxuXG4gICAgICBHcmVhdCEgT25jZSB5b3UndmUgZmluaXNoZWQgdGhlIEZpcmVmb3ggd2l6YXJkIGZvciBhZGRpbmcgdGhlIGRldmNlcnRcbiAgICAgIGNlcnRpZmljYXRlLCBqdXN0IGhpdCBhbnkga2V5IGhlcmUgYWdhaW4gYW5kIHdlJ2xsIHdyYXAgdXAuXG5cbiAgICAgIDxQcmVzcyBhbnkga2V5IHRvIGNvbnRpbnVlPlxuICAgIGApXG4gICAgYXdhaXQgd2FpdEZvclVzZXIoKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEZWZhdWx0VUk7XG4iXX0=