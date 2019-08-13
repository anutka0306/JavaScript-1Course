window.onload = function () {
    const goodsWrap = document.querySelector('#goods');
    const goods = goodsWrap.querySelectorAll('.good');
    const cart = document.querySelector('#cart');
    let totalPrice = 0;
    const totalWrapper = cart.querySelector('.total');

    goods.forEach(good =>{
        const btn = good.querySelector('button');
        btn.onclick = function () {
            const name = good.querySelector('.name').innerHTML;
            const price = good.querySelector('.price').innerHTML;
            addToCart(name, price);
        }
    });

    function addToCart(name, price) {
        console.log(name);
        console.log(price);
       const goodName =  document.createElement('p');
       const goodPrice =  document.createElement('p');
       goodName.innerHTML = name;
       goodPrice.innerHTML = price;
       cart.appendChild(goodName);
       cart.appendChild(goodPrice);
       totalPrice += +price;
       totalWrapper.innerText = 'Total: '+ totalPrice;


    }
}