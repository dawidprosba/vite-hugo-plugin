"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path_1 = require("path");
const toml_1 = __importDefault(require("toml"));
const yaml_1 = __importDefault(require("yaml"));
/**
 * Gets hugo config, function supports toml|yaml|json extensions.
 * @param appDir directory where `config.toml` is located.
 * @param hugoConfigFileName name of the hugo config file.
 */
function getHugoConfig(appDir, hugoConfigFileName) {
    const configFiles = (0, fs_1.readdirSync)(appDir).filter((file) => file.endsWith(hugoConfigFileName));
    if (!configFiles.length) {
        throw new Error(`No hugo config file found with name: ${appDir}/${hugoConfigFileName}`);
    }
    const configFile = configFiles[0]; // there can only be one
    const configType = (0, path_1.extname)(configFile).substring(1);
    const configString = (0, fs_1.readFileSync)(configFile, "utf-8");
    if (configType === "toml") {
        return toml_1.default.parse(configString);
    }
    if (configType === "json") {
        return JSON.parse(configString);
    }
    if (configType === "yaml") {
        return yaml_1.default.parse(configString);
    }
    throw new Error("Unrecognized hugo config file format");
}
exports.default = getHugoConfig;
