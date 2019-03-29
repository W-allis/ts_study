"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var lengthValidator = /** @class */ (function () {
    function lengthValidator() {
        this.error = null;
    }
    return lengthValidator;
}());
// }
console.log(lengthValidator);
var flag = true;
// 数组类型
var arr = [1, 2]; // es5
var arr1 = [1, 2]; // ts
var arr2 = [1, 2]; // ts
// 元组类型
var arr3 = [1, '2'];
// 枚举类型
var Color;
(function (Color) {
    Color[Color["success"] = 1] = "success";
    Color[Color["failed"] = 0] = "failed";
})(Color || (Color = {}));
var color = Color.success;
console.log(color);
// any类型
var box = document.querySelector('h1');
var box_color = box.style.color;
var box1 = document.querySelector('h1');
var box1_color = box.style.color;
console.dir(box1);
// undefined | null类型
var un;
// un = 123 // error
un = undefined;
var nu;
nu = null;
var un_nu_mb;
un_nu_mb = null;
un_nu_mb = 123;
// void类型， 一般是用来当方法没有返回值，就可以用void
function test_fn() {
    // 但函数设置了void可以返回undefined
    return undefined;
}
function test_fn1() {
    // return null // error
    return;
}
// never类型
var ne;
// ne = 123 // error
// ne = (function() {
//   // throw new Error('never is ok')
// })()
// 函数的定义
function fn(str) {
    return str;
}
function fn1(str) {
    return str;
}
// 可选参数&默认参数
function fn2(name, age) {
    if (name === void 0) { name = '王五'; }
    console.log(name + " now year have " + age + " years old");
}
fn2('张三', 20);
// 剩余参数
function f3_add(origin) {
    var arg = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg[_i - 1] = arguments[_i];
    }
    console.log(arg.reduce(function (total, now) { return total + now; }, origin));
}
f3_add(1, 5, 6, 8, 6, 8, 8);
function reload(name_age) {
    return typeof name_age === 'string' ? "\u8001\u738B\u5168\u540D\u53EB" + name_age : "\u8001\u738B\u4ECA\u5E74" + name_age + "\u5C81\u4E86";
}
console.log(reload('王明阳'));
console.log(reload(2019 - 1472));
// 类
var Person = /** @class */ (function () {
    function Person(_name) {
        this._Ioc = '';
        this.name = _name;
    }
    Object.defineProperty(Person.prototype, "Ioc", {
        get: function () {
            return this._Ioc;
        },
        set: function (value) {
            this._Ioc = value;
        },
        enumerable: true,
        configurable: true
    });
    Person.prototype.printIoc = function () {
        console.log(this._Ioc);
    };
    return Person;
}());
var person = new Person('张三');
person.Ioc = 'ceshi';
person.printIoc();
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.walk = function (distance) {
        console.log(this.name + " have walk " + distance + " m");
    };
    return Animal;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name) {
        return _super.call(this, name) || this;
    }
    return Cat;
}(Animal));
var Tom = new Cat('Tom');
console.dir(Tom);
Tom.walk(200);
// public private protect static
// public 共有属性，在类，子类，实例中均可访问
// private 私有属性，只能在当前类读取
// protect 保护属性，只能在当前类，子类读取
// readonly 只读属性
var Sex;
(function (Sex) {
    Sex["man"] = "\u7537";
    Sex["women"] = "\u5973";
})(Sex || (Sex = {}));
var TN_1 = /** @class */ (function () {
    function TN_1() {
        this.name = '';
        this.age = 0;
        this.sex = Sex.man;
        this.getHigh = function (num) { return void {}; };
    }
    TN_1.prototype.setName = function (str) {
        this.name = str;
    };
    return TN_1;
}());
var TN_1_child = /** @class */ (function (_super) {
    __extends(TN_1_child, _super);
    function TN_1_child() {
        var _this = _super.call(this) || this;
        _this.name = '';
        return _this;
    }
    TN_1_child.prototype.get_name = function (name) {
        if (name === void 0) { name = '天长路远魂飞苦'; }
        _super.prototype.setName.call(this, name);
        return this.name;
    };
    TN_1_child.prototype.walk = function () {
        this.getHigh('cehsi');
    };
    // 静态方法不能拿到class的实例化属性，只能拿到静态属性 
    TN_1_child.getWeight = function () {
        console.log("" + TN_1_child.weight);
    };
    TN_1_child.weight = 0;
    return TN_1_child;
}(TN_1));
var TN_fn = new TN_1_child();
// TN_fn.walk() // error
console.log(TN_fn.get_name());
// 多态，也是继承， 父类中的方法，子类重写
// 抽象类， 抽象方法只能放在抽象类中
var TN_Animal = /** @class */ (function () {
    function TN_Animal() {
    }
    return TN_Animal;
}());
var TN_Dog = /** @class */ (function (_super) {
    __extends(TN_Dog, _super);
    function TN_Dog(name) {
        var _this = _super.call(this) || this;
        _this.name = name;
        return _this;
    }
    TN_Dog.prototype.eat = function () {
        console.log(this.name + " eating mouse now");
    };
    return TN_Dog;
}(TN_Animal));
var speike = new TN_Dog('Speike');
speike.eat();
// interface 接口
var Size;
(function (Size) {
    Size[Size["small"] = 0] = "small";
    Size[Size["large"] = 1] = "large";
})(Size || (Size = {}));
var Country;
(function (Country) {
    Country[Country["en"] = 0] = "en";
    Country[Country["us"] = 1] = "us";
    Country[Country["jap"] = 2] = "jap";
    Country[Country["au"] = 3] = "au";
})(Country || (Country = {}));
var ATM = /** @class */ (function () {
    function ATM(size, shape) {
        this.size = size;
        this.shape = shape;
    }
    ATM.prototype.madeBy = function (str) {
        // return Country[str]
        return Country.au;
    };
    return ATM;
}());
function TN_IF_fn(params) {
    return params.firstName + ' - ' + params.secondName;
}
var TN_IF_obj = {
    age: 60,
    firstName: 'y',
    secondName: 'm'
};
console.log(TN_IF_fn(TN_IF_obj));
// console.log(TN_IF_fn({
//   age: 60,
//   firstName: 'y',
//   secondName: 'm'
// }))
// _.map(list, )
var Type;
(function (Type) {
    Type["get"] = "get";
    Type["post"] = "post";
    Type["put"] = "put";
    Type["delete"] = "delete";
})(Type || (Type = {}));
var defaultConfig = {
    type: Type.get,
    async: true,
    contentType: 'application/json'
};
function ajax(config) {
    var xhr = new XMLHttpRequest();
    xhr.open(config.type, config.url, config.async);
    xhr.send(config.data);
    var promise = new Promise(function (resolve, reject) {
        xhr.onreadystatechange = function (result) {
            console.log(result);
            if (xhr.readyState === 4 && xhr.status === 200) {
                // resolve(result)
            } else {
                reject()
            }
        };
    });
    return promise;
}
ajax({
    url: '/api/login',
    type: 'get'
}).catch(function(error) {
    console.log(error)
})
//# sourceMappingURL=main.js.map