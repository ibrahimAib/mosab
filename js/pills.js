let pills;
if(localStorage.pills != null){
    pills = JSON.parse(localStorage.pills);
}else{
    pills = [];
}
let counter;
function savePill(){
    let costumerId = document.getElementById('costumers').selectedIndex;
    let pill = {
        pillId: counter,
        costumerId: costumerId,
        costumerName: costumers[costumerId].name,
        overAll: document.getElementById('overAll').value,
        paid: false,
        pillDetails: cart,

    };
    pills.push(pill);
    console.log(cart);
    for(i = 0; i<cart.length; i++){
        let index = prodocts.findIndex(item => item.id === Number(cart[i]['prodoctId']));
        prodocts[index].stock = prodocts[index].stock - Number(cart[i]['add_amount']);


    }
    localStorage.setItem('prodocts', JSON.stringify(prodocts));
    localStorage.removeItem("cart")
    localStorage.setItem('pills', JSON.stringify(pills));
    cart = [];
    counter++
    if(document.getElementById('cart') && cart.length ==0 ){
        document.getElementById('cart').innerHTML = '<h3 style="text-align: center; color:red; font-size:20px">لا توجد منتجات</h3>';
        
    }

}
// show the pills

console.log(pills.length);

function renderPills() {
    let HTMLtable = '';
    for (let i = 0; i < pills.length; i++) {
        HTMLtable += `
        <tr>
            <td><input type="text" class="text_intput" value="${pills[i].costumerName}" readonly></td>
            <td class="td_price"><input class="text_intput text_input_small mr-t" type="text" value="${pills[i].overAll}" readonly></td>
            <td>
                <input class="text_intput text_input_small mr-t ${pills[i].paid == false ? 'btn-del' : 'btn-update'}" type="button" value="${pills[i].paid == false ? 'دفع': 'تم'}" onclick="paymentUpdata(${i})">
            </td>
            


        </tr>`;
    }
    document.getElementById('pills').innerHTML += HTMLtable;
};
if(document.getElementById('pills')){
    if(pills != null ){

        renderPills();
    }else{
        document.getElementById('pills').innerHTML = '<h1>sdf</h1>';
    }
    
}

function paymentUpdata(element){
    let pill = pills[element];
    console.log(pill.paid);
    if(pill.paid == false){
        pills[element].paid = true;
    }else{
        pills[element].paid = false;
    }
    console.log(pill.paid);
    localStorage.setItem('pills', JSON.stringify(pills));
    renderPills()

}
let costumers = [
    {
        id: 0,
        name: 'جدي',
    },
    {
        id: 1,
        name: 'جده',
    },
    {
        id: 2,
        name: 'تركي',
    },
    {
        id: 3,
        name: 'نسيبة',
    },
    {
        id: 4,
        name: 'ساره',
    },
    {
        id: 5,
        name: 'اسية',
    },
    {
        id: 6,
        name: 'افنان',
    },
    {
        id: 7,
        name: 'منيرة',
    },
    {
        id: 8,
        name: 'رزان',
    },
    {
        id: 9,
        name: 'ابراهيم',
    },
    {
        id: 10,
        name: 'ايلاف',
    },
    {
        id: 11,
        name: 'سما',
    },
    {
        id: 12,
        name: 'ناصر',
    },
];