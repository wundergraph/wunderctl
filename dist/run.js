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

// src/run.ts
__export(exports, {
  default: () => run_default
});

// src/binarypath.ts
var os = __toModule(require("os"));
var import_path = __toModule(require("path"));
var wunderctlPath = () => {
  return import_path.default.join(wunderGraphDir(), "wunderctl");
};
var wunderGraphDir = () => {
  return import_path.default.join(os.homedir(), ".wundergraph");
};

// src/run.ts
var fs = __toModule(require("fs"));
var import_child_process = __toModule(require("child_process"));
var run = () => {
  const executablePath = wunderctlPath();
  if (!fs.existsSync(executablePath)) {
    error(`You must install wunderctl before you can run it:
npm i -g @wundergraph/wunderctl`);
  }
  const [, , ...args] = process.argv;
  const result = import_child_process.spawnSync(executablePath, args, {
    cwd: process.cwd(),
    stdio: "inherit"
  });
  if (result.error) {
    error(result.error.message);
  }
  process.exit(result.status || 0);
};
var error = (msg) => {
  console.error(msg);
  process.exit(1);
};
var run_default = run;
