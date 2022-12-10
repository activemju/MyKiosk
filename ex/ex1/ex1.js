//쿼리 선택함수 선언

var container = document.querySelector('.container');
var plusBtn = document.querySelector('.plus-btn');
var minusBtn = document.querySelector('.minus-btn');
var resetBtn = document.querySelector('.reset');
var total = document.querySelector('.total');


// 플러스 기능 구현
plusBtn.addEventListener('click',function(){
    let count = Number(total.textContent)
    count = count + 1;
    total.textContent = count;
});

// 마이너스 기능 구현
minusBtn.addEventListener('click',function(){
    
        let count = Number(total.textContent)
        if(count === 0){
            count =  0;
        }
        else{
            count = count - 1;
        }
        total.textContent = count;
});

// 리셋 기능 구현
resetBtn.addEventListener('click',function(){
    let count = Number(total.textContent)
    count = 0;
    total.textContent = count;
});