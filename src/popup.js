// Popup script
document.getElementById('openReader').addEventListener('click', () => {
  // Open the reader in a new tab
  const readerUrl = chrome.runtime.getURL('src/reader.html');
  console.log('Opening reader at:', readerUrl);
  chrome.tabs.create({ url: readerUrl }, (tab) => {
    if (chrome.runtime.lastError) {
      console.error('Error opening tab:', chrome.runtime.lastError);
    } else {
      console.log('Tab opened successfully:', tab);
    }
  });
});
