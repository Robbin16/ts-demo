- .d.ts 对已有库但没有类型注解提供注解的方式
- interface 注解 object
- interface 定义 user 在同个文件中可以再次定义 interface user ts 会将两个 user 合并
- class Mypoint implements IPoint 接口注解 class
- 接口定义了不代表能实现,比如接口定义了 new 方法,类去实现就会报错,因为类不能定义 new 方法
- 使用常量枚举 const enum Flag{}
- interface 只能定义类型不能定义变量 enum 既能定义类型又能定义变量
- class 是模板 实例是对模板的具体
- class A A 是实例类型只包括实例属性与实例方法不包括构造函数与静态属性静态方法 与类声明中的 this super 有异曲同工之妙
- 接口约束对象(let a:IA) 接口约束类甚至多个接口约束类(class A implements IA,IB) 接口可以继承接口(interface IA extends IB) extends 永远只能继承一个
- class A 与 interface IA A 与 IA 等价 也就是说可以实现 class B implements A === class B implements IA 也可以继承 class B extends A === class B extends IA 但实现和继承不同，实现是约束 继承如果父类有属性和方法可以不写
