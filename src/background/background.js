chrome.action.onClicked.addListener(currentTab => {
  takeSnapshot().then(imgBase64 => {
      presentSnapshot(imgBase64, currentTab)
    }, error => {
      console.error(error);
    })
});

function takeSnapshot (){
  return chrome.tabs.captureVisibleTab();
}

function presentSnapshot(imgBase64, currentTab){
  chrome.tabs.create({url: 'index.html?payload=' + imgBase64+"&height="+currentTab.height+"&width="+currentTab.width});
}