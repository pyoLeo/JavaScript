<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>

<!-- jQuery -->
<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>

<!-- fontIconPicker JS -->
<script type="text/javascript" src="fontIconPicker/js/jquery.fonticonpicker.min.js"></script>

<!-- fontIconPicker core CSS -->
<link rel="stylesheet" type="text/css" href="fontIconPicker/css/base/jquery.fonticonpicker.min.css" />

<!-- required default theme -->
<link rel="stylesheet" type="text/css" href="fontIconPicker/css/themes/grey-theme/jquery.fonticonpicker.grey.min.css" />

</head>
<script type="text/javascript">
	$(document).ready(function(){
		var data;
		var test = {};
		var icon = "";
		$.ajax({
			type: "get",
			url: "tags.json",
			dataType: "json",
			async: false,
			success:function(result) {
				data = result;
			}
		});
		$.each(data, function(key, value){
			test[key] = data[key];
			$.each(value, function(k, v){
				icon = "ri-" + k + "-line";	
				test[key].value.push(icon);
				if(test[key] != 'Editor') {
					icon = "ri-" + k + "-fill";	
					test[key].push(icon);
				}
			})
		})
		$('#iconPicker').fontIconPicker({
			source: test,
			emptyIcon: false,
			hasSearch: false
		});
	});
</script>
<body>
<div id="iconPicker" ></div>
</body>
</html>