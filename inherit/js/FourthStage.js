  // constructor是指向构造函数
	var arr = [1, 56, 34, 12];
	console.log(arr.constructor === Array); // true
  
	var Foo = function() { };
	console.log(Foo.constructor === Function); // true

	var obj = new Foo();
    console.log(obj.constructor === Foo); // true

    console.log(obj.constructor.constructor === Function); // true


    // 我们看看第一次Person函数属性
    function Person(name,sex) {
        this.name = name;
        this.sex = sex;
     };
     Person.prototype.getName = function() {
         return this.name;
     };
     Person.prototype.getSex=function(){
     	return this.sex;
     }
     var zhang = new Person("张三","男");
     
     console.log(zhang.constructor === Person);  // true
     console.log(Person.prototype.constructor === Person); // true


     console.log(zhang.constructor.prototype.constructor === Person); // true

    // 在看下面的例子
    function Person(name,sex) {
        this.name = name;
        this.sex = sex;
    };
    Person.prototype = {
        getName: function() {
            return this.name;
        },
        getSex: function(){
	     	return this.sex;
	     }
    };
    var zhang = new Person("ZhangSan");
    console.log(zhang.constructor === Person);  // false
    console.log(Person.prototype.constructor === Person); // false
    console.log(zhang.constructor.prototype.constructor === Person); // false

    // 有什么区别？

    // 怎么做呢？

    function Person(name,sex) {
        this.name = name;
        this.sex = sex;
    };
    Person.prototype = {
        getName: function() {
            return this.name;
        },
        getSex: function(){
	     	return this.sex;
	     }
    };
    Person.prototype.constructor = Person;
    var zhang = new Person("ZhangSan");
    console.log(zhang.constructor === Person);  // true
    console.log(Person.prototype.constructor === Person); // true
    console.log(zhang.constructor.prototype.constructor === Person); // true