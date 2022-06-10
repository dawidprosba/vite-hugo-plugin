declare type InputsOption = {
    [key: string]: string;
};
/**
 * Gets html pages paths from `pagesDir`.
 * @param pagesDir root directory of pages
 * @param ignore An array of glob patterns to exclude matches.
 */
export default function getHtmlPages(pagesDir: string, ignore: string[]): InputsOption;
export {};
