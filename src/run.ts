import {wunderctlPath} from "./binarypath";
import * as fs from "fs";
import {spawnSync} from "child_process";

const run = () => {
    const executablePath = wunderctlPath();
    if (!fs.existsSync(executablePath)) {
        error(`You must install wunderctl before you can run it:\nnpm i -g @wundergraph/wunderctl`);
    }

    const [, , ...args] = process.argv;

    const result = spawnSync(executablePath, args, {
            cwd: process.cwd(),
            stdio: "inherit"
        },
    );

    if (result.error) {
        error(result.error.message);
    }

    process.exit(result.status || 0);
}

const error = (msg: string) => {
    console.error(msg);
    process.exit(1);
};

export default run;