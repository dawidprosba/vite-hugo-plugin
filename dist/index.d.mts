import { PluginOption } from 'vite';

interface Options {
    /**
     * Output path to hugo build directory.
     */
    hugoOutDir: string;
    /**
     * Root directory of an application.
     */
    appDir: string;
    /**
     * Patterns to ignore html input files for rollup.
     */
    ignoreHTMLFiles?: string[];
    /**
     * Hugo config file name. By default is set to `hugo.toml`.
     */
    hugoConfigFileName?: string;
}
declare function hugoPlugin({ hugoOutDir, appDir, ignoreHTMLFiles, hugoConfigFileName, }: Options): PluginOption;

export { type Options, hugoPlugin as default };
