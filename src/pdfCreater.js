import cliCommand from './cliCommand.js';
import {createPDF} from './pdfService.js';
import {getDataPaths} from './localFilesGetter.js';
/**
 * decorator for cli
 */
class PdfCreater extends cliCommand {

    /**
     * constructor
     * @param {function} action
     */
    constructor() {
        const action = function (dataPath, cmd) {
            getDataPaths(dataPath).then(
                (files) => {
                    console.log(files);
                    createPDF(files, cmd.endpath)
                }
            )
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
