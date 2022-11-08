import inquirer from 'inquirer';
inquirer
    .prompt([
        {type: 'input', name: 'age', message: 'How old are you?'},
        {type: 'input', name: 'height', message: 'What is your height?'},
        {type: 'input', name: 'gender', message: 'What is your gender?'},
        {type: 'input', name: 'color', message: 'What is your favourite color?'},
        {type: 'input', name: 'car', message: 'What is your favourite car?'},
        {type: 'input', name: 'sex', message: 'Is condom a sex?'},
        {type: 'password', name: 'password', message: 'What is your github password?'},
        {type: 'confirm', name: 'confirm', message: 'Do you live in the city?', default: 'default'},
    ])
    .then((answers) => {
        console.log(`I am ${answers.age} years old`);
        console.log(`My height is ${answers.height} `);
        console.log(`I am ${answers.gender} `);
        console.log(`My favourite color is ${answers.color} `);
        console.log(`My favourite car is ${answers.car} `);
        console.log(`${answers.sex}, condom is sex`);
        console.log(`${answers.password}`);
        console.log(`${answers.confirm}`);

    })
