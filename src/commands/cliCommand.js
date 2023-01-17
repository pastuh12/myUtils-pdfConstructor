/**
 * based class for clas that add new functions to cli
 */
class cliCommand {
    commandNameWithArg;
    alias;
    descripton;
    action;
    option;

    constructor(args){
        this.commandNameWithArg = args[0];
        this.alias = args[1];
        this.descripton = args[2];
        this.action = args[3];
        this.option = args[4];
    }
}

export default cliCommand;
