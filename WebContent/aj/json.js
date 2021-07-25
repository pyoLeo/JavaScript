/**
 * 

JSON XML 차이점
XML <dog>
    <name>식빵</name>
    <family>웰시코기<family>
    <age>1</age>
    <weight>2.14</weight>
	</dog>
	XML파서로 파싱
	
JSON {
    "name": "식빵",
    "family": "웰시코기",
    "age": 1,
    "weight": 2.14
	}
	자바스크립트 표준 함수 eval()로 파싱
	
	XML은 XML DOM을 이용해 문서에 접근한다
	JSON은 문자열을 전송받은 후에 해당 문자열을 바로 파싱하므로, XML보다 더욱 빠른 처리 속도를 보여준다
	HTML과 자바스크립트가 연동되어 빠른 응답이 필요한 웹 환경에서 많이 사용되고 있다
	JSON은 전송받은 데이터의 무결성을 사용자가 직접 검증해야한다
	데이터의 검증이 필요한 곳에서는 스키마를 사용하여 데이터의 무결성을 검증할 수 있는 XML이 많이 사용된다
	
객체 
	name과 value로 구성된 property의 정렬되지 않은 집합
	이름과 값으로 이루어진 네 쌍의 프로퍼티를 가지는 강아지 객체를 나타내는 예제
	{
    "name": "식빵",
    "family": "웰시코기",
    "age": 1,
    "weight": 2.14
	}
	
배열
	JSON 배열은 대괄호로 둘러쌓아 표현한다
	쉼표를 사용해 여러 JSON 데이터를 포함할 수 있다
	"dog": [
    {"name": "식빵", "family": "웰시코기", "age": 1, "weight": 2.14},
    {"name": "콩콩", "family": "포메라니안", "age": 3, "weight": 2.5},
    {"name": "젤리", "family": "푸들", "age": 7, "weight": 3.1}
	]
 */