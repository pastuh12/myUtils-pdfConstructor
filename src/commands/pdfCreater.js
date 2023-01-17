import cliCommand from './cliCommand.js';
import { createPDF } from '../services/pdfService.js';
import { getDataPaths } from '../services/localFilesGetter.js';
/**
 * decorator for cli
 */
class PdfCreater extends cliCommand {
    // TODO refactor constructor
    // TODO break commandNameAndArg into commandName and arg
    // TODO add verificator for arg and parameter
    /**
     * constructor
     * @param {function} action
     */
    constructor() {
        const action = function (dataPath, cmd) {
            getDataPaths(dataPath).then((files) => {
                console.log(files);
                createPDF(files, cmd.endpath);
            });
            console.log('pdf file created on ' + cmd.endpath);
        };
        super([
            'createpdf <dataPath>',
            'c',
            'creates a file from the files that are in the path, that you enter',
            action,
            '--endpath <value>',
        ]);
    }
}

export default PdfCreater;
