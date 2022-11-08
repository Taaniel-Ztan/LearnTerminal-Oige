function write (string){
    process.stdout.write(string);
}
import chalk from 'chalk';
import boxen from 'boxen';

write(chalk.blue.bgGreen('Hello chalk'));

for(let i=0; i<16; i++){
    for(let j=0; j<16; j++){
        let color = (i*j).toString()
        write(chalk.ansi256(color)(color.padEnd(4,' ')));
    }
    write('\n');
}

write(boxen(chalk.black.bgGreen('TAANIEL'), {
    padding: 1,
    margin: 1,
    borderStyle: 'arrow', 
    title: 'TERVIST', 
    titleAlignment: 'left'

}));

write(boxen(chalk.white.bgRedBright('ORMAK'), {
    padding: 1,
    margin: 1,
    title: 'MINA', 
    titleAlignment: 'bottom'


}));

write(boxen(chalk.black.bgYellow.underline('MM21'), {
    padding: 1,
    margin: 1,
    borderStyle: 'double', 
    title: 'OLEN', 
    titleAlignment: 'center'

}));

write(boxen(chalk.black.bgWhite.bold('LEARNTERMINAL'), {
    padding: 1,
    margin: 1,
    borderStyle: 'double', 
}));

write(boxen(chalk.white.bgBlue.italic('LEARNTERMINAL'), {
    padding: 1,
    margin: 1,
    borderStyle: 'classic',
    title: 'TAANIEL', 
    titleAlignment: 'center'

}));
write(boxen(chalk.white.bgGray.dim('08.11.2022'), {
    padding: 1,
    margin: 1,
    title: 'ORMAK', 
    titleAlignment: 'right',
    borderStyle: 'double', 

}));