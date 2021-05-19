const myFruits = ["apple", "pear", "banana"];

const myJoinedFruits = myFruits.join("");

//console.log(myJoinedFruits);









const stringFromTextarea = "hej vad heter du";
const splits = stringFromTextarea.split(" ");

let myWord;

for  (const word of splits) {
    if (word === "heter")
    {
        myWord = word;
    }
}

console.log(myWord);