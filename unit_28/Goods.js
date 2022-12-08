//создание объекта с помощью класса
class Goods {
    constructor(name, price, image, count) {
        //определяем свойства 
        this.name = name
        this.price = price
        this.image = image
        this.count = count
    }
    draw() {
        //создаем объект, где товар будет помещаться
        let myDiv = document.createElement('div');
        // создаем элемент и именем и добавляем в div
        let nameEl = document.createElement('h1');
        nameEl.innerText = this.name;
    }
}
