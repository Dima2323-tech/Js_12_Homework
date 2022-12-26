
window.onload = () => {

    //+++++++ - створити функцію яка отримує аргумент будьякого типу в інпуті. В функції є перевірка в try catch.
    // Якщо значення аргументу не числове значення створити throw з повідомленням що це не число.
    // Якщо число більше 100 то повідомлення що число більше дозволеного якщо менше 10 то що число менше дозволеного.
    // Помилку з throw вивести на екран

    let inp = document.querySelector(".firstIN")

    function checkInput (){
        try {
            if (inp.value > 100){
                alert("Вы Ввели Число Привыщающие Правильный Диапазон")
            }
            else if (inp.value < 10){
                alert("Вы Ввели Число Не Достающие До Правильного Диапазона")
            }
            else if (inp.value != Number(inp.value)){
                throw new Error('Это не числовое значения дурень')
            }
        }
        catch (err){
            alert(err.message)
        }

        finally {
            if (inp.value > 10 && inp.value < 100){
                alert("Вы ввели число в правельном диапазоне")
            }
        }
    }
    checkInput()

    inp.onchange = function (){
        checkInput(this.value)
    }

    // //  - Створити форму яка отримує 2 значення ширину і висоту.
    // //  Також є чекбокс ексліпс. Якщо всі данні введено і чекбокс чекнутий, розблоковується кнопка малювати і малюється еліпс,
    // //  якщо чекбокс ненажатий то кнопка також розблоковується і малюється прямокутник

    let canvas1 = document.querySelector('.canvas1')
    let width = document.querySelector('.Width')
    let height = document.querySelector('.Height')
    let ellipse = document.querySelector('.Ellipse')
    let btnPaint = document.querySelector('.Paint')
    let ctx1 = canvas1.getContext('2d')

    function paintEllipse() {
        if (ellipse.checked){
            ctx1.beginPath();
            ctx1.ellipse(width.value, height.value, 50, 75, Math.PI / 4, 0, 2 * Math.PI);
            ctx1.stroke();
        }

    }

    function paintSq(){
        if (ellipse.checked === false) {
            ctx1.fillRect(25, 25, width.value, height.value);
        }
    }

    function checkValid (){
        if (width.value.length === 0  && height.value.length === 0){
            btnPaint.disabled = true
        }
        else {
            btnPaint.disabled = false
        }
    }
    checkValid()


    btnPaint.onclick = function (){
        if (ellipse.checked){
            paintEllipse()
        }
        else {
            paintSq()
        }

    }




    //- Створити куку з експерейшен таймом не більше 1 хв.
    // Створити функцію перевірки яка читає данні з куки і виводить значення ця кука робоча чи вже втратила актуальність

    let specialName = "DimitriyPavlov"
    let btnCookie = document.querySelector('.ReadCookie')
    let res = document.querySelector('.CookieValue')
    let date = new Date(Date.now()+6000)
    let cookie = document.cookie = `${encodeURIComponent(specialName)} = "path=/; expires = ${date}";`
    console.log(cookie.valid)
    btnCookie.onclick = ( ) => {
        if (document.cookie.indexOf("DimitriyPavlov") == 0) {

            res.innerHTML = cookie

        }
        else{
            res.innerHTML = "Куки не валидный"
        }
    }


    //+++++++- Створити коло в канвасі і розмістити в середині кола текст
    let canvas = document.querySelector('.canvas2')
    let ctx = canvas.getContext('2d')
    function drawCircle () {
        ctx.translate(50 , 50)
        ctx.beginPath(0 , 0)
        ctx.arc(100 , 100 , 100 , 50 , 100 , )
        ctx.stroke();
    }
    drawCircle()
    function text (){
        ctx.font = "16px Helvetic"
        ctx.strokeText('Canvas Text' , 65 , 100)
    }
    text()

}