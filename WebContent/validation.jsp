<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<!-- jQuery -->
<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<script src="validation.js"></script>
</head>
<body>
<form name="checkForm" action="result.html" id="checkForm" onsubmit="return false;">
	<div id="inputEmail">
		<span>email</span>
		<input type="text" id="email" name="email">
		<br>
		<span id="emailVal"></span>
	</div>
	 <div id="inputPw">
            <span>password</span>
            <input type="password" id="pw" name="pw">
            <br>
            <span id="pwVal"></span>
        </div>
        <div id="btn">
            <button type="submit" id="checkBtn">check</button>
        </div>
</form>
</body>
</html>