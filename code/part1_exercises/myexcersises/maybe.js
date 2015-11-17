"use strict";


class Maybe {
    constructor(x){
        this._value = x;
    }

    map(f) {
        if(this._value){
            return Maybe.of(f(this._value));
        }
        return nullMaybe;
    }
    static of(value){
        return new Maybe(value);
    }
}

const nullMaybe = Maybe.of(null);

module.exports = Maybe;