/* 1..Escribe una función llamada "addArrayProperty(obj, key, array)".

Dado un objeto, una clave y un array, "addArrayProperty" establece una nueva propiedad sobre el objeto en la clave dada,
con su valor establecido en el array dado.*/
var Obj = {};
var key = 'myProperty';
var arr = [1, 3];
const addArrayProperty=(obj, key, arr)=> {
  // your code here
Object.defineProperty(obj,'key',{
   value: arr
 });
 console.log(obj,key,arr);
}

/* 2.. Dado un objeto como parámetro, contar la cantidad de
propiedades que este contiene y retornarlo. */

var obj = {'name':  'john','lastname': 'Doe'}

const objectPropertiesCounter = (obj) => {
	let o= Object.keys(obj);
	return o.length;
};
objectPropertiesCounter(obj);	

/* 3 --> Escribe una función llamada "removeStringValuesLongerThan".

Dado un número y un objeto,"removeStringValuesLongerThan" elimina cualquier propiedad en el objeto dado cuyos valores son cadenas de texto más largas que el número dado.

*/





/* 10 -> Escribir una función llamada "transformEmployeeData" que transforma algunos datos de los empleados de un formato a otro.
*/
function transformEmployeeData(array) {
  // your code here
  const retorno = [];
	for(let aTransformar of array){
		const objetoARetornar = {};
		for(let llaveValor of aTransformar){
			objetoARetornar[llaveValor[0]] = llaveValor[1]; 
		}
		retorno.push(objetoARetornar);
    }
	return retorno;
}