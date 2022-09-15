import { PluginOption } from 'vite';
export interface Options {
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
    ignoreHTMLFiles: string[];
}
export default function hugoPlugin({ hugoOutDir, appDir, ignoreHTMLFiles }: Options): PluginOption;
