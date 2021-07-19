/**
 * 
1. 활성화 버튼을 누르면 radio가 활성화된다
1-1.Y를 활성화한다
1-2.N을 활성화한다

2. 비활성화 버튼을 누르면 radio가 비활성화된다
2-1.Y를 활성화한다
2-2.N을 활성화한다

3. Y 선택 버튼을 누르면 Y가 선택된다
3-1. Y를 checked true로 변경한다
3-2. Y를 checked false로 변경한다

4.N 선택 버튼을 누르면 N이 선택된다
4-1. Y를 checked false로 변경한다
4-2. Y를 checked true로 변경한다

attr은 속성 그 자체의 값을 반환한다
prop은 속성값을 명시적으로 찾아내는 방법을 제공한다, form 요소의 disabled, selected, checked 같은 속성값 확인 또는 변경하는 경우
 */

function activateRadio() {
	$("input:radio[name=published_Y]").attr("disabled", false);
	$("input:radio[name=published_N]").attr("disabled", false);
}

function deactivateRadio() {
	$("input:radio[name=published_Y]").attr("disabled", true);
	$("input:radio[name=published_N]").attr("disabled", true);
}

function select_Y() {
	$("input:radio[name=published_Y]").prop('checked', true);
	$("input:radio[name=published_N]").prop('checked', false);
}

function select_N() {
	$("input:radio[name=published_Y]").prop('checked', false);
	$("input:radio[name=published_N]").prop('checked', true);
}