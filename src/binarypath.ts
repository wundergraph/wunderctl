import * as os from "os";


export interface Info {
    installDir: string,
    binaryPath: string,
    downloadURL: (version: string) => string,
}

export const binaryInfo = () :Info => {
    const osType = os.type();
    const osArch = os.arch();
    console.log(`osType: ${osType}, osArch: ${osArch}`);
    switch (osType){
        case "Darwin":
            switch (osArch){
                case "x64":
                    return {
                        binaryPath: "/usr/local/bin/wunderctl",
                        installDir: "/usr/local/bin",
                        downloadURL: version => `https://github.com/wundergraph/wunderctl/releases/download/v${version}/wunderctl_${version}_Darwin_x86_64.tar.gz`
                    }
                default:
                    throw new Error(`os arch unsupported: ${osType} ${osArch}`)
            }
        case "Linux":
            switch (osArch){
                case "x64":
                    return {
                        binaryPath: "/usr/local/bin/wunderctl",
                        installDir: "/usr/local/bin",
                        downloadURL: version => `https://github.com/wundergraph/wunderctl/releases/download/v${version}/wunderctl_${version}_Linux_x86_64.tar.gz`
                    }
                case "x32":
                    return {
                        binaryPath: "/usr/local/bin/wunderctl",
                        installDir: "/usr/local/bin",
                        downloadURL: version => `https://github.com/wundergraph/wunderctl/releases/download/v${version}/wunderctl_${version}_Linux_i386.tar.gz`
                    }
                default:
                    throw new Error(`os arch unsupported: ${osType} ${osArch}`)
            }
        case "Windows_NT":
            switch (osArch){
                case "x64":
                    return {
                        binaryPath: "C:\\Program Files\\wunderctl.exe",
                        installDir: "C:\\Program Files",
                        downloadURL: version => `https://github.com/wundergraph/wunderctl/releases/download/v${version}/wunderctl_${version}_Windows_x86_64.tar.gz`
                    }
                case "x32":
                    return {
                        binaryPath: "C:\\Program Files\\wunderctl.exe",
                        installDir: "C:\\Program Files",
                        downloadURL: version => `https://github.com/wundergraph/wunderctl/releases/download/v${version}/wunderctl_${version}_Windows_i386.tar.gz`
                    }
                default:
                    throw new Error(`os arch unsupported: ${osType} ${osArch}`)
            }
        default:
            throw new Error(`os type unsupported: ${osType}`)
    }
}