// 在JavaScript中所有事物都是对象，比如以下示例：
	function add(a,b) {
		add.num++;
		return a+b;
	}
	add.num=0;
	console.log(add.num);
	add(1+1);
	console.log(add.num);
	add(2+2);
	console.log(add.num);


// demo1
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

// 这样我们就可以将Person当做构造函数，在JavaScript中,我们可以通过这种方式来实现类的功能

	var zhang=new Person("张三","男");
	console.log(zhang.getName());
	var li=new Person("李丽丽","女");
	console.log(li.getName());


//demo2
	console.log(zhang.name);
	zhang.name="张华";
	console.log(zhang.name);
	delete zhang.name;
	console.log(zhang.name);

// 这是脚本实现继承的原理基础