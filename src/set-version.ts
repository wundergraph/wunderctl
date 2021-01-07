import * as fs from "fs";

const setVersion = () => {
    const githubRef = "" + process.env.GITHUB_REF;
    if (githubRef === ""){
        console.log(`cannot set version, env var missing: GITHUB_REF`);
        process.exit(1);
        return
    }
    const version = githubRef.substring("refs/tags/v".length);
    console.log(`detected version: ${version}`);
    try {
        const packageJSON = JSON.parse(fs.readFileSync("package.json").toString());
        packageJSON["version"] = version;
        fs.writeFileSync("package.json",JSON.stringify(packageJSON,null,"  "));
        console.log("version updated successfully");
    } catch (e) {
        console.log(`error updating package.json: ${e.message}`)
    }
}

export default setVersion();