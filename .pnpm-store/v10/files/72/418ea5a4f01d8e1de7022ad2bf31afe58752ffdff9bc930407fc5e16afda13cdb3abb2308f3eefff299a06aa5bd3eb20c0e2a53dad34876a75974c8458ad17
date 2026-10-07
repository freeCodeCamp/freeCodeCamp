import { NODE_NAME_TO_PROCESSOR_CONSTRUCTOR_MAPS } from '../globals';
import { isConstructible } from '../helpers/is-constructible';
import { splitImportStatements } from '../helpers/split-import-statements';
const verifyParameterDescriptors = (parameterDescriptors) => {
    if (parameterDescriptors !== undefined && !Array.isArray(parameterDescriptors)) {
        throw new TypeError('The parameterDescriptors property of given value for processorCtor is not an array.');
    }
};
const verifyProcessorCtor = (processorCtor) => {
    if (!isConstructible(processorCtor)) {
        throw new TypeError('The given value for processorCtor should be a constructor.');
    }
    if (processorCtor.prototype === null || typeof processorCtor.prototype !== 'object') {
        throw new TypeError('The given value for processorCtor should have a prototype.');
    }
};
export const createAddAudioWorkletModule = (cacheTestResult, createNotSupportedError, evaluateSource, exposeCurrentFrameAndCurrentTime, fetchSource, getNativeContext, getOrCreateBackupOfflineAudioContext, isNativeOfflineAudioContext, nativeAudioWorkletNodeConstructor, ongoingRequests, resolvedRequests, testAudioWorkletProcessorPostMessageSupport, window) => {
    let index = 0;
    return (context, moduleURL, options = { credentials: 'omit' }) => {
        const resolvedRequestsOfContext = resolvedRequests.get(context);
        if (resolvedRequestsOfContext !== undefined && resolvedRequestsOfContext.has(moduleURL)) {
            return Promise.resolve();
        }
        const ongoingRequestsOfContext = ongoingRequests.get(context);
        if (ongoingRequestsOfContext !== undefined) {
            const promiseOfOngoingRequest = ongoingRequestsOfContext.get(moduleURL);
            if (promiseOfOngoingRequest !== undefined) {
                return promiseOfOngoingRequest;
            }
        }
        const nativeContext = getNativeContext(context);
        // Bug #59: Safari does not implement the audioWorklet property.
        const promise = nativeContext.audioWorklet === undefined
            ? fetchSource(moduleURL)
                .then(([source, absoluteUrl]) => {
                const [importStatements, sourceWithoutImportStatements] = splitImportStatements(source, absoluteUrl);
                /*
                 * This is the unminified version of the code used below:
                 *
                 * ```js
                 * ${ importStatements };
                 * ((a, b) => {
                 *     (a[b] = a[b] || [ ]).push(
                 *         (AudioWorkletProcessor, global, registerProcessor, sampleRate, self, window) => {
                 *             ${ sourceWithoutImportStatements }
                 *         }
                 *     );
                 * })(window, '_AWGS');
                 * ```
                 */
                // tslint:disable-next-line:max-line-length
                const wrappedSource = `${importStatements};((a,b)=>{(a[b]=a[b]||[]).push((AudioWorkletProcessor,global,registerProcessor,sampleRate,self,window)=>{${sourceWithoutImportStatements}
})})(window,'_AWGS')`;
                // @todo Evaluating the given source code is a possible security problem.
                return evaluateSource(wrappedSource);
            })
                .then(() => {
                const evaluateAudioWorkletGlobalScope = window._AWGS.pop();
                if (evaluateAudioWorkletGlobalScope === undefined) {
                    // Bug #182 Chrome and Edge do throw an instance of a SyntaxError instead of a DOMException.
                    throw new SyntaxError();
                }
                exposeCurrentFrameAndCurrentTime(nativeContext.currentTime, nativeContext.sampleRate, () => evaluateAudioWorkletGlobalScope(class AudioWorkletProcessor {
                }, undefined, (name, processorCtor) => {
                    if (name.trim() === '') {
                        throw createNotSupportedError();
                    }
                    const nodeNameToProcessorConstructorMap = NODE_NAME_TO_PROCESSOR_CONSTRUCTOR_MAPS.get(nativeContext);
                    if (nodeNameToProcessorConstructorMap !== undefined) {
                        if (nodeNameToProcessorConstructorMap.has(name)) {
                            throw createNotSupportedError();
                        }
                        verifyProcessorCtor(processorCtor);
                        verifyParameterDescriptors(processorCtor.parameterDescriptors);
                        nodeNameToProcessorConstructorMap.set(name, processorCtor);
                    }
                    else {
                        verifyProcessorCtor(processorCtor);
                        verifyParameterDescriptors(processorCtor.parameterDescriptors);
                        NODE_NAME_TO_PROCESSOR_CONSTRUCTOR_MAPS.set(nativeContext, new Map([[name, processorCtor]]));
                    }
                }, nativeContext.sampleRate, undefined, undefined));
            })
            : Promise.all([
                fetchSource(moduleURL),
                Promise.resolve(cacheTestResult(testAudioWorkletProcessorPostMessageSupport, testAudioWorkletProcessorPostMessageSupport))
            ]).then(([[source, absoluteUrl], isSupportingPostMessage]) => {
                const currentIndex = index + 1;
                index = currentIndex;
                const [importStatements, sourceWithoutImportStatements] = splitImportStatements(source, absoluteUrl);
                /*
                 * Bug #179: Firefox does not allow to transfer any buffer which has been passed to the process() method as an argument.
                 *
                 * This is the unminified version of the code used below.
                 *
                 * ```js
                 * class extends AudioWorkletProcessor {
                 *
                 *     __buffers = new WeakSet();
                 *
                 *     constructor () {
                 *         super();
                 *
                 *         this.port.postMessage = ((postMessage) => {
                 *             return (message, transferables) => {
                 *                 const filteredTransferables = (transferables)
                 *                     ? transferables.filter((transferable) => !this.__buffers.has(transferable))
                 *                     : transferables;
                 *
                 *                 return postMessage.call(this.port, message, filteredTransferables);
                 *              };
                 *         })(this.port.postMessage);
                 *     }
                 * }
                 * ```
                 */
                const patchedAudioWorkletProcessor = isSupportingPostMessage
                    ? 'AudioWorkletProcessor'
                    : 'class extends AudioWorkletProcessor {__b=new WeakSet();constructor(){super();(p=>p.postMessage=(q=>(m,t)=>q.call(p,m,t?t.filter(u=>!this.__b.has(u)):t))(p.postMessage))(this.port)}}';
                /*
                 * Bug #170: Chrome and Edge do call process() with an array with empty channelData for each input if no input is connected.
                 *
                 * Bug #179: Firefox does not allow to transfer any buffer which has been passed to the process() method as an argument.
                 *
                 * Bug #190: Safari doesn't throw an error when loading an unparsable module.
                 *
                 * This is the unminified version of the code used below:
                 *
                 * ```js
                 * `${ importStatements };
                 * ((AudioWorkletProcessor, registerProcessor) => {${ sourceWithoutImportStatements }
                 * })(
                 *     ${ patchedAudioWorkletProcessor },
                 *     (name, processorCtor) => registerProcessor(name, class extends processorCtor {
                 *
                 *         __collectBuffers = (array) => {
                 *             array.forEach((element) => this.__buffers.add(element.buffer));
                 *         };
                 *
                 *         process (inputs, outputs, parameters) {
                 *             inputs.forEach(this.__collectBuffers);
                 *             outputs.forEach(this.__collectBuffers);
                 *             this.__collectBuffers(Object.values(parameters));
                 *
                 *             return super.process(
                 *                 (inputs.map((input) => input.some((channelData) => channelData.length === 0)) ? [ ] : input),
                 *                 outputs,
                 *                 parameters
                 *             );
                 *         }
                 *
                 *     })
                 * );
                 *
                 * registerProcessor(`__sac${currentIndex}`, class extends AudioWorkletProcessor{
                 *
                 *     process () {
                 *         return false;
                 *     }
                 *
                 * })`
                 * ```
                 */
                const memberDefinition = isSupportingPostMessage ? '' : '__c = (a) => a.forEach(e=>this.__b.add(e.buffer));';
                const bufferRegistration = isSupportingPostMessage
                    ? ''
                    : 'i.forEach(this.__c);o.forEach(this.__c);this.__c(Object.values(p));';
                const wrappedSource = `${importStatements};((AudioWorkletProcessor,registerProcessor)=>{${sourceWithoutImportStatements}
})(${patchedAudioWorkletProcessor},(n,p)=>registerProcessor(n,class extends p{${memberDefinition}process(i,o,p){${bufferRegistration}return super.process(i.map(j=>j.some(k=>k.length===0)?[]:j),o,p)}}));registerProcessor('__sac${currentIndex}',class extends AudioWorkletProcessor{process(){return !1}})`;
                const blob = new Blob([wrappedSource], { type: 'application/javascript; charset=utf-8' });
                const url = URL.createObjectURL(blob);
                return nativeContext.audioWorklet
                    .addModule(url, options)
                    .then(() => {
                    if (isNativeOfflineAudioContext(nativeContext)) {
                        return nativeContext;
                    }
                    // Bug #186: Chrome and Edge do not allow to create an AudioWorkletNode on a closed AudioContext.
                    const backupOfflineAudioContext = getOrCreateBackupOfflineAudioContext(nativeContext);
                    return backupOfflineAudioContext.audioWorklet.addModule(url, options).then(() => backupOfflineAudioContext);
                })
                    .then((nativeContextOrBackupOfflineAudioContext) => {
                    if (nativeAudioWorkletNodeConstructor === null) {
                        throw new SyntaxError();
                    }
                    try {
                        // Bug #190: Safari doesn't throw an error when loading an unparsable module.
                        new nativeAudioWorkletNodeConstructor(nativeContextOrBackupOfflineAudioContext, `__sac${currentIndex}`); // tslint:disable-line:no-unused-expression
                    }
                    catch {
                        throw new SyntaxError();
                    }
                })
                    .finally(() => URL.revokeObjectURL(url));
            });
        if (ongoingRequestsOfContext === undefined) {
            ongoingRequests.set(context, new Map([[moduleURL, promise]]));
        }
        else {
            ongoingRequestsOfContext.set(moduleURL, promise);
        }
        promise
            .then(() => {
            const updatedResolvedRequestsOfContext = resolvedRequests.get(context);
            if (updatedResolvedRequestsOfContext === undefined) {
                resolvedRequests.set(context, new Set([moduleURL]));
            }
            else {
                updatedResolvedRequestsOfContext.add(moduleURL);
            }
        })
            .finally(() => {
            const updatedOngoingRequestsOfContext = ongoingRequests.get(context);
            if (updatedOngoingRequestsOfContext !== undefined) {
                updatedOngoingRequestsOfContext.delete(moduleURL);
            }
        });
        return promise;
    };
};
//# sourceMappingURL=add-audio-worklet-module.js.map