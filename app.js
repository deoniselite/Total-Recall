/* A.) Q + A
1. with the assignment operator
2. using the assignment operator
3. using the assignment operator
4. Declare is to name/specify its type. Assign is storing a specific value or the result of an 
expression
5. writing out the logic of a program using human readable syntax. Used for planning and 
organization, clarity, etc.
6. 80/20 80% understand/plan. 20% coding.
*/

// B.) Strings
let firstVariable = "Hello World";

firstVariable = 42;

let secondVariable = firstVariable;

secondVariable = "I am a string";

console.log(firstVariable);

let yourName = "John Doe";

let concatenatedString = "Hello, my name is " + yourName;

console.log(concatenatedString);

// C.) Booleans
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a < b); 
console.log(c > d); 
console.log('Name' === 'Name'); 
console.log(true || false); 
console.log(false || false || false || false || false || true); 
console.log(!(true) && false); 
console.log(e === 'Kevin'); 
console.log(a !== b && b !== c); 
console.log(a === a + d); 
console.log(Number(48) == '48'); 

// D.) The Farm
let animal = "cow";

if (animal === "cow") {
  console.log("mooooo");
} else {
  console.log("Hey! You're not a cow.");
}

// E.) Drivers ED
let age = 18; 

if (age >= 16) {
  console.log("Here are the keys!");
} else {
  console.log("Sorry, you're too young.");
}

// II Loops A.) The Basics
for (let i = 0; i <= 10; i++) {
    console.log(i);
  }

  for (let i = 10; i <= 400; i++) {
    console.log(i);
  }

  for (let i = 12; i <= 4000; i += 3) {
    console.log(i);
  }

  // B.) Get Even
  for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
      console.log(i + " <-- is an even number");
    } else {
      console.log(i);
    }
  }

  // C.) Give me Five!
  for (let i = 0; i <= 100; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      console.log("I found a " + i + ". High five!");
      console.log("I found a " + i + ". Three is a crowd.");
    } else if (i % 5 === 0) {
      console.log("I found a " + i + ". High five!");
    } else if (i % 3 === 0) {
      console.log("I found a " + i + ". Three is a crowd.");
    }
  }

  // D.) Savings Account
  let bank_account = 0;

for (let i = 1; i <= 10; i++) {
  bank_account += i;
}

console.log(bank_account);

let bank_Account = 0;

for (let i = 1; i <= 100; i++) {
  bank_account += i * 2;
}

console.log(bank_account);

// III. Arrays & Control Flow  A.) Talk About It
/* 1. The things in the array are called elements
2. The arrays garuntee things will be in order
3. A real life application of arrays would be a playlist, or shopping list */

// Easy Does it
let quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "In the midst of chaos, there is also opportunity. - Sun Tzu",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill"
  ];
  
  console.log(quotes);
  
// Accessing Elements
// 1. To access the first element use the index of '0'
// 2. To access the third element I would use index '2'

//Change Values
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];


ourClass[4] = "Octocat";

ourClass.push("Cloud City");

console.log(ourClass);

// Mix it Up
const myArray = [5, 10, 500, 20];

myArray.push("Aegon");

myArray.push("OpenAI");

myArray.shift();

myArray.unshift("Bob Marley");

myArray.pop();

myArray.reverse();

console.log(myArray);

//Biggie Smalls
const number = 75; 

if (number < 100) {
  console.log("little number");
} else {
  console.log("big number");
}

//Monkey in the Middle
const Number = 7; 

if (number < 5) {
  console.log("little number");
} else if (number > 10) {
  console.log("big number");
} else {
  console.log("monkey");
}

//Whats in Your Closet?
const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "Per Scholas hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  
  const thomsCloset = [
    [
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],
    [
      "grey jeans",
      "jeans",
      "PJs"
    ],
    [
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];
  
  // Log Kristyn's outfit
  console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!");
  
  // Add "raybans" to Kristyn's closet
  kristynsCloset.push("raybans");
  
  // Modify the item in Kristyn's closet
  kristynsCloset[5] = "stained knit hat";
  
  // Create an outfit for Thom
  const thomShirt = thomsCloset[0][0];
  const thomPants = thomsCloset[1][1];
  const thomAccessory = thomsCloset[2][2];
  
  // Log Thom's outfit
  console.log("Thom is looking fierce in a " + thomShirt + ", " + thomPants + ", and " + thomAccessory + "!");
  
  // Modify Thom's PJ pants to "Footie Pajamas"
  thomsCloset[1][2] = "Footie Pajamas";

  // Functions Print Greeting
  const greeting = printGreeting("John");
  console.log(greeting); // Output: Hello, John! Welcome!

  // print Cool
  function printCool(name) {
    console.log(name + " is cool.");
  }
  printCool("John");
  
 //Calculate Cube
 function calculateCube(sideLength) {
    const volume = sideLength ** 3;
    console.log("The volume of a cube with side length " + sideLength + " is " + volume);
  }
  calculateCube(5);
  
  //isVowel
  function isVowel(character) {
    const lowercaseChar = character.toLowerCase();
    return lowercaseChar === 'a' || lowercaseChar === 'e' || lowercaseChar === 'i' || lowercaseChar === 'o' || lowercaseChar === 'u';
  }
  console.log(isVowel('A')); 
  console.log(isVowel('b')); 
  console.log(isVowel('e')); 

  //getMultipleLengths
  function getMultipleLengths(strings) {
    const lengths = [];
    for (let i = 0; i < strings.length; i++) {
      lengths.push(strings[i].length);
    }
    return lengths;
  }
  console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));
  
  //maxOfThree
  function maxOfThree(num1, num2, num3) {
    return Math.max(num1, num2, num3);
  }
  console.log(maxOfThree(6, 9, 1));
  
  //printLongestWord
  function printLongestWord(words) {
    let longestWord = "";
    
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > longestWord.length) {
        longestWord = words[i];
      }
    }
    
    return longestWord;
  }
  console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));
  
   //Make a user object
   const user = {
    name: "John Doe",
    email: "johndoe@example.com",
    age: 30,
    purchased: []
  };
  console.log(user.name); 
  console.log(user.email); 
  console.log(user.age); 
  console.log(user.purchased); 
     
  //update the user
  const updatedUser = {
    ...user,
    email: "newemail@example.com"
  };
  
  console.log(updatedUser.email);
  const updateduser = {
    ...user,
    age: user.age++
  };
  
  console.log(updatedUser.age); // Output: updated age value
  
   //Adding keys and values 
   const updated_user = {
    ...user,
    location: "New York"
  };
  
  console.log(updatedUser.location); // Output: "New York"
     
  //Shopaholic
  const updatedUser = {
    ...user,
    purchased: [...user.purchased]
  };
  
  updatedUser.purchased.push("carbohydrates");
  updatedUser.purchased.push("peace of mind");
  updatedUser.purchased.push("Merino jodhpurs");
  
  console.log(updatedUser.purchased[2]); // Output: "Merino jodhpurs"

  //Object within an object
  user.friend = {
    name: "Grace Hopper",
    age: 85,
    location: "New York",
    purchased: []
  };
  
  console.log(user.friend.name); // Output: "Grace Hopper"
  console.log(user.friend.location); // Output: "New York"
  
  user.friend.age = 55;
  
  user.friend.purchased.push("The One Ring");
  user.friend.purchased.push("A latte");
  
  console.log(user.friend.purchased[1]); // Output: "A latte"

  //loops
  for (let i = 0; i < user.purchased.length; i++) {
    console.log(user.purchased[i]);
  }
  for (let i = 0; i < user.friend.purchased.length; i++) {
    console.log(user.friend.purchased[i]);
  }

  
  function updateUser() {
    user.age += 1;
    user.name = user.name.toUpperCase();
  }
  function oldAndLoud(person) {
    person.age += 1;
    person.name = person.name.toUpperCase();
  }
  oldAndLoud(user);
