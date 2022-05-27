document.write("Break")
document.write("<br>")
// break will (stop) all the value after the break condition not execute further code
for (let counter = 1; counter <= 10; counter++) {
    if (counter == 5) {
        break
    }
    document.write(counter);
    document.write("<br>");
}

// continue will (neglect) same line but  execute further code
document.write("Continue")
document.write("<br>")
for (let counter1 = 1; counter1 <= 10; counter1++) {
    if (counter1 == 5) {
        continue
    }
    document.write(counter1);
    document.write("<br>");
}

// continue will (neglect) same line but  execute further code
document.write("Nested loop")
document.write("<br>")
for (let counter3 = 1; counter3 <= 10; counter3++) {
    document.write(counter3);
    document.write("<br>");

    for (let counter4 = 0; counter4 <= 3; counter4++) {
        document.write("Nested loop")
        document.write("<br>");   
    }

}