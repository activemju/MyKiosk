// ===================================================
// 페이지 이동
// ===================================================

// 로고 누르면 이전 페이지로 이동
const logoMove = document.querySelector(".logo");
logoMove.addEventListener('click', moveToMain);

function moveToMain(){
    console.log("페이지 이동"); // 콘솔 출력
    location.href = "../html/index.html"
}

// ===================================================
// 엘리먼트 선택
// ===================================================

// 샌드위치
const newSandwichEl = document.querySelector(".new-item-list");
const premiumSandwichEl = document.querySelector(".premium-item-list");
const classicSandwichEl = document.querySelector(".classic-item-list");
const freshAndLightSandwichEl = document.querySelector(".fresh-and-light-item-list");

// 랩
const grilledWrapEl = document.querySelector(".grilled-item-list");
const normalWrapEl = document.querySelector(".normal-item-list");

// 샐러드
const newSaladEl = document.querySelector(".new-item-salad");
const premiumSaladEl = document.querySelector(".premium-item-salad");
const classicSaladEl = document.querySelector(".classic-item-salad");
const freshAndLightSaladEl = document.querySelector(".fresh-and-light-item-salad");

// 아침메뉴
const morningGrilledWrapEl = document.querySelector(".break-grilled-item-list");
const morningWrapEl = document.querySelector(".break-normal-item-list");
const morningSandwichEl = document.querySelector(".break-sandwich-item-list");

// 스마일섭
const cookieEl = document.querySelector(".cookie-item-list");
const soupEl = document.querySelector(".soup-item-list");
const potatoEl = document.querySelector(".potato-item-list");

// 주문서
const orderItemsEl = document.querySelector(".product-details");
const totalNumberOfUnitsEl = document.querySelector(".product-numberOfUnits");
const totalPriceEl = document.querySelector(".total-price");


// ===================================================
// 메뉴 렌더링
// ===================================================

// 샌드위치
function renderSandwich(){
    newSandwich.forEach( (newMenu) => {
        newSandwichEl.innerHTML += `
            <div class="item" onClick="addToOrder(${newMenu.id})">
                <img class="sandwich-img" src="${newMenu.imgSrc}">
                <p class="name">${newMenu.name}</p>
                <p class="price">${newMenu.price}원 부터</p>
            </div>
        `;
    });
    premiumSandwich.forEach( (premium) => {
        premiumSandwichEl.innerHTML += `
            <div class="item" onClick="addToOrder(${premium.id})">
                <img class="sandwich-img" src="${premium.imgSrc}">
                <p class="name">${premium.name}</p>
                <p class="price">${premium.price}원 부터</p>
            </div>
        `;
    });
    classicSandwich.forEach( (classic) => {
        classicSandwichEl.innerHTML += `
            <div class="item" onClick="addToOrder(${classic.id})">
                <img class="sandwich-img" src="${classic.imgSrc}">
                <p class="name">${classic.name}</p>
                <p class="price">${classic.price}원 부터</p>
            </div>
        `;
    });
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

// 랩
function renderWrap(){
    grilledWrap.forEach( (grilled) => {
        grilledWrapEl.innerHTML += `
            <div class="item" onClick="addToOrder(${grilled.id})">
                <img class="wrap-img" src="${grilled.imgSrc}">
                <p class="name">${grilled.name}</p>
                <p class="price">${grilled.price}원 부터</p>
            </div>
            `;
    });
    normalWrap.forEach( (normal) => {
        normalWrapEl.innerHTML += `
            <div class="item" onClick="addToOrder(${normal.id})">
                <img class="wrap-img" src="${normal.imgSrc}">
                <p class="name">${normal.name}</p>
                <p class="price">${normal.price}원 부터</p>
            </div>
            `;
    });
}

// 샐러드
function renderSalad(){
    newSalad.forEach( (newMenu) => {
        newSaladEl.innerHTML += `
            <div class="item" onClick="addToOrder(${newMenu.id})">
                <img class="salad-img" src="${newMenu.imgSrc}">
                <p class="name">${newMenu.name}</p>
                <p class="price">${newMenu.price}원 부터</p>
            </div>
        `;
    });
    premiumSalad.forEach( (premium) => {
        premiumSaladEl.innerHTML += `
            <div class="item" onClick="addToOrder(${premium.id})">
                <img class="salad-img2" src="${premium.imgSrc}">
                <p class="name">${premium.name}</p>
                <p class="price">${premium.price}원 부터</p>
            </div>
        `;
    });
    classicSalad.forEach( (classic) => {
        classicSaladEl.innerHTML += `
            <div class="item" onClick="addToOrder(${classic.id})">
                <img class="salad-img2" src="${classic.imgSrc}">
                <p class="name">${classic.name}</p>
                <p class="price">${classic.price}원 부터</p>
            </div>
        `;
    });
    freshAndLightSalad.forEach( (freshAndLight) => {
        freshAndLightSaladEl.innerHTML += `
            <div class="item" onClick="addToOrder(${freshAndLight.id})">
                <img class="salad-img2" src="${freshAndLight.imgSrc}">
                <p class="name">${freshAndLight.name}</p>
                <p class="price">${freshAndLight.price}원 부터</p>
            </div>
        `;
    });
};

// 아침메뉴
function renderBreakfast(){
    morningGrilledWrap.forEach( (morningGrilled) => {
        morningGrilledWrapEl.innerHTML += `
            <div class="item" onClick="addToOrder(${morningGrilled.id})">
                <img class="wrap-img" src="${morningGrilled.imgSrc}">
                <p class="name">${morningGrilled.name}</p>
                <p class="price">${morningGrilled.price}원 부터</p>
            </div>
        `;
    });
    morningWrap.forEach( (morningWrap) => {
        morningWrapEl.innerHTML += `
            <div class="item" onClick="addToOrder(${morningWrap.id})">
                <img class="wrap-img" src="${morningWrap.imgSrc}">
                <p class="name">${morningWrap.name}</p>
                <p class="price">${morningWrap.price}원 부터</p>
            </div>
        `;
    });
    morningSandwich.forEach( (morningSandwich) => {
        morningSandwichEl.innerHTML += `
            <div class="item" onClick="addToOrder(${morningSandwich.id})">
                <img class="sandwich-img2" src="${morningSandwich.imgSrc}">
                <p class="name">${morningSandwich.name}</p>
                <p class="price">${morningSandwich.price}원 부터</p>
            </div>
        `;
    });
}

// 스마일섭
function renderSmileSub(){
    cookies.forEach( (cookie) => {
        cookieEl.innerHTML += `
            <div class="item" onClick="addToOrder(${cookie.id})">
                <img class="cookie-img" src="${cookie.imgSrc}">
                <p class="name">${cookie.name}</p>
                <p class="price">${cookie.price}원 부터</p>
            </div>
        `;
    });
    soups.forEach( (soup) => {
        soupEl.innerHTML += `
            <div class="item" onClick="addToOrder(${soup.id})">
                <img class="soup-img" src="${soup.imgSrc}">
                <p class="name">${soup.name}</p>
                <p class="price">${soup.price}원 부터</p>
            </div>
        `;
    });
    chips.forEach( (chip) => {
        potatoEl.innerHTML += `
            <div class="item" onClick="addToOrder(${chip.id})">
                <img class="chip-img" src="${chip.imgSrc}">
                <p class="name">${chip.name}</p>
                <p class="price">${chip.price}원 부터</p>
            </div>
        `;
    });
}

//렌더링 함수 호출
renderSandwich();
renderWrap();
renderSalad();
renderBreakfast();
renderSmileSub();


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
        const item5 = grilledWrap.find((grilled) => grilled.id === id );
        const item6 = normalWrap.find((normal) => normal.id === id );
        const item7 = newSalad.find((newMenu) => newMenu.id === id );
        const item8 = premiumSalad.find((premium) => premium.id === id );
        const item9 = classicSalad.find((classic) => classic.id === id );
        const item10 = freshAndLightSalad.find((freshAndLight) => freshAndLight.id === id );
        const item11 = morningGrilledWrap.find((morningGrilled) => morningGrilled.id === id );
        const item12 = morningWrap.find((morningWrap) => morningWrap.id === id );
        const item13 = morningSandwich.find((morningSandwich) => morningSandwich.id === id );
        const item14 = cookies.find((cookie) => cookie.id === id );
        const item15 = soups.find((soup) => soup.id === id );
        const item16 = chips.find((chip) => chip.id === id );
        
        order.push({
            ...item1,
            ...item2,
            ...item3,
            ...item4,
            ...item5,
            ...item6,
            ...item7,
            ...item8,
            ...item9,
            ...item10,
            ...item11,
            ...item12,
            ...item13,
            ...item14,
            ...item15,
            ...item16,
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
// 모달창
// ===================================================

const body = document.querySelector("body")
const modals = document.querySelector(".modals");
const modal1 = document.querySelector(".modal1");
const modal2 = document.querySelector(".modal2");
const modal3 = document.querySelector(".modal3");
const modal4 = document.querySelector(".modal4");
const overlay = modals.querySelector(".modal-overlay");

overlay.addEventListener('click', closeModal);

// 모달창 생성 및 제거

function openModal(){
    modals.classList.remove("hidden");
    body.style.cssText = 'overflow: hidden;width: 100%;height: 100vh;touch-action:none;';
}

function closeModal(){
    modals.classList.add("hidden");
    body.style.cssText = '';
}

// 개별 모달창

function openModal1(){
    modal1.classList.remove("hidethis");
    modal2.classList.add("hidethis");
    modal3.classList.add("hidethis");
    modal4.classList.add("hidethis");
}

function openModal2(){
    modal1.classList.add("hidethis");
    modal2.classList.remove("hidethis");
    modal3.classList.add("hidethis");
    modal4.classList.add("hidethis");
}

function openModal3(){
    modal1.classList.add("hidethis");
    modal2.classList.add("hidethis");
    modal3.classList.remove("hidethis");
    modal4.classList.add("hidethis");
}

function openModal4(){
    modal1.classList.add("hidethis");
    modal2.classList.add("hidethis");
    modal3.classList.add("hidethis");
    modal4.classList.remove("hidethis");
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
        openModal1();
        openModal();
        const yesBtn1 = document.querySelector(".yes-btn1")
        yesBtn1.addEventListener('click', closeModal)
    }
    else{
        openModal2();
        openModal();
        const noBtn1 = document.querySelector(".no-btn1")
        const yesBtn2 = document.querySelector(".yes-btn2")
        
        noBtn1.addEventListener("click", closeModal)
        yesBtn2.addEventListener('click', resetAll)

        function resetAll(){
            localStorage.clear();
            order = [];
            updateOrder();
            closeModal();
        }
    }
}

// 주문 성공페이지로 이동
function moveToSuccess(){
    if(Number(order) === 0){
        openModal3();
        openModal();
        const yesBtn3 = document.querySelector(".yes-btn3")
        yesBtn3.addEventListener('click', closeModal)
    }
    else{
        openModal4();
        openModal();
        const noBtn2 = document.querySelector(".no-btn2")
        const yesBtn4 = document.querySelector(".yes-btn4")

        noBtn2.addEventListener("click", closeModal)
        yesBtn4.addEventListener('click', orderSuccess)

        function orderSuccess(){
            console.log("페이지 이동"); // 콘솔 출력
            location.href = "../html/success.html"
        }
    }
}