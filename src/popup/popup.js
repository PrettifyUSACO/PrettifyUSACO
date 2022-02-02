/*
<label class="toggle">
        <input class="toggle-checkbox" type="checkbox">
        <div class="toggle-switch"></div>
        <br>
        <span class="toggle-label"> Dark Mode </span>
    </label>
*/

// first create the switch. 
const h1 = document.createElement('h1');
h1.innerText = "Prettify USACO"; 

const label = document.createElement("label");
label.classList.add("toggle"); 

const input = document.createElement("input");
input.type="checkbox"; input.classList.add("toggle-checkbox"); 

const div = document.createElement("div");
div.classList.add("toggle-switch"); 

const br = document.createElement("br");

const span = document.createElement("span");
span.classList.add("toggle-label"); span.classList.add("text"); 
span.innerHTML = "Dark Mode";

console.log("adding listener");


async function adjustCheck() {
    chrome.storage.sync.get(['darkMode'], (result) => {
        console.log(result);
        if (result.darkMode == undefined) {
            chrome.storage.sync.set({darkMode: true}); 
            result.darkMode = true; 
        }

        if (result.darkMode == true) {
            input.checked = true;
        }

        else {
            input.checked = false;
        }

        input.addEventListener('change', (event) => {
            chrome.storage.sync.set({"darkMode": input.checked}); 
            // triggers message from background script? 
        })


        label.appendChild(input);
        label.appendChild(div);
        label.appendChild(br);
        label.appendChild(span);
        document.body.appendChild(h1);
        document.body.appendChild(label); // added the label here 
    })
}


adjustCheck(); 
