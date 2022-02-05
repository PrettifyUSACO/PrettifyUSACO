/*
<label class="toggle">
        <input class="toggle-checkbox" type="checkbox">
        <div class="toggle-switch"></div>
        <span class="toggle-label"> Dark Mode </span>
    </label>
*/

const label = document.createElement("label", {class: "toggle"});
const input = document.createElement("input", {class: "toggle-checkbox", type: "checkbox"});
const div = document.createElement("div", {class: "toggle-switch"});
const span = document.createElement("span", {class: "toggle-label"});

async function adjustBox() {
    chrome.storage.sync.get(['darkMode'], (result) => {
        if (result.darkMode == true) {
            input.checked = true;
        }

        else {
            input.checked = false;
        }

        label.appendChild(input);
        label.appendChild(div);
        label.appendChild(span);
        document.body.appendChild(label); // added the label here 
    })
}

