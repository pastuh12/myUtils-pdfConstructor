export type cliConfig = {
    commandNameWithArg: string,
    alias: string,
    description: string,
    action: (arg: string, cmd: any) => void,
    option: string
}