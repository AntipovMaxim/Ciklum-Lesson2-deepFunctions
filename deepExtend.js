var obj_1 = {
    a: 1,
    b: 1,
    c: {
        d: 1,
        e: 1,
        f: {
            g: 1,
            c: 1
        }

    }
};

var obj_2 = {
    a: 2,
    h: 2,
    c: {
        d: 2,
        p: 2,
        f: {
            g: 2,
            n: 2
        }

    }
};


function deepExtend (obj1, obj2) {
    for (var key in obj2) {
        if (obj2.hasOwnProperty(key)) {
            if (obj1[key] && typeof obj2[key] === 'object') {
               // recursively call the function
                deepExtend(obj1[key], obj2[key]);
            }
            else {
                obj1[key] = obj2[key];
            }
        }
    }
    return obj1;
}

var result = deepExtend(obj_1, obj_2);

console.log(result);