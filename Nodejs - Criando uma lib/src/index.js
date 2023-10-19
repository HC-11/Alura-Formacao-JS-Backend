import fs from 'fs';
import chalk from 'chalk';

function extrairLinks(texto){
  const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
  const capturas = [...texto.matchAll(regex)];
  const resultados = capturas.map(capturas => ({[capturas[1]]: capturas[2]}));

  return resultados.length !==0 ? resultados : 'Não tem links no arquivo';
}

function emCasoDeErro(erro){
   console.log(erro);
   throw new Error(chalk.redBright(erro.code, 'Arquivo não encontrado'))
}

//Usando async/await
async function pegaArquivo(caminhoDoArquivo) {  
   
   try {
     const encoding = 'utf-8';
     const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
     return extrairLinks(texto);

   } catch(erro) {
     emCasoDeErro(erro);
   } 
}

export default pegaArquivo;

