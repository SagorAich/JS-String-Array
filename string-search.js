const products=[
    'Dell hardcore i29 200GB laptop',
    'iphone 1TB camera flashlight phone',
    'yellow laptop with black camera',
    '1X59 Lenova Comercial yoga laptop',
    'LG supernova laptop',
    'HTC kow price phone',
    'purple color phone with Laptop'
];
const searching='laptop';  
const output=[];
/* for(const product of products){
    if(product.toLowerCase().indexOf(searching.toLowerCase()) != -1){
        output.push(product);
    }
}
console.log(output); */

/* for(const product of products){
    if(product.toLowerCase().includes(searching.toLowerCase())){
        output.push(product);
    }
}
console.log(output); */

const searching1 = 'Dell';
for(const product of products){
    if(product.toLowerCase().startsWith(searching1.toLowerCase())){
        output.push(product);
    }
}
console.log(output);