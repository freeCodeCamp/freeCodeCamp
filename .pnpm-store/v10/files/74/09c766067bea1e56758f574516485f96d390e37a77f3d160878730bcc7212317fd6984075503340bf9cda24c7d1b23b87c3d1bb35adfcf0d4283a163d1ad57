'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var clientCommon = require('@algolia/client-common');
var clientSearch = require('@algolia/client-search');

function createDestinationIndiceExistsError() {
    return {
        name: 'DestinationIndiceAlreadyExistsError',
        message: 'Destination indice already exists.',
    };
}

function createIndicesInSameAppError(appId) {
    return {
        name: 'IndicesInTheSameAppError',
        message: 'Indices are in the same application. Use SearchClient.copyIndex instead.',
        appId,
    };
}

const accountCopyIndex = (source, destination, requestOptions) => {
    // eslint-disable-next-line functional/prefer-readonly-type
    const responses = [];
    const promise = clientSearch.exists(destination)()
        .then(res => {
        if (source.appId === destination.appId) {
            throw createIndicesInSameAppError(source.appId);
        }
        if (res) {
            throw createDestinationIndiceExistsError();
        }
    })
        .then(() => clientSearch.getSettings(source)())
        .then(settings => 
    // eslint-disable-next-line functional/immutable-data
    responses.push(clientSearch.setSettings(destination)(settings, requestOptions)))
        .then(() => clientSearch.browseRules(source)({
        // eslint-disable-next-line functional/immutable-data
        batch: rules => responses.push(clientSearch.saveRules(destination)(rules, requestOptions)),
    }))
        .then(() => clientSearch.browseSynonyms(source)({
        // eslint-disable-next-line functional/immutable-data
        batch: synonyms => responses.push(clientSearch.saveSynonyms(destination)(synonyms, requestOptions)),
    }))
        .then(() => clientSearch.browseObjects(source)({
        // eslint-disable-next-line functional/immutable-data
        batch: objects => responses.push(clientSearch.saveObjects(destination)(objects, requestOptions)),
    }));
    return clientCommon.createWaitablePromise(
    /**
     * The original promise will return an array of async responses, now
     * we need to resolve that array of async responses using a
     * `Promise.all`, and then resolve `void` for the end-user.
     */
    promise.then(() => Promise.all(responses)).then(() => undefined), 
    /**
     * Next, if the end-user calls the `wait` method, we need to also call
     * the `wait` method on each element of of async responses.
     */
    (_response, waitRequestOptions) => {
        return Promise.all(responses.map(response => response.wait(waitRequestOptions)));
    });
};

exports.accountCopyIndex = accountCopyIndex;
exports.createDestinationIndiceExistsError = createDestinationIndiceExistsError;
exports.createIndicesInSameAppError = createIndicesInSameAppError;
