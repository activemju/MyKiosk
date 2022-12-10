// ===================================================
// 페이지 이동
// ===================================================

// 로고 누르면 이전 페이지로 이동
const takeOut = document.querySelector(".logo");
takeOut.addEventListener('click', moveToMain);

function moveToMain(){
    console.log("페이지 이동"); // 콘솔 출력
    location.href = "../html/index.html"
}


// ===================================================
// 메뉴 렌더링하기
// ===================================================


//엘리먼트 선택
const newSandwichEl = document.querySelector(".new-item-list");
const premiumSandwichEl = document.querySelector(".premium-item-list");
const classicSandwichEl = document.querySelector(".classic-item-list");
const freshAndLightSandwichEl = document.querySelector(".fresh-and-light-item-list");

const orderItemsEl = document.querySelector(".product-details");
const totalNumberOfUnitsEl = document.querySelector(".product-numberOfUnits");
const totalPriceEl = document.querySelector(".total-price");



//메뉴 렌더링
function renderNew(){
    newSandwich.forEach( (newMenu) => {
        newSandwichEl.innerHTML += `
            <div class="item" onClick="addToOrder(${newMenu.id})">
                <img class="sandwich-img" src="${newMenu.imgSrc}">
                <p class="name">${newMenu.name}</p>
                <p class="price">${newMenu.price}원 부터</p>
            </div>
        `;
    });
}

function renderPremium(){
    premiumSandwich.forEach( (premium) => {
        premiumSandwichEl.innerHTML += `
            <div class="item" onClick="addToOrder(${premium.id})">
                <img class="sandwich-img" src="${premium.imgSrc}">
                <p class="name">${premium.name}</p>
                <p class="price">${premium.price}원 부터</p>
            </div>
        `;
    });
}

function renderClassic(){
    classicSandwich.forEach( (classic) => {
        classicSandwichEl.innerHTML += `
            <div class="item" onClick="addToOrder(${classic.id})">
                <img class="sandwich-img" src="${classic.imgSrc}">
                <p class="name">${classic.name}</p>
                <p class="price">${classic.price}원 부터</p>
            </div>
        `;
    });
}

function renderFreshAndLight(){
    freshAndLightSandwich.forEach( (freshAndLight) => {
        freshAndLightSandwichEl.innerHTML += `
            <div class="item" onClick="addToOrder(${freshAndLight.id})">
                <img class="sandwich-img" src="${freshAndLight.imgSrc}">
                <p class="name">${freshAndLight.name}</p>
                <p class="price">${freshAndLight.price}원 부터</p>
            </div>
        `;
    });
}


//렌더링 함수 호출
renderNew();
renderPremium();
renderClassic();
renderFreshAndLight();


// ===================================================
// 주문서 
// ===================================================

// 주문서 배열
let order = JSON.parse(localStorage.getItem("주문사항")) || [];
updateOrder();

// 메뉴 추가 함수
function addToOrder(id){
    // 주문서에 메뉴가 있는지 확인한다.
    if(order.some((item) => item.id === id)) {
        changeNumberOfUnits(id);
    }
    else{
        const item1 = newSandwich.find((newMenu) => newMenu.id === id );
        const item2 = premiumSandwich.find((premium) => premium.id === id );
        const item3 = classicSandwich.find((classic) => classic.id === id );
        const item4 = freshAndLightSandwich.find((freshAndLight) => freshAndLight.id === id );
        
        order.push({
            ...item1,
            ...item2,
            ...item3,
            ...item4,
            numberOfUnits: 1,
        });
    }

    updateOrder();
}

// 주문서 업데이트 함수
function updateOrder(){
    renderOrderItems();
    renderSubtotal();

    // 로컬스트리지 저장
    localStorage.setItem("주문사항", JSON.stringify(order))
}

// 개별 상품 제거 함수

function removeItemsFromOrder(id) {
    order = order.filter((item) => item.id !== id);

    updateOrder();
}


// 전체 상품 개수 및 결제 금액 계산 함수
function renderSubtotal(){
    let totalPrice = 0;
        totalItems = 0;

    order.forEach((item) => {
        totalPrice += item.price * item.numberOfUnits;
        totalItems += item.numberOfUnits;
    });

    totalPriceEl.innerHTML = `${totalPrice.toLocaleString()}원`;
    totalNumberOfUnitsEl.innerHTML = `${totalItems}개`

}

//주문서 렌더링 함수
function renderOrderItems() {
    orderItemsEl.innerHTML = ``; //clear cart element
    order.forEach((item) => {
        orderItemsEl.innerHTML += `
            <div class="product-detail">
                <p class="product-name">• ${item.name} x${item.numberOfUnits}</p>
                <img class="product-delete" onClick="removeItemsFromOrder(${item.id})" src="../img_sc/로고/delete_btn.png">
            </div>
        `
    });
}

//주문서 개별 상품 수량 함수
function changeNumberOfUnits(id) {
    order = order.map((item) => {
        numberOfUnits = item.numberOfUnits;

        if (item.id === id) {
                numberOfUnits ++;
        }

        return {
            ...item,
            numberOfUnits,
        };
    });
}

// ===================================================
// 주문 취소 및 완료
// ===================================================

const resetItem = document.querySelector(".reset-btn");
const confirmItem = document.querySelector(".confirm-btn");

resetItem.addEventListener('click', resetOrder);
confirmItem.addEventListener('click', moveToSuccess);


// 주문 전체 리셋
function resetOrder(){
    if(Number(order) === 0){
        alert("아직 취소할 상품이 없네요!")
    }
    else{
        if(confirm("정말 모두 취소하시겠어요?") == true){
            localStorage.clear();
            order = [];
            updateOrder();
        }
        else{
            return false;
        }
    }
}

// 주문 성공페이지로 이동
function moveToSuccess(){
    if(Number(order) === 0){
        alert("상품을 먼저 선택해주세요!")
    }
    else{
        console.log("페이지 이동"); // 콘솔 출력
        location.href = "../html/success.html"
    }
}