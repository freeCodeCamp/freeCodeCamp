'use strict';

module.exports = {
    emptyTestCases: [
        {
            input: '&',
            withEmptyKeys: {},
            stringifyOutput: {
                brackets: '',
                indices: '',
                repeat: ''
            },
            noEmptyKeys: {}
        },
        {
            input: '&&',
            withEmptyKeys: {},
            stringifyOutput: {
                brackets: '',
                indices: '',
                repeat: ''
            },
            noEmptyKeys: {}
        },
        {
            input: '&=',
            withEmptyKeys: { '': '' },
            stringifyOutput: {
                brackets: '=',
                indices: '=',
                repeat: '='
            },
            noEmptyKeys: {}
        },
        {
            input: '&=&',
            withEmptyKeys: { '': '' },
            stringifyOutput: {
                brackets: '=',
                indices: '=',
                repeat: '='
            },
            noEmptyKeys: {}
        },
        {
            input: '&=&=',
            withEmptyKeys: { '': ['', ''] },
            stringifyOutput: {
                brackets: '[]=&[]=',
                indices: '[0]=&[1]=',
                repeat: '=&='
            },
            noEmptyKeys: {}
        },
        {
            input: '&=&=&',
            withEmptyKeys: { '': ['', ''] },
            stringifyOutput: {
                brackets: '[]=&[]=',
                indices: '[0]=&[1]=',
                repeat: '=&='
            },
            noEmptyKeys: {}
        },
        {
            input: '=',
            withEmptyKeys: { '': '' },
            noEmptyKeys: {},
            stringifyOutput: {
                brackets: '=',
                indices: '=',
                repeat: '='
            }
        },
        {
            input: '=&',
            withEmptyKeys: { '': '' },
            stringifyOutput: {
                brackets: '=',
                indices: '=',
                repeat: '='
            },
            noEmptyKeys: {}
        },
        {
            input: '=&&&',
            withEmptyKeys: { '': '' },
            stringifyOutput: {
                brackets: '=',
                indices: '=',
                repeat: '='
            },
            noEmptyKeys: {}
        },
        {
            input: '=&=&=&',
            withEmptyKeys: { '': ['', '', ''] },
            stringifyOutput: {
                brackets: '[]=&[]=&[]=',
                indices: '[0]=&[1]=&[2]=',
                repeat: '=&=&='
            },
            noEmptyKeys: {}
        },
        {
            input: '=&a[]=b&a[1]=c',
            withEmptyKeys: { '': '', a: ['b', 'c'] },
            stringifyOutput: {
                brackets: '=&a[]=b&a[]=c',
                indices: '=&a[0]=b&a[1]=c',
                repeat: '=&a=b&a=c'
            },
            noEmptyKeys: { a: ['b', 'c'] }
        },
        {
            input: '=a',
            withEmptyKeys: { '': 'a' },
            noEmptyKeys: {},
            stringifyOutput: {
                brackets: '=a',
                indices: '=a',
                repeat: '=a'
            }
        },
        {
            input: 'a==a',
            withEmptyKeys: { a: '=a' },
            noEmptyKeys: { a: '=a' },
            stringifyOutput: {
                brackets: 'a==a',
                indices: 'a==a',
                repeat: 'a==a'
            }
        },
        {
            input: '=&a[]=b',
            withEmptyKeys: { '': '', a: ['b'] },
            stringifyOutput: {
                brackets: '=&a[]=b',
                indices: '=&a[0]=b',
                repeat: '=&a=b'
            },
            noEmptyKeys: { a: ['b'] }
        },
        {
            input: '=&a[]=b&a[]=c&a[2]=d',
            withEmptyKeys: { '': '', a: ['b', 'c', 'd'] },
            stringifyOutput: {
                brackets: '=&a[]=b&a[]=c&a[]=d',
                indices: '=&a[0]=b&a[1]=c&a[2]=d',
                repeat: '=&a=b&a=c&a=d'
            },
            noEmptyKeys: { a: ['b', 'c', 'd'] }
        },
        {
            input: '=a&=b',
            withEmptyKeys: { '': ['a', 'b'] },
            stringifyOutput: {
                brackets: '[]=a&[]=b',
                indices: '[0]=a&[1]=b',
                repeat: '=a&=b'
            },
            noEmptyKeys: {}
        },
        {
            input: '=a&foo=b',
            withEmptyKeys: { '': 'a', foo: 'b' },
            noEmptyKeys: { foo: 'b' },
            stringifyOutput: {
                brackets: '=a&foo=b',
                indices: '=a&foo=b',
                repeat: '=a&foo=b'
            }
        },
        {
            input: 'a[]=b&a=c&=',
            withEmptyKeys: { '': '', a: ['b', 'c'] },
            stringifyOutput: {
                brackets: '=&a[]=b&a[]=c',
                indices: '=&a[0]=b&a[1]=c',
                repeat: '=&a=b&a=c'
            },
            noEmptyKeys: { a: ['b', 'c'] }
        },
        {
            input: 'a[]=b&a=c&=',
            withEmptyKeys: { '': '', a: ['b', 'c'] },
            stringifyOutput: {
                brackets: '=&a[]=b&a[]=c',
                indices: '=&a[0]=b&a[1]=c',
                repeat: '=&a=b&a=c'
            },
            noEmptyKeys: { a: ['b', 'c'] }
        },
        {
            input: 'a[0]=b&a=c&=',
            withEmptyKeys: { '': '', a: ['b', 'c'] },
            stringifyOutput: {
                brackets: '=&a[]=b&a[]=c',
                indices: '=&a[0]=b&a[1]=c',
                repeat: '=&a=b&a=c'
            },
            noEmptyKeys: { a: ['b', 'c'] }
        },
        {
            input: 'a=b&a[]=c&=',
            withEmptyKeys: { '': '', a: ['b', 'c'] },
            stringifyOutput: {
                brackets: '=&a[]=b&a[]=c',
                indices: '=&a[0]=b&a[1]=c',
                repeat: '=&a=b&a=c'
            },
            noEmptyKeys: { a: ['b', 'c'] }
        },
        {
            input: 'a=b&a[0]=c&=',
            withEmptyKeys: { '': '', a: ['b', 'c'] },
            stringifyOutput: {
                brackets: '=&a[]=b&a[]=c',
                indices: '=&a[0]=b&a[1]=c',
                repeat: '=&a=b&a=c'
            },
            noEmptyKeys: { a: ['b', 'c'] }
        },
        {
            input: '[]=a&[]=b& []=1',
            withEmptyKeys: { '': ['a', 'b'], ' ': ['1'] },
            stringifyOutput: {
                brackets: '[]=a&[]=b& []=1',
                indices: '[0]=a&[1]=b& [0]=1',
                repeat: '=a&=b& =1'
            },
            noEmptyKeys: { 0: 'a', 1: 'b', ' ': ['1'] }
        },
        {
            input: '[0]=a&[1]=b&a[0]=1&a[1]=2',
            withEmptyKeys: { '': ['a', 'b'], a: ['1', '2'] },
            noEmptyKeys: { 0: 'a', 1: 'b', a: ['1', '2'] },
            stringifyOutput: {
                brackets: '[]=a&[]=b&a[]=1&a[]=2',
                indices: '[0]=a&[1]=b&a[0]=1&a[1]=2',
                repeat: '=a&=b&a=1&a=2'
            }
        },
        {
            input: '[deep]=a&[deep]=2',
            withEmptyKeys: { '': { deep: ['a', '2'] }
            },
            stringifyOutput: {
                brackets: '[deep][]=a&[deep][]=2',
                indices: '[deep][0]=a&[deep][1]=2',
                repeat: '[deep]=a&[deep]=2'
            },
            noEmptyKeys: { deep: ['a', '2'] }
        },
        {
            input: '%5B0%5D=a&%5B1%5D=b',
            withEmptyKeys: { '': ['a', 'b'] },
            stringifyOutput: {
                brackets: '[]=a&[]=b',
                indices: '[0]=a&[1]=b',
                repeat: '=a&=b'
            },
            noEmptyKeys: { 0: 'a', 1: 'b' }
        }
    ]
};
