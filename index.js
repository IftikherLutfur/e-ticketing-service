const allBtn = document.getElementsByClassName("kbd");
let count = 0;
let count2 = 40;
for (const btn of allBtn) {
    btn.addEventListener("click", function(e){
        count += 1;
        count2 = count2-1;

     const totalPrice = document.getElementById("total-price");
     const price = parseInt(totalPrice).innerText = count*550;
     
     const grandTotal = document.getElementById("grand-total");
     const total = parseInt(grandTotal).innerText = price;
        
        setInnerText("diff",count2)
        setInnerText("grand-total",total)
        setInnerText("total-price",price)
        setInnerText("seat-count", count)
    })
    

   
}
function setInnerText(id,value){
    document.getElementById(id).innerText = value;
}

