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

function syntaxHighlight() {
    for (const preElement of document.querySelectorAll("pre")) {
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
}

const lightOrDark = (darkMode) =>  {
    if (darkMode == true) {return "prism-dark";}
    return "prism-light"; 
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log(request.darkMode);
    console.log("value changed??");
}); 

async function injectCSS() {
    let darkMode; 
    console.log("running it");
    await new Promise((resolve) => {
        console.log("here");
        chrome.storage.local.get(['darkMode'], (result) => {
            darkMode = result.darkMode;
            resolve();
        })
    }); 

    console.log("here");
    //console.log(darkMode);
    
    const css = document.createElement("link");
    css.setAttribute("rel", "stylesheet");
    const name = lightOrDark(darkMode);
    css.setAttribute("href", chrome.runtime.getURL(`prism/${name}.css`));
    document.head.appendChild(css);

    const js = document.createElement("script");
    js.setAttribute("src", chrome.runtime.getURL(`prism/${name}.js`));
    document.head.appendChild(js);

    syntaxHighlight(); 
}

console.log("here");
injectCSS(); 