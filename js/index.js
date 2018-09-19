var randomBodyParts = ["eyes", "head", "mouth", "nose", "leg"];
var randomAjectives = ["dirty", "sticky", "muddy", "stupid"];
var randomWords = ["cunt", "penis", "vagina", "sperm"];
var randomBodyPart = randomBodyParts[Math.floor(Math.random() * randomBodyParts.length)];
var randomAjective = randomAjectives[Math.floor(Math.random() * randomAjectives.length)];
var randomWord = randomWords[Math.floor(Math.random() * randomWords.length)];
var randomInsult = ["You have", randomBodyPart, "looks like", randomAjective, randomWord].join(" ");

document.write(randomInsult);

var scores = {
    nastia: 0,
    arhur: 0
};
scores.nastia +=4;
scores.arhur +=7;
document.write(scores);