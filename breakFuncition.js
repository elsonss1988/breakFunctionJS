function funcBreakWord(varName) {
    //função de quebra de palvras.
    var breakWord = "";
    if (varName.length > 17) {
      positionSlice = varName.indexOf(" ", 17);
      // Localizar a primeira posição de espaço apos 17 Caracteres
      var climaStringInicial = varName.slice(0, positionSlice);
      // Seleciona primeira parte do espaço
      var climaStringParcial = varName.substr(positionSlice);
      // Seleciona o resto após o espaço
  
      if (climaStringParcial.length > 17) {
        // Caso o resto após seja maior realizar a recursiva.
        breakWord += climaStringInicial + "<br>" + myFunction(climaStringParcial);
        //Recursiva + a primeira parte 
        climaStringInicial = "";
        // Limpeza da repetição das recursivas.
        climaStringParcial = climaStringParcial;
        // Limpeza da repetição das recursivas.
        return "<br>" + breakWord + "<br><br>";
        // Após recursiva saida da função
      }
      return climaStringInicial + "<br>" + climaStringParcial;
      // Caso o resto não exceda o limite retorna sem recursiva                    
    } else {
      // Caso a palavra seja menor que o limite retornar o valor de entrada.
      return varName;
    }
  }