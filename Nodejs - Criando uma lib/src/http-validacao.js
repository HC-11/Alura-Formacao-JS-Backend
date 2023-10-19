//import chalk from "chalk";

function extrairOsLinks(arrayDeLinks){
  return arrayDeLinks.map((objetoLink) => Object.values(objetoLink).join())
}

async function checaStatusURL(listaURLS){
  const arrayStatus = await Promise.all(
  listaURLS.map(async(url) => {
      try {
        const response = await fetch(url)
        return response.status;
    } catch(erro){
      return manejaErros(erro);
    }
  
  })
    )
  return arrayStatus;
}

function manejaErros(erro){
 if (erro.cause.code === 'ENOTFOUND'){
  return 'Link não encontrado';
 } else {
  return 'Erro do Além';
 }
}

export default async function listaValidada(listaDeLinks){
   const links = extrairOsLinks(listaDeLinks);
   const status = await checaStatusURL(links);
   
   return listaDeLinks.map((objeto, indice) => ({
    ...objeto,
    status: status[indice]
   }))
}
