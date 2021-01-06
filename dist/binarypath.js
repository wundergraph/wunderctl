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
exports.binaryInfo = void 0;
const os = __importStar(require("os"));
const binaryInfo = () => {
    const osType = os.type();
    const osArch = os.arch();
    console.log(`osType: ${osType}, osArch: ${osArch}`);
    switch (osType) {
        case "Darwin":
            switch (osArch) {
                case "x64":
                    return {
                        binaryPath: "/usr/local/bin/wunderctl",
                        installDir: "/usr/local/bin",
                        downloadURL: version => `https://github.com/wundergraph/wunderctl/releases/download/v${version}/wunderctl_${version}_Darwin_x86_64.tar.gz`
                    };
                default:
                    throw new Error(`os arch unsupported: ${osType} ${osArch}`);
            }
        case "Linux":
            switch (osArch) {
                case "x64":
                    return {
                        binaryPath: "/usr/local/bin/wunderctl",
                        installDir: "/usr/local/bin",
                        downloadURL: version => `https://github.com/wundergraph/wunderctl/releases/download/v${version}/wunderctl_${version}_Linux_x86_64.tar.gz`
                    };
                case "x32":
                    return {
                        binaryPath: "/usr/local/bin/wunderctl",
                        installDir: "/usr/local/bin",
                        downloadURL: version => `https://github.com/wundergraph/wunderctl/releases/download/v${version}/wunderctl_${version}_Linux_i386.tar.gz`
                    };
                default:
                    throw new Error(`os arch unsupported: ${osType} ${osArch}`);
            }
        case "Windows_NT":
            switch (osArch) {
                case "x64":
                    return {
                        binaryPath: "C:\\Program Files\\wunderctl.exe",
                        installDir: "C:\\Program Files",
                        downloadURL: version => `https://github.com/wundergraph/wunderctl/releases/download/v${version}/wunderctl_${version}_Windows_x86_64.tar.gz`
                    };
                case "x32":
                    return {
                        binaryPath: "C:\\Program Files\\wunderctl.exe",
                        installDir: "C:\\Program Files",
                        downloadURL: version => `https://github.com/wundergraph/wunderctl/releases/download/v${version}/wunderctl_${version}_Windows_i386.tar.gz`
                    };
                default:
                    throw new Error(`os arch unsupported: ${osType} ${osArch}`);
            }
        default:
            throw new Error(`os type unsupported: ${osType}`);
    }
};
exports.binaryInfo = binaryInfo;
