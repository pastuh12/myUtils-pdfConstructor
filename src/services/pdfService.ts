import PDFDocument from 'pdfkit';
import * as fs from 'fs';

/**
 * function, that create pdf file eith images
 * @param {[string]} images
 * @param {[width, heigth]} size
 */
export const createPDF = function (files: string[], endPath: string) {
    try {
        fs.access(files[0], (err) => {
            console.log(`${files[0]} ${err ? 'does not exist' : 'exists'}`);
        });

        const pdfDoc = new PDFDocument();
        pdfDoc.pipe(fs.createWriteStream(endPath));

        files.forEach((file) => {
            pdfDoc.image(file, {
                fit: [1000, 650],
                valign: 'center',
            });
            pdfDoc.addPage();
        });

        pdfDoc.end();
    } catch (error) {
        console.log(error);
    }
};
