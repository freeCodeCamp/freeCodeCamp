export class NoopSlicedGenerator {
    constructor(arb, mrng, biasFactor) {
        this.arb = arb;
        this.mrng = mrng;
        this.biasFactor = biasFactor;
    }
    attemptExact() {
        return;
    }
    next() {
        return this.arb.generate(this.mrng, this.biasFactor);
    }
}
