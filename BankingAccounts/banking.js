



window.onload = function () {
    document.getElementById("create").onclick = acc.account;
    var accountInfoList = [];

};
var createAccount = function () {
    var accountName;
    var balance;
    return {
        account : function () {
            accountName = document.getElementById("account").value;
            balance = document.getElementById("deposit").value;
           
        },
        addToList : function () {
            accountInfoList[accountInfoList.length] = createAccount.account();
            this.accountName = acct;
            this.balance = bal;
            document.getElementById("textarea").value += "Account name: " + acct + " Balance: " + bal + "\n";
            console.log("Hiiiiiiiiiiiiii");

        }
    }

};

var acc = createAccount();
acc.account();


