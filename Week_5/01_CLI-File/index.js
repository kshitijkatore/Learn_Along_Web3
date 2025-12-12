const fs = require('fs');
const path = require('path')
const {Command} = require('commander');
const program = new Command();


const fileName = process.argv[3];
const filePath = path.join(process.cwd(), fileName);


program
    .name('counter')
    .description('CLI to do file based taskes')
    .version('0.1.0')

program.command('countSentence')
    .description('Count the number of lines in a file.')
    .argument('<file>', 'file to count')
    .action((filePath) =>{
        fs.readFile(filePath, 'utf-8', (err,data)=>{
            if(err){
                console.log(err);
            }
            else{
                const lines = data.split('\n').length;
                console.log(`There are ${lines} lines in ${filePath}`)
            }
        });
    });

program.command('countWords')
    .description('Count the number of wordsw in the file.')
    .argument('<file>', 'file to count')
    .action((filePath)=>{
        fs.readFile(filePath,'utf-8',(err,data)=>{
            if(err){
                console.log(err);
            }else{
                const word = data.split(' ').length;
                console.log(`Thise are ${word+1} words in ${filePath}`)
            }
        });
    });


program.parse();