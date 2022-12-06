const start = document.querySelector(".start");
const lookAround = document.querySelector(".look-around");

// 이벤트 리스너 추가
start.addEventListener('click', moveToOrder);
lookAround.addEventListener('click', moveToOrder);

// 페이지 이동 함수
function moveToOrder(){
    console.log("페이지 이동"); // 콘솔 출력
    location.href = "../html/order.html"
}