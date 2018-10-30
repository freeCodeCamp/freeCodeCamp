'use strict';

/**
 * @fileoverview Rule to prefer imports to AMD
 * @author Jamund Ferguson
 */

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {}
    },

    create: function (context) {

        return {

            'CallExpression': function (node) {
                if (context.getScope().type !== 'module') return;

                if (node.callee.type !== 'Identifier') return;
                if (node.callee.name !== 'require' && node.callee.name !== 'define') return;

                // todo: capture define((require, module, exports) => {}) form?
                if (node.arguments.length !== 2) return;

                const modules = node.arguments[0];
                if (modules.type !== 'ArrayExpression') return;

                // todo: check second arg type? (identifier or callback)

                context.report(node, `Expected imports instead of AMD ${ node.callee.name }().`);
            }
        };
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVzL25vLWFtZC5qcyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwibWV0YSIsImRvY3MiLCJjcmVhdGUiLCJjb250ZXh0Iiwibm9kZSIsImdldFNjb3BlIiwidHlwZSIsImNhbGxlZSIsIm5hbWUiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJtb2R1bGVzIiwicmVwb3J0Il0sIm1hcHBpbmdzIjoiOztBQUFBOzs7OztBQUtBO0FBQ0E7QUFDQTs7QUFFQUEsT0FBT0MsT0FBUCxHQUFpQjtBQUNiQyxVQUFNO0FBQ0ZDLGNBQU07QUFESixLQURPOztBQUtiQyxZQUFRLFVBQVVDLE9BQVYsRUFBbUI7O0FBRXZCLGVBQU87O0FBRUgsOEJBQWtCLFVBQVVDLElBQVYsRUFBZ0I7QUFDcEMsb0JBQUlELFFBQVFFLFFBQVIsR0FBbUJDLElBQW5CLEtBQTRCLFFBQWhDLEVBQTBDOztBQUUxQyxvQkFBSUYsS0FBS0csTUFBTCxDQUFZRCxJQUFaLEtBQXFCLFlBQXpCLEVBQXVDO0FBQ3ZDLG9CQUFJRixLQUFLRyxNQUFMLENBQVlDLElBQVosS0FBcUIsU0FBckIsSUFDQUosS0FBS0csTUFBTCxDQUFZQyxJQUFaLEtBQXFCLFFBRHpCLEVBQ21DOztBQUVuQztBQUNBLG9CQUFJSixLQUFLSyxTQUFMLENBQWVDLE1BQWYsS0FBMEIsQ0FBOUIsRUFBaUM7O0FBRWpDLHNCQUFNQyxVQUFVUCxLQUFLSyxTQUFMLENBQWUsQ0FBZixDQUFoQjtBQUNBLG9CQUFJRSxRQUFRTCxJQUFSLEtBQWlCLGlCQUFyQixFQUF3Qzs7QUFFeEM7O0FBRU1ILHdCQUFRUyxNQUFSLENBQWVSLElBQWYsRUFBc0Isb0NBQWtDQSxLQUFLRyxNQUFMLENBQVlDLElBQUssTUFBekU7QUFDSDtBQWxCRSxTQUFQO0FBcUJIO0FBNUJZLENBQWpCIiwiZmlsZSI6InJ1bGVzL25vLWFtZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGZpbGVvdmVydmlldyBSdWxlIHRvIHByZWZlciBpbXBvcnRzIHRvIEFNRFxuICogQGF1dGhvciBKYW11bmQgRmVyZ3Vzb25cbiAqL1xuXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gUnVsZSBEZWZpbml0aW9uXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBtZXRhOiB7XG4gICAgICAgIGRvY3M6IHt9LFxuICAgIH0sXG5cbiAgICBjcmVhdGU6IGZ1bmN0aW9uIChjb250ZXh0KSB7XG5cbiAgICAgICAgcmV0dXJuIHtcblxuICAgICAgICAgICAgJ0NhbGxFeHByZXNzaW9uJzogZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICBpZiAoY29udGV4dC5nZXRTY29wZSgpLnR5cGUgIT09ICdtb2R1bGUnKSByZXR1cm5cblxuICAgICAgICAgIGlmIChub2RlLmNhbGxlZS50eXBlICE9PSAnSWRlbnRpZmllcicpIHJldHVyblxuICAgICAgICAgIGlmIChub2RlLmNhbGxlZS5uYW1lICE9PSAncmVxdWlyZScgJiZcbiAgICAgICAgICAgICAgbm9kZS5jYWxsZWUubmFtZSAhPT0gJ2RlZmluZScpIHJldHVyblxuXG4gICAgICAgICAgLy8gdG9kbzogY2FwdHVyZSBkZWZpbmUoKHJlcXVpcmUsIG1vZHVsZSwgZXhwb3J0cykgPT4ge30pIGZvcm0/XG4gICAgICAgICAgaWYgKG5vZGUuYXJndW1lbnRzLmxlbmd0aCAhPT0gMikgcmV0dXJuXG5cbiAgICAgICAgICBjb25zdCBtb2R1bGVzID0gbm9kZS5hcmd1bWVudHNbMF1cbiAgICAgICAgICBpZiAobW9kdWxlcy50eXBlICE9PSAnQXJyYXlFeHByZXNzaW9uJykgcmV0dXJuXG5cbiAgICAgICAgICAvLyB0b2RvOiBjaGVjayBzZWNvbmQgYXJnIHR5cGU/IChpZGVudGlmaWVyIG9yIGNhbGxiYWNrKVxuXG4gICAgICAgICAgICAgICAgY29udGV4dC5yZXBvcnQobm9kZSwgYEV4cGVjdGVkIGltcG9ydHMgaW5zdGVhZCBvZiBBTUQgJHtub2RlLmNhbGxlZS5uYW1lfSgpLmApXG4gICAgICAgICAgICB9LFxuICAgICAgICB9XG5cbiAgICB9LFxufVxuIl19