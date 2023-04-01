/**
 * Linting important hugo config.
 */
declare type LintHugoConfigProperties = {
    defaultContentLanguage?: string;
};
/**
 * Gets hugo config, function supports toml|yaml|json extensions.
 * @param appDir directory where `config.toml` is located.
 * @param hugoConfigFileName name of the hugo config file.
 */
export default function getHugoConfig(appDir: string, hugoConfigFileName: string): LintHugoConfigProperties;
export {};
