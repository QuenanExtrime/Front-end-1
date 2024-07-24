const buttons = document.querySelectorAll('button');

// console.log(buttons);

// for (var i = 1 ; i > buttons.length; i++){
//     document.querySelector(`div.product-${i}`).addEventListener('click', function(){
//         alert(`Compra realizada no valor de ${document.querySelector(`div.product-${i} p.price`).textContent}`)
//     })
// }

// console.log(document.querySelector('div.product-1 p.price').textContent)

document.querySelector('div.product-1').addEventListener('click', function(){
    alert(`Compra realizada no valor de ${document.querySelector('div.product-1 p.price').textContent}`)
})

document.querySelector('div.product-2').addEventListener('click', function(){
    alert(`Compra realizada no valor de ${document.querySelector('div.product-2 p.price').textContent}`)
})

document.querySelector('div.product-3').addEventListener('click', function(){
    alert(`Compra realizada no valor de ${document.querySelector('div.product-3 p.price').textContent}`)
})



