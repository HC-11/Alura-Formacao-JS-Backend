import pegaArquivo from "./index.js";
import chalk from "chalk";
import fs from 'fs';
import listaValidada from "./http-validacao.js";

const caminhoDoTexto = process.argv;

async function imprimeLista(valida, resultado, identificador = ''){

   if (valida){
      console.log(chalk.yellowBright.bold('Lista validada: '),
      chalk.black.bgWhite(identificador), 
      await listaValidada(resultado));  
   } else{ 
      console.log(chalk.yellowBright.bold('Lista de links: '),
      chalk.black.bgWhite(identificador), resultado);
   }

}

async function processaTexto(argumentos){
   const caminho = argumentos[2];
   const valida = argumentos[3] === '--valida';
   
   try {
     fs.lstatSync(caminho);
   } catch(erro){
      if(erro.code === 'ENOENT'){
         console.log(chalk.redBright.bgGrey('Arquivo ou diretório não existe/não encontrado'));
         return;
      }
   }

   if(fs.lstatSync(caminho).isFile()){
      const resultado = await pegaArquivo(argumentos[2]);
      imprimeLista(valida, resultado);

   } else if(fs.lstatSync(caminho).isDirectory()) {
      const arquivos = await fs.promises.readdir(caminho)
      
      arquivos.forEach(async (nomeDoArquivo) => {
         const lista = await pegaArquivo(`${caminho}/${nomeDoArquivo}`);
         imprimeLista(valida, lista, nomeDoArquivo);
      })
   }

}

processaTexto(caminhoDoTexto)