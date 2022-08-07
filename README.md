# Vite HUGO Plugin
> Plugin that makes integrating Vite into Hugo application painless.

## Vite < 3.0.0
This plugin is compatibile with vite under 3.0.0 version, but may cause 
some typescript typing error, check https://github.com/DcBD/vite-hugo-plugin/pull/2 for more information.


## Example usage

```ts
import { resolve } from 'path';
import { defineConfig } from 'vite';
import hugoPlugin from 'vite-hugo-plugin'

// Root directory of our application
const appDir = __dirname;

// The directory where hugo builds it's files.
const hugoOutDir = resolve(appDir, 'public');

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        hugoPlugin({ appDir, hugoOutDir })
    ]
});
```