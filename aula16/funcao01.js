function parimp(n){//função de verificar se o número é par ou impar
    if (n%2 == 0) {
        return 'Par!'
    } else {
        return 'Ímpar!'
    }
}

let res = parimp(5)
console.log(res)