var __create = Object.create;
var __defProp = Object.defineProperty;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __markAsModule = (target) => __defProp(target, "__esModule", {value: true});
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, {get: all[name], enumerable: true});
};
var __exportStar = (target, module2, desc) => {
  __markAsModule(target);
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, {get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable});
  }
  return target;
};
var __toModule = (module2) => {
  if (module2 && module2.__esModule)
    return module2;
  return __exportStar(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", {value: module2, enumerable: true}), module2);
};

// src/set-version.ts
__export(exports, {
  default: () => set_version_default
});
var fs = __toModule(require("fs"));
var setVersion = () => {
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
  } catch (e) {
    console.log(`error updating package.json: ${e.message}`);
  }
};
var set_version_default = setVersion();
