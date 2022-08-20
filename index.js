function shout(string) {
    return string.toUpperCase();
}

console.log(shout("Hello!"));

function whisper(string) {
    return string.toLowerCase();
}
console.log(whisper("Midnight"));

function logShout(string) {
    console.log(`${string}`.toUpperCase());
}

logShout("Hello");

function logWhisper(string) {
    console.log(`${string}`.toLowerCase());
}

logWhisper("Hello");

function sayHiToHeadphonedRoommate(string) {
    if (string === string.toLowerCase()){
        return 'I can\'t hear you!';
        }
        if (string === string.toUpperCase()){
            return "YES INDEED!"
        }
        if (string === "Let's have dinner together!") {
            return "I would love to!"
        }
}

console.log(sayHiToHeadphonedRoommate("Let's have dinner together!"));