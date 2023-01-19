import cliCommand from './cliCommand.js';
import { pdfService } from '../../services/pdfService.js';
import { LoggerInterface } from '../../logger/loggerInterface';
/**
 * decorator for cli
 */
class PdfCreater extends cliCommand {
    // TODO refactor constructor
    // TODO break commandNameAndArg into commandName and arg
    // TODO add verificator for arg and parameter

    /**
     * constructor 
     */
    constructor(logger: LoggerInterface) {
        const service = new pdfService(logger)
        const action = function (dataPath: string, cmd: any) {
            logger.debug(JSON.stringify(cmd) );
            service.getDataPaths(dataPath).then((files: string[]) => {
                logger.debug('files in pdfCreater: \n' + files);
                if (files) {
                    return service.createPDF(files, cmd.endpath);
                } else {
                    logger.warn("there are no files in the folder: " + dataPath)
                    return false;
                }
            }).then(
                (result: boolean) => {
                    logger.debug('result in pdfCreater: ' + result);
                    if (result) {
                        logger.info('pdf file created on ' + cmd.endpath);
                    } else {
                        logger.error(new Error('on create pdf'), 'OOPS something wrong!!!');
                    }
                }
            )
        };
        super(
            {
                commandNameWithArg: 'createpdf <dataPath>',
                alias: 'c',
                description: 'create pdf file from image',
                option: '--endpath <value>',
                action: action
            }
        );
        logger.debug(this.commandNameWithArg);
    }
}

export default PdfCreater;
