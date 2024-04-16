const accountId = 110923 // locked value
let accountEmail = "saanvimangla@gmail.com"
var accountPassword = "12345"
accountCity = "Delhi"
let accountState // undefined

// accountId = 2 -> not allowed

accountEmail = "akhil@gmail.com"
accountPassword = "saanvi"
accountCity = "Saanvi's heart"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);


