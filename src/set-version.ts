import * as fs from "fs";

const setVersion = () => {
    const version = process.env.GITHUB_REF;
    if (!version || version === ""){
        console.log(`cannot set version, env var missing: GITHUB_REF`);
        process.exit(1);
        return
    }
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