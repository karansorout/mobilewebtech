 $(document).ready(function() {
 
	/*Load favorite restaurant by default*/
	defaultload();

	/*Get Restaurants by Location*/
 /*To do:
	- Link class="ui-btn-active" on click
	- Get Restaurant list
 */
	$("#loc_restaurants").on("click", FetchRestsList_loc() {
		function fetchRestaurantList() {
			var url = "http://169e0f0fccae429ab6894205c7be5c42.cloudapp.net/RestaurantAppService.svc/RestaurantList?lat=23.0&lon=23.0&ts=0";
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
				} else if (e == 'parsererror') {
					//alert('Error.\nParsing JSON Request failed.');
	 
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
	});


function RestaurantListReceived(data) {
    RestaurantList = data;
    var html = '';
    $.each(data, function (key, val) {
        html += '<li id=' + val.Id + '><a href="#"><h3>' + val.Name + '</h3><p>' + val.Address + ', ' + val.City + '</p></a></li>'
    });
    IsListRefereshed = 1;
    $('#ulRestaurantList').append($(html));
    $('#ulRestaurantList').trigger('create');
    $('#ulRestaurantList').listview('refresh');
}


	/*Get Restaurants by Cousine*/
	$('#cou_restaurants').click(function() {
		alert('Cousine based search under cunstruction');
		});
		
	/*Get Restaurants Offering Student Discount*/
	/*To do:
	- Link class="ui-btn-active" on click
	- Get Restaurant list
	- Order by proximity/nearest first
	*/	
	$('#stu_restaurants').on("click", function() {
		alert('Search of student concession restaurants is under cunstruction');
		});
		
});/*--Document Ready--*/
 
/*********PreLoad**********/
	/*Load Favorite Restaurants by default*/
	/*To do:
	- Link class="ui-btn-active" on load
	- 
	*/ 
	function defaultload() {
		/*attach class line here, focus tab*/
		
		$("#loc_restaurants").on("click", FetchRestsList_loc() {
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
				} else if (e == 'parsererror') {
					//alert('Error.\nParsing JSON Request failed.');
	 
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
	});
	
	function RestaurantListReceived() {
	alert('data recieved');
    }


/*
function RestaurantListReceived(data) {
    RestaurantList = data;
    var html = '';
    $.each(data, function (key, val) {
        html += '<li id=' + val.Id + '><a href="#"><h3>' + val.Name + '</h3><p>' + val.Address + ', ' + val.City + '</p></a></li>'
    });
    IsListRefereshed = 1;
    $('#ulRestaurantList').append($(html));
    $('#ulRestaurantList').trigger('create');
    $('#ulRestaurantList').listview('refresh');
}
*/	}


