import axios from "axios";
import {x} from "tar";
import {binaryInfo} from "./binarypath";
import packageJSON from "../package.json";

const install = () => {

    console.log("installing wunderctl");
    const {binaryPath,downloadURL} = binaryInfo();
    const version = packageJSON.version;

    axios({ url: downloadURL(version), responseType: "stream" })
        .then(res => res.data.pipe(x({ strip: 1, C: binaryPath }))
        .then(() => {
            console.log(
                `wunderctl v${version} installed/updated`
            );
        })
        .catch((e: Error) => {
            console.log("Error installing wunderctl: " + e.message)
        }));
}

export default install()