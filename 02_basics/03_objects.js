// Singleton : You create any object with a constructor not with a literal , a singleton is created. object.create : This is called a constructor method.Within this singleton is created.

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Aryan",
    "full_name": "Aryan Veen",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "aryanveen05@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full_name"])
console.log(JsUser[mySym])