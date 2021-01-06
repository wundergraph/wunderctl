"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const rimraf_1 = __importDefault(require("rimraf"));
const binarypath_1 = require("./binarypath");
const uninstall = () => {
    console.log("uninstalling wunderctl");
    const { binaryPath } = binarypath_1.binaryInfo();
    const exists = fs.existsSync(binaryPath);
    if (!exists) {
        console.log("wunderctl not found at install dir");
        return;
    }
    rimraf_1.default(binaryPath, (e) => {
        if (e) {
            console.log("failed uninstalling wunderctl: " + e.message);
            return;
        }
        console.log("wunderctl uninstalled");
    });
};
exports.default = uninstall();
