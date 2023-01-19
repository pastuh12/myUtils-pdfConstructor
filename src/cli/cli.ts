import { Command } from 'commander';
/**
 * Class for working with command line
 */
class CLI {
    cli: Command;
    /**
     *  Create a cli
     */
    constructor() {
        this.cli = new Command();
        this.cli.version('1.0.0').description('Create pdf files from images');
    }

    /**
     * Add new function to cli
     * @param {cliCommand} cliCommand
     */
    addCommand(cliCommand: Command) {
        this.cli
        .command(cliCommand.commandNameWithArg)
        .option(cliCommand.option)
        .action(cliCommand.action)
        .alias(cliCommand.alias)
        .description(cliCommand.description);
    }

    /**
     * Start cli program
     */
    start() {
        this.cli.parse(process.argv);
    }
}

export default CLI;
