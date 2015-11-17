"use strict";
var _ = require('ramda');

var Maybe = require('./maybe');
var expect = require("chai").expect;

describe("a Maybe Container", function(){

    it("maps with value", function(){
        expect(Maybe.of(3).map((a)=>a+1)).to.deep.equal(Maybe.of(4));
    });

    it("ignores map function when null", function(){
        expect(Maybe.of(null).map((a)=>a+1)).to.deep.equal(Maybe.of(null));
    });

    it("maybe of null when function map returns null", function(){
        expect(Maybe.of('1').map((a)=> null)).to.deep.equal(Maybe.of(null));
    });
});
