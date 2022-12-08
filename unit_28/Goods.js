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
        //создаем объект, куда товар будет помещаться
        let myDiv = document.createElement('div');
        // создаем элемент c именем и добавляем в div
        let nameEl = document.createElement('h1');
        nameEl.innerText = this.name;
        myDiv.append(nameEl);
        // создаем price товара
        let priceEl = document.createElement('p');
        priceEl.innerText = this.price;
        myDiv.append(priceEl)
        // создаем картинку 
        let image = document.createElement('img');
        image.src = this.image;
        myDiv.append(image);
        return myDiv;
    }
}
