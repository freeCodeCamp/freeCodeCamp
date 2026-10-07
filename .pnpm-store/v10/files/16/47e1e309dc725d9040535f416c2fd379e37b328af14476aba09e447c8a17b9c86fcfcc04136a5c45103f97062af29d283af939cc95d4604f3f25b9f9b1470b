/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
let globalObservableLogger;
function addLogger(logger) {
    if (!globalObservableLogger) {
        globalObservableLogger = logger;
    }
    else if (globalObservableLogger instanceof ComposedLogger) {
        globalObservableLogger.loggers.push(logger);
    }
    else {
        globalObservableLogger = new ComposedLogger([globalObservableLogger, logger]);
    }
}
function getLogger() {
    return globalObservableLogger;
}
class ComposedLogger {
    constructor(loggers) {
        this.loggers = loggers;
    }
    handleObservableCreated(observable, location) {
        for (const logger of this.loggers) {
            logger.handleObservableCreated(observable, location);
        }
    }
    handleOnListenerCountChanged(observable, newCount) {
        for (const logger of this.loggers) {
            logger.handleOnListenerCountChanged(observable, newCount);
        }
    }
    handleObservableUpdated(observable, info) {
        for (const logger of this.loggers) {
            logger.handleObservableUpdated(observable, info);
        }
    }
    handleAutorunCreated(autorun, location) {
        for (const logger of this.loggers) {
            logger.handleAutorunCreated(autorun, location);
        }
    }
    handleAutorunDisposed(autorun) {
        for (const logger of this.loggers) {
            logger.handleAutorunDisposed(autorun);
        }
    }
    handleAutorunDependencyChanged(autorun, observable, change) {
        for (const logger of this.loggers) {
            logger.handleAutorunDependencyChanged(autorun, observable, change);
        }
    }
    handleAutorunStarted(autorun) {
        for (const logger of this.loggers) {
            logger.handleAutorunStarted(autorun);
        }
    }
    handleAutorunFinished(autorun) {
        for (const logger of this.loggers) {
            logger.handleAutorunFinished(autorun);
        }
    }
    handleDerivedDependencyChanged(derived, observable, change) {
        for (const logger of this.loggers) {
            logger.handleDerivedDependencyChanged(derived, observable, change);
        }
    }
    handleDerivedCleared(observable) {
        for (const logger of this.loggers) {
            logger.handleDerivedCleared(observable);
        }
    }
    handleBeginTransaction(transaction) {
        for (const logger of this.loggers) {
            logger.handleBeginTransaction(transaction);
        }
    }
    handleEndTransaction(transaction) {
        for (const logger of this.loggers) {
            logger.handleEndTransaction(transaction);
        }
    }
}

export { addLogger, getLogger };
