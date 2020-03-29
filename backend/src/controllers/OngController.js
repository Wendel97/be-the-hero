const crypto = require('crypto');
const connection = require('../database/connection');


module.exports = {
    async index(request, response) {
        const ongs = await connection('ongs').select('*');
    
        return response.json(ongs);
    },

    async create(request, response) { // async: define função assincrona, para utilizar o await
        const { name, email, whatsapp, city, uf } = request.body;                          
                                                                                          
        const id = crypto.randomBytes(4).toString('HEX');  /*||Cria id cirptografado pela função crypto do node e||
                                                             ||converte para uma strig do tipo hexadeximal       ||*/
        await connection('ongs').insert({  // await: aguarda essa função terminar para executar o resto do code
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        });
    
        return response.json({ id });
    }

};