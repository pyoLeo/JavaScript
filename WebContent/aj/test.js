/**
 * 
DOM API

    var item1 = document.getElementById("아이템1");  // 아이디로 요소를 선택한다
    var item2 = document.getElementById("아이디2"); // 
    item1.appendChild(item2);                   // 해당 요소의 맨 마지막 자식 노드로 추가함.

    var criteriaNode = document.getElementById("text"); // 기준이 되는 요소로 아이디가 "text"인 요소를 선택함.
    var createP = document.createElement("p");          // 새로운 <p> 요소를 생성함.
    newNode.innerHTML = "새로운 단락입니다.";
    document.body.insertBefore(newNode, criteriaNode);  // 새로운 요소를 기준이 되는 요소 바로 앞에 추가함.


제이쿼리와 Ajax
	ajax를 이용해 개발을 손쉽게 할 수 있도록 미리 여러 가지 기능을 포함해 놓은 개발환경을 Ajax 프레임워크라고 한다
	
	$.ajax({
    url: "/ex/test", // 클라이언트가 요청을 보낼 서버의 URL 주소
    data: ,                // HTTP 요청과 함께 서버로 보낼 데이터
    type: "GET",                             // HTTP 요청 방식(GET, POST)
    dataType: "json"                         // 서버에서 보내줄 데이터의 타입
})

$.ajax()메소드 뿐 아니라 ajax관련 다양한 메소드가 존재한다

	$.ajax() : 비동기식 ajax를 이용해 http 요청을 전송함
	$.get : 전달받은 주소로 GET 방식의 HTTP 요청을 전송
	$.post : 전달받은 주소로 POST 방식의 HTTP 요청을 전송
	$.getScript : 웹페이지에 스크립트를 추가함
	$.getJSON : 전달받은 주소로 GET 방식의 HTTP 요청 전송, 응답으로 JSON파일 전송받음
	load()

 */