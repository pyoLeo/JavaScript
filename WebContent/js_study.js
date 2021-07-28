/**
 * 
label문
프로그램 내의 특정 영역을 식별할 수 있도록 해주는 식별자
continue와 break문의 동작이 프로그램의 흐름을 특정 영역으로 이동시킬 수 있다
label:
식별하고자 하는 특정 영역

arrIndex:
for (var i in arr) {
    document.write(i);
}
for문 전체를 가리키는 식별자로 사용되는 arrIndex

배열 array
이름과 인덱스로 참조되는 정렬된 값의 집합

자바스크립트에서 배열
배열 요소의 타입이 고정되어 있지 않다 -> 같은 배열에 있는 요소끼리 타입이 서로 다를 수 있다
인덱스가 연속적이지 않아도 된다 -> 특정 배열 요소가 비어 있을 수 있다
Array 객체로 다뤄진다
[] 배열 {} 객체 헷갈리지않기

Array.isArray() 배열 여부를 확인할 수 있는 메소드
instanceof isArray()가 지원되지 않는 구형 브라우저에서 사용
constructor

함수 호이스팅
함수 안에서 선언된 모든 변수는 함수 전체에 걸쳐 유효하고 유효 범위의 적용이 변수가 선언되기 전에도 똑같이 적용되는 특징

arguments
함수의 정의보다 더 많은 수의 인수가 전달되면, 매개변수에 대입되지 못한 인수들은 참조할 방법이 없게 되는데, arguments 객체를 이용하면, 함수로 전달된 인수의 총 개수를 확인하거나, 각각의 인수에도 바로 접근할 수 있다

eval() 문자열로 표현된 자바스크립트 코드 실행함수
isFinite() 전달된 값이 유한한지 검사
encodeURI() URI에서 주소 표시 특수문자 제외하고, 모든 문자를 escape sequences 처리하여 부호화
encodeURIComponent() encodeURI()함수에서 부호화하지 않은 모든 문자까지 포함하여 escapde sequences 처리
decodeURI() encodeURI()나 다른 방법으로 만들어진 URI를 해독
decodeURIComponent() encodeURIComponent() 함수나 다른 방법으로 만들어진 URI 컴포넌트를 해독

객체 이름과 값으로 구성된 프로퍼티의 정렬되지 않은 집합
프로퍼티로 함수가 올 수 있는데, 이러한 프로퍼티를 메소드라고 한다
객체이름.프로퍼티이름 또는 객체이름["프로퍼티이름"]

Object.create()
=====================================================================================
Object.create(프로토타입객체[, 새로운객체의프로퍼티1, 새로운객체의프로퍼티2, ...]);
=====================================================================================
var obj = Object.create(null, {             // null 프로토타입을 사용하여 새로운 객체를 만들고
    x: { value: 100, enumerable: true },    // x좌표를 나타내는 열거할 수 있는 프로퍼티와
    y: { value: 200, enumerable: true }     // y좌표를 나타내는 열거할 수 있는 프로퍼티를 추가함.
});
obj.x;
obj.y;
Object.getPrototypeOf(obj);

this 
해당 키워드가 사용된 자바스크립트 코드 영역을 포함하고 있는 객체를 가리킨다
변수가 아닌 키워드 -> 임의로 가리키는 값을 바꿀 수 없다

객체메소드
hasOwnProperty()
특정 프로퍼티가 해당 객체에 존재하는지 검사, 해당 객체에서 직접 선언된 프로퍼티만을 검사
isPrototypeOf()
isExtensible()

String 메소드
shift() 배열의 첫 요소 제가 후, 제거된 요소 반환
unshift() 하나 이상의 요소를 배열의 가장 앞에 추가 후, 배열의 총 길이 반환

document.getElementsByTagName(태그이름)
document.getElementById(아이디)
document.getElementsByClassName(클래스이름)
document.getElementsByName(name속성값)
document.querySelectorAll(선택자)
document.createElement(HTML요소)
document.getElementById(아이디).onclick = function(){ 실행할 코드 }

노드 생성
createElement() 새로운 요소 생성
createAttribute() 속성 노드 생성
createTextNode() 텍스트 노드 생성

setAttribute() 변경하려는 속성이 존재하지 않으면, 먼저 해당 속성을 생성한 후 속성값을 설정한다

addEventListner()
대상객체.addEventListener(이벤트명, 실행할이벤트리스너, 이벤트전파방식)
이벤트 전파 방식이 false면 bubbling, true면 capturing방식으로 이벤트 전파
attachEvent()
 */







