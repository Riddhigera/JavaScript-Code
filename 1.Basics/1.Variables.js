const accountID=14453
let accountEmail="abc@gmail.com"
var accountPassword="12345"
accountCity="Himachal"
let accountState;

// accountID=2 change in const is not allowed
accountEmail="hd@gmail.com"
accountPassword="234234"
accountCity="jaipur"

/*prefer not to use var because of issue in block scope and functional scope*/

console.log(accountID);
console.table([accountID,accountEmail,accountPassword,accountCity,accountState])