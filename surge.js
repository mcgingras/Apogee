function randomString(length, chars) {
    var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
}

var normalize = function(v, min, max){
    return (v-min)/(max-min);
}


var getPrice = function(timeLeft, supply){
    var max = 24;
    return timeLeft * (supply + 1) / max + .10;
}


var getActive = function(){
    return $('.active').length;
};