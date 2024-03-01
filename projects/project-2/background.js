// background.js

chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: injectIndex
    });
  });
  
  function injectIndex() {
    // Load your font
    const fontUrl = chrome.runtime.getURL('Save.ttf');
    
    // Apply the font styles
    const style = document.createElement('style');
    style.textContent = `
    @font-face {
        font-family: "Save";
        src: url('Save.ttf') format('truetype');
    }
  
      body {
        font-family: 'Save', sans-serif;
      }
    `;
    document.head.appendChild(style);
  
    // Create and append the iframe
    const indexHtml = document.createElement('iframe');
    indexHtml.src = chrome.runtime.getURL('index.html');
    indexHtml.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: none;
      z-index: 1000;
    `;
    document.body.appendChild(indexHtml);
  }
  