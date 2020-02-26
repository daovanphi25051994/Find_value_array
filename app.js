let arrayNumbers = [];
let textResult = "";

function showElementsOfArray() {
    textResult = "";
    for (let i = 0; i < arrayNumbers.length; i++) {
        textResult += "Element " + i + " = " + arrayNumbers[i] + "<br>";
    }
    document.getElementById("elements-array").innerHTML = textResult;
}

function addElement() {
    let value = document.getElementById("input").value;
    if (value === "") {
        return false;
    } else {
        arrayNumbers.push(value);
        value = document.getElementById("input").value = "";
    }
    showElementsOfArray();
}

function deleteElementsOfArray() {
    arrayNumbers = [];
    document.getElementById("elements-array").innerHTML = "";
}

function reverseElementsOfArray() {
    let firstIndex = 0;
    let lastIndex = arrayNumbers.length - 1;
    let bridge;
    for (let i = 0; i < (arrayNumbers.length - 1) / 2; i++) {
        bridge = arrayNumbers[firstIndex + i];
        arrayNumbers[i] = arrayNumbers[lastIndex - i]
        arrayNumbers[lastIndex - i] = bridge;
    }
    showElementsOfArray();
}

function searchElementsOfArray() {
    let enterValue = document.getElementById("input").value;
    let count = 0;
    for (let i = 0; i < arrayNumbers.length; i++) {
        if (enterValue === arrayNumbers[i]) {
            alert(arrayNumbers[i] + " co trong mang va nam o vi tri index : " + i);
            count++;
        }
    }
    if (count === 0) {
        alert(enterValue + " khong nam trong mang !!");
    }
}

