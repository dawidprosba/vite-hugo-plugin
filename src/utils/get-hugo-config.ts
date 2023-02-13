import { readFileSync, readdirSync } from 'fs';
import { resolve, extname } from 'path';
import toml from 'toml';
import yaml from 'yaml';


/**
 * Linting important hugo config.
 */
type LintHugoConfigProperties = {
	defaultContentLanguage?: string
}

/**
 * Gets hugo config, function supports toml|yaml|json extensions.
 * @param appDir directory where `config.toml` is located.
 */
export default function getHugoConfig(appDir: string): LintHugoConfigProperties {

	const configFiles = readdirSync(appDir).filter((file:string) => file.match(/config\.(toml|json|yaml)/))
	if (!configFiles.length) {
		throw new Error("No hugo config file found");
	}

	const configFile = configFiles[0]; // there can only be one
	const configType = extname(configFile).substring(1);
	const configString = readFileSync(configFile, 'utf-8');

	if (configType === 'toml') {
		return toml.parse(configString);
	}

	if (configType === 'json') {
		return JSON.parse(configString);
	}

	if (configType === 'yaml') {
		return yaml.parse(configString);
	}

	throw new Error("Unrecognized hugo config file format");
}
