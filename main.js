function checkdata() {
    var id = document.getElementById("id");
    var psw = document.getElementById("psw");
    var pswconfirm = document.getElementById("psw-confirm");
    var emailf = document.getElementById("email1");
    var telnum = document.getElementById("telnum");
    var mobile = document.getElementById("mobile");

    // 아이디 입력 감지
    if(id.value == "") {
        alert("아이디는 필수입력 사항입니다.");
        id.focus();
        return false;
    }
    // 아이디 글자 수 제한
    if(id.value.length < 6 || id.value.length > 16) {
        alert('아이디는 6자리 이상 16자리 이하로 만드세요.')
        id.focus();
        return false;
    }
    // 비밀번호 입력감지
    if(psw.value == "") {
            alert("비밀번호는 필수입력 사항입니다.");
            psw.focus();
            return false;
    }
    // 비밀번호 글자 수 제한
    if(psw.value.length < 6 || psw.value.length > 12) {
        alert('비밀번호는 6자리 이상 12자리 이하로 만드세요.');
        psw.focus();
        return false;
    }
    // 비밀번호 일치 감지
    if(psw.value != pswconfirm.value) {
        alert("비밀번호가 일치하지 않습니다.");
        pswconfirm.focus();
        return false;
    }
    // 이메일 입력 감지
    if(emailf.value =="") {
        alert("이메일은 필수입력 사항입니다.");
        emailf.focus();
        return false;
    }
    if(telnum.value =="") {
        alert("전화번호는 필수입력 사항입니다..");
        telnum.focus();
        return false;
    }
    // 휴대폰 번호 입력 감지
    if(mobile.value =="") {
        alert("휴대폰 번호는 필수입력 사항입니다..");
        mobile.focus();
        return false;
    }
    return true;
}


//CHATGPT가 만든 것들

// // 인증번호
// function codenum() {
//     // 6자리 랜덤 숫자 생성
//     const randomNumber = Math.floor(Math.random() * 1000000);
  
//     // 랜덤 숫자를 화면에 출력
//     document.getElementById("random-number").innerHTML = randomNumber;
  
//     // 랜덤 숫자를 저장
//     sessionStorage.setItem("randomNumber", randomNumber);
//   }
  
//   function codenumimport() {
//     // 입력한 숫자 가져오기
//     const inputNumber = document.getElementById("codenuminput").value;
  
//     // 저장된 랜덤 숫자 가져오기
//     const randomNumber = sessionStorage.getItem("randomNumber");
  
//     // 입력한 숫자와 저장된 랜덤 숫자 비교
//     if (inputNumber == randomNumber) {
//       // 일치할 경우 인증 성공 메시지 출력
//       document.getElementById("result").innerHTML = "<br>인증 성공!";
//     } else {
//       // 불일치할 경우 인증 실패 메시지 출력
//       document.getElementById("result").innerHTML = "<br>인증 실패!";
//     }
//   }
//   function checkButton() {
//     const checkbox1 = document.getElementById("checkbox1");
//     const checkbox2 = document.getElementById("checkbox2");
//     const registerbtn = document.getElementById("registerbtn");

//     if (checkbox1.checked && checkbox2.checked) {
//     registerbtn.disabled = false;
//     }

// }