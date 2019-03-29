// declare namespace Validation {
  interface Validator {
    error: { [key: string]: any } | null
  }

  // class AbstractControl {
  //   error: { [key: string]: any } | null
  // }

  interface ValidateFn {

  }

  class lengthValidator implements Validator {
    error: { [key: string]: any } | null = null
    
    constructor() {}
    // controllor() {
    //   return (): { error: { [key: string]: string } } | null => {
    //     return null
    //   }
    // }
  }
// }

console.log(lengthValidator)

let flag = true

// 数组类型
let arr = [1, 2]  // es5
let arr1: number[] = [1, 2] // ts
let arr2: Array<number> = [1, 2] // ts

// 元组类型
let arr3: [number, string] = [1, '2']

// 枚举类型
enum Color { success = 1, failed = 0 }
let color: Color = Color.success

console.log(color)

// any类型
let box: any = document.querySelector('h1')
let box_color = box.style.color

let box1: HTMLHeadingElement | null = document.querySelector('h1')
let box1_color = box.style.color

console.dir(box1)

// undefined | null类型

let un: undefined
// un = 123 // error
un = undefined

let nu: null
nu = null

let un_nu_mb: null | undefined | number
un_nu_mb = null
un_nu_mb = 123

// void类型， 一般是用来当方法没有返回值，就可以用void

function test_fn(): void {
  // 但函数设置了void可以返回undefined
  return undefined
}

function test_fn1(): undefined {
  // return null // error
  return 
}

// never类型

let ne: never

// ne = 123 // error

// ne = (function() {
//   // throw new Error('never is ok')
// })()

// 函数的定义
function fn(str: string): string {
  return str
}

function fn1<T>(str: T): T {
  return str
}

// 可选参数&默认参数

function fn2(name: string = '王五', age?: number): void {
  console.log(`${name} now year have ${age} years old`)
}

fn2('张三', 20)

// 剩余参数

function f3_add(origin: number, ...arg: number[]): void {
  console.log(arg.reduce((total: number, now: number) => total + now, origin))
}

f3_add(1, 5, 6, 8, 6, 8, 8)

// 函数的重载

function reload(name: string): string;
function reload(age: number): string;
function reload(name_age: string | number): string{
  return typeof name_age === 'string' ? `老王全名叫${name_age}` : `老王今年${name_age}岁了`
}

console.log(reload('王明阳'))
console.log(reload(2019 - 1472))

// 类

class Person {

  name: string
  private _Ioc: string = ''

  constructor(_name: string) {
    this.name = _name
  }

  get Ioc() {
    return this._Ioc
  }

  set Ioc(value) {
    this._Ioc = value
  }

  printIoc() {
    console.log(this._Ioc)
  }
}

let person = new Person('张三')
person.Ioc = 'ceshi'
person.printIoc()

class Animal {
  name: string

  constructor(name: string) {
    this.name = name
  }

  walk(distance: number): void {
    console.log(`${this.name} have walk ${distance} m`)
  }
}

class Cat extends Animal{
  constructor(name: string) {
    super(name)
  }
}

let Tom = new Cat('Tom')

console.dir(Tom)

Tom.walk(200)

// public private protect static
// public 共有属性，在类，子类，实例中均可访问
// private 私有属性，只能在当前类读取
// protect 保护属性，只能在当前类，子类读取
// readonly 只读属性

enum Sex { man = '男', women = '女' }

class TN_1 {
  name: string = ''
  public age: number = 0
  private sex: Sex = Sex.man
  protected getHigh: <T>(num: T) => void = <T>(num: T) => void {}

  constructor() {}

  protected setName(str: string): void {
    this.name = str
  }
}

class TN_1_child extends TN_1{
  
  name: string = ''
  static weight: number = 0

  constructor() {
    super()
  }

  get_name(name: string = '天长路远魂飞苦'): string {
    super.setName(name)

    return this.name
  }

  protected walk(): void {
    this.getHigh<string>('cehsi')
  }

  // 静态方法不能拿到class的实例化属性，只能拿到静态属性 
  static getWeight() {
    console.log(`${TN_1_child.weight}`)
  }
}

let TN_fn = new TN_1_child()
// TN_fn.walk() // error
console.log(TN_fn.get_name())

// 多态，也是继承， 父类中的方法，子类重写

// 抽象类， 抽象方法只能放在抽象类中

abstract class TN_Animal {
  abstract eat(): void
}

class TN_Dog extends TN_Animal{
  name: string
  constructor(name: string) {
    super()
    this.name = name
  }

  eat(): void {
    console.log(`${this.name} eating mouse now`)
  }
}

let speike = new TN_Dog('Speike')

speike.eat()

// interface 接口
enum Size { small, large }
enum Country { en, us, jap, au }

interface Shape {
  size: Size
  shape: string

  madeBy(country: number): Country 
}

class ATM implements Shape{
  size: Size
  shape: string

  constructor(size: Size, shape: string) {
    this.size = size
    this.shape = shape
  }

  madeBy(str: number): Country {
    // return Country[str]
    return Country.au
  }
}

interface TN_IF {
  firstName: string
  secondName: string
}

function TN_IF_fn(params: TN_IF): string {
  return params.firstName + ' - ' + params.secondName
}

let TN_IF_obj = {
  age: 60,
  firstName: 'y',
  secondName: 'm'
}

console.log(TN_IF_fn(TN_IF_obj))
// console.log(TN_IF_fn({
//   age: 60,
//   firstName: 'y',
//   secondName: 'm'
// }))

// _.map(list, )

enum Type { get = 'get', post = 'post', put = 'put', delete = 'delete' }

interface RequestConfig {
  url: string
  type: string
  data?: string
  async?: boolean
  contentType?: string
  success?(): void
}

let defaultConfig = {
  type: Type.get,
  async: true,
  contentType: 'application/json' 
}

function ajax<T>(config: RequestConfig): Promise<T> {
  let xhr = new XMLHttpRequest()
  
  xhr.open(config.type, config.url, config.async)
  xhr.send(config.data)

  let promise = new Promise<T>((resolve: (result?: T) => void, reject: (reason?: any) => void) => {  

    xhr.onreadystatechange = (result: Event) => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        console.log(result)
        // resolve(result)
      }
    }
    
  })
  
  return promise
}

ajax({
  url: 'http://www.baidu.com',
  type: 'get'
})