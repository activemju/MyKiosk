// ===================================================
// 페이지 이동
// ===================================================

const moveMain = document.querySelector(".move-main");
moveMain.addEventListener('click', moveToMain);

function moveToMain(){
    console.log("페이지 이동"); // 콘솔 출력
    localStorage.clear(); // 로컬스토리지 초기화
    location.href = "../html/index.html"
}

// ===================================================
// 주문번호 랜덤
// ===================================================

const randomNumberEl = document.querySelector(".random-number")
const makeRandomNumber = Math.floor(Math.random()*900) + 100;

console.log(makeRandomNumber);
randomNumberEl.innerHTML = `${makeRandomNumber}`;

// ===================================================
// 결제금액 불러오기
// ===================================================

const totalPriceEl = document.querySelector(".total-price")
const order = JSON.parse(localStorage.getItem("주문사항"));
rendertotal();

function rendertotal(){

    totalPrice = 0;

    order.forEach((item) => {
        totalPrice += item.price * item.numberOfUnits;
    });

    totalPriceEl.innerHTML = `결제금액: ${totalPrice.toLocaleString()}원`;

}