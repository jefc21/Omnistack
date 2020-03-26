const connection = require('../database/connection');

//app.use(express.json());

module.exports = {
    async create(request, response){
        //const { id } = { "id" : "5be3b41c"}//request.body;
        const { id } = request.body;

        console.log(id);

        const ong = await connection('ongs')
        .where('id', id)
        .select('nome')
        .first();

        if(!ong){
            return response.status(400).json({ error: 'No ONG found with this ID'});
        }
        return response.json( ong ); 
    }

}