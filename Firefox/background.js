function onCreated() {
  if (browser.runtime.lastError) {
    console.log(`Error: ${browser.runtime.lastError}`);
  } else {
    console.log("Item created successfully");
  }
}

function onError(error) {
  console.log(`Error: ${error}`);
}

browser.menus.create({
  id: "none",
  type: "normal",
  title: "Markiere S/N für mehr Optionen",
  contexts: ["all"]
}, onCreated);
browser.menus.create({
  id: "separator-1",
  type: "separator",
  contexts: ["selection"]
}, onCreated);
browser.menus.create({
  id: "search-license",
  title: "Lizensen für %s",
  contexts: ["selection"]
}, onCreated);

browser.menus.create({
  id: "search-Contracts",
  title: "Contracts & Warranties für %s",
  contexts: ["selection"]
}, onCreated);

browser.menus.create({
  id: "stack-visual",
  title: "Stack Visualisierung für %s",
  contexts: ["selection"]
}, onCreated);

browser.menus.create({
  id: "tools-menu",
  title: "Platzhalter",
  contexts: ["tools_menu"],
}, onCreated);


browser.menus.onClicked.addListener((info, tab) => {
  switch (info.menuItemId) {
    case "search-license":
	  var creating = browser.tabs.create({
		url:"https://mysupport.netapp.com/eservice/protocolSystemSearch.do?moduleName=PROTOCOL&searchType=NA_WQS_PRODUCT&value="+info.selectionText
	  });
      break;
	case "search-Contracts":
	  var creating = browser.tabs.create({
		url:"https://mysupport.netapp.com/eservice/serviceSystemSearch.do?moduleName=SERVICE&searchType=NA_WQS_PRODUCT&value="+info.selectionText
	  });
      break;
	  case "stack-visual":
	  var creating = browser.tabs.create({
		url:"https://mysupport.netapp.com/clusterview/?SerialNo="+info.selectionText
	  });
      break;
	case "none":
		break;
  }
});