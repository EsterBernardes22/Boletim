function media() {
    let nom = window.prompt('Qual é o nome do aluno?') 
    let n1 = Number(window.prompt(`Qual foi a primeira nota de ${nom}?`))
    let n2 = Number(window.prompt(`Qual foi a segunda nota de ${nom}?`))
    let n3 = Number(window.prompt(`Qual foi a terceira nota de ${nom}?`))
    let n4 = Number(window.prompt(`Qual foi a quarta nota de ${nom}?`))
    med = (n1 + n2 + n3 + n4)/4

    let msg // cria uma variável e deixa ela vazia
    if (med >= 6) { // Se por acaso a média foi 6.0 ou mais...
        msg = 'Aprovado' 
    }    

    if (med <= 4) { // Se por acaso a média foi 6.0 ou mais...
        msg = 'Reprovado'  
    } 
    
    if (med >= 5) { // Se por acaso a média foi 6.0 ou mais...
        msg = 'Recuperação'
    }

    // O if é uma estrutura que cria uma CONDIÇÃO, que executa um bloco de comandos ou outro, dependendo do resultado de um teste lógico.

    let res = document.getElementById('situacao')
    res.innerHTML = `<p>Calculando a média final de <mark>${nom}</mark>.</p>`
    res.innerHTML += `<p>As notas obtidas foram <mark>${n1} / ${n2} / ${n3} / ${n4}</mark>.</p>` 
    res.innerHTML += `<p>A média final será <mark>${med}</mark>.</p>`
    res.innerHTML += `<p>A mensagem que temos é: <strong style='color:lightblue;'>${msg}</strong></p>` // Note que eu usei até um pouco de CSS pra fazer a mensagem ficar vermelha ;)
}