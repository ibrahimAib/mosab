
let prodocts;
if(localStorage.prodocts != null ){
    prodocts = JSON.parse(localStorage.prodocts);
    renderProdocts();
}else{
    prodocts = [];
    if(document.getElementById('prodocts')){
        document.getElementById('prodocts').innerHTML = '<h3 style="text-align: center; color:red; font-size:20px">لا توجد منتجات</h3>';
    }
}

    

// add item botton
function add_prodoct(){
    let add_title = document.getElementById('add_title');
    let add_sn = document.getElementById('add_sn');
    let add_price = document.getElementById('add_price');
    let add_amount = document.getElementById('add_amount');
    let add_catagory = document.getElementById('add_catagory');
    let addAmount = parseInt(add_amount.value);

    let Name = document.getElementById('name');
    let amount = document.getElementById('amount');
    let price = document.getElementById('price');
    let sum = document.getElementById('sum');
    let del = document.getElementById('del');

    let couter = 0;
    // check if the item exist in the prodocts
    let index = prodocts.findIndex(item => item.title === add_title.value);

    if(index != -1){
        // if the item is aready exist this lins add the amount and update the sum
        let updatedAmount = prodocts[index]['stock'] + parseInt(add_amount.value);
        prodocts[index]['stock'] = updatedAmount;
        prodocts[index]['price'] = parseInt(add_price.value);
        localStorage.setItem('prodocts', JSON.stringify(prodocts));

    }else{
        // if the item dosn't exsit this lins create new one
        item = {
            id : (prodocts.length + 1),
            price: add_price.value,
            title : add_title.value,
            catagory: add_catagory.value,
            sn: add_sn.value,
            stock : parseInt(add_amount.value),
        };
        prodocts.push(item);
        localStorage.setItem('prodocts', JSON.stringify(prodocts));
        couter++
    }

    // add the prodocts data into html
    renderProdocts();
};

function renderProdocts() {
    HTMLtable = '';
    console.log(HTMLtable);
    if(document.getElementById('prodocts')){
        HTMLtable = `                        
        <tr>
            <th>المنتج</th>
            <th>المخزون</th>
            <th>السعر</th>
            <th>----</th>
        </tr>`
        for(i = 0; i < prodocts.length; i++){

            HTMLtable += `
            <tr>
            <td class="td_title "><input class="text_intput" id="title${i}" type="text" value="${prodocts[i].title}"></td>
            <td><input class="text_intput text_input_small mr-t" id="stock${i}" type="number" value="${prodocts[i].stock}"></td>
            <td class="td_price"><input class="text_intput text_input_small mr-t" type="number" id="price${i}" value="${prodocts[i].price}"></td>
            <td class="td_price">
                <input class="text_intput text_input_small mr-t btn-update" type="button" value="تعديل" onclick="updata(${i})">
            </td>
            </tr>`;
            document.getElementById('prodocts').innerHTML = HTMLtable;

        }
    }
}

function updata(element){
    let prodoct = prodocts[element];

    let getTitle = 'title' + element;
    let title =  document.getElementById(getTitle).value;
    prodocts[element].title = title;

    let getStock = 'stock' + element;
    let stock = document.getElementById(getStock).value;
    prodocts[element].stock = stock;
    
    let getPrice = 'price' + element;
    let price = document.getElementById(getPrice).value;
    prodocts[element].price = price;
    
    localStorage.setItem('prodocts', JSON.stringify(prodocts));
    renderProdocts();
}
