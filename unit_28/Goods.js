//создание объекта с помощью класса
class Goods {
    constructor(name, price, image, count) {
        //определяем свойства 
        this.name = name
        this.price = price
        this.image = image
        this.count = count
        // определяем метод
        this.draw = function () {
            let out = document.createElement('div');
            document.querySelector('.out-4').append(out);
            out.classList.add()
        }
    }
}