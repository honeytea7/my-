{// 原型链继承
function Father() {
    //定义父类
    this.hobby=['sing','dance']
}
Father.prototype.run = function () {
    console.log('run');
}


// 定义子类
function Son() {
    this.like = ["rap", "basketball"];
} 
//核心：将 Son的原型指向Father的实例，此时原来的prototype被覆盖了，新的prototype.constructor指的是Father
Son.prototype = new Father()
// 所以需要手动把construcctor指回来
Son.prototype.construtor = Son
// 缺点：多个实例对引用类型的修改会篡改子类
// 比如
let son1 = new Son()
son1.hobby.push('son1的属性')
console.log(son1.hobby);//[ 'sing', 'dance', 'son1的属性' ]
let son2 = new Son()
console.log(son2.hobby);//[ 'sing', 'dance', 'son1的属性' ]


}

// 借用构造函数继承
{
  function Father() {
    this.color = ["father"];
  }

  function Son() {
    Father.call(this);
  }
  //解决了原型链的缺点：缺点：多个实例对引用类型的修改会篡改子类
  // 核心代码是Father.call(this), 创建子类的时候调用Father的构造函数。于是每个Son的实例都会把Father中的属性复制一份
  // 缺点：1. 只能继承父类实例的属性方法，无法继承原型的属性方法
  // 2. 每个子类都会有一个父类实例的副本，无法实现复用，影响性能
}



{
   
    // 组合继承
    function Father(myname)
    {
        this.myname = myname
        this.color=['fater']
    }
    function Son(myname) {
        Father.call(this)//这的方法在使用时会覆盖下面原型链的方法，复制父类实例，
        
    }

    Son.prototype = new Father()//继承父类的原型链
    Son.prototype.construtor = Son
    // 实例对象instance1上的两个属性就屏蔽了其原型对象SubType.prototype的两个同名属性。
    // 所以，组合模式的缺点就是在使用子类创建实例对象时，其原型中会存在两份相同的属性 / 方法。

}



{
    // 4.原型式继承

    function object(obj) {
        function F() {  
        }
        F.prototype = obj
        // 利用一个空对象作为中介，将某个对象直接赋值给空对象构造函数的原型。
        return new F()
    }

    var fatherperson = {
        name: 'xwq',
        friends:['wsy','lxr']
    }
    var sonperson = object(fatherperson);//object()对传入其中的对象执行了一次浅复制，将构造函数F的原型直接指向传入的对象。
    sonperson.name = 'xwq1'

    console.log(sonperson.name, fatherperson.name);//xwq xwq1

// 缺点：
// 原型链继承多个实例的引用类型属性指向相同，存在篡改的可能。
// 无法传递参数
// 另外，ES5中存在Object.create()的方法，能够代替上面的object方法。
    
}