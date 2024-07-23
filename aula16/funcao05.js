// função recursiva, onde se chama a própria função dentro da estrutura dela
function fatorial(n){
    if(n == 1){
        return 1
    } else {
        return n * fatorial(n-1)
    }
}

console.log(fatorial(5))