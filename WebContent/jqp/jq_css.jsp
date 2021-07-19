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
  <script>
  $(document).ready(function(){
   $("*").css("border","3px solid red");
  });
  </script>
  <style>
  div,span,p {
   width: 150px;
   height: 60px;
   float:left;
   padding: 10px;
   margin: 10px;
   background-color: #EEEEEE;
  }
  </style>
</head>
<body>
  <div>DIV</div>
  <span>SPAN</span>
  <p>P <button>Button</button></p>
</body>