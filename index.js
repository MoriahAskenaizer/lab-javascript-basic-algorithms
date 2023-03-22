const hacker1 = "Moriah";

const greeting = `The drivers name is ${hacker1}`;

console.log(greeting);

const hacker2 = "Christian";

const greeting2 =`The navigators name is ${hacker2}`;

console.log(greeting2);


if (hacker1.length >= hacker2.length){console.log("The driver has the longest name, it has XX characters.")}
else if (hacker2.length >= hacker1.length){console.log("It seems that the navigator has the longest name, it has XX characters.")}
else if (hacker2.length === hacker1.length){console.log('What?! You both have the same name?')}




const last = hacker1.length - 1; 
 
for (let i = 0; i <= last; i++) {
  const char = hacker1[i];
  console.log(char);
}


const index = hacker2.length - 1; 
 
for (let i = index; i >= 0; i--) {
  const char = hacker2[i];
  console.log(char);
}

hacker1.localeCompare(hacker2)






const compareValue = hacker1.localeCompare(hacker2)


if(compareValue < 0) {
    console.log("The drivers name goes first");
} else if (compareValue > 0) {
    console.log("Yo, the navigator goes first, definitely.");
} else {
    console.log("What?! You both have the same name?");
}
