// 我看看apply、call
 function add() {
 	this.num++;
 	return this.num;
 }
 add.num=0;
 console.log(add.num);
 delete add.num;
 console.log(add.num);

 //在试试下面这样处理
 var num=1;
 console.log(add());

//日过包裹在对象里
var Obj={
	num:2,
	add:add
}
Obj.add();

//不要重复去写对象里的属性了
var _Obj={
	num:3
}
add.call(_Obj);



// 看一个完整的例子

function foo() {
    if (this === window) {
        console.log("this is window.");
    }
}

foo.boo = function() {
    if (this === foo) {
        console.log("this is foo.");
    } else if (this === window) {
        console.log("this is window.");
    }
};
//看看下面这个 就明白this是什么意思
foo();  // this is window.
foo.boo();  // this is foo.
foo.boo.apply(window);  // this is window.