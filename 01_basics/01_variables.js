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
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])