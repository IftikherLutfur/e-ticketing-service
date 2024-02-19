const allBtn = document.getElementsByClassName("kbd");
let count = 0;
let count2 = 40;
for (const btn of allBtn) {
    btn.addEventListener("click", function(e){
        count += 1;
        count2 = count2-1;
        if(count2<0){
            return count2;
        }
        else if(count === 5){
            return alert("Cannot select more")
        }

    

     const totalPrice = document.getElementById("total-price");
     const price = parseInt(totalPrice).innerText = count*550;
     
     const grandTotal = document.getElementById("grand-total");
     const total = parseInt(grandTotal).innerText = price;
     
     const seat = e.target.innerText; 
     const classic="Economic" 
     const balance = "550"
     const button = document.getElementById("dynamic-seat");
     const p = document.createElement("p");
     const p2 = document.createElement("p");
     const p3 = document.createElement("p");

     p.innerText=seat;
     p2.innerText=classic;
     p3.innerText=balance;

     button.appendChild(p);
     button.appendChild(p2);
     button.appendChild(p3)
     
     //Set background color
     e.target.style.backgroundColor="green"

     
        
        setInnerText("diff",count2)
        setInnerText("grand-total",total)
        setInnerText("total-price",price)
        setInnerText("seat-count", count)
    })

    function handle(){
       const element=document.getElementById("success");
       element.classList.remove('hidden')
    }
    
}
  

function setInnerText(id,value){
    document.getElementById(id).innerText = value;
}

function showElementById(elementId){
    const element =document.getElementById(elementId);
    element.classList.remove('hidden')}