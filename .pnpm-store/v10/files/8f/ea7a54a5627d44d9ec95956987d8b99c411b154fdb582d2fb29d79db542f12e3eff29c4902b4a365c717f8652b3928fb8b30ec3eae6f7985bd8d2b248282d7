'use strict';

async function tab({ shift } = {}) {
    return this.keyboard(shift === true ? '{Shift>}{Tab}{/Shift}' : shift === false ? '[/ShiftLeft][/ShiftRight]{Tab}' : '{Tab}');
}

exports.tab = tab;
