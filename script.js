function tabuada() { 
    let num = document.getElementById('numero');
    let tab = document.getElementById('seltab');
    if (num.value.length == 0){
        alert( 'POR FAVOR DIGITE UM NUMERO');
    }
    else{
        let n = Number(num.value)
        let d = 1
    
        tab.innerHTML=''
        while( d <= 10){
            let item =  document.createElement('option')
             item.text = (n) + "x" + (d) + "=" + (n*d)
             item.value = 'tab${d}'
             tab.appendChild(item)
             d++
        }
    }
}

   

