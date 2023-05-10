// my fetch function

export async function load({ fetch }) {  
const id = 60;

  const url = 'https://acnhapi.com/v1/villagers/' + id;

  const villReq = await fetch(url);
  
  const villRes = await villReq.json();

  const villager = villRes;

  return {
    villager  
  }

}