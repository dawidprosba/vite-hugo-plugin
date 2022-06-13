# Vite HUGO Plugin
> Plugin that makes integrating Vite into Hugo application painless.

## Example usage

```ts
import { resolve } from 'path';
import { defineConfig } from 'vite';
import hugoPlugin from 'vitejs-hugo-plugin'

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