import inquirer from 'inquirer';
inquirer
    .prompt([
        {type:'input',name:'input',message:'Kas te kasutate ühistransporti?'},
        {type:'rawlist',name:'rawlist',message:'Milline nendest oleks teie unistuse auto', choices: ['Lamborghini','Bugatti','Ferrari','Aston Martin','Porsche','BMW','AUDI']},
        {type:'password',name:'password',message:'Mis on teie GitHub-i salasõna?', mask:''},
        {type:'confirm',name:'confirm',message:'Kas teie arvates Matrix on reaalne?'},  
        {type:'checkbox',name:'checkbox',message:'Mis on teie sugu?', choices: ['Mees','Naine',]},
        {type:'number',name:'number',message:'Mis on teie isikukood?'}, 
        {type:'list',name:'list',message:'Kuhu te reisiksite?', choices: ["Läti","Prantsusmaa","Itaalia","Slovakia","Austraalia","India","Hispaania","Portugal","USA"]},
        {type:'expand',name:'expand',message:'Kas see töö on positiivse hinde vääriline?', choices: [{key:"y",value:"JAH"},{key:"n",value:"EI"}]},
        {type:'editor',name:'editor',message:''}, 
    ])
    .then((answers) => {
        console.log(answers.input);
        console.log(`Teie unistuse auto on ${answers.rawlist}`);
        console.log(`Teie GitHub-i salasõna on ${answers.password}`);
        console.log(`Te arvate, et matrix on ${answers.confirm}`);
        console.log(`Teie sugu on ${answers.checkbox}`);
        console.log(`Teie isikukood on ${answers.number}`);
        console.log(`Te reisiksite ${answers.list}`);
        console.log(`See töö ${answers.expand}`);
        console.log(` ${answers.editor}`);
    })

