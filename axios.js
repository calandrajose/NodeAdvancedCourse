const axios = require('axios');

async function call(){
    return axios.
    get(`https://chedrauimx.vtexcommercestable.com.br/api/catalog_system/pub/specification/fieldGet/359`)
    .then(({status, statusText, data}) => {
        console.log(status, statusText, data)
    })
}

const res = call()
console.log(res)


// async function call(){
//     return axios.get(`https://chedrauimx.vtexcommercestable.com.br/api/catalog_system/pub/specification/fieldGet/359`);
// }
// 
// const res = call()
// console.log(res)