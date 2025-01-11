var device = document.getElementById('device');
device.addEventListener('input', validatedevice);
function validatedevice() {

    if (device.value.slice(0, 1) != 8) {
        alert("the device number must be starting with 81")
        device.value = '';
    } else if (device.value.slice(0, 1) == 8) {

        if (device.value.charAt(1) != '') {
            if (device.value.charAt(1) != 1) {
                alert("the device number must be starting with 81 from secando")
                device.value = 8;
            }
        };

    };
}


function bancode(e) {
    switch (e) {
        default:
            alert('device number is wrong')
            error();
            break;
        case '8125':
        case '8115':

        case '8150':
        case '8151':
        case '8152':
        case '8153':
        case '8154':
        case '8155':
        case '8156':
        case '8157':
        case '8158':
        case '8159':

        case '8165':
        case '8100':
            var bank_en = 'Al Rajhi Bank';
            var bank_ar = 'لنيوليب';
            break;
        // -----------------------------------------------------
        case '8123':
            var bank_en = 'Arab Bank';
            var bank_ar = 'البنك العربي';
            break;
        // -----------------------------------------------------
        case '8124':
            var bank_en = 'Riyad Bank';
            var bank_ar = 'بنك الرياض';
            break;
        // -----------------------------------------------------
        case '8196':
            var bank_en = 'Saudi National Bank';
            var bank_ar = 'البنك الأهلي';
            break;
        case '8166':
            var bank_en = 'Saudi National Bank';
            var bank_ar = 'البنك الأهلي';
            break;
        case '8116':
            var bank_en = 'Saudi National Bank';
            var bank_ar = 'البنك الأهلي';
            break;
        // -----------------------------------------------------
        case '8127':
            var bank_en = 'Banque Saudi Fransi';
            var bank_ar = 'البنك السعودي الفرنسي';
            break;
        // -----------------------------------------------------
        case '8128':
            var bank_en = 'Samba Bank';
            var bank_ar = 'بنك سامبا';
            break;
        // -----------------------------------------------------
        case '8129':
            var bank_en = 'SABB Bank';
            var bank_ar = 'بنك ساب';
            break;
        // -----------------------------------------------------
        case '8174':
        case '8173':
            var bank_en = 'foodics';
            var bank_ar = 'فودكس';
            break;
        // -----------------------------------------------------

    }
    return [bank_ar, bank_en];
}
function url() {
    var num1 = '+966' + document.getElementById('phone').value;
    var bankcode = document.getElementById('device').value.slice(0, 4);

    var bankcode = document.getElementById('device').value.slice(0, 4);

    var bank_ar = bancode(bankcode)[0];
    var bank_en = bancode(bankcode)[1];
    console.log(bank_ar)

    var message_ar = "السلام عليكم%0aمعك إبراهيم من " + bank_ar + "%0a%0aبخصوص تركيب جهاز نقاط البيع 'مدى',%0aارسل موقعك وأوقات الدوام%0a%0aوشكراً";
    var message_en = "%0aHello,%0aThis is Ibrahim, from " + bank_en + "%0a%0aAbout payment device 'mada' installation,%0aSend your location and working hours%0a%0aThank you.";
    var spliter = "%0a--------------------------------"
    window.open("https://wa.me/" + num1 + "?text=" + message_ar + spliter + message_en);
};

function peper() {
    var num1 = '+966' + document.getElementById('phone').value;
    var bankcode = document.getElementById('device').value.slice(0, 4);

    var bankcode = document.getElementById('device').value.slice(0, 4);

    var bank_ar = bancode(bankcode)[0];
    var bank_en = bancode(bankcode)[1];
    console.log(bank_ar)

    var message_ar = "السلام عليكم%0aمعك إبراهيم من " + bank_ar + "%0a%0aبخصوص توصيل أوراق جهاز نقاط البيع،%0aارسل موقعك وأوقات الدوام%0a%0aوشكراً";
    var message_en = "Hello,%0aThis is Ibrahim, from " + bank_en + "%0a%0aAbout delivery of the payment device Mada's paper,%0aSend your location and working hours%0a%0aThank you.";
    var spliter = "%0a--------------------------------%0a"
    window.open("https://wa.me/" + num1 + "?text=" + message_ar + spliter + message_en);
};

function maintenance() {
    var num1 = '+966' + document.getElementById('phone').value;
    var bankcode = document.getElementById('device').value.slice(0, 4);

    var bank_ar = bancode(bankcode)[0];
    var bank_en = bancode(bankcode)[1];
    console.log(bank_ar)

    var message_ar = "السلام عليكم%0aمعك إبراهيم من " + bank_ar + "%0a%0aبخصوص صيانة جهاز نقاط البيع,%0aارسل موقعك وأوقات الدوام%0a%0aوشكراً";
    var message_en = "%0aHello,%0aThis is Ibrahim, from " + bank_en + "%0a%0aAbout payment device 'mada' maintenance,%0aSend your location and working hours%0a%0aThank you.";
    var spliter = "%0a--------------------------------"
    window.open("https://wa.me/" + num1 + "?text=" + message_ar + spliter + message_en);
};

function pullout() {
    var num1 = '+966' + document.getElementById('phone').value;
    var bankcode = document.getElementById('device').value.slice(0, 4);

    var bank_ar = bancode(bankcode)[0];
    var bank_en = bancode(bankcode)[1];
    console.log(bank_ar)

    var message_ar = "السلام عليكم%0aمعك إبراهيم من " + bank_ar + "%0a%0aبخصوص إلغاء جهاز الدفع 'مدى',%0aارسل موقعك وأوقات الدوام%0a%0aوشكراً";
    var message_en = "%0aHello,%0aThis is Ibrahim, from " + bank_en + "%0a%0aAbout cancellation the payment device 'Mada',%0aSend your location and working hours%0a%0aThank you.";
    var spliter = "%0a--------------------------------"
    window.open("https://wa.me/" + num1 + "?text=" + message_ar + spliter + message_en);
};

function replacement() {
    var num1 = '+966' + document.getElementById('phone').value;
    var bankcode = document.getElementById('device').value.slice(0, 4);

    var bank_ar = bancode(bankcode)[0];
    var bank_en = bancode(bankcode)[1];
    console.log(bank_ar)

    var message_ar = "السلام عليكم%0aمعك إبراهيم من " + bank_ar + "%0a%0aبخصوص تحديث جهاز الدفع 'مدى' من بنك سامبا إلى بنك الأهلي,%0aارسل موقعك وأوقات الدوام%0a%0aوشكراً";
    var message_en = "%0aHello,%0aThis is Ibrahim, from " + bank_en + "%0a%0aRegarding the update of the payment device “Mada” from Samba Bank to Al-Ahly Bank,%0aSend your location and working hours%0a%0aThank you.";
    var spliter = "%0a--------------------------------"
    window.open("https://wa.me/" + num1 + "?text=" + message_ar + spliter + message_en);
};

var inputD = document.getElementById("device");
var inputP = document.getElementById("phone");


// Execute a function when the user releases a key on the keyboard
inputD.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("myBtn").click();
    }
});
inputP.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("myBtn").click();
    }
});

function neuleep() {
    var num1 = '+966' + document.getElementById('phone').value;
    var bankcode = document.getElementById('device').value.slice(0, 4);

    var bankcode = document.getElementById('device').value.slice(0, 4);

    var bank_ar = bancode(bankcode)[0];
    var bank_en = bancode(bankcode)[1];
    console.log(bank_ar)

    var message_ar = "السلام عليكم%0aمعك إبراهيم من انترسوفت الدعم الفني  " + bank_ar + "%0a%0aبخصوص تركيب جهاز نقاط البيع 'مدى',%0aممكن ترسل الموقع وصورة من السجل التجاري واوقات العمل%0a%0aوشكراً";
    var message_en = "%0aHello,%0aThis is Ibrahim, from " + bank_en + "%0a%0aAbout payment device 'mada' installation,%0aSend your location and working hours%0a%0aThank you.";
    var spliter = "%0a--------------------------------"
    window.open("https://wa.me/" + num1 + "?text=" + message_ar + spliter + message_en);
};