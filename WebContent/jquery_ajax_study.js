/**
 * 
$.ajax({
    url: "/examples/media/request_ajax.php", // 클라이언트가 HTTP 요청을 보낼 서버의 URL 주소
    data: { name: "홍길동" },                          // HTTP 요청과 함께 서버로 보낼 데이터
    method: "GET",                                     // HTTP 요청 방식(GET, POST)
    dataType: "json"                                   // 서버에서 보내줄 데이터의 타입
})

.done({}) HTTP 요청 성공 시 요청한 데이터가 전달됨
.fail({}) HTTP 요청 실패 시 오류와 상태에 관한 정보가 전달됨
.always({}) HTTP 요청 상관없이 언제나 실행

load() 선택한 요소에서 호출하는 유일한 제이쿼리 ajax 메소드
서버에서 데이터 읽은 후, 일어들인 HTML 코드를 선택한 요소에 배치
$(function() {
    $("#requestBtn").on("click", function() {	//id 가 requestBtn인 버튼을 클릭하면
        // URL 주소에 존재하는 HTML 코드에서 <li>요소를 읽은 후에 id가 "list"인 요소에 배치함.
        $("#list").load("/examples/tryit/htmlexample/jq_elementTraversing_etc_01.html li");
    });
});

ajax에서는 서버와의 비동기식 통신을 위해 form 요소를 통해 입력받은 데이터를 직렬화(serialization)하여 전송
직렬화란 입력받은 여러 데이터를 하나의 쿼리 문자열로 만드는 것을 의미
form요소를 통해 입력받은 데이터를 한번에 서버로 보낼 수 있게 된다
.serializeArray() 입력된 데이터를 문자열이 아닌 배열 객체로 변환
 */