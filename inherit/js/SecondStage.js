//demo2;
//Person 构造函数;
function Person(name,sex){
	this.name=name;
	this.sex=sex;
}

Person.prototype={
	getName:function(){
		return this.name;
	},
	getSex:function(){
		return this.sex;
	}
};


// 创建类似student、teacher...等等 下面我们用员工类在继承自Person
// 我们还是里用之前学到的知识点来做
function Employee(name, sex, ID) {
    this.name = name;
    this.sex = sex;
    this.ID = ID;
}

// 将Employee的原型指向Person的一个实例
// 因为Person的实例可以调用Person原型中的方法, 所以Employee的实例也可以调用Person原型中的所有属性。
Employee.prototype = new Person();
Employee.prototype.getEmployeeID = function() {
    return this.employeeID;
};
var zhang = new Employee("ZhangSan", "man", "1234");
console.log(zhang.getName()); // "ZhangSan

// 思考存在的问题：

/**
* 1、每次实例化的Employee的时候，就会实例化一个Person，这样对内存是一种浪费
* 2、Employee.name、Employee.sex和Person.name、Person.sex重复了
* 3、如何重载Employee的父级Person方法呢？
* 4、constructor
**/


