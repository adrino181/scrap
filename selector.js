(function(){
      
	var i = 0;
	var mydiv = document.createElement('DIV');
	mydiv.className = 'new_div_create'
	mydiv.innerHTML = "<h1>elements selected<span id='selected_ele'>"+i+"</span></h1>";
	document.body.prepend(mydiv);

	$('body').on('click',function(e){
	    e.preventDefault();
     	e.stopPropagation();
	    var mytag = e.target.tagName;
		
		if(mytag != 'BODY')
		{
	
		$(mytag).addClass('addcsss');
		$(mytag).each(function(event){ i++;});
	    }

		console.log('element seledted = '+ i);
	    update_elements(i);
		
	});

    
 })();


function update_elements(x)
{
	let j = document.getElementById('selected_ele');
	j.textContent=x;
}
