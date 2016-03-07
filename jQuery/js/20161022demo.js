var obj1={x:1,y:2};

var obj2={
	x : 1,
    y : 2,
    o : {
        z : 3,
        n : 4
    }
}


var obj = {x : 1, y : 2};
obj.x; // 1
obj["y"]; // 2

obj["x"] = 3;
obj.y = 4;


var obj = {x1 : 1, x2 : 2};
var i = 1, n = 2;

for (; i <= n; i++) {
    console.log(obj['x' + i]);
}
// 输出: 1, 2

var p;
for (p in obj) {
    console.log(obj[p]);
}

var man = {
    get age() {
        return new Date().getFullYear() - 1988;
    },
    set age(val) {
        console.log('Age can\'t be set to ' + val);
    }
}
console.log(man.age); // 27
man.age = 100; // Age can't be set to 100
console.log(man.age); // still 27

var man = {
    $age : null,
    get age() {
        if (this.$age == undefined) {
            return new Date().getFullYear() - 1988;
        } else {
            return this.$age;
        }
    },
    set age(val) {
        val = +val;
        if (!isNaN(val) && val > 0 && val < 150) {
            this.$age = +val;
        } else {
            throw new Error('Incorrect val = ' + val);
        }
    }
}


console.log(man.age); // 27
man.age = 100;
console.log(man.age); // 100;
man.age = 'abc'; // error:Incorrect val = NaN
