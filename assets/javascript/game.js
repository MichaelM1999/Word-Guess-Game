document.addEventListener("DOMContentLoaded", function(){


const words = {
    "OverlyDedicated": "Kendricks first album",
    "UntitledUnmastered": "unreleased album",
    "ToPimPAButterFly": "Taylor Swift Robbed The Grammy",
    "GoodKidM.A.A.D.City": "Swimming Pools",
    "DAMN.": "Humble. D.N.A. Element.",
    "Section.80": "Hii Power ADHD"
}
const randwordArr = ["OverlyDedicated", "UntitledUnmastered","ToPimPAButterFly","GoodKidM.A.A.D.City","DAMN.","Section.80"]
const randword = randwordArr[Math.floor(Math.random() * randwordArr.length)];
const wins = 0;
const answerArr = [];
for (let i = 0; i < randword.length; i++) {
    answerArr[i] = "_";
    document.getElementById("answers").innerHTML = answerArr;
}
console.log(randword);
console.log(answerArr);
// on key up events
const remainingletters = randword.length;
console.log(remainingletters);
    if (remainingletters > 0) {
        var guess = event.key;
        for (var j = 0; j < randword.length; j++) {
            if (randword[j] === guess) {
            answerArray[j] = guess;
            remainingLetters--;

            console.log(guess);
            console.log(remainingletters);
            console.log(randword);
            if (remainingletters === 0) {
                getElementById("wins", wins++ );
            }
        }};
}});
