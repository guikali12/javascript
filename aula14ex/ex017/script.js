function tabuada(){//funçao de tabuada com laços de repetição
   let num = document.getElementById('txtin')
   let tab= document.getElementById('seltab') 

   if(num.value.length == 0) {
        alert('Por favor, digite um número!')
    
   } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while(c<=10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
       /*Opção com comando for
        for(c = 1;c <= 10;c++){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
        */
   }
}