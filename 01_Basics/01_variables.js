const accountId=300305
let accountEmail="shibayan30@gmail.com"
var accountPassword="123456"
accountCity="Kolkata"
let accountState
console.log(accountId,accountEmail,accountPassword,accountCity)
accountEmail="ab@ab.com"
accountPassword="654321"
accountCity="Chennai"
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

/*
Prefer not to use var
because of issue in block scope and functional scope
*/
