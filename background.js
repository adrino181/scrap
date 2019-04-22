
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){

	if(request.todo == "showPageAction"){
		let params = {
			active:true,
			currentWindow:true
		}
		chrome.tabs.query(params, function(tabs){
			chrome.pageAction.show(tabs[0].id);
		});
	}
});


//need to toogle the icon functionality
chrome.pageAction.onClicked.addListener(function(request , sender , sendResponse)
    {
    	let params = {
			active:true,
			currentWindow:true
		}
         chrome.tabs.query(params , function(tabs){
         
         chrome.tabs.executeScript(tabs[0].id, {
          		"file" : "selector.js" },function(result){
          			console.log('selector script is running');
          		});
         


         });
    	
         
	});
	