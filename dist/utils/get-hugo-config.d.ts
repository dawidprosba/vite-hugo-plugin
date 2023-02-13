/**
 * Linting important hugo config.
 */
declare type LintHugoConfigProperties = {
    defaultContentLanguage?: string;
};
/**
 * Gets hugo config, function supports toml|yaml|json extensions.
 * @param appDir directory where `config.toml` is located.
 */
export default function getHugoConfig(appDir: string): LintHugoConfigProperties;
export {};
