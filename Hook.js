"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hookPlugin = void 0;
function hookPlugin(Cypress) {
    before(function () {
        cy.task("Should Stop").then(function (shouldStop) {
            if (shouldStop) {
                Cypress.runner.stop();
                return;
            }
        });
    });
}
exports.hookPlugin = hookPlugin;
