import PDFDocument from 'pdfkit';
import * as fsp from 'fs/promises';
import * as fs from 'fs';
import { LoggerInterface } from '../logger/loggerInterface';

export class pdfService {
    logger: LoggerInterface;

    /**
     * constructor
     * @param  {LoggerInterface} logger 
     */
    constructor(logger: LoggerInterface) {
        this.logger = logger;
    }

    /**
     * function, that create pdf file eith images
     * @param {[string]} images
     * @param {[width, heigth]} size
     */
    createPDF = (files: string[], endPath: string): boolean => {
        try {
            const pdfDoc = new PDFDocument();
            pdfDoc.pipe(fs.createWriteStream(endPath));

            files.forEach((file) => {
                fs.access(files[0], (err: Error | null) => {
                    if (err) {
                        this.logger.error(err, 'pdfService->createPDF: ')
                    }
                });
                pdfDoc.image(file, {
                    fit: [1000, 650],
                    valign: 'center',
                });
                pdfDoc.addPage();
            });

            pdfDoc.end();
            return true;
        } catch (error) {

            return false
        }
    };

    getDataPaths = async (path: string) => {
        // TODO: add verification file paths
        try {
            return fsp.readdir(path)
                .then(
                    (files) => {
                        this.logger.debug('pdfService->getDataPaths: ' + files);
                        files = files.filter(file => {
                            if (file.indexOf('.jpg') != -1 || file.indexOf('.png') != -1) {
                                return true;
                            }
                        })
                        return files;
                    }
                )
                .then((files) => {
                    files = files.map((file) => {
                        return path + file;
                    });
                    return files;
                });
        } catch (error: unknown) {
            if (error instanceof Error)
                this.logger.error(error, 'pdfService->getDataPaths');
            return []
        }
    };

}