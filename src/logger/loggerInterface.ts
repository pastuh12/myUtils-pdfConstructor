export interface LoggerInterface {
    info(data: any): void;
    warn(data: any): void;
    error(error: Error, message:string): void;
    fatal(error: Error, message:string): void;
    debug(data: any): void;
}