export interface Info {
    installDir: string;
    binaryPath: string;
    downloadURL: (version: string) => string;
}
export declare const binaryInfo: () => Info;
