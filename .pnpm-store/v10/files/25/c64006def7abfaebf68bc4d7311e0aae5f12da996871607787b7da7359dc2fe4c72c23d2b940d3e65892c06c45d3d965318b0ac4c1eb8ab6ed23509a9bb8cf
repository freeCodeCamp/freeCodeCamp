'use strict';

const ErrorReportingMixinBase = require('./mixin-base');
const ErrorReportingPreprocessorMixin = require('./preprocessor-mixin');
const Mixin = require('../../utils/mixin');

class ErrorReportingTokenizerMixin extends ErrorReportingMixinBase {
    constructor(tokenizer, opts) {
        super(tokenizer, opts);

        const preprocessorMixin = Mixin.install(tokenizer.preprocessor, ErrorReportingPreprocessorMixin, opts);

        this.posTracker = preprocessorMixin.posTracker;
    }
}

module.exports = ErrorReportingTokenizerMixin;
