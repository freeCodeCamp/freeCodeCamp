"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseTriple = parseTriple;
const constants_js_1 = require("./constants.js");
const CpuToNodeArch = {
    x86_64: 'x64',
    aarch64: 'arm64',
    i686: 'ia32',
    armv7: 'arm',
    riscv64gc: 'riscv64',
    powerpc64le: 'ppc64',
};
const SysToNodePlatform = {
    linux: 'linux',
    freebsd: 'freebsd',
    darwin: 'darwin',
    windows: 'win32',
};
function parseTriple(rawTriple) {
    if (rawTriple === constants_js_1.WASM32_WASI ||
        rawTriple === `${constants_js_1.WASM32_WASI}-preview1-threads` ||
        rawTriple.startsWith(`${constants_js_1.WASM32}-${constants_js_1.WASI}p`)) {
        return {
            triple: rawTriple,
            platformArchABI: constants_js_1.WASM32_WASI,
            platform: constants_js_1.WASI,
            arch: constants_js_1.WASM32,
            abi: constants_js_1.WASI,
        };
    }
    const triple = rawTriple.endsWith(constants_js_1.EABI)
        ? `${rawTriple.slice(0, -4)}-${constants_js_1.EABI}`
        : rawTriple;
    const triples = triple.split('-');
    let cpu;
    let sys;
    let abi = null;
    if (triples.length === 2) {
        ;
        [cpu, sys] = triples;
    }
    else {
        ;
        [cpu, , sys, abi = null] = triples;
    }
    const platform = SysToNodePlatform[sys] ?? sys;
    const arch = CpuToNodeArch[cpu] ?? cpu;
    return {
        triple: rawTriple,
        platformArchABI: abi ? `${platform}-${arch}-${abi}` : `${platform}-${arch}`,
        platform,
        arch,
        abi,
    };
}
//# sourceMappingURL=target.js.map