function setData(a){
    console.log('주문하신 커피 나왔습니다')
    localStorage.setItem('커피', a);
}

function clearData(){
    console.log('재주문 하시겠어요?')
    localStorage.clear();
}