"use strict";
import {binaryInfo} from "../src/binarypath";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const tar_1 = require("tar");
const install = () => {
    console.log("installing wunderctl");
    binaryInfo();
    const version = "0.0.8";
    const url = `https://github.com/wundergraph/wunderctl/releases/download/v${version}/wunderctl_${version}_Darwin_x86_64.tar.gz`;
    const binaryDir = ".";
    axios_1.default({ url: url, responseType: "stream" })
        .then(res => res.data.pipe(tar_1.x({ strip: 1, C: binaryDir }))
        .then(() => {
        console.log(`wunderctl v${version} installed/updated`);
    })
        .catch((e) => {
        console.log("Error installing wunderctl: " + e.message);
    }));
};
exports.default = install();
