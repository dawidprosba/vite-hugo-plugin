var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined")
    return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x + '" is not supported');
});

// src/index.ts
import { resolve as resolve2 } from "path";

// src/utils/get-html-pages.ts
import { resolve } from "path";
import { sync as getFilesSync } from "fast-glob";
var normalize = __require("normalize-path");
function getHtmlPages(pagesDir, ignore) {
  const path = normalize(resolve(pagesDir, "**", "*.html"));
  const pages = getFilesSync(path, {
    ignore
  });
  const inputs = {};
  pages.forEach((input) => {
    const key = input.replace(pagesDir, "").substring(1);
    inputs[key] = input;
  });
  return inputs;
}

// src/utils/get-hugo-config.ts
import { readFileSync, readdirSync } from "fs";
import { extname } from "path";
import toml from "toml";
import yaml from "yaml";
function getHugoConfig(appDir, hugoConfigFileName) {
  const configFiles = readdirSync(appDir).filter(
    (file) => file.endsWith(hugoConfigFileName)
  );
  if (!configFiles.length) {
    throw new Error(
      `No hugo config file found with name: ${appDir}/${hugoConfigFileName}`
    );
  }
  const configFile = configFiles[0];
  const configType = extname(configFile).substring(1);
  const configString = readFileSync(configFile, "utf-8");
  if (configType === "toml") {
    return toml.parse(configString);
  }
  if (configType === "json") {
    return JSON.parse(configString);
  }
  if (configType === "yaml") {
    return yaml.parse(configString);
  }
  throw new Error("Unrecognized hugo config file format");
}

// src/index.ts
function hugoPlugin({
  hugoOutDir,
  appDir,
  ignoreHTMLFiles = [],
  hugoConfigFileName = "hugo.toml"
}) {
  const hugoConfig = getHugoConfig(appDir, hugoConfigFileName);
  const ignoreBuildPaths = [];
  if (hugoConfig.defaultContentLanguage) {
    ignoreBuildPaths.push(
      resolve2(hugoOutDir, hugoConfig.defaultContentLanguage)
    );
  }
  const hugo = {
    name: "vite-plugin-hugo",
    config: () => ({
      root: hugoOutDir,
      resolve: {
        // Resolve aliases
        alias: {
          // Resolving path in imports.
          js: resolve2(appDir, "assets", "js"),
          "/assets": resolve2(appDir, "assets"),
          "/plugins": resolve2(hugoOutDir, "plugins")
        }
      },
      build: {
        // Build vite into the same directory as hugo
        outDir: hugoOutDir,
        // Vite will build app on top of the files generated by hugo build.
        emptyOutDir: false,
        rollupOptions: {
          // Routing
          input: getHtmlPages(hugoOutDir, [
            ...ignoreBuildPaths,
            ...ignoreHTMLFiles
          ])
        }
      }
    })
  };
  return hugo;
}
var src_default = hugoPlugin;
export {
  src_default as default
};
module.exports = module.exports.default;
//# sourceMappingURL=index.mjs.map