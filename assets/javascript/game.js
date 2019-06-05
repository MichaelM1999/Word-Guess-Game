const words = {
    "OverlyDedicated": "Kendricks first album",
    "UntitledUnmastered": "unreleased album",
    "ToPimPAButterFly": "Taylor Swift Robbed The Grammy",
    "GoodKidM.A.A.D.City": "Swimming Pools",
    "DAMN.": "Humble. D.N.A. Element.",
    "Section.80": "Hii Power ADHD"
}
const randwordArr = ["OverlyDedicated", "UntitledUnmastered","ToPimPAButterFly","GoodKidM.A.A.D.City","DAMN.","Section.80"]
const randword = randwordArr[Math.floor(Math.random() * randwordArr.length)]

let answerArr = []
    for (let i = 0; i < randword.length; i++) {
        answerArr[i] = "_";
    }
document.getElementById("answers").innerHTML = answerArr;
console.log(randword)


