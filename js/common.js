$(function(){
	//二级导航的显示控制 
	$('#nav-jmui,#secondNav').mouseover(function(){
		$('#secondNav').show();
	});

	$('#nav-jmui,#secondNav').mouseout(function(){
		$('#secondNav').hide();
	});
	
});
