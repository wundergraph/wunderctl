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

// src/binarypath.ts
__export(exports, {
  binaryInfo: () => binaryInfo
});
var os = __toModule(require("os"));
var binaryInfo = () => {
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
            downloadURL: (version) => `https://github.com/wundergraph/wunderctl/releases/download/v${version}/wunderctl_${version}_Darwin_x86_64.tar.gz`
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
            downloadURL: (version) => `https://github.com/wundergraph/wunderctl/releases/download/v${version}/wunderctl_${version}_Linux_x86_64.tar.gz`
          };
        case "x32":
          return {
            binaryPath: "/usr/local/bin/wunderctl",
            installDir: "/usr/local/bin",
            downloadURL: (version) => `https://github.com/wundergraph/wunderctl/releases/download/v${version}/wunderctl_${version}_Linux_i386.tar.gz`
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
            downloadURL: (version) => `https://github.com/wundergraph/wunderctl/releases/download/v${version}/wunderctl_${version}_Windows_x86_64.tar.gz`
          };
        case "x32":
          return {
            binaryPath: "C:\\Program Files\\wunderctl.exe",
            installDir: "C:\\Program Files",
            downloadURL: (version) => `https://github.com/wundergraph/wunderctl/releases/download/v${version}/wunderctl_${version}_Windows_i386.tar.gz`
          };
        default:
          throw new Error(`os arch unsupported: ${osType} ${osArch}`);
      }
    default:
      throw new Error(`os type unsupported: ${osType}`);
  }
};
