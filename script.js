window.addEventListener("load", function () {
    document
        .getElementById("sampleeditor")
        .setAttribute("contenteditable", "true");
    // document
    //     .getElementById("sampleeditor2")
    //     .setAttribute("contenteditable", "true");
});

function format(command, value) {
    document.execCommand(command, false, value);
}

function addSectionEndFunc() {
    document.execCommand("insertHTML", false, "||");
}
function addPageLinkFunc() {
    var pageLinkText = document.getElementById("addPageLink").value;
    // var sText = document.getSelection();
    document.execCommand(
        "insertHTML",
        false,
        `#${pageLinkText}#`
        // '<a href="' + url + '" target="_blank">' + sText + "</a>"
    );
    document.getElementById("addPageLink").value = "";
}

function addHeading(type) {
    var sText = document.getSelection();
    document.execCommand("insertHTML", false, `<${type}> ${sText} </${type}>`);
}

function A() {
    console.log("A");
}
function A() {
    console.log("B");
}
A();
