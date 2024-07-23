let num = [5,8,4]
num [3] = 6//adiciona o numero 6 no espaço 3, este é criado automaticamente se não existe no array
num.push(9)//adiciona o conteudo por ultimo no vetor
//num.length - mostra o tamanho do array
num.sort() // organiza de maneira decrescente o array
let pos = num.indexOf(4)//função .indexOf mostra onde está o valor desejado na procura, caso não ter o valor retorna -1
    if (pos == -1){
        console.log('O valor não foi encontrado!')
    } else {
        console.log(`O valor está na posição ${pos}`)
    }


