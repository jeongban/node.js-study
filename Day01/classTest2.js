class Human{
    //생성자
    constructor(type = 'human'){
        this.type = type;
    }
    //static함수
    static isHuman(human){
        return human instanceof Human;
    }
    //객체함수
    breath(){
        alert('h-a-a-a-m');
    }
}

class Zero extends Human{
    constructor(type, firstName, lastName){
        super(type);
        this.firstName = firstName;
        this.lastName = lastName;
    }

    sayName(){
        super.breath();
        alert(`${this.firstName} ${this.lastName}`);
    }
}

const newZero = new Zero('human', 'Zero', 'Cho');
Human.isHuman(newZero); // ture