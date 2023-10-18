function convertTextToBinary() {
    const inputText = document.getElementById("inputText").value;
    const binaryOutput = document.getElementById("binaryOutput");

    if (!inputText) {
        binaryOutput.innerText = "Please enter text to convert.";
        return;
    }

    const binaryArray = [];

    for (let i = 0; i < inputText.length; i++) {
        const charCode = inputText.charCodeAt(i);
        const binaryString = charCode.toString(2).padStart(8, '0'); // Convert to binary and pad to 8 bits
        binaryArray.push(binaryString);
    }

    binaryOutput.innerText = "Binary Output: " + binaryArray.join(" ");
}
