//create a svg class constructor?
 const fs= require('fs');

 function generateSVG (text, textColor, shape, shapeColor){

    const svgContent=`
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect width ="100%" height = "100%" fill="white"/>
    ${generateShape (shape, shapeColor)}
    <text x="50%" y="50%" text-anchor= "middle" fill="${textColor}">${text}</text>
    </svg>

    `;

    fs.writeFileSync('logo.svg', svgContent );
    console.log('logo.svg that was generated')

 }

 function generateShape(shape,color){
    switch(shape){
        case'circle':
            return `<circle cx ="150" cy="100" r="50" fill "${color}" />`;
        case 'triangle':
            return `<polygon points= "150,50 100,150 200,150 fill=${color}"/>`;
        case 'square':
            return `<rect x="100" y="50" width="100" height="100" fill=${color}"/>`;
        default:
            return '';
    }
 }

 module.exports={
    generateSVG
 };