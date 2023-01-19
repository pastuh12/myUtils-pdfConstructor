import * as bunyan from 'bunyan';
import { stdout } from 'process';
import { logConfig } from './logConfig';

export class Logger {
    logger: bunyan;
    constructor(config: logConfig) {
        this.logger = bunyan.createLogger({
            name: config.name,
            serializers: bunyan.stdSerializers,
            streams: [
                {
                    level: 'info',
                    stream: stdout
                },
                {
                    level: 'debug',
                    path: './logData/pdfConstructor.log'
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
    error(error: Error, message: string) {
        this.logger.error(error, message);
    }
    fatal(error: Error, message: string) {
        this.logger.fatal(error, message);
    }
    debug(dataDebug: any) {
        this.logger.debug(dataDebug);
    }
}
