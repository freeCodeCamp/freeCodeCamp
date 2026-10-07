"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.openssl = openssl;
exports.run = run;
exports.sudoAppend = sudoAppend;
exports.waitForUser = waitForUser;
exports.reportableError = reportableError;
exports.mktmp = mktmp;
exports.sudo = sudo;
exports.commandExists = commandExists;
const child_process_1 = require("child_process");
const crypto_1 = require("crypto");
const fs_1 = __importDefault(require("fs"));
const os_1 = __importDefault(require("os"));
const debug_1 = __importDefault(require("debug"));
const path_1 = __importDefault(require("path"));
const sudo_prompt_1 = __importDefault(require("@expo/sudo-prompt"));
const constants_1 = require("./constants");
const debug = (0, debug_1.default)('devcert:util');
function openssl(args) {
    return run('openssl', args, {
        stdio: 'pipe',
        env: Object.assign({
            RANDFILE: path_1.default.join((0, constants_1.configPath)('.rnd'))
        }, process.env)
    });
}
function run(cmd, args, options = {}) {
    debug(`execFileSync: \`${cmd} ${args.join(' ')}\``);
    return (0, child_process_1.execFileSync)(cmd, args, options);
}
function sudoAppend(file, input) {
    run('sudo', ['tee', '-a', file], {
        input
    });
}
function waitForUser() {
    return new Promise((resolve) => {
        process.stdin.resume();
        process.stdin.on('data', resolve);
    });
}
function reportableError(message) {
    return new Error(`${message} | This is a bug in devcert, please report the issue at https://github.com/davewasmer/devcert/issues`);
}
function mktmp() {
    const random = (0, crypto_1.randomBytes)(6).toString('hex');
    const tmppath = path_1.default.join(os_1.default.tmpdir(), `tmp-${process.pid}${random}`);
    fs_1.default.closeSync(fs_1.default.openSync(tmppath, 'w'));
    return tmppath;
}
function sudo(cmd) {
    return new Promise((resolve, reject) => {
        sudo_prompt_1.default.exec(cmd, { name: 'devcert' }, (err, stdout, stderr) => {
            let error = err || (typeof stderr === 'string' && stderr.trim().length > 0 && new Error(stderr));
            error ? reject(error) : resolve(stdout);
        });
    });
}
const _commands = {};
function commandExists(command) {
    if (_commands[command] !== undefined) {
        return _commands[command];
    }
    const paths = process.env[constants_1.isWindows ? 'Path' : 'PATH'].split(path_1.default.delimiter);
    const extensions = [...(process.env.PATHEXT || '').split(path_1.default.delimiter), ''];
    for (const dir of paths) {
        for (const extension of extensions) {
            const filePath = path_1.default.join(dir, command + extension);
            try {
                fs_1.default.accessSync(filePath, fs_1.default.constants.X_OK);
                return (_commands[command] = filePath);
            }
            catch (_a) { }
        }
    }
    return (_commands[command] = null);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbInV0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBWUEsMEJBT0M7QUFFRCxrQkFHQztBQUVELGdDQUlDO0FBRUQsa0NBS0M7QUFFRCwwQ0FFQztBQUVELHNCQUtDO0FBRUQsb0JBT0M7QUFJRCxzQ0FnQkM7QUE3RUQsaURBQWtFO0FBQ2xFLG1DQUFxQztBQUNyQyw0Q0FBb0I7QUFDcEIsNENBQW9CO0FBQ3BCLGtEQUFnQztBQUNoQyxnREFBd0I7QUFDeEIsb0VBQTJDO0FBRTNDLDJDQUFvRDtBQUVwRCxNQUFNLEtBQUssR0FBRyxJQUFBLGVBQVcsRUFBQyxjQUFjLENBQUMsQ0FBQztBQUUxQyxTQUFnQixPQUFPLENBQUMsSUFBYztJQUNwQyxPQUFPLEdBQUcsQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFO1FBQzFCLEtBQUssRUFBRSxNQUFNO1FBQ2IsR0FBRyxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUM7WUFDakIsUUFBUSxFQUFFLGNBQUksQ0FBQyxJQUFJLENBQUMsSUFBQSxzQkFBVSxFQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3hDLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQztLQUNoQixDQUFDLENBQUM7QUFDTCxDQUFDO0FBRUQsU0FBZ0IsR0FBRyxDQUFDLEdBQVcsRUFBRSxJQUFjLEVBQUUsVUFBK0IsRUFBRTtJQUNoRixLQUFLLENBQUMsbUJBQW9CLEdBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0RCxPQUFPLElBQUEsNEJBQVksRUFBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQzFDLENBQUM7QUFFRCxTQUFnQixVQUFVLENBQUMsSUFBWSxFQUFFLEtBQW1DO0lBQzFFLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUFFO1FB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LEdBQUcsUUFBUSxDQUFDLENBQUM7WUFDekMsQ0FBQztZQUFDLFdBQU0sQ0FBQyxDQUFBLENBQUM7UUFDWixDQUFDO0lBQ0gsQ0FBQztJQUNELE9BQU8sQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7QUFDckMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGV4ZWNGaWxlU3luYywgRXhlY0ZpbGVTeW5jT3B0aW9ucyB9IGZyb20gJ2NoaWxkX3Byb2Nlc3MnO1xuaW1wb3J0IHsgcmFuZG9tQnl0ZXMgfSBmcm9tICdjcnlwdG8nO1xuaW1wb3J0IGZzIGZyb20gJ2ZzJztcbmltcG9ydCBvcyBmcm9tICdvcyc7XG5pbXBvcnQgY3JlYXRlRGVidWcgZnJvbSAnZGVidWcnO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgc3Vkb1Byb21wdCBmcm9tICdAZXhwby9zdWRvLXByb21wdCc7XG5cbmltcG9ydCB7IGNvbmZpZ1BhdGgsIGlzV2luZG93cyB9IGZyb20gJy4vY29uc3RhbnRzJztcblxuY29uc3QgZGVidWcgPSBjcmVhdGVEZWJ1ZygnZGV2Y2VydDp1dGlsJyk7XG5cbmV4cG9ydCBmdW5jdGlvbiBvcGVuc3NsKGFyZ3M6IHN0cmluZ1tdKSB7XG4gIHJldHVybiBydW4oJ29wZW5zc2wnLCBhcmdzLCB7XG4gICAgc3RkaW86ICdwaXBlJyxcbiAgICBlbnY6IE9iamVjdC5hc3NpZ24oe1xuICAgICAgUkFOREZJTEU6IHBhdGguam9pbihjb25maWdQYXRoKCcucm5kJykpXG4gICAgfSwgcHJvY2Vzcy5lbnYpXG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcnVuKGNtZDogc3RyaW5nLCBhcmdzOiBzdHJpbmdbXSwgb3B0aW9uczogRXhlY0ZpbGVTeW5jT3B0aW9ucyA9IHt9KSB7XG4gIGRlYnVnKGBleGVjRmlsZVN5bmM6IFxcYCR7IGNtZCB9ICR7YXJncy5qb2luKCcgJyl9XFxgYCk7XG4gIHJldHVybiBleGVjRmlsZVN5bmMoY21kLCBhcmdzLCBvcHRpb25zKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1ZG9BcHBlbmQoZmlsZTogc3RyaW5nLCBpbnB1dDogRXhlY0ZpbGVTeW5jT3B0aW9uc1tcImlucHV0XCJdKSB7XG4gIHJ1bignc3VkbycsIFsndGVlJywgJy1hJywgZmlsZV0sIHtcbiAgICBpbnB1dFxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHdhaXRGb3JVc2VyKCkge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICBwcm9jZXNzLnN0ZGluLnJlc3VtZSgpO1xuICAgIHByb2Nlc3Muc3RkaW4ub24oJ2RhdGEnLCByZXNvbHZlKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXBvcnRhYmxlRXJyb3IobWVzc2FnZTogc3RyaW5nKSB7XG4gIHJldHVybiBuZXcgRXJyb3IoYCR7bWVzc2FnZX0gfCBUaGlzIGlzIGEgYnVnIGluIGRldmNlcnQsIHBsZWFzZSByZXBvcnQgdGhlIGlzc3VlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXZld2FzbWVyL2RldmNlcnQvaXNzdWVzYCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBta3RtcCgpIHtcbiAgY29uc3QgcmFuZG9tID0gcmFuZG9tQnl0ZXMoNikudG9TdHJpbmcoJ2hleCcpO1xuICBjb25zdCB0bXBwYXRoID0gcGF0aC5qb2luKG9zLnRtcGRpcigpLCBgdG1wLSR7cHJvY2Vzcy5waWR9JHtyYW5kb219YCk7XG4gIGZzLmNsb3NlU3luYyhmcy5vcGVuU3luYyh0bXBwYXRoLCAndycpKTtcbiAgcmV0dXJuIHRtcHBhdGg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdWRvKGNtZDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmcgfCBudWxsPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgc3Vkb1Byb21wdC5leGVjKGNtZCwgeyBuYW1lOiAnZGV2Y2VydCcgfSwgKGVycjogRXJyb3IgfCBudWxsLCBzdGRvdXQ6IHN0cmluZyB8IG51bGwsIHN0ZGVycjogc3RyaW5nIHwgbnVsbCkgPT4ge1xuICAgICAgbGV0IGVycm9yID0gZXJyIHx8ICh0eXBlb2Ygc3RkZXJyID09PSAnc3RyaW5nJyAmJiBzdGRlcnIudHJpbSgpLmxlbmd0aCA+IDAgJiYgbmV3IEVycm9yKHN0ZGVycikpIDtcbiAgICAgIGVycm9yID8gcmVqZWN0KGVycm9yKSA6IHJlc29sdmUoc3Rkb3V0KTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmNvbnN0IF9jb21tYW5kczogUmVjb3JkPHN0cmluZywgc3RyaW5nIHwgbnVsbD4gPSB7fTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbW1hbmRFeGlzdHMoY29tbWFuZDogc3RyaW5nKTogc3RyaW5nIHwgbnVsbCB7XG4gIGlmIChfY29tbWFuZHNbY29tbWFuZF0gIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBfY29tbWFuZHNbY29tbWFuZF07XG4gIH1cbiAgY29uc3QgcGF0aHMgPSBwcm9jZXNzLmVudltpc1dpbmRvd3MgPyAnUGF0aCcgOiAnUEFUSCddLnNwbGl0KHBhdGguZGVsaW1pdGVyKTtcbiAgY29uc3QgZXh0ZW5zaW9ucyA9IFsuLi4ocHJvY2Vzcy5lbnYuUEFUSEVYVCB8fCAnJykuc3BsaXQocGF0aC5kZWxpbWl0ZXIpLCAnJ107XG4gIGZvciAoY29uc3QgZGlyIG9mIHBhdGhzKSB7XG4gICAgZm9yIChjb25zdCBleHRlbnNpb24gb2YgZXh0ZW5zaW9ucykge1xuICAgICAgY29uc3QgZmlsZVBhdGggPSBwYXRoLmpvaW4oZGlyLCBjb21tYW5kICsgZXh0ZW5zaW9uKTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGZzLmFjY2Vzc1N5bmMoZmlsZVBhdGgsIGZzLmNvbnN0YW50cy5YX09LKTtcbiAgICAgICAgcmV0dXJuIChfY29tbWFuZHNbY29tbWFuZF0gPSBmaWxlUGF0aCk7XG4gICAgICB9IGNhdGNoIHt9XG4gICAgfVxuICB9XG4gIHJldHVybiAoX2NvbW1hbmRzW2NvbW1hbmRdID0gbnVsbCk7XG59XG4iXX0=