// products section 
displayitem()
function displayitem(){

    let productscontainer = document.querySelector(".pro-container")
    let innerHTML = ''
    items.forEach(item => {
        innerHTML +=`
        <div class="pro">
                        <img src="${item.image}" alt="">
                        <div class="des">
                            <span class="companyname">${item.company}</span>
                            <h5 class="brandname">${item.item_name}</h5>
                            <div class="star">
                            <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </div>
                            <div id="cart">

                                <h4 class="price">$${item.current_price}</h4>
                                <a href=""><i style="font-size: 20px;" class="fa-solid fa-cart-plus"></i></a>
                            </div>
                        </div>
                    </div>
        `})



        productscontainer.innerHTML = innerHTML



        let productscontainer1 = document.querySelector(".pro-container1")
        let innerHTML1 = ''
        items1.forEach(item => {
            innerHTML1 +=`
            <div class="pro">
                            <img src="${item.image}" alt="">
                            <div class="des">
                                <span class="companyname">${item.company}</span>
                                <h5 class="brandname">${item.item_name}</h5>
                                <div class="star">
                                <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </div>
                                <div id="cart">
    
                                    <h4 class="price">$${item.current_price}</h4>
                                    <a href=""><i style="font-size: 20px;" class="fa-solid fa-cart-plus"></i></a>
                                </div>
                            </div>
                        </div>
            `})
    
    
    
            productscontainer1.innerHTML = innerHTML1





            let productscontainer3 = document.querySelector(".pro-container3")
            let innerHTML3 = ''
            items3.forEach(item => {
                innerHTML3 +=`
                <div class="pro">
                                <img src="${item.image}" alt="">
                                <div class="des">
                                    <span class="companyname">${item.company}</span>
                                    <h5 class="brandname">${item.item_name}</h5>
                                    <div class="star">
                                    <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                    </div>
                                    <div id="cart">
        
                                        <h4 class="price">$${item.current_price}</h4>
                                        <a href=""><i style="font-size: 20px;" class="fa-solid fa-cart-plus"></i></a>
                                    </div>
                                </div>
                            </div>
                `})
        
        
        
                productscontainer3.innerHTML = innerHTML3

        
        

        

        
    }
















const bar = document.getElementById("bar")
const nav = document.getElementById("navbar")
const close = document.getElementById("close")

let html = document.documentElement

if (bar) {
    bar.addEventListener("click", () => {
        nav.classList.add("active")
    })
}
if (close) {
    close.addEventListener("click", () => {
        nav.classList.remove("active")
    })


}


// multiple tabs 

const tabs = document.querySelectorAll(`[data-tab-target]`)
const tabContents = document.querySelectorAll(`[data-tab-content]`)


tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        const target = document.querySelector(tab.dataset.tabTarget)
        // console.log(target)
        tabContents.forEach(tabcontent => {
            tabcontent.classList.remove("active")
        })

        tabs.forEach(tab => {
            tab.classList.remove("active")
        })
        tab.classList.add("active")
        target.classList.add("active")

    })
})

let proimg = document.getElementById("pro-img")
let detailpage = document.getElementById("pro-details")
let minopage = document.getElementById("minor-details")
let backward = document.getElementById("backward")
proimg.addEventListener("click", () => {
    detailpage.style.display = "block"
    minopage.style.display = "none"
})
backward.addEventListener("click", () => {
    detailpage.style.display = "none"
    minopage.style.display = "block"
})

let mainimg = document.getElementById("MainImg")
let smalimg = document.getElementsByClassName("small-img")

// console.log(smalimg[1].src)
// console.log(mainimg.src)

for (let i = 1; i < smalimg.length; i++) {
    smalimg[i].addEventListener("click", () => {
        mainimg.src = smalimg[i].src
    })
}




// shoppping cart 


var cancelbtn = document.getElementsByClassName('cancel')
for (var i = 0; i < cancelbtn.length; i++) {
    var dngerbtn = cancelbtn[i]
    dngerbtn.addEventListener('click', removecartitem)
}
function removecartitem(event) {

    var clickedbtn = event.target
    clickedbtn.parentElement.remove()
    updatetotal()

}






var quantity = document.getElementsByClassName("quantity")
for (var i = 0; i < quantity.length; i++) {
    var input = quantity[i]
    input.addEventListener('change', quantitychanged)
}
function quantitychanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updatetotal()
}



var addcartbtn = document.getElementsByClassName("addtocartbtn")
    for (var i = 0; i < addcartbtn.length; i++) {
        var btn = addcartbtn[i]
        btn.addEventListener("click", addtocartclicked)
    }


function addtocartclicked(event){
    var btn=event.target
    var shopitem=btn.parentElement.parentElement.parentElement.parentElement
    // console.log(shopitem)
    var title=shopitem.getElementsByClassName("shopitemtitle")[0].innerText
    var price=shopitem.getElementsByClassName("shopitemprice")[0].innerText
    var img=shopitem.getElementsByClassName("shopitemimg")[0].src
    addtocart(title,price,img)
    updatetotal()
}
function addtocart(title,price,img){
    var cartRow=document.createElement("div")
    var cartitems=document.getElementsByClassName("shoppingCartBox")[0]
    var cartnames=cartitems.getElementsByClassName("modeltitle")
    for(var i=0;i<cartnames.length;i++){
        if(cartnames[i].innerText==title){
            alert("This item is already added to the cart")
            return
        }
    }
    var cartcontent=`
    <div class='shopcart'>
                    <button class='cancel'>delete</button>
                    <img src='${img}' alt=''>
                    <p class="modeltitle">${title}</p>
                    <p class='price'>${price}</p>
                    <input type="number" class='quantity' value="1">
                </div>
                `

    cartRow.innerHTML=cartcontent
    cartitems.append(cartRow)
    cartRow.getElementsByClassName("cancel")[0].addEventListener("click",removecartitem)
    cartRow.getElementsByClassName("quantity")[0].addEventListener("change",quantitychanged)
}


function updatetotal() {
    var cartitems = document.getElementsByClassName('shoppingCartBox')[0]
    var cartrows = document.getElementsByClassName('shopcart')
    // console.log(cartrows)
    var totalprice = 0
    for (var i = 0; i < cartrows.length; i++) {
        var cartrow = cartrows[i]
        // console.log(cartrow)
        var cartitemquantity = cartrow.getElementsByClassName('quantity')[0]
        var cartitemprice = cartrow.getElementsByClassName('price')[0]
        // console.log(cartitemquantity,cartitemprice)
        var price = parseFloat(cartitemprice.innerText.replace('$', ' '))
        var quantity = parseFloat(cartitemquantity.value)
        // console.log(price, quantity)
        var totalprice = totalprice + price * quantity


    }

    // console.log(totalprice)
    let pricevalue = document.getElementById("pricevalue")
    pricevalue.innerText = "$" + totalprice
}

document.getElementById("purchase").addEventListener("click",purchasebtnclicked)

function purchasebtnclicked(){
    alert("Thank you for your purchase")
    var cartitembox=document.getElementsByClassName("shoppingCartBox")[0]
    while(cartitembox.hasChildNodes()){
        cartitembox.removeChild(cartitembox.firstChild)
    }
    updatetotal()
}