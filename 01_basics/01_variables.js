const accountId = 144521
let accountEmail = "aryanveen05@gmail.com"
var accountPassword = "12345"
accountCity = "Dehradun"
let accountState;

//accountId= 152341

accountEmail = "av@gmail.com"
accountPassword = "541242"
accountCity="Rishikesh"

console.log(accountId);

/*
Prefer not to use var because:
1. var is function-scoped, not block-scoped.
2. var can be redeclared, which may cause bugs.
3. let and const provide better scope control and safer code.
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])