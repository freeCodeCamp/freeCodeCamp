"use strict";
exports.__esModule = true;
var child_process_1 = require("child_process");
var fs = require("fs");
var path = require("path");
var all_langs_1 = require("../../../config/i18n/all-langs");
// eslint-disable-next-line
var env = require('../../../config/read-env.js');
console.log(env);
var globalConfigPath = path.resolve(__dirname, '../../../config');
var FREECODECAMP_NODE_ENV = process.env.FREECODECAMP_NODE_ENV;
function checkClientLocale() {
    // TODO: With @ts-ignore an error is thrown during build
    if (!all_langs_1.availableLangs.client.includes(process.env.CLIENT_LOCALE)) {
        /* eslint-disable @typescript-eslint/restrict-template-expressions */
        throw Error("\n\n      CLIENT_LOCALE, " + process.env.CLIENT_LOCALE + ", is not an available language in config/i18n/all-langs.js\n\n      ");
        /* eslint-enable @typescript-eslint/restrict-template-expressions */
    }
}
function checkCurriculumLocale() {
    if (!all_langs_1.availableLangs.curriculum.includes(process.env.CURRICULUM_LOCALE)) {
        /* eslint-disable @typescript-eslint/restrict-template-expressions */
        throw Error("\n\n      CURRICULUM_LOCALE, " + process.env.CURRICULUM_LOCALE + ", is not an available language in config/i18n/all-langs.js\n\n      ");
        /* eslint-enable @typescript-eslint/restrict-template-expressions */
    }
}
if (FREECODECAMP_NODE_ENV !== 'development') {
    var locationKeys = [
        'homeLocation',
        'apiLocation',
        'forumLocation',
        'newsLocation',
        'radioLocation'
    ];
    var deploymentKeys = [
        'clientLocale',
        'curriculumLocale',
        'showLocaleDropdownMenu',
        'deploymentEnv',
        'environment',
        'showUpcomingChanges'
    ];
    var searchKeys = ['algoliaAppId', 'algoliaAPIKey'];
    var donationKeys = ['stripePublicKey', 'paypalClientId'];
    var expectedVariables_2 = locationKeys.concat(deploymentKeys, searchKeys, donationKeys);
    var receivedvariables_1 = Object.keys(env);
    expectedVariables_2.sort();
    receivedvariables_1.sort();
    if (expectedVariables_2.length !== receivedvariables_1.length) {
        /* eslint-disable @typescript-eslint/restrict-template-expressions */
        throw Error("\n\n    Env. variable validation failed. Make sure these keys are used and configured.\n\n    Mismatch:\n    " + expectedVariables_2
            .filter(function (expected) { return !receivedvariables_1.includes(expected); })
            .concat(receivedvariables_1.filter(function (received) { return !expectedVariables_2.includes(received); })) + "\n\n    ");
        /* eslint-enable @typescript-eslint/restrict-template-expressions */
    }
    for (var _i = 0, expectedVariables_1 = expectedVariables_2; _i < expectedVariables_1.length; _i++) {
        var key = expectedVariables_1[_i];
        if (typeof env[key] === 'undefined' || env[key] === null) {
            throw Error("\n\n      Env. variable " + key + " is missing, build cannot continue\n\n      ");
        }
    }
    if (env['environment'] !== 'production')
        throw Error("\n\n    Production environment should be 'production'\n\n    ");
    if (env['showUpcomingChanges'])
        throw Error("\n\n    SHOW_UPCOMING_CHANGES should never be 'true' in production\n\n    ");
    checkClientLocale();
    checkCurriculumLocale();
}
else {
    checkClientLocale();
    checkCurriculumLocale();
    if (fs.existsSync(globalConfigPath + "/env.json")) {
        // eslint-disable-next-line
        var showUpcomingChanges = require(globalConfigPath + "/env.json").showUpcomingChanges;
        console.log(showUpcomingChanges);
        if (env['showUpcomingChanges'] !== showUpcomingChanges) {
            console.log('SHOW_UPCOMING_CHANGES value has changed, cleaning client cache.');
            var child = (0, child_process_1.spawn)('npm', ['run', 'clean:client']);
            child.stdout.setEncoding('utf8');
            child.stdout.on('data', function (data) {
                console.log(data);
            });
            child.on('error', function (err) {
                console.error(err);
            });
        }
    }
}
fs.writeFileSync(globalConfigPath + "/env.json", JSON.stringify(env));
