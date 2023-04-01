import { readFileSync, readdirSync } from "fs";
import { extname } from "path";
import toml from "toml";
import yaml from "yaml";

/**
 * Linting important hugo config.
 */
type LintHugoConfigProperties = {
  defaultContentLanguage?: string;
};

/**
 * Gets hugo config, function supports toml|yaml|json extensions.
 * @param appDir directory where `config.toml` is located.
 * @param hugoConfigFileName name of the hugo config file.
 */
export default function getHugoConfig(
  appDir: string,
  hugoConfigFileName: string
): LintHugoConfigProperties {
  const configFiles = readdirSync(appDir).filter((file) =>
    file.endsWith(hugoConfigFileName)
  );
  if (!configFiles.length) {
    throw new Error(
      `No hugo config file found with name: ${appDir}/${hugoConfigFileName}`
    );
  }

  const configFile = configFiles[0]; // there can only be one
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
