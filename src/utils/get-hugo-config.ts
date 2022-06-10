import { readFileSync } from 'fs';
import { resolve } from 'path';
import { parse } from 'toml';


/**
 * Linting important hugo config.
 */
type LintHugoConfigProperties = {
    defaultContentLanguage?: string
}

/**
 * Gets hugo config, function supports only `toml` extension.
 * @param appDir directory where `config.toml` is located.
 */
export default function getHugoConfig(appDir: string): LintHugoConfigProperties {
    const tomlStr = readFileSync(resolve(appDir, 'config.toml'), 'utf-8');

    return parse(tomlStr);
}
