import chalk from 'chalk';
/*
Para o import acima funcionar, no lugar de usar o antigo require,
foi necessario no package.json incluir "type": "module"
*/

console.log('olá mundo');
console.log(chalk.blue('Hello World'));

//encadear métodos para colorir texto, cor de fundo e texto em negrito
console.log(chalk.blue.bgWhite.bold('Alura'));

//receber múltiplos argumentos
console.log(chalk.blue('curso', 'de', 'Node.js'));

//métodos aninhados
console.log(chalk.red('vermelho', chalk.underline.bgBlue('azul')));

// uso de template strings e placeholders
console.log(`
CPU: ${chalk.red('90%')}
RAM: ${chalk.green('40%')}
DISK: ${chalk.yellow('70%')}
`);
