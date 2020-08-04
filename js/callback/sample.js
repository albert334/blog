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
    let ans = dozen(dozen(num));
    return ans;
}

function callback(num, cb){
    let ans = cb(num);
    return ans;    
}

function OnButtonClick(){
    window.setTimeout(function(){
        alert("hoge");
    }
    , 3000)
    alert("fuga");
}