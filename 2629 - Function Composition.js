var compose = function(functions) {
    
    return function(x) {
        for(fn of functions.reverse()){
            x = fn(x);
        }
        return x;
    }
};