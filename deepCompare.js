var obj_3 = {
    b: 1,
    a: ['ES', 6],
    c: {
        d: "MAX",
        e: 1,
        k: {
            g: 1,
            c: function () {
                console.log("OMG!!!")
            }
        }

    }
};

var obj_4 = {
    a: ['ES', 6],
    b: 1,
    c: {
        d: "MAX",
        e: 1,
        k: {
            g: 1,
            c: function () {
                console.log("OMG!!!")
            }
        }

    }
};

function deepCompare(obj1, obj2){
    for( var key in obj1){
        if(typeof(obj1[key]) == "object"){
           // recursively call the function
            if(!deepCompare(obj1[key], obj2[key])) return false;

        }else{
            if(obj1[key] == undefined && obj2[key] == undefined) return false;
            if(obj1[key].toString() != obj2[key].toString()){
                return false;
            }
        }
    }
    return true;
}

var result_2 = deepCompare(obj_3, obj_4);

console.log(result_2);