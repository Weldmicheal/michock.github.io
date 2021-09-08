
(function () {

    "use strict";
    const accountCreator = (function () {
        let accountName;
        let balance;
        return {
            account: function (name, deposit) {
                accountName = name;
                balance = deposit;

                return { name: accountName, balance: balance };

            }
        }
    })();

    const accountInfoList = [];


    function createAccounts() {

        let acct = accountCreator.account(document.getElementById("account").value, document.getElementById("deposit").value);
        accountInfoList.push(acct);
        document.getElementById("textarea").value = "";

        for (let accts of accountInfoList) {

            document.getElementById("textarea").value += "Account name: " + accts.name  + " Balance: " + accts.balance + "\n";

        }
    }

    var rudyTimer = (function () {
        let timer = null; // stores ID of interval timer 
        return function delayMsg2() {
            if (timer === null) {
                timer = setInterval(rudy, 1000);
            } else {
                clearInterval(timer);
                timer = null;
            }
        }
    })();

    function rudy() { // called each time the timer goes off
        document.getElementById("output").innerHTML += " Rudy!";
    }

    window.onload = function () {
        document.getElementById("create").onclick = createAccounts;
        document.getElementById("btn").onclick = rudyTimer;
    }

})();
