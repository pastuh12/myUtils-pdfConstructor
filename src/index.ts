#!/usr/bin/env node
import CLI from './cli/cli.js';
import PdfCreater from './cli/commands/pdfCreater.js';
import * as pdfService from './services/pdfService.js';
import { Logger } from './logger/logger.js';
import * as dotenv from 'dotenv';

// TODO add abstract classes between components

// TODO work with error processing
// TODO add menu

// TODO figure out with parameters, that entering, then cli start

// const cli = new CLI();
// const pdfCreater = new PdfCreater();

// cli.addCommand(pdfCreater);

// // console.log(process.argv)

// cli.start();
dotenv.config();

const logger = new Logger({
    name: process.env.APP_NAME,
    debugMod: process.env.DEBUG_MODE,
});

logger.debug(Number(process.env.DEBUG_MODE))