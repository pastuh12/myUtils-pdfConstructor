#!/usr/bin/env node
import CLI from './cli/cli.js';
import PdfCreater from './cli/commands/pdfCreater.js';
import * as pdfService from './services/pdfService.js';
import { Logger } from './logger/logger.js';
import { logConfig } from './logger/logConfig';
import * as dotenv from 'dotenv';

// TODO add abstract classes between components

// TODO work with error processing
// TODO add menu

// TODO figure out with parameters, that entering, then cli start
dotenv.config();

const config: logConfig = {
    debugMod: process.env.DEBUG_MODE === 'debug' ? 'debug' : 'info',
    name: process.env.APP_NAME || 'pdf_constructor'
}
const logger = new Logger(config);

logger.info('programm start work');

const cli = new CLI();
const pdfCreater = new PdfCreater(logger);

cli.addCommand(pdfCreater);

cli.start();



