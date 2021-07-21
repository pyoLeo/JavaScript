/**
 * 
1.input box에 추가할 옵션을 입력한다
2.옵션 추가 버튼을 클릭한다
3.select option에 input에 입력한 값이 추가된다

1.select option을 선택한다
2.옵션 삭제 버튼을 클릭한다
3.선택한 select option이 삭제된다

1.아이디를 입력한다
2.이메일 사이트를 선택한다
2.1.직접 입력 선택
2.1.1.select box 옆에 input box가 노출된다
2.2 직접 입력 제외 이메일 사이트 선택한다
3.이메일 만들기 버튼을 클릭한다
4.버튼 하단에 이메일 주소가 출력된다
 */
function addBtnClick() {
	var opt = $("input#addOption").val();
	var str = '<option value="' + opt + '">' + opt + '</option>';
	$("#addtBox").append(str);
	$("input#addOption").val('');
}

function removeBtnClick() {
	var sltd = $("#removeBox > option:selected").val();
	$("#removeBox option[value='" + sltd + "']").remove();
	$("#removeBox").show();
}

function selectCheck() {
	if($("#siteId > option:selected").val() == "") {
		$("#selfInput").show();
	} else {
		$("#selfInput").hide();
	}
}
function emailBtnClick() {
	var totalEmail = '';
	var emailID = $("input#inputEmail").val();
	var selectedSite = $("#siteId > option:selected").val();
	if(selectedSite != "") {
		totalEmail = emailID + "@" + selectedSite;
	} else {
		totalEmail = emailID + "@" + $("input#selfInput").val();
	}
	$("div#printEmail").append(totalEmail);
}