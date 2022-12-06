const takeOut = document.querySelector(".take-out");
const eatIn = document.querySelector(".eat-in");

// 이벤트 리스너 추가
takeOut.addEventListener('click', moveToOrder);
eatIn.addEventListener('click', moveToOrder);

// 페이지 이동 함수
function moveToOrder(){
    console.log("페이지 이동"); // 콘솔 출력
    location.href = "../html/order.html"
}