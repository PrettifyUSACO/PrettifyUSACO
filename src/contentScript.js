let mode = "dark"; 

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
