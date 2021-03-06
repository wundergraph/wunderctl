import * as os from "os";
import path from "path";

export const downloadURL = (version: string) :string => {
    const osType = os.type();
    const osArch = os.arch();
    switch (osType){
        case "Darwin":
            switch (osArch){
                case "arm64":
                    return `https://github.com/wundergraph/wunderctl/releases/download/v${version}/wunderctl_${version}_Darwin_arm64.tar.gz`
                case "x64":
                    return `https://github.com/wundergraph/wunderctl/releases/download/v${version}/wunderctl_${version}_Darwin_x86_64.tar.gz`
                default:
                    throw new Error(`os arch unsupported: ${osType} ${osArch}`)
            }
        case "Linux":
            switch (osArch){
                case "x64":
                    return `https://github.com/wundergraph/wunderctl/releases/download/v${version}/wunderctl_${version}_Linux_x86_64.tar.gz`
                case "x32":
                    return `https://github.com/wundergraph/wunderctl/releases/download/v${version}/wunderctl_${version}_Linux_i386.tar.gz`
                default:
                    throw new Error(`os arch unsupported: ${osType} ${osArch}`)
            }
        case "Windows_NT":
            switch (osArch){
                case "x64":
                    return `https://github.com/wundergraph/wunderctl/releases/download/v${version}/wunderctl_${version}_Windows_x86_64.tar.gz`
                case "x32":
                    return `https://github.com/wundergraph/wunderctl/releases/download/v${version}/wunderctl_${version}_Windows_i386.tar.gz`
                default:
                    throw new Error(`os arch unsupported: ${osType} ${osArch}`)
            }
        default:
            throw new Error(`os type unsupported: ${osType}`)
    }
}

export const wunderctlPath = () :string => {
    return path.join(wunderGraphDir(),"wunderctl")
}

export const wunderGraphDir = () :string => {
    return path.join(os.homedir(),".wundergraph")
}