import axios from "axios";
import {x} from "tar";
import {binaryInfo} from "./binarypath";
import * as fs from "fs";

const install = async () => {

    const {downloadURL,installDir} = binaryInfo();
    console.log(`installing wunderctl to: ${installDir}`);
    const version = JSON.parse(fs.readFileSync("package.json").toString()).version;

    try {
        const res = await axios({url: downloadURL(version), responseType: "stream"});
        const outStream = x({ C: installDir });
        res.data.pipe(outStream);
        outStream.addListener("finish",() => {
            console.log(`wunderctl v${version} installed/updated`);
        });
        outStream.addListener("error",(err => {
            console.log("Error installing wunderctl: " + err.message)
        }))
    } catch (e) {
        console.log("Error installing wunderctl: " + e.message)
    }
}

export default install()