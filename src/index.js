#!/usr/bin/env node
import CLI from './cli.js';
import PdfCreater from './commands/pdfCreater.js';
import * as pdfService from './services/pdfService.js';

// TODO work with error processing
// TODO add menu

// TODO figure out with parameters, that entering, then cli start

const cli = new CLI();
const pdfCreater = new PdfCreater();

cli.addCommand(pdfCreater);

// console.log(process.argv)

cli.start();
