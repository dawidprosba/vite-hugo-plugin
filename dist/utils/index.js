"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHugoConfig = exports.getHtmlPages = void 0;
const get_html_pages_1 = __importDefault(require("./get-html-pages"));
exports.getHtmlPages = get_html_pages_1.default;
const get_hugo_config_1 = __importDefault(require("./get-hugo-config"));
exports.getHugoConfig = get_hugo_config_1.default;
