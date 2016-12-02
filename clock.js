// var t = new Date();
// var mHand = document.getElementById("minute");
// mHand.style.transform = "rotate(" + t.getMinutes() + "deg)";
// var hHand = document.getElementById("hour");
// hHand.style.transform = "rotate(" + t.getHours() + "deg)";
// var seconds = 0;
function go(){
    console.log("clock running");
    //thing to run all the functions and loop per interval.
    // seconds++;
    currentTime = new Date();
    secondRotation(currentTime.getSeconds());
    minuteRotation(currentTime.getMinutes()+(currentTime.getSeconds()/60));
    hourRotation(currentTime.getHours()+(currentTime.getMinutes()/60+(currentTime.getSeconds()/60/60)));
}
//  if secondHand = 60, set it to 0 then increase minute hand, if minute hand = 60, increase hour hand.
// rotation logic - 1s = 6 degrees
//have a function set the positon of the second hand


function secondRotation(sec) {
    var hand = document.getElementById("second");
    if (sec !== 0){
        sec *= 6;
        console.log("degree should be " + sec);  //should convert current second into corisponding degrees
        hand.style.transform = "rotate(" + sec + "deg)";
    } else {
        hand.style.transform = "rotate(0deg)";
    }
}
function minuteRotation(min) {
    var hand = document.getElementById("minute");
    if (min !== 0){
        min *= 6 ;  //should convert current minute into corisponding degrees
        hand.style.transform = "rotate(" + min + "deg)";
    } else {
        hand.style.transform = "rotate(0deg)";
    }
}
function hourRotation(hr) {
    var hand = document.getElementById("hour");
    if (hr !== 0){
        hr *= 30;  //should convert current hour into corisponding degrees
        hand.style.transform = "rotate(" + hr + "deg)";
    } else {
        hand.style.transform = "rotate(0deg)";

    }
}

setInterval(go,1000);
//have a function set the positon of the minute hand


//have a function set the positon of the hour hand
