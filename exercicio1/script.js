const array = [
    [27, 4, 20, 13, 14],
    [11, 15, 12, 8, 9],
    [5, 5, 12, 16, 4],
    [20, 33, 11, 12, 19],
    [3, 3, 4, 5, 10]
]
  
  for (let indiceJogadores = 0; indiceJogadores < array.length; indiceJogadores++) {
    const jogador = array[indiceJogadores]
    let gols = `Jogador ${indiceJogadores + 1}: `
  
    for (let jogadores = 0; jogadores < jogador.length; jogadores++) {
      gols += `${jogador[jogadores]}, `
    }
    gols = gols.slice(0, -2)
  
    console.log(gols)
  }
