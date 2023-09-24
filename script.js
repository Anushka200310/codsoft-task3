let numbers = document.querySelectorAll(".btn");
    let textField = document.querySelector("#display");

    // Loop through each button element in the "numbers" NodeList
    numbers.forEach(function(button) {

        // Add a click event listener to each button
        button.addEventListener("click", function() {
            const buttonText = button.textContent;
    
            if (buttonText === "=") {
                try {
                    textField.value = eval(textField.value);
                } catch (error) {
                    textField.value = "Error";
                }
            } else if (buttonText === "AC") {
                textField.value = "";
            } else if (buttonText === "Del") {
                textField.value = textField.value.slice(0, -1);
            } else if (buttonText === "√") {
                textField.value = Math.sqrt(parseFloat(textField.value));
            } else if (buttonText === "+" || buttonText === "-" || buttonText === "/" || buttonText === "*" || buttonText === "%") {
                textField.value += " " + buttonText + " ";
            } else {
                textField.value += buttonText;
            }
        });
    });