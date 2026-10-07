import defineFunction from "../defineFunction";

defineFunction({
    type: "internal",
    names: ["\\relax"],
    props: {
        numArgs: 0,
        allowedInText: true,
        allowedInArgument: true,
    },
    handler({parser}) {
        return {
            type: "internal",
            mode: parser.mode,
        };
    },
});
