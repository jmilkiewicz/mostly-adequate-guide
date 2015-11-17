"use strict";

class Container {
    constructor(x){
        this._value = x;
    }

    map(f) {
        return Container.of(f(this._value));
    }
    static of(value){
        return new Container(value);
    }
}



module.exports = Container;