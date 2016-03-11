class Person {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    love(){
        alert(`I fall in love with ${this.name}`);
    }
}

var me = new Person('邝业亨',25);

me.love();