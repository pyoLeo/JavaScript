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

<link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet">

</head>
<script type="text/javascript">
	$(document).ready(function(){
		var data;
		var test = {};
		var icon = "";
		$.ajax({
			type: "get",
			url: "tags.json",	//WebContent에 존재하는 tags.json 파일
			dataType: "json",
			async: false,
			success:function(result) {
				data = result;
			}
		});
		$.each(data, function(key, value){
			test[key] = [];	//test[key]를 객체로 선언한다
			$.each(value, function(k, v){
				icon = "ri-" + k + "-line";	//data의 value의 k값을 class명과 일치하게 수정한다
				test[key].push(icon);
				if(test[key] != 'Editor') {
					icon = "ri-" + k + "-fill";	
					test[key].push(icon);
				}
			})
		})
		$('#iconPicker').fontIconPicker({	//fontIconPicker가 불러올 아이콘 source를 수정한 test로 지정한다
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