
// Task 1 ============================================
/* Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 1. Выведите в out-1 результат. Запускаться функция должна по нажатию b-1. */


const requestUrl = 'http://getpost.itgid.info/index2.php?auth=7859d9d42a8834141d529577207c9596&action=1'
function t1() {
    let xhtpp = new XMLHttpRequest();
    xhtpp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            myFunction(this.responseText)
        }
    }
    xhtpp.open('GET', requestUrl, true)
    xhtpp.send()
    function myFunction(data) {
        let a = data;
        document.querySelector('.out-1').innerHTML = a
    }

}

document.querySelector('.b-1').addEventListener('click', t1)
// Task 2 ============================================
/* Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 2. Добавьте параметр name с вашим именем на латинице. Если все сделано верно, сервер пришлет строку hello ваше имя. Выведите в out-2 результат. Запускаться функция должна по нажатию b-2. */

const requestUrl2 = 'http://getpost.itgid.info/index2.php?auth=7859d9d42a8834141d529577207c9596&action=2&name=Yulia'
function t2() {
    let xhtpp = new XMLHttpRequest();
    xhtpp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            myFunction(this.responseText)
        }
    }
    xhtpp.open('GET', requestUrl2, true)
    xhtpp.send()
    function myFunction(data) {
        a = data;
        console.log(data)
        document.querySelector('.out-2').innerHTML = a
    }

}

document.querySelector('.b-2').addEventListener('click', t2)


// Task 3 ============================================
/*  Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 3. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет сумму чисел.  Выведите в out-3 результат. Запускаться функция должна по нажатию b-3. */

const requestUrl3 = 'http://getpost.itgid.info/index2.php?auth=7859d9d42a8834141d529577207c9596&action=3&num1=12&num2=11'
function t3() {
    let xhtpp = new XMLHttpRequest();
    xhtpp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            myFunction(this.responseText)
        }
    }
    xhtpp.open('GET', requestUrl3, true)
    xhtpp.send()
    function myFunction(data) {
        a = data;
        console.log(a)
        document.querySelector('.out-3').innerHTML = a;
    }

}

document.querySelector('.b-3').addEventListener('click', t3)


// Task 4 ============================================
/*  Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 4. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет случайное число в заданном диапазоне. Не забывайте указывать параметр auth (ключ в чате).  Выведите в out-4 результат. Запускаться функция должна по нажатию b-4. */

const requestUrl4 = 'http://getpost.itgid.info/index2.php?auth=7859d9d42a8834141d529577207c9596&action=4&num1=1&num2=10'
function t4() {
    let xhtpp = new XMLHttpRequest();
    xhtpp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            myFunction(this.responseText)
        }
    }
    xhtpp.open('GET', requestUrl4, true)
    xhtpp.send()
    function myFunction(data) {
        a = data;
        console.log(a)
        document.querySelector('.out-4').innerHTML = a;
    }

}

document.querySelector('.b-4').addEventListener('click', t4)

// Task 5 ============================================
/*  Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 5. Если все сделано верно, сервер вернет текущее время и дату. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-5 результат. Запускаться функция должна по нажатию b-5. */

const requestUrl5 = 'http://getpost.itgid.info/index2.php?auth=7859d9d42a8834141d529577207c9596&action=5'
function t5() {
    let xhtpp = new XMLHttpRequest();
    xhtpp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            myFunction(this.responseText)
        }
    }
    xhtpp.open('GET', requestUrl5, true)
    xhtpp.send()
    function myFunction(data) {
        a = data;
        console.log(a)
        document.querySelector('.out-5').innerHTML = a;
    }

}

document.querySelector('.b-5').addEventListener('click', t5)

// Task 6 ============================================
/*  Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 6. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет большее число. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-6 результат. Запускаться функция должна по нажатию b-6. */

const requestUrl6 = 'http://getpost.itgid.info/index2.php?auth=7859d9d42a8834141d529577207c9596&action=6&num1=1&num2='
function t6() {
    let xhtpp = new XMLHttpRequest();
    xhtpp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            myFunction(this.responseText)
        }
    }
    xhtpp.open('GET', requestUrl6, true)
    xhtpp.send()
    function myFunction(data) {
        a = data;
        console.log(a)
        document.querySelector('.out-6').innerHTML = a;
    }

}

document.querySelector('.b-6').addEventListener('click', t6)

// Task 7 ============================================
/*  Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 7. Если все сделано верно, сервер случайную ссылку на изображение. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-7 результат. Запускаться функция должна по нажатию b-7. */
const requestUrl7 = 'http://getpost.itgid.info/index2.php?auth=7859d9d42a8834141d529577207c9596&action=7'
function t7() {
    let xhtpp = new XMLHttpRequest();
    xhtpp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            myFunction(this.responseText)
        }
    }
    xhtpp.open('Get', requestUrl7, true)
    xhtpp.send();
    function myFunction(data) {
        let a = data;
        document.querySelector('.out-7').innerHTML = a;
    }
}

document.querySelector('.b-7').addEventListener('click', t7)

// Task 8 ============================================
/* Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 8. В качестве параметра по очереди укажите year равный году вашего рождения. Если все правильно сервер вернет ваш возраст. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-8 результат. Запускаться функция должна по нажатию b-8.*/
const requestUrl8 = 'http://getpost.itgid.info/index2.php?auth=7859d9d42a8834141d529577207c9596&action=8&year=1989'
function t8() {
    let xhtpp = new XMLHttpRequest();
    xhtpp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            myFunction(this.responseText)
        }
    }
    xhtpp.open("GET", requestUrl8, true);
    xhtpp.send();
    function myFunction(data) {
        let a = data;
        document.querySelector('.out-8').innerHTML = a;
    }
}

document.querySelector('.b-8').addEventListener('click', t8)


// Task 9 ============================================
/* Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 9. В качестве параметра по очереди укажите m = 1, d=1, y=1. Если все сделано верно, сервер возвратит дату или месяц или год. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-9 результат. Запускаться функция должна по нажатию b-9. */
const requestUrl9 = 'http://getpost.itgid.info/index2.php?auth=7859d9d42a8834141d529577207c9596&action=9&m=1'
function t9() {
    let xhtpp = new XMLHttpRequest();
    xhtpp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            myFunction(this.responseText)
        }
    }
    xhtpp.open('GET', requestUrl9, true);
    xhtpp.send();
    function myFunction(data) {
        let a = data;
        document.querySelector('.out-9').innerHTML = a;
    }
}

document.querySelector('.b-9').addEventListener('click', t9)


// Task 10 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 1. Если все сделано верно, сервер пришлет строку hello. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-10 результат. Запускаться функция должна по нажатию b-10.

*/

const requestUrl10 = 'http://getpost.itgid.info/index2.php?auth=7859d9d42a8834141d529577207c9596&action=1'
function t10() {
    let xhtpp = new XMLHttpRequest();
    xhtpp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            myFunction(this.responseText)
        }
    }
    xhtpp.open('POST', requestUrl10, true)
    xhtpp.send()
    function myFunction(data) {
        let a = data;
        document.querySelector('.out-10').innerHTML = a
    }

}
document.querySelector('.b-10').addEventListener('click', t10)

// Task 11 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 2. Добавьте параметр name с вашим именем на латинице. Если все сделано верно, сервер пришлет строку hello ваше имя. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-11 результат. Запускаться функция должна по нажатию b-11. */

const requestUrl11 = 'http://getpost.itgid.info/index2.php?auth=7859d9d42a8834141d529577207c9596&action=2&name=Yulia'
function t11() {
    let xhtpp = new XMLHttpRequest();
    xhtpp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            myFunction(this.responseText)
        }
    }
    xhtpp.open('POST', requestUrl11, true)
    xhtpp.send()
    function myFunction(data) {
        let a = data;
        document.querySelector('.out-11').innerHTML = a
    }

}
document.querySelector('.b-11').addEventListener('click', t11)

// Task 12 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 3. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет сумму чисел. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-12 результат. Запускаться функция должна по нажатию b-12.*/

const requestUrl12 = 'http://getpost.itgid.info/index2.php?auth=7859d9d42a8834141d529577207c9596&action=3&num1=33&num2=44'
function t12() {
    let xhtpp = new XMLHttpRequest();
    xhtpp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            myFunction(this.responseText)
        }
    }
    xhtpp.open('POST', requestUrl12, true)
    xhtpp.send()
    function myFunction(data) {
        let a = data;
        document.querySelector('.out-12').innerHTML = a
    }

}
document.querySelector('.b-12').addEventListener('click', t12)

// Task 13 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 4. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет случайное число в заданном диапазоне. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-13 результат. Запускаться функция должна по нажатию b-13.*/

const requestUrl13 = 'http://getpost.itgid.info/index2.php?auth=7859d9d42a8834141d529577207c9596&action=4&num1=13&num2=4'
function t13() {
    let xhtpp = new XMLHttpRequest();
    xhtpp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            myFunction(this.responseText)
        }
    }
    xhtpp.open('POST', requestUrl13, true)
    xhtpp.send()
    function myFunction(data) {
        let a = data;
        document.querySelector('.out-13').innerHTML = a
    }

}
document.querySelector('.b-13').addEventListener('click', t13)

// Task 14 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 5. Если все сделано верно, сервер вернет текущее время и дату. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-14 результат. Запускаться функция должна по нажатию b-14.*/

const requestUrl14 = 'http://getpost.itgid.info/index2.php?auth=7859d9d42a8834141d529577207c9596&action=5'
function t14() {
    let xhtpp = new XMLHttpRequest();
    xhtpp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            myFunction(this.responseText)
        }
    }
    xhtpp.open('POST', requestUrl14, true)
    xhtpp.send()
    function myFunction(data) {
        let a = data;
        document.querySelector('.out-14').innerHTML = a
    }

}
document.querySelector('.b-14').addEventListener('click', t14)

// Task 15============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 6. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет большее число. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-15 результат. Запускаться функция должна по нажатию b-15. */

const requestUrl15 = 'http://getpost.itgid.info/index2.php?auth=7859d9d42a8834141d529577207c9596&action=6&num1=55&num2=100'
function t15() {
    let xhtpp = new XMLHttpRequest();
    xhtpp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            myFunction(this.responseText)
        }
    }
    xhtpp.open('POST', requestUrl15, true)
    xhtpp.send()
    function myFunction(data) {
        let a = data;
        document.querySelector('.out-15').innerHTML = a
    }

}
document.querySelector('.b-15').addEventListener('click', t15)

// Task 16 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 7. Если все сделано верно, сервер случайную ссылку на изображение. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-16 результат. Запускаться функция должна по нажатию b-16. */

function t16() {

}

// ваше событие здесь!!!

// Task 17 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 8. В качестве параметра по очереди укажите year равный году вашего рождения. Если все правильно сервер вернет ваш возраст. Не забывайте указывать параметр auth (ключ в чате).Выведите в out-17 результат. Запускаться функция должна по нажатию b-17. */

function t17() {

}

// ваше событие здесь!!!

// Task 18 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 9. В качестве параметра по очереди укажите m = 1, d=1, y=1. Если все сделано верно, сервер возвратит дату или месяц или год. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-18 результат. Запускаться функция должна по нажатию b-18. */

function t18() {

}

// ваше событие здесь!!!

