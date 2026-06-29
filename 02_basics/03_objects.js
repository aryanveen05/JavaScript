// Singleton : You create any object with a constructor not with a literal , a singleton is created. object.create : This is called a constructor method.Within this singleton is created.

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Aryan",
    "full_name": "Aryan Veen",
    [mySym]: "mykey1", //Syntax [] for accessing symbol
    age: 18,
    location: "Jaipur",
    email: "aryanveen05@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full_name"])
// console.log(JsUser[mySym])

JsUser.email = "aryan@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "aryan@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function()
{
    console.log("Hello JS User");
}

JsUser.greetingTwo = function()
{
    console.log(`Hello , my name is ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());