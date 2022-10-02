import { resolve } from 'path';
import { sync as getFilesSync } from 'fast-glob';
const normalize = require('normalize-path');

type InputsOption = {
    [key: string]: string
}

/**
 * Gets html pages paths from `pagesDir`.
 * @param pagesDir root directory of pages
 * @param ignore An array of glob patterns to exclude matches.
 */
export default function getHtmlPages(pagesDir: string, ignore: string[]): InputsOption {
    const path = normalize(resolve(pagesDir, '**', '*.html'));

    const pages = getFilesSync(path, {
        ignore
    })

    const inputs: InputsOption = {};

    pages.forEach((input) => {
        const key = input.replace(pagesDir, '').substring(1);
        inputs[key] = input;
    })

    return inputs;
}