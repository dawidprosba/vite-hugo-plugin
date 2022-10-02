"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const fast_glob_1 = require("fast-glob");
const normalize = require('normalize-path');
/**
 * Gets html pages paths from `pagesDir`.
 * @param pagesDir root directory of pages
 * @param ignore An array of glob patterns to exclude matches.
 */
function getHtmlPages(pagesDir, ignore) {
    const path = normalize((0, path_1.resolve)(pagesDir, '**', '*.html'));
    const pages = (0, fast_glob_1.sync)(path, {
        ignore
    });
    const inputs = {};
    pages.forEach((input) => {
        const key = input.replace(pagesDir, '').substring(1);
        inputs[key] = input;
    });
    return inputs;
}
exports.default = getHtmlPages;
