//Get ATM PrivatBank

let devicesList;
let atmLocale =[];
let obj = {};

const data = fetch('https://pahich09.github.io/ATM_Privatbank/data.json');
	data
		.then(responce=> responce.json())
		.then(responce=>{
			devicesList = responce.devices;
			getUnicAtmLocal(devicesList);
			getAtmList(atmLocale, devicesList);
			
		console.log('ATM PrivatBank Lviv', obj);
		})
		.catch(error=>console.log('error', error))

function getUnicAtmLocal(array) {
	array.forEach((el, i)=>{
		
		if(!atmLocale.includes(array[i].placeRu)){
			atmLocale.push(array[i].placeRu);
		}
	})
}
function getAtmList(arr, array) {
	arr.forEach((item)=>{
	obj[item] = [];
		array.forEach((elem, index)=>{
			if(item == array[index].placeRu){
				obj[item].push(array[index]);
			}
		})	
	})
}
