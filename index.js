#!/usr/bin/env node
import path from 'path';
import copy from 'copy-template-dir';


const vars = {name:`client`};
const __dirname = path.resolve();

const inputDirectory = path.join(__dirname,'template');
const outputDirectory = path.join(process.cwd(), 'output');

copy(inputDirectory,outputDirectory,vars,(error,createdFiles)=>{

    if(error){
        throw error;
    }

    createdFiles.forEach(filepath => {

        console.log(`created ${filepath}`);
        
    });
});



console.log(__dirname);