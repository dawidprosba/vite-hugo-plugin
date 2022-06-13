import { Plugin } from 'vite';
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
export default function hugoPlugin({ hugoOutDir, appDir }: Options): Plugin;
