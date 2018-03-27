function setUpContextMenus() {
	chrome.contextMenus.create({
	  title: "Lizensen für %s",
	  type: 'normal',
	  id: "lc",
	  documentUrlPatterns: [ "https://*/*","http://*/*"],
	  contexts: ['selection']
	});

    chrome.contextMenus.create({
      title: "Contracts & Warranties für %s",
      type: 'normal',
      id: "cw",
      documentUrlPatterns: [ "https://*/*","http://*/*"],
      contexts: ['selection']
    });
	chrome.contextMenus.create({
      title: "Stack Visualisierung für %s",
      type: 'normal',
      id: "sv",
      documentUrlPatterns: [ "https://*/*","http://*/*"],
      contexts: ['selection']
    });

}
chrome.runtime.onInstalled.addListener(function() {
  setUpContextMenus();
});

chrome.contextMenus.onClicked.addListener(function(itemData) {
	if (itemData.menuItemId == "lc"){	//License
		chrome.tabs.executeScript( {
			code: "window.getSelection().toString();"
		}, function(selection) {
			window.open("https://mysupport.netapp.com/eservice/protocolSystemSearch.do?moduleName=PROTOCOL&searchType=NA_WQS_PRODUCT&value="+selection[0]);
		});
	}
	if (itemData.menuItemId == "cw"){	//ContractsWarranties
		chrome.tabs.executeScript( {
			code: "window.getSelection().toString();"
		}, function(selection) {
			window.open("https://mysupport.netapp.com/eservice/serviceSystemSearch.do?moduleName=SERVICE&searchType=NA_WQS_PRODUCT&value="+selection[0]);
		});
	}
	if (itemData.menuItemId == "sv"){	//StackVisualisation
		chrome.tabs.executeScript( {
			code: "window.getSelection().toString();"
		}, function(selection) {
			window.open("https://mysupport.netapp.com/clusterview/?SerialNo="+selection[0]);
		});
	}
});

