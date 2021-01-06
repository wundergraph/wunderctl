import * as fs from "fs";
import rimraf from "rimraf";
import {binaryInfo} from "./binarypath";

const uninstall = () => {
    console.log("uninstalling wunderctl");
    const {binaryPath} = binaryInfo();
    const exists = fs.existsSync(binaryPath);
    if (!exists){
        console.log("wunderctl not found at install dir");
        return
    }
    rimraf(binaryPath,(e) => {
        if (e){
            console.log("failed uninstalling wunderctl: " + e.message);
            return
        }
        console.log("wunderctl uninstalled");
    });
}

export default uninstall()