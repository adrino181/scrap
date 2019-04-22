const myarr = {};
(function(){
	var i = 0;
	var mydiv = document.createElement('DIV');
	mydiv.className = 'new_div_create try_dis'
	mydiv.innerHTML = "<h1>elements selected  <span id='selected_ele'>"+i+"</span></h1>"+"<button id='scrap_reset' class = 'try_dis'>reset</button><button id='scrap_data' class = 'try_dis'>Scrap</button><button class = 'try_dis'>close</button>";
	document.body.prepend(mydiv);
	
	$("body").on('click',function(e){
	    e.preventDefault();
     	e.stopPropagation();
	    var myEleClass = e.target.className;
	   	// to make css and disable the click on the div "not working properly" 
	    if(myEleClass == 'try_dis' || myEleClass == 'new_div_create try_dis')
	    {
	      return;
	    }       
	   
        selector_data(e,myarr);
     	
	});

    
 })();


$('#scrap_reset').on('click',function(){
    update_elements('0');
 });


function update_elements(x)
{
	let j = document.getElementById('selected_ele');
	j.textContent=x;
}



function selector_data(ev,arr)
{
  
  let myvar = ev.target.tagName;
  let count = 0;

  if(myvar == 'DIV'){
  	return;
  }
  else{
  if(myvar == 'A' && arr){
  	let param = {
  		'data': [{
  			'tag_name':myvar,
  			'text': []
  		}]
  	}
    arr.push(param);
    $(myvar).each(function(){
       count++;
       let dummy_text = '{';
       dummy_text += ','+$(this).text();
       console.log(arr);

    });
    update_elements(count);
    }
  }
  /*
  if(myvar == 'SPAN'){
    console.log('this is span do something');
  }

  if(myvar == 'IMG'){
    console.log('this is img do something');
  }

  if(myvar == 'H1'){
    console.log('this is H1 do something');
  }
 */
   
}