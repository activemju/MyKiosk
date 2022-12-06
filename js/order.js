// 이전 페이지로 이동
// ===================================================
const takeOut = document.querySelector(".logo");

// 이벤트 리스너 추가
takeOut.addEventListener('click', moveToMain);

// 페이지 이동 함수
function moveToMain(){
    console.log("페이지 이동"); // 콘솔 출력
    location.href = "../html/index.html"
}
// ===================================================