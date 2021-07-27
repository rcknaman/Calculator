var tabs = document.getElementById('tabs-container');
var scr = document.querySelector('#op-scr-para');
var y = "";
var btnarr = document.getElementsByTagName("button");
var op1 = "";
var op2 = "";
var curroperand = "op1";
var oper = "";
var currtext = op1 + oper + op2;
scr.innerHTML = "Hey there!! welcome to my cute calci project :)";
for (var i = 0; i < btnarr.length; i++) {
    btnarr[i].addEventListener('click', function() {
        var text = this.value;
        if (y + parseFloat(text) == "NaN") {
            if (text == "=") {
                var ans;
                if (currtext == "") {
                    ans = "";

                } else if (oper == "/" && op2 == "0") {
                    ans = "Error";
                } else if (oper == "%") {
                    if (op2 != "") {
                        ans = eval(op1 + "/" + op2 + "*" + "100");
                        op1 = ans;
                        op2 = "";
                        currtext = ans;
                    } else {
                        ans = eval(op1 + "/" + "100");
                    }
                } else if (op2 == "") {

                } else {
                    ans = eval(op1 + oper + op2);
                    op1 = ans;
                    currtext = ans;
                    op2 = "";
                    oper = "";
                    curroperand = "op1";
                }
                scr.innerHTML = currtext;
                currtext = "";
            } else if (text == "AC") {
                scr.innerHTML = "";
                op1 = "";
                op2 = "";
                oper = "";
                currtext = "";
                curroperand = "op1";
            } else if (text == "+/-") {
                if (curroperand == "op1") {
                    op1 = "" + eval(-1 + "*" + op1);
                } else if (curroperand == "op2") {
                    op2 = "" + eval(-1 + "*" + op2);
                    console.log(op2);

                }
                currtext = op1 + oper + op2;


                scr.innerHTML = currtext;

            } else if (text == ".") {
                if (curroperand == "op1") {
                    op1 = op1 + ".";
                } else if (curroperand == "op2") {
                    op2 = op2 + ".";
                }
                currtext = op1 + oper + op2;
                scr.innerHTML = currtext;

            } else {
                oper = "" + text;
                currtext = op1 + oper + op2;
                scr.innerHTML = currtext;
                curroperand = "op2";
            }

        }
        if (y + parseFloat(text) !== "NaN") {
            if (curroperand == "op1") {
                op1 = op1 + text;
            } else {
                op2 = op2 + text;
            }
            currtext = op1 + oper + op2;
            scr.innerHTML = currtext;
            console.log(op1);
        }
    });
    var scrcontain = document.getElementById('output-screen');
    btnarr[i].addEventListener('click', function() {
        scrcontain.style.fontSize = "40px";

    })
}