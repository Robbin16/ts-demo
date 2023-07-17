- declare var 声明全局变量 declare let 一样
- declare function 声明全局方法
- declare class 声明全局类
- declare enum 声明全局枚举类型
- declare namespace 声明全局对象

```typescript
declare namespace jQuery {
  function ajax(url: string, settings?: any): void;
  const version: number;
  class Event {
    blur(eventType: EventType): void;
  }
  enum EventType {
    CustomClick,
  }
}

// 如果对象拥有深层的层级，则需要用嵌套的 namespace 来声明深层的属性的类型：
declare namespace jQuery {
  function ajax(url: string, settings?: any): void;
  namespace fn {
    function extend(object: any): void;
  }
}

jQuery.ajax("/api/get_something");
jQuery.fn.extend({
  check: function () {
    return this.each(function () {
      this.checked = true;
    });
  },
});

// 假如 jQuery 下仅有 fn 这一个属性（没有 ajax 等其他属性或方法），则可以不需要嵌套 namespace：
declare namespace jQuery.fn {
  function extend(object: any): void;
}

jQuery.fn.extend({
  check: function () {
    return this.each(function () {
      this.checked = true;
    });
  },
});
```

- 声明合并 假如 jQuery 既是一个函数，可以直接被调用 jQuery('#foo')，又是一个对象，拥有子属性 jQuery.ajax()（事实确实如此），那么我们可以组合多个声明语句，它们会不冲突的合并起来

```typescript
declare function jQuery(selector: string): any;
declare namespace jQuery {
  function ajax(url: string, settings?: any): void;
}

jQuery("#foo");
jQuery.ajax("/api/get_something");
```

- export 导出变量

```typescript
export const name: string;
export function getName(): string;
export class Animal {
  constructor(name: string);
  sayHi(): string;
}
export enum Directions {
  Up,
  Down,
  Left,
  Right,
}
export interface Options {
  data: any;
}

import { name, getName, Animal, Directions, Options } from "foo";

console.log(name);
let myName = getName();
let cat = new Animal("Tom");
let directions = [
  Directions.Up,
  Directions.Down,
  Directions.Left,
  Directions.Right,
];
let options: Options = {
  data: {
    name: "foo",
  },
};
```

- 混用 declare 和 export

```typescript
declare const name: string;
declare function getName(): string;
declare class Animal {
  constructor(name: string);
  sayHi(): string;
}
declare enum Directions {
  Up,
  Down,
  Left,
  Right,
}
interface Options {
  data: any;
}

export { name, getName, Animal, Directions, Options };
```

- export default 在 ES6 模块系统中，使用 export default 可以导出一个默认值，使用方可以用 import foo from 'foo' 而不是 import { foo } from 'foo' 来导入这个默认值。注意，只有 function、class 和 interface 可以直接默认导出，其他的变量需要先定义出来，再默认导出

```typescript
export default function foo(): string;
import foo from "foo";
foo();

export default enum Directions {
// ERROR: Expression expected.
    Up,
    Down,
    Left,
    Right
}

// 只能这样
declare enum Directions {
    Up,
    Down,
    Left,
    Right
}

export default Directions;
```

- export namespace

```typescript
export namespace foo {
  const name: string;
  namespace bar {
    function baz(): string;
  }
}

import { foo } from "foo";
console.log(foo.name);
foo.bar.baz();
```
