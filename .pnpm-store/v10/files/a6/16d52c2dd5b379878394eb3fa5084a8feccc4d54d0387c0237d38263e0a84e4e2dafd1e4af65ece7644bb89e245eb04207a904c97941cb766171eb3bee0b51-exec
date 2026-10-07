'use strict';

const Reach = require('./reach');


const internals = {};


module.exports = function (obj, template, options) {

    return template.replace(/{([^{}]+)}/g, ($0, chain) => {

        const value = Reach(obj, chain, options);
        return (value === undefined || value === null ? '' : value);
    });
};
