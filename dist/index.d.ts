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
}
export default function hugoPreact({ hugoOutDir, appDir }: Options): PluginOption;
