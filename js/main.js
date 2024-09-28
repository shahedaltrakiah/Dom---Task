function makeBold() {
    let textarea = document.getElementById("textarea");
    textarea.style.fontWeight = textarea.style.fontWeight === "bold" ? "normal" : "bold";
}

function makeItalic() {
    let textarea = document.getElementById("textarea");
    textarea.style.fontStyle = textarea.style.fontStyle === "italic" ? "normal" : "italic";
}

function alignText(alignment) {
    let textarea = document.getElementById("textarea");
    textarea.style.textAlign = alignment;
}

function makeUpperCase() {
    let textarea = document.getElementById("textarea");
    textarea.value = textarea.value.toUpperCase();
}

function makeLowerCase() {
    let textarea = document.getElementById("textarea");
    textarea.value = textarea.value.toLowerCase();
}

function makeCapitalized() {
    let textarea = document.getElementById("textarea");
    textarea.value = textarea.value.replace(/\b\w/g, function (char) {
        return char.toUpperCase();
    });
}

function clearText() {
    let textarea = document.getElementById("textarea");
    textarea.value = "";
}

function changeFontColor() {
    let textarea = document.getElementById("textarea");
    let fontColor = document.getElementById("fontColor").value;
    textarea.style.color = fontColor;
}

function changeBgColor() {
    let textarea = document.getElementById("textarea");
    let bgColor = document.getElementById("bgColor").value;
    textarea.style.backgroundColor = bgColor;
}

function changeFontFamily() {
    let textarea = document.getElementById("textarea");
    let fontFamily = document.getElementById("fontFamily").value;
    textarea.style.fontFamily = fontFamily;
}

function changeFontSize() {
    let textarea = document.getElementById("textarea");
    let fontSize = document.getElementById("fontSize").value;
    textarea.style.fontSize = fontSize;
}

function printText() {
    let textareaContent = document.getElementById("textarea").value;
    let newWindow = window.open('','','height=600,width=800');
    newWindow.document.write('<html><head><title>Print</title></head>');
    newWindow.document.write('<body><pre>' + textareaContent + '</pre></body></html>');
    newWindow.document.close();
    newWindow.print();
}
