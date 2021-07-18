/**
 * 
 */
/*
1. 이메일 확인한다

1-1. 이메일에 아무것도 입력하지 않았을 때
1-1-1. span창에 필수값 메세지가 뜨게한다

1-2. 이메일이 정해진 양식과 다를 때
1-2-1. span창에 양식확인 메세지가 뜨게한다

2. 비밀번호를 확인한다

2-1. 비밀번호에 아무곳도 입력하지 않았을 때
2-1-1. span창에 필수값 메세지가 뜨게한다

2-2. 비밀번호가 정해진 양식과 다를 때
2-2-1. span창에 양식확인 메세지가 뜨게한다

3. 
*/

$(document).ready(function(){
	$('#checkBtn').click(function(){
        checkValidation();
    });

})

function checkValidation(){
    var email = checkForm.email.value;
    var password = checkForm.pw.value;
    var emailAlert = $('#emailVal');
    var pwAlert = $('#pwVal');

    if(email == ''){
        emailAlert.append('email은 필수값입니다.');
    }else{
        var emPattern = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

        if(!(emailAlert.is(':empty'))){
            emailAlert.empty();
        }

        if(!emPattern.test(email)){
            emailAlert.css('color', 'red');
            emailAlert.append('email양식을 확인해주세요.');
        }
    }

    if(password == ''){
        pwAlert.append('비밀번호는 필수값입니다.');
    }else{
        var pwPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&.])[A-Za-z\d$@$!%*#?&.]{8,}$/;

        if(!(pwAlert.is(':empty'))){
            pwAlert.empty();
        }

        if(!pwPattern.test(password)){
            pwAlert.css('color', 'red');
            pwAlert.append('특수문자(!.#&%) 포함 8자 이상의 비밀번호를 입력해주세요.');
        }
    }
}
