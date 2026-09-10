let users = {};

for (let i = 1; i <= 10; i++) {
    let name = prompt("Имя пользователя - " + i);
    let age = prompt("Возраст - " + i);

    users[i] = {
        name: name,
        age: age
    };

    console.log("Пользователь - " + i);
    console.log("Имя - " + name);
    console.log("Возраст - " + age);
}



console.log(users);

{
    1: {
        name: "Иван",
        age: "36"
    },
    2: {
        name: "Сардор",
        age: "24"
    },
    3: {
        name: "Виктория",
        age: "29"
    }
}