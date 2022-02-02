console.log('hello');

const divs = document.querySelectorAll('div');
for (const div of divs) {
    div.classList.add("line-numbers");
}

const LANGUAGE = "python";

const preElements = document.getElementsByTagName('pre');
const codeElements = document.getElementsByTagName("code"); 
for (const codeElement of codeElements) {
    codeElement.classList.add("language-" + LANGUAGE);
    codeElement.classList.add("line-numbers");
}

for (const preElement of preElements) {
    if (!preElement.classList.contains("prettyprint")) {continue;}
    const codeElement = document.createElement("code");
    codeElement.setAttribute("class", `language-${LANGUAGE}`);
    codeElement.innerHTML = preElement.innerHTML;
    preElement.replaceChild(codeElement, preElement.firstChild);
    preElement.classList.add(`language-${LANGUAGE}`);
    preElement.classList.add("line-numbers");
    preElement.setAttribute("tabindex", "0");

}
