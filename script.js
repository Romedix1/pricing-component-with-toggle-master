const annuallyPrice = document.querySelectorAll('.annually-price');
const monthlyPrice = document.querySelectorAll('.monthly-price');
let switchBox = document.querySelector('#checkbox');


switchBox.addEventListener('click',()=>{

        if(switchBox.checked==true)
        {
            monthlyPrice.forEach(monthprice => monthprice.style.display = "flex")
            annuallyPrice.forEach(yearprice => yearprice.style.display = "none")
        } 
        else if(switchBox.checked==false)
        {
            monthlyPrice.forEach(monthprice => monthprice.style.display = "none")
            annuallyPrice.forEach(yearprice => yearprice.style.display = "flex")
        }


})