let x = 50;
let y = 54;
x += 5

console.log(x + y);

for (let go = 0; go < 20; go += 2) {
    console.log(go);
}

cart = [1, 2, 3, 4, 5]
let f = [0]
while (f < 3) {
    console.log(cart[f])
    f++
}


for (let i = 0; i < 10; i++) {
    if (i == 3) {
        continue;
    }
    console.log(i)
}

let nums = [2, 3, 5, 10];
let res = 0;
for (let d = 0; d < 4; d++) {
    res += nums[d];
}
console.log(res);

function login(users) {
    console.log("Hi, " + users);
}
login('ahmed');
alert("Hello");

let btn = document.getElementById('login');
btn.onclick = hello;
window.onload = function () {
    let btn = document.getElementById('login');
    btn.onclick = hello;
}