- .d.ts 对已有库但没有类型注解提供注解的方式
- interface 注解 object
- interface 定义 user 在同个文件中可以再次定义 interface user ts 会将两个 user 合并
- class Mypoint implements IPoint 接口注解 class
- 接口定义了不代表能实现,比如接口定义了 new 方法,类去实现就会报错,因为类不能定义 new 方法
- 使用常量枚举 const enum Flag{}
- interface 只能定义类型不能定义变量 enum 既能定义类型又能定义变量
