interface Crazy {
  hello(): {
    hello: number;
  };
}

class CrazyClass implements Crazy {
  constructor() {
    return this;
  }
  hello() {
    return { hello: 12 };
  }
}

// Because
const crazy = new CrazyClass(); // crazy would be { hello:123 }
