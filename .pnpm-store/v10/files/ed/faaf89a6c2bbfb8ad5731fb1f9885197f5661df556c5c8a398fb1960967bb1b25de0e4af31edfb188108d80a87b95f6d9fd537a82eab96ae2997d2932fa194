import terser from '@rollup/plugin-terser';
import json from "@rollup/plugin-json";
import replace from "@rollup/plugin-replace";

export default [
    {
        input: "node-index.js",
        output: [
            {
                file: "dist/node.cjs",
                format: "cjs",
                sourcemap: true
            }
        ]
    },
    {
        input: "index.js",
        output: {
            file: "dist/index.js",
            format: "umd",
            name: "msgpackr",
            sourcemap: true
        }
    },
    {
        input: "index.js",
        plugins: [
            replace({ Function: 'BlockedFunction '})
        ],
        output: {
            file: "dist/index-no-eval.cjs",
            format: "umd",
            name: "msgpackr",
            sourcemap: true
        },
    },
    {
        input: "unpack.js",
        plugins: [
            replace({ Function: 'BlockedFunction '})
        ],
        output: {
            file: "dist/unpack-no-eval.cjs",
            format: "umd",
            name: "msgpackr",
            sourcemap: true
        },
    },
    {
        input: "index.js",
        plugins: [
            terser({})
        ],
        output: {
            file: "dist/index.min.js",
            format: "umd",
            name: "msgpackr",
            sourcemap: true
        }
    },
    {
        input: "index.js",
        plugins: [
            replace({ Function: 'BlockedFunction '}),
            terser({})
        ],
        output: {
            file: "dist/index-no-eval.min.js",
            format: "umd",
            name: "msgpackr",
            sourcemap: true
        }
    },
    {
        input: "tests/test.js",
        plugins: [json()],
        external: ['chai', '../index.js'],
        output: {
            file: "dist/test.js",
            format: "iife",
            sourcemap: true,
            globals: {
                chai: 'chai',
                './index.js': 'msgpackr',
            },
        }
    }
];
