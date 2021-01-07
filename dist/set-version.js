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
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const setVersion = () => {
    const githubRef = "" + process.env.GITHUB_REF;
    if (githubRef === "") {
        console.log(`cannot set version, env var missing: GITHUB_REF`);
        process.exit(1);
        return;
    }
    const version = githubRef.substring("refs/tags/v".length);
    console.log(`detected version: ${version}`);
    try {
        const packageJSON = JSON.parse(fs.readFileSync("package.json").toString());
        packageJSON["version"] = version;
        fs.writeFileSync("package.json", JSON.stringify(packageJSON, null, "  "));
        console.log("version updated successfully");
    }
    catch (e) {
        console.log(`error updating package.json: ${e.message}`);
    }
};
exports.default = setVersion();
