function dozen(num){
    let ans = num*12;
    return ans;
}

let func_dozen = function dozen(num){
    let ans = num * 12;
    return ans;
}

let func_dozen2 = function (num){
    let ans = num * 12;
    return ans;
}

function gross(num){
    let ans = dozen(num*12);
    return ans;
}

function callback(num, cb){
    let ans = cb(num);
    return ans;    
}

function callback2(num, function(num){
    let answers = num * 12
    return answers;
}){
    let ans = cb(num);
    return ans;    
}