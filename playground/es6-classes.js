class Person{
    constructor(name='anonymous', age=18){
        this.name = name
        this.age = age
    }

    getGreetings(){
        return `${this.name} says hi`
    }

    getDescription(){
        return `${this.name} is ${this.age} years old`
    }
}

class Student extends Person{
    constructor(name,age,major){
        super(name,age)
        this.major = major
    }

    getMajor(){
        console.log(super.getDescription())
        return `${this.name} is studying ${this.major}`
    }
}

const me = new Person('ashwini chechar',34)
console.log(me.getGreetings())
console.log(me.getDescription())

const anonymous = new Person()
console.log(anonymous.getGreetings())

const student = new Student('ashwini chechar',34,'Computer Science')
console.log(student.getMajor())