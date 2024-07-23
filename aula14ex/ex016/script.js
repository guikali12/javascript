function contar(){
    let ini = document.getElementById('txti')//chamando as variaveis do html
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        //window.alert('[ERRO] Faltam dados!')
        res.innerHTML = 'Impossível contar!'
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)//transformando as strings em números
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p <= 0){
            alert(' Passo inválido! Considerando PASSO 1')
            p = 1
        }
        
        if(i < f){//contagem crescente
            for(let c = i; c<= f; c += p){
                res.innerHTML += ` ${c} \u{1F449}`
            }
            res.innerHTML += `\u{1F3C1}`
        } else {//contagem decrescente
            for(let c = i; c >= f; c -= p){
                res.innerHTML += ` ${c} \u{1F449}`
            }
            res.innerHTML += `\u{1F3C1}`
        }
        
    }            

}



/*function rep(){
    var num = document.getElementById('inicio')
    var med = document.getElementById('medio')
    var inc = document.getElementById('contador')
    var res = document.getElementById('res')
    if(num.value.lenght==0){
        alert('[ERRO] verifique o número incial e tente novamente! ')
    }
    else {
        for(num=num;num<=medio;contador++){
            
        }
    }
    res.innerHTML=`${num}`
}*/