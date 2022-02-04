console.log('hello');


const divs = document.querySelectorAll('div');
for (const div of divs) {
    div.classList.add("line-numbers");
}

const LANGUAGE = "python";

const preElements = document.getElementsByTagName('pre');
const codeElements = document.getElementsByTagName("code"); 

console.log(preElements);

const detectLang = (lang) => {
    if (lang.includes("#include")){
        return "cpp";
    }
    
    else if (lang.includes("String[]")){
        return "java";
    }

    return "python";
}

console.log(codeElements);

for (const preElement of preElements) {
    if (!preElement.classList.contains("prettyprint")) {continue;}
    
    const codeElement = document.createElement("code");
    preElement.classList.add("line-numbers");
    
    const innerCode = preElement.innerHTML;
    preElement.innerHTML = "";
    codeElement.innerHTML = innerCode;

    const language = detectLang(innerCode);
    preElement.classList.add(`language-${language}`);
    preElement.classList.add("line-numbers");
    preElement.appendChild(codeElement);
    console.log(codeElement);
}
