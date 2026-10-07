import { parseFiles } from "@ast-grep/napi";
import MagicString from "magic-string";
import { chalk, fs, path } from "zx";
import { errors } from "./errors.js";
import { root } from "./utils.js";

/**
 * @typedef {import("@ast-grep/napi").SgNode} SgNode
 */

const export_lentgh = "export".length;

export function ast_grep() {
    const task_queue = [];

    const task = parseFiles([root("esm")], (err, tree) => {
        const filename = path.basename(tree.filename(), ".js");
        if (filename === "index") {
            return;
        }

        const source = new MagicString(tree.root().text());
        source.prepend(`"use strict";\n\n`);

        if (filename.startsWith("_ts")) {
            const match = tree.root().find(`export { $NAME as _, $NAME as $ALIAS } from "tslib"`);
            if (match) {
                const name = match.getMatch("NAME").text();
                const alias = match.getMatch("ALIAS").text();

                if (alias !== filename) {
                    report_ts_mismatch(tree.filename(), match);
                }

                const range = match.range();

                source.update(
                    range.start.index,
                    range.end.index,
                    `exports._ = exports.${alias} = require("tslib").${name};`,
                );
                task_queue.push(
                    fs.writeFile(root("cjs", `${filename}.cjs`), source.toString(), {
                        encoding: "utf-8",
                    }),
                );
            } else {
                report_noexport(tree.filename());
            }
            return;
        }

        // rewrite export named function
        const match = tree.root().find({
            rule: {
                kind: "export_statement",
                pattern: "export function $FUNC($$$){$$$}",
            },
        });

        if (match) {
            const func = match.getMatch("FUNC");
            const func_name = func.text();
            if (func_name !== filename) {
                report_export_mismatch(tree.filename(), match);
            }

            const export_start = match.range().start.index;
            const export_end = export_start + export_lentgh;
            source.update(
                export_start,
                export_end,
                `exports._ = exports.${func_name} = ${func_name};`,
            );

            match
                .findAll({
                    rule: {
                        pattern: func_name,
                        kind: "identifier",
                        inside: { kind: "assignment_expression", field: "left" },
                    },
                })
                .forEach((match) => {
                    const range = match.range();

                    source.prependLeft(range.start.index, `exports._ = exports.${func_name} = `);
                });

            const export_shortname = `export { ${func_name} as _}`;

            const export_alias = tree.root().find(export_shortname);

            if (!export_alias) {
                task_queue.push(
                    fs.appendFile(tree.filename(), export_shortname, "utf-8"),
                );
            } else {
                const range = export_alias.range();
                source.remove(range.start.index, range.end.index);
            }
        } else {
            report_noexport(tree.filename(tree.filename()));
        }

        // rewrite import
        tree
            .root()
            .findAll({ rule: { pattern: `import { $BINDING } from "$SOURCE"` } })
            .forEach((match) => {
                const import_binding = match.getMatch("BINDING").text();
                const import_source = match.getMatch("SOURCE").text();

                const import_basename = path.basename(import_source, ".js");

                if (import_binding !== import_basename) {
                    report_import_mismatch(tree.filename(), match);
                }

                const range = match.range();

                source.update(
                    range.start.index,
                    range.end.index,
                    `var ${import_binding} = require("./${import_binding}.cjs");`,
                );

                tree
                    .root()
                    .findAll({
                        rule: {
                            pattern: import_binding,
                            kind: "identifier",
                            inside: {
                                not: {
                                    kind: "import_specifier",
                                },
                            },
                        },
                    })
                    .forEach((match) => {
                        const range = match.range();
                        const ref_name = match.text();

                        source.update(
                            range.start.index,
                            range.end.index,
                            `${ref_name}._`,
                        );
                    });
            });

        task_queue.push(
            fs.writeFile(root("cjs", `${filename}.cjs`), source.toString(), {
                encoding: "utf-8",
            }),
        );
    });

    task_queue.push(task);

    return task_queue;
}

/**
 * @param {string} filename
 * @param {SgNode} match
 */
function report_ts_mismatch(filename, match) {
    const range = match.getMatch("ALIAS").range();

    errors.push(
        [
            `${chalk.bold.red("error")}: mismatch exported function name.`,
            "",
            `${chalk.blue("-->")} ${filename}:${match.range().start.line + 1}`,
            "",
            match.text(),
            chalk.red(
                [
                    " ".repeat(range.start.column),
                    "^".repeat(range.end.column - range.start.column),
                ]
                    .join(""),
            ),
            `${
                chalk.bold(
                    "note:",
                )
            } The exported name should be the same as the filename.`,
            "",
        ]
            .join("\n"),
    );
}

/**
 * @param {string} filename
 * @param {SgNode} match
 */
function report_export_mismatch(filename, match) {
    const func = match.getMatch("FUNC");
    const func_range = func.range();

    const text = match.text().split("\n");
    const offset = func_range.start.line - match.range().start.line;

    text.splice(
        offset + 1,
        text.length,
        chalk.red(
            [
                " ".repeat(func_range.start.column),
                "^".repeat(func_range.end.column - func_range.start.column),
            ]
                .join(""),
        ),
    );

    errors.push(
        [
            `${chalk.bold.red("error")}: mismatch exported function name.`,
            "",
            `${chalk.blue("-->")} ${filename}:${func_range.start.line + 1}:${func_range.start.column + 1}`,
            "",
            ...text,
            "",
            `${
                chalk.bold(
                    "note:",
                )
            } The exported name should be the same as the filename.`,
            "",
        ]
            .join("\n"),
    );
}

/**
 * @param {string} filename
 * @param {SgNode} match
 */
function report_import_mismatch(filename, match) {
    const binding_range = match.getMatch("BINDING").range();
    const source_range = match.getMatch("SOURCE").range();

    errors.push(
        [
            `${chalk.bold.red("error")}: mismatch imported binding name.`,
            "",
            `${chalk.blue("-->")} ${filename}:${match.range().start.line + 1}`,
            "",
            match.text(),
            [
                " ".repeat(binding_range.start.column),
                chalk.red("^".repeat(binding_range.end.column - binding_range.start.column)),
                " ".repeat(source_range.start.column - binding_range.end.column),
                chalk.blue("-".repeat(source_range.end.column - source_range.start.column)),
            ]
                .join(""),
            `${
                chalk.bold(
                    "note:",
                )
            } The imported binding name should be the same as the import source basename.`,
            "",
        ]
            .join("\n"),
    );
}

/**
 * @param {string} filename
 */
function report_noexport(filename) {
    errors.push(
        [`${chalk.bold.red("error")}: exported name not found`, `${chalk.blue("-->")} ${filename}`].join("\n"),
    );
}
