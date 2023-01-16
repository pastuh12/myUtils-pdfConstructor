import * as fs from 'fs/promises';

/**
 * give array with path to files
 * @param {string} path
 */
export const getDataPaths = async function (path) {
    // TODO: add verification file paths
    try {
        return fs.readdir(path)
        .then(
            (files) => {
                console.log(files);
                files = files.filter(file => {
                    if(file.indexOf('.jpg') != -1 || file.indexOf('.png') != -1){
                        return true;
                    }
                })
                console.log(files);
                return files;
            }
        )
        .then((files) => {
            files = files.map((file) => {
                return path + file;
            });
            console.log(files);
            return files;
        });
    } catch (error) {
        console.log(error);
    }
};
