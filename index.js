function shout(string) {
   return string.toUpperCase();
}
//console.log(shout("hi"));

function whisper(string) {
    return string.toLowerCase();
}
//console.log(whisper("WAZZZZZZZUP"));

function logShout(string) {
    console.log(shout(string));
}
//logShout("hey are u awake");

function logWhisper(string) {
    console.log(whisper(string));
}
//logWhisper("IF YOU TICKLE ME I WILL YELL");

function sayHiToHeadphonedRoommate(string) {
    if (string === whisper(string)) {
        return "I can\'t hear you!";
    }else if (string === shout(string)) {
        return "YES INDEED!";
    }else if (string === "Let's have dinner together!") {
        return  "I would love to!";
    }
}

console.log(sayHiToHeadphonedRoommate("DINNER IS READY"));
console.log(sayHiToHeadphonedRoommate("hey are you almost finished"));
console.log(sayHiToHeadphonedRoommate("Let's have dinner together!"));