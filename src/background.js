// on message 
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
       chrome.storage.local.get(['darkMode'], (result) => {
           console.log(result); 
           sendResponse({darkMode: result.darkMode});
       }); 
       return true; 
    }
); 

console.log("dank");

// on installation. 
chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.local.set({darkMode: true});
    console.log("installed");
});


chrome.storage.onChanged.addListener((changes, namespace) => {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
       chrome.tabs.reload(tabs[0].id);
    });
    return true; 
})

