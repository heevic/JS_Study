function checkdata() {
    const id = document.querySelector("#id");
    const psw = document.querySelector("#psw");
    const pswconfirm = document.querySelector("#psw-confirm");
    const emailf = document.querySelector("#email1");
    const telnum = document.querySelector("#telnum");
    const mobile = document.querySelector("#mobile");
    // const codenuminput = document.querySelector("codenuminput");

    // 아이디 입력 감지 false
    if(id.value == "") {
        document.querySelector("#essential-id").textContent = "아이디는 필수 입력사항입니다.";
        id.focus();
        return false;
    }
    // 아이디 글자 수 제한 false
    if(id.value.length < 6 || id.value.length > 16) {
        document.querySelector("#essential-id").textContent = "아이디는 6자리 이상 16자리 이하로 만드세요.";
        id.focus();
        return false;
    }
    // 비밀번호 입력감지 false
    if(psw.value == "") {
        document.querySelector("#essential-id").textContent = "";
        document.querySelector("#essential-psw").textContent = "비밀번호는 필수 입력사항입니다.";
        psw.focus();
        return false;
    } 
    // 비밀번호 글자 수 제한 false
    if(psw.value.length < 6 || psw.value.length > 12) {
        document.querySelector("#essential-psw").textContent = "";
        document.querySelector("#essential-psw").textContent = "비밀번호는 6자리 이상12자리 이하로 만드세요.";
        psw.focus();
        return false;
    }
    // 비밀번호 일치 감지
    if(psw.value != pswconfirm.value) {
        document.querySelector("#essential-psw").textContent = "";
        document.querySelector("#essential-pswconfirm").textContent = "입력하신 비밀번호가 일치하지 않습니다.";
        pswconfirm.focus();
        return false;
    }
    
    // 이메일 입력 감지
    if(emailf.value =="") {
        document.querySelector("#essential-pswconfirm").textContent = "";
        document.querySelector("#essential-email").textContent = "이메일은 필수입력 사항입니다.";
        emailf.focus();
        return false;
    }
    if(telnum.value =="") {
        document.querySelector("#essential-email").textContent = "";
        document.querySelector("#essential-telnum").textContent = "전화번호는 필수입력 사항입니다.";
        telnum.focus();
        return false;
    }
    // 휴대폰 번호 입력 감지
    if(mobile.value =="") {
        document.querySelector("#essential-telnum").textContent = "";
        document.querySelector("#essential-mobile").textContent = "휴대폰 번호는 필수입력 사항입니다.";
        mobile.focus();
        return false;
    }
    if(mobile.value !="") {
        document.querySelector("#essential-mobile").textContent = "";
        checkbox1.focus();
        return false;
    }
    // 인증번호 입력 감지(제거)
    // if(codenuminput.value =="") {
    //     document.querySelector("#code-result").textContent = "인증번호를 입력해주세요.";
    //     codenuminput.focus();
    //     return false;
    // }
    // 체크박스 체크 감지
    if(checkbox1.checked == false && checkbox2.checked == false) {
        document.querySelector("#essential-checkbox").textContent = "이용약관과 개인정보 수집에 대해 모두 동의해주세요.";
        checkbox1.focus();
        return false;
    }
    
    return true;

}

//체크박스
checkbox1.addEventListener("click", checkbox);
checkbox2.addEventListener("click", checkbox);
function checkbox() {
    const checkbox1 = document.querySelector("#checkbox1");
    const checkbox2 = document.querySelector("#checkbox2");
    const registerBtn = document.querySelector("#registerbtn");

    if(checkbox1.checked && checkbox2.checked) {
        registerBtn.disabled = false;
    } else {
        registerBtn.disabled = true;
    }
}

//모달
// const registerbtn = document.getElementById("registerbtn");
// registerbtn.addEventListener("click", modal)
// function modal() {
//     const modal = document.getElementById("modal");
//     modal.style.display = "block";
// }

//CHATGPT가 만든 것들

// // 인증번호
// function codenum() {
//     // 6자리 랜덤 숫자 생성
//     const randomNumber = Math.floor(Math.random() * 1000000);
  
//     // 랜덤 숫자를 화면에 출력
//     document.getElementById("random-number").textContent = randomNumber;
  
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
//       document.getElementById("code-result").textContent = "<br>인증 성공!";
//     } else {
//       // 불일치할 경우 인증 실패 메시지 출력
//       document.getElementById("code-result").textContent = "<br>인증 실패!";
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