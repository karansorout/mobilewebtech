$(document).ready(function() {
 
	/*Load favorite restaurant by default*/
	defaultload();
}); 
/*********PreLoads**********/
	/*Load Favorite Restaurants by default*/
	/*To do:
	- Link class="ui-btn-active" on load
	- 
	*/ 
	function defaultload() {
		/*attach class line here, focus tab*/
		fetchRestaurantList();
	}

	function fetchRestaurantList() {
		var data = [{"Address":"Yliopistonkatu-5","City":"Helsinki","Id":1,"Name":"BaseCamp","Timestamp":"00-00-00-00-00-00-00-91"}, {"Address":"Yliopistonkatu-5","City":"Helsinki","Id":1,"Name":"BaseCamp","Timestamp":"00-00-00-00-00-00-00-91"}, {"Address":"Yliopistonkatu-5","City":"Helsinki","Id":1,"Name":"BaseCamp","Timestamp":"00-00-00-00-00-00-00-91"}, {"Address":"Yliopistonkatu-5","City":"Helsinki","Id":1,"Name":"BaseCamp","Timestamp":"00-00-00-00-00-00-00-91"}, {"Address":"Yliopistonkatu-5","City":"Helsinki","Id":1,"Name":"BaseCamp","Timestamp":"00-00-00-00-00-00-00-91"}, {"Address":"Yliopistonkatu-5","City":"Helsinki","Id":1,"Name":"BaseCamp","Timestamp":"00-00-00-00-00-00-00-91"}, {"Address":"Yliopistonkatu-5","City":"Helsinki","Id":1,"Name":"BaseCamp","Timestamp":"00-00-00-00-00-00-00-91"}, {"Address":"Yliopistonkatu-5","City":"Helsinki","Id":1,"Name":"BaseCamp","Timestamp":"00-00-00-00-00-00-00-91"}, {"Address":"Yliopistonkatu-5","City":"Helsinki","Id":1,"Name":"BaseCamp","Timestamp":"00-00-00-00-00-00-00-91"}, {"Address":"Yliopistonkatu-5","City":"Helsinki","Id":1,"Name":"BaseCamp","Timestamp":"00-00-00-00-00-00-00-91"}, {"Address":"Yliopistonkatu-5","City":"Helsinki","Id":1,"Name":"BaseCamp","Timestamp":"00-00-00-00-00-00-00-91"}];
		var html = '';
		$.each(data, function (key, val) {
			html += '<div data-role="collapsible" id=' + val.Id + '><h3>' + val.Name + '</h3><p>' + val.Address + ', ' + val.City + '</p></div>'
		});
		IsListRefereshed = 1;
		$('#ulRestaurantList').append($(html));
		$('#ulRestaurantList').trigger('create');
		$('#ulRestaurantList').listview('refresh');
	}


	
	
/*Get Server Data*/	
/*
	function fetchRestaurantList() {
		var url = "http://dineatable.cloudapp.net/RestaurantAppService.svc/RestaurantList?lat=0&lon=0&ts=0";
		$.ajax({
		url: url,
		jsonpCallback: "RestaurantListReceived",
		error: function (x, e) {		
			if (x.status == 0) {
			alert('You are offline!!\n Please Check Your Network.');
			} else if (x.status == 404) {
				alert('Requested URL not found.');
			} else if (x.status == 500) {
				alert('Internal Server Error.');
			} else if (e == 'timeout') {
				alert('Request Time out.');
			} else {
				alert('Unknow Error.\n' + x.responseText);
			}
		},
		type: 'GET',
		dataType: "jsonp",
		crossDomain: true
		});
	}
		
	function RestaurantListReceived(data) {
		RestaurantList = data;
		var html = '';
		$.each(data, function (key, val) {
			html += '<div id=' + val.Id + '><a href="#"><h3>' + val.Name + '</h3><p>' + val.Address + ', ' + val.City + '</p></a></div>'
		});
		IsListRefereshed = 1;
		$('#ulRestaurantList').append($(html));
		$('#ulRestaurantList').trigger('create');
		$('#ulRestaurantList').listview('refresh');
	}
*/


