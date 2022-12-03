
# require 和 import 的区别
import 是引用，该引用是不可读的，不能修改。所以基本数据类型不能修改，引用数据类型的地址不能修改。
 ## require/exports 是运行时动态加载，import/export 是静态编译
> CommonJS 加载的是一个对象（即 module.exports 属性），该对象只有在脚本运行完才会生成。而 ES6 模块不是对象，它的对外接口只是一种静态定义，在代码静态解析阶段就会生成。- 阮一峰
# require/exports 输出的是一个值的拷贝，import/export 模块输出的是值的引用
https://zhuanlan.zhihu.com/p/121770261
import命令具有提升效果，会提升到整个模块的头部，首先执行。import命令是编译阶段执行的，

# js继承
https://juejin.cn/post/7166562158052900871
## 原型链继承：重写某个构造函数的原型（prototype）,使其指向父类的一个实例，实现继承
```js
// 原型链继承
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
//核心：将 Son的原型指向Father的实例，此时原来的prototype被覆盖了，constructor没了
Son.prototype = new Father()
// 所以需要手动把construcctor指回来
Son.prototype.construtor = Son

```
![avatar](E:/复习/img/web_1669813476601.jpg)



