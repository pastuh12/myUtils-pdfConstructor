#!/usr/bin/env node
import CLI from './cli.js';
import PdfCreater from './pdfCreater.js';
import * as pdfService from './pdfService.js';


const cli = new CLI();
const pdfCreater = new PdfCreater();

cli.addCommand(pdfCreater);

cli.start();

