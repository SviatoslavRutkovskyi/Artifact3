// JavaScript source code
// var rHeight =5;
// var colorEven = "orange";
// var colorOdd = "black";
// var symbol ="*";

function createRhombus(pHeight, pColorEven, pColorOdd, pSymbol, pPattern) {

    upLeft(pHeight, pColorEven, pColorOdd, pSymbol, pPattern);
    upRight(pHeight, pColorEven, pColorOdd, pSymbol, pPattern);
    downLeft(pHeight, pColorEven, pColorOdd, pSymbol, pPattern);
    downRight(pHeight, pColorEven, pColorOdd, pSymbol, pPattern);
 
}

function upRight(pHeight, pColorEven, pColorOdd, pSymbol, pPattern) {
    var colorEven = pColorEven;
    var colorOdd = pColorOdd;
    var rLine = "";
    for (i = 0; i < pHeight; i++) {
        rLine += "<p>";
        //Create each line on the Rhombus
        if (pPattern == "false") {
            if (i % 2) {
                colorEven = pColorOdd;
                colorOdd = pColorEven;
            }
            else {
                colorEven = pColorEven;
                colorOdd = pColorOdd;
            }
        }
        for (j = 0; j <= i; j++) {

            //Is the position even or odd so we change the color
            if (j % 2)
                //even
                rLine += "<span style='color:" + colorEven + ";'>" + pSymbol + "</span>";
                
            else
                //odd
                rLine += "<span style='color:" + colorOdd + ";'>" + pSymbol + "</span>";
                

        }
        rLine += "</p>";
        // console.log(rLine);

    }

    document.getElementById("upRight").innerHTML = rLine;
}
function upLeft(pHeight, pColorEven, pColorOdd, pSymbol, pPattern) {
    var colorEven = pColorEven;
    var colorOdd = pColorOdd;
    var rLine = "";
    for (i = 0; i < pHeight; i++) {
        rLine += "<p>";
        //Create each line on the Rhombus
        for (k = 1; k < pHeight - i; k++) {
            rLine += "<span style='color:#ffffff;'>" + pSymbol + "</span>";
        }
        if (pPattern == "true") {
            if (i % 2) {
                colorEven = pColorOdd;
                colorOdd = pColorEven;
            }
            else {
                colorEven = pColorEven;
                colorOdd = pColorOdd;
            }
        }
        
        for (j = 0; j <= i; j++) {

            //Is the position even or odd so we change the color
            if (j % 2)
                //even
                rLine += "<span style='color:" + colorEven + ";'>" + pSymbol + "</span>";
            else
                //odd
                rLine += "<span style='color:" + colorOdd + ";'>" + pSymbol + "</span>";

        }
        rLine += "<span style='color:#ffffff;'>" + pSymbol + "</span>";
        rLine += "</p>";
        // console.log(rLine);

    }

    document.getElementById("upLeft").innerHTML = rLine;
}

function downRight(pHeight, pColorEven, pColorOdd, pSymbol, pPattern) {
    var colorEven = pColorEven;
    var colorOdd = pColorOdd;
    var rLine = "";
    for (i = pHeight; i > 0; i--) {
        rLine += "<p>";
        //Create each line on the Rhombus
        if (pPattern == "false") {
            if (i % 2) {
                colorEven = pColorOdd;
                colorOdd = pColorEven;
            }
            else {
                colorEven = pColorEven;
                colorOdd = pColorOdd;
            }
        }
        for (j = 0; j < i; j++) {

            //Is the position even or odd so we change the color
            if (j % 2)
                //even
                
                rLine += "<span style='color:" + colorOdd + ";'>" + pSymbol + "</span>";
            else
                //odd
                rLine += "<span style='color:" + colorEven + ";'>" + pSymbol + "</span>";

        }
        rLine += "</p>";
        // console.log(rLine);

    }

    document.getElementById("downRight").innerHTML = rLine;
}
function downLeft(pHeight, pColorEven, pColorOdd, pSymbol, pPattern) {
    var colorEven = pColorEven;
    var colorOdd = pColorOdd;
    var rLine = "";
    for (i = pHeight; i > 0; i--) {
        rLine += "<p>";
        //Create each line on the Rhombus
        for (k = 0; k < pHeight - i; k++) {
            rLine += "<span style='color:#ffffff;'>" + pSymbol + "</span>";
        }
        if (pPattern == "true") {
            if (i % 2) {
                colorEven = pColorOdd;
                colorOdd = pColorEven;
            }
            else {
                colorEven = pColorEven;
                colorOdd = pColorOdd;
            }
        }
        for (j = 0; j < i; j++) {

            //Is the position even or odd so we change the color

            if (j % 2)
                //even
                rLine += "<span style='color:" + colorEven + ";'>" + pSymbol + "</span>";
            else
                //odd
                rLine += "<span style='color:" + colorOdd + ";'>" + pSymbol + "</span>";

        }
        rLine += "<span style='color:#ffffff;'>" + pSymbol + "</span>";
        rLine += "</p>";
        // console.log(rLine);

    }

    document.getElementById("downLeft").innerHTML = rLine;
}