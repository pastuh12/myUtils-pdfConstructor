import * as bunyan from 'bunyan';
import {logConfig} from './logConfig';

export class Logger {
    logger: bunyan;
    constructor(config: logConfig) {
        this.logger = bunyan.createLogger({
            name: config.name,
            serializers: bunyan.stdSerializers,
            streams: [
                {
                    level: 'info',
                    path: './logData/pdfConstructor-info.log',
                },
                {
                    level: 'error',
                    path: './logData/pdfConstructor-error.log',
                    stream: process.stderr,
                },
                {
                    level: 'warn',
                    path: './logData/pdfConstructor-warn.log',
                },
                {
                    level: 'fatal',
                    path: './logData/pdfConstuctor-fatal.log',
                    stream: process.stderr,
                },
                {
                    level: 'debug',
                    path: './pdfConstuctor-debug.log',
                    stream: process.stdout,
                },
            ],
        });
        this.logger.level(config.debugMod)
    }

    info(dataInfo: any) {
        this.logger.info(dataInfo);
    }
    warn(dataWarn: any) {
        this.logger.warn(dataWarn);
    }
    error(dataError: any) {
        this.logger.error(dataError);
    }
    fatal(dataFatal: any) {
        this.logger.fatal(dataFatal);
    }
    debug(dataDebug: any) {
        this.logger.level('info');
        console.log(this.logger.level());
        this.logger.debug(dataDebug);
        console.log(this.logger.level());
    }
}
