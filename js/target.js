(function(global){

    var lib = {};

    lib.returnPlus = function(first, second){
        return first + second;
    };

    // CommonJS module code
    if (typeof define === "function" && define.amd) {
        define(function() { return lib; });
    } else if (typeof exports === "object") {
        module.exports = lib;
    } else {
        global.lib = lib;
    }
    
})(this);