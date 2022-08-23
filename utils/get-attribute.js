const {getJSONResponse} = require('./JSONResponse.js')
const {request } = require('undici');

module.exports.getAttribute = async function(interaction, attribute) {
    const animeName = interaction.options._hoistedOptions[0].value
    const query = new URLSearchParams(animeName);
    const result = await request(BASE_API_PATH.concat(`/anime?filter[text]=${query}`))
    const resultObject = await getJSONResponse(result.body);
    const data = resultObject['data'][0]['attributes'][attribute];
    return data;
};