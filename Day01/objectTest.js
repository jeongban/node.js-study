var sayNode = function(){
    console.log('Node');
};
var es = 'ES';
var oldObject = {
    sayJS: function(){
        console.log('JS');
    },
    sayNode: sayNode,
};
oldObject[es + 6] = 'Fantastic';
oldObject.sayNode();//Node
oldObject.sayJS(); // JS
console.log(oldObject.ES6); // Fantasic

const newObject ={
    sayJS(){
        console.log('JS');
    },
    sayNode,
    [es + 6]: 'Fantasic',
};
newObject.sayNode(); // Node
newObject.sayJS(); // JS
newObject.log(newObject.ES6); // Fantasic

//{name: name, age: age} // ES5
//{name, age} // e\ES2015