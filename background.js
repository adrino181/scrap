
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){


	if(request.todo == "showPageAction"){
		chrome.tabs.query({active:true, currentWindow: true}, function(tabs){
			chrome.pageAction.show(tabs[0].id);
			console.log(tabs[0].id);
		});
	}

	
});


chrome.pageAction.onClicked.addListener(function(request, sender , sendResponse)
    {

    	 chrome.tabs.executeScript(null, {
          		"file" : "selector.js" },function(result){
          			console.log('selector script is running');
          		});
         
	});
	