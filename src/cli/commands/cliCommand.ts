import { cliConfig } from "./cliConfig";

/**
 * based class for clas that add new functions to cli
 */
class cliCommand {
    commandNameWithArg: string;
    alias: string;
    description: string;
    action: (arg0: string, arg1: any) => void;
    option: string;

    constructor(config: cliConfig) {
        this.commandNameWithArg = config.commandNameWithArg;
        this.alias = config.alias;
        this.description = config.description;
        this.action = config.action;
        this.option = config.option;
    }
}

export default cliCommand;
