<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<!-- jQuery -->
<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<script src="radiobtn.js"></script>
<body>
<form name="btnForm" method="post" id="returnForm" onsubmit="return false;">
	<input type="radio" id="published_Y" name="published_Y" value="Y">
	<label for="Y">Y</label>
	<input type="radio" id="published_N" name="published_N" value="N">
	<label for="N">N</label>
	<br>
	<button id="activate" onclick="activateRadio();">활성화</button>
	<button id="deactivate" onclick="deactivateRadio();">비활성화</button>
	<button id="selectY" onclick="select_Y();">Y 선택</button>
	<button id="selectN" onclick="select_N();">N 선택</button>
</form>
</body>
</html>