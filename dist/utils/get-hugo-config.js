"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path_1 = require("path");
const toml_1 = require("toml");
/**
 * Gets hugo config, function supports only `toml` extension.
 * @param appDir directory where `config.toml` is located.
 */
function getHugoConfig(appDir) {
    const tomlStr = (0, fs_1.readFileSync)((0, path_1.resolve)(appDir, 'config.toml'), 'utf-8');
    return (0, toml_1.parse)(tomlStr);
}
exports.default = getHugoConfig;
