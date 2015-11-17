"use strict";
var _ = require('ramda');

var Container = require('./container');
var expect = require("chai").expect;

describe("a Simple Container", function(){

    it("shall create container with given value", function(){
        expect(Container.of(3)).to.deep.equal({_value:3});
    });

    it("containers equal with value", function(){
        expect(Container.of(3)).to.deep.equal(Container.of(3));
    });

    it("containers can be mapped", function(){
        expect(Container.of(3).map((a)=>a+1)).to.deep.equal(Container.of(4));
    });

    it("containers can be mapped2", function(){
        expect(Container.of('dupa').map(_.prop('length'))).to.deep.equal(Container.of(4));
    });

});
