'use strict'

fetch('https://reqres.in/api/users?per_page=12')
    .then((res) => {
        return res.json()
    })
    .then((body) => {
        console.log(body.data);
        console.log('_________________');
        console.log('Пункт 1');
        body.data.forEach(element => {
            console.log(element.last_name);
        });
        console.log('_________________');
        console.log('Пункт 2');
        body.data.filter(item => item.last_name.startsWith('F')).forEach(element => {
            console.log(element.last_name)
        });
        console.log('_________________');
        console.log('Пункт 3');
        console.log('Наша база содержит данные следующих пользователей:',
        body.data.reduce((acc, item) => acc + item.first_name + " " + item.last_name + ", ", ""));
        console.log('_________________');
        console.log('Пункт 4');
        Object.keys(body.data[0]).forEach(element => console.log(element));
    })
    .catch((e) => {
        console.log(e);
    })