// import axios from 'axios';
import { create } from 'apisauce';

/* Endereços para cada emulador/simulador:
 ** Genymotion:              http://10.0.3.2:3333/
 ** Emulador Android Studio: http://10.0.2.2:3333/
 ** Simulador IOS:           http://localhost:3333/
 */

// const api = axios.create({
//   baseURL: 'http://10.0.3.2:3333/',
// });

const api = create({
  baseURL: 'http://10.0.3.2:3333/',
});

// Meu Interceptador: Assim que eu receber a resposta da minha api
// e antes de eu enviar ela pra minha response e,e vai rodar o Transform
// Consigo fazer alterações nos resultados da minha api antes dela chegar
// Ao meu componente do react.
api.addResponseTransform((response) => {
  if (!response.ok) throw response;
});
// Se o meu response não tiver ok, irei disparar um erro com o nosso objeto
// response com esse erro, caindo em nosso catch

export default api;
