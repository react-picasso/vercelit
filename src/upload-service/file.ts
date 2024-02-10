import fs from 'fs';
import path from 'path';

export const getFiles = (folderPath: string): string[] => {
    let response: string[] = [];
    const allFilesAndFolders = fs.readdirSync(folderPath);
    allFilesAndFolders.forEach(file => {
        const fullFilePath = path.join(folderPath, file);
        if (fs.statSync(fullFilePath).isDirectory()) {
            console.log(`here for ${fullFilePath}`);
            response = response.concat(getFiles(fullFilePath));
        } else {
            response.push(fullFilePath);
        }
    });

    return response;
}