export default {
    valid: [
        {
            columns: {
                0: {
                    alignment: 'left',
                    // minWidth: 10,
                    width: 10
                },
                1: {
                    alignment: 'center',
                    // minWidth: 10,
                    width: 10
                },
                2: {
                    alignment: 'right',
                    // minWidth: 10,
                    width: 10
                }
            }
        },
        {
            border: {
                topBody: `─`,
                topJoin: `┬`,
                topLeft: `┌`,
                topRight: `┐`,

                bottomBody: `─`,
                bottomJoin: `┴`,
                bottomLeft: `└`,
                bottomRight: `┘`,

                bodyLeft: `│`,
                bodyRight: `│`,
                bodyJoin: `│`,

                joinBody: `─`,
                joinLeft: `├`,
                joinRight: `┤`,
                joinJoin: `┼`
            }
        },
        {
            columns: {
                0: {
                    paddingLeft: 3
                },
                1: {
                    width: 2,
                    paddingRight: 3
                }
            }
        },
        {
            border: {},
            columnDefault: {
                paddingLeft: 0,
                paddingRight: 1
            },
            // drawJoin: () => {
            //     return false
            // }
        },
        {
            columnDefault: {
                width: 50
            },
            // columnCount: 3,
            columns: {
                0: {
                    width: 10,
                    alignment: 'right'
                },
                1: {
                    alignment: 'center',
                },
                2: {
                    width: 10
                }
            }
        },        
        { border: { topBody: '-' } },
        { border: { topJoin: '-' } },
        { border: { topLeft: '-' } },
        { border: { topRight: '-' } },
        { border: { bottomBody: '-' } },
        { border: { bottomJoin: '-' } },
        { border: { bottomLeft: '-' } },
        { border: { bottomRight: '-' } },
        { border: { bodyLeft: '-' } },
        { border: { bodyRight: '-' } },
        { border: { bodyJoin: '-' } },
        { border: { joinBody: '-' } },
        { border: { joinLeft: '-' } },
        { border: { joinRight: '-' } },
        { border: { joinJoin: '-' } },
        { columns: { '1': { alignment: 'left' } } },
        { columns: { '1': { width: 5 } } },
        { columns: { '1': { wrapWord: true } } },
        { columns: { '1': { truncate: 1 } } },
        { columns: { '1': { paddingLeft: 1 } } },
        { columns: { '1': { paddingRight: 1 } } },
        { columnDefault: { alignment: 'left' } },
        { columnDefault: { width: 5 } },
        { columnDefault: { wrapWord: true } },
        { columnDefault: { truncate: 1 } },
        { columnDefault: { paddingLeft: 1 } },
        { columnDefault: { paddingRight: 1 } }
    ],
    invalid: [
        { border: 1 },
        { border: { unknown: '-' } },
        { border: { topBody: 1 } },
        { border: { topJoin: 1 } },
        { border: { topLeft: 1 } },
        { border: { topRight: 1 } },
        { border: { bottomBody: 1 } },
        { border: { bottomJoin: 1 } },
        { border: { bottomLeft: 1 } },
        { border: { bottomRight: 1 } },
        { border: { bodyLeft: 1 } },
        { border: { bodyRight: 1 } },
        { border: { bodyJoin: 1 } },
        { border: { joinBody: 1 } },
        { border: { joinLeft: 1 } },
        { border: { joinRight: 1 } },
        { border: { joinJoin: 1 } },
        { columns: 1 },
        { columns: { a: { width: 5 } } },
        { columns: { '1': 1 } },
        { columns: { '1': { unknown: 1 } } },
        { columns: { '1': { alignment: 1 } } },
        { columns: { '1': { alignment: '1' } } },
        { columns: { '1': { width: '5' } } },
        { columns: { '1': { wrapWord: 1 } } },
        { columns: { '1': { truncate: '1' } } },
        { columns: { '1': { paddingLeft: '1' } } },
        { columns: { '1': { paddingRight: '1' } } },
        { columnDefault: 1 },
        { columnDefault: { unknown: 1 } },
        { columnDefault: { alignment: 1 } },
        { columnDefault: { alignment: '1' } },
        { columnDefault: { width: '5' } },
        { columnDefault: { wrapWord: 1 } },
        { columnDefault: { truncate: '1' } },
        { columnDefault: { paddingLeft: '1' } },
        { columnDefault: { paddingRight: '1' } },
        { unknown: 1 }
    ]
};
