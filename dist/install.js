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
const axios_1 = __importDefault(require("axios"));
const tar_1 = require("tar");
const binarypath_1 = require("./binarypath");
const fs = __importStar(require("fs"));
const install = async () => {
    const { downloadURL, installDir } = binarypath_1.binaryInfo();
    console.log(`installing wunderctl to: ${installDir}`);
    const version = JSON.parse(fs.readFileSync("package.json").toString()).version;
    try {
        const res = await axios_1.default({ url: downloadURL(version), responseType: "stream" });
        const outStream = tar_1.x({ C: installDir });
        res.data.pipe(outStream);
        outStream.addListener("finish", () => {
            console.log(`wunderctl v${version} installed/updated`);
        });
        outStream.addListener("error", (err => {
            console.log("Error installing wunderctl: " + err.message);
        }));
    }
    catch (e) {
        console.log("Error installing wunderctl: " + e.message);
    }
};
exports.default = install();
