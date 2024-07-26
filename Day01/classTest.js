var Human = function(type){// 클래스 명
    this.type = type || 'human';
};

Human.isHuman = function(human){
    return human instanceof Human;
}

Human.prototype.breathe = function(){
    alert('h-a-a-a-m');
};

var Zero = function(type, firstName, lastName){ // 클래스 명
    Human.apply(this, arguments);
    this.firstName = firstName;
    this.lastName = lastName;
};

Zero.prototype = Object.create(Human.prototype);
Zero.prototype.constructor = Zero; // 상속하는 부분
Zero.prototype.sayName = function(){
    alert(this.firstName + ' ' + this.lastName);
};




var oldZero = new Zero('a', 'Zero', 'Cho');
console.log(Human.isHuman(oldZero)); // true
console.log(oldZero.firstName);
console.log(oldZero.lastName);
console.log(oldZero.type);
