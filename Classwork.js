var btn = document.getElementsByName('button');

btn.onclick = function () {
    var num = 0;
    while (num >= 0) {
        var userInput = prompt(input("Enter a word"));
        if (userInput !== "n") {
            prompt("You had", num, "inputs!");
            break;
        } else {
            num += 1;
        }

    }
}

