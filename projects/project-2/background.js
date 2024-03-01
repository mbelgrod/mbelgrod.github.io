// background.js
chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: injectIndex
    });
  });
  
  function injectIndex() {
    const indexHtml = document.createElement('iframe');
    indexHtml.src = chrome.runtime.getURL('index.html');
    indexHtml.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: none;
      z-index: 9999;
    `;
    document.body.appendChild(indexHtml);
  }
  