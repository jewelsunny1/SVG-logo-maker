const inquirer= require('inquirer'); //for prompts
const {generateSVG} =require('./lib/svg');
const{Circle, Triangle, Square}=require('./lib/shapes')

async function promptUser(){
    try{
        const userInput= await inquirer.prompt([
            {
                type: 'input',
                name: 'text',
                message: 'Please enter up to 3 characters you would like to see displayed:',
                validate: value => value.length <= 3 ? true: 'Enter up to 3 characters',
            },
            {   type:'input',
                name:'textColor',
                message: "Please enter text color"

            },
            {
                type:'list',
                name:'shape',
                message: 'Chose a shape:',
                choices:['circle', 'triangle','square']
            },
            {
                type:'input',
                name:'shapeColor',
                message:'Enter the shape color please'
            }
        ]);

        return userInput;
    } catch(error){
        console.error('Error', error);
    }
}

async function generateLogo(){
    const userInput=await promptUser();

    if (userInput){
        generateSVG(userInput.text, userInput.textColor,userInput.shape,userInput.shapeColor);
    }
}

generateLogo();
