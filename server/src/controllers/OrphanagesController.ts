import knex from '../database/conection';
import { Response, Request } from "express";

class OrfanatoController {
    async criar(req:Request, resp:Response) {
        try {
            const {
              name, username, latitude, longitude, about, instructions, senha, open_on_weekends, data, email, hora_aberta
            } = req.body;
            const image= (req.file) ? req.file.filename: 'user.png';
            const adm='0'
            const verify=await knex('orfanato').where('username',username).orWhere('email', email).orWhere('name',name)
            if(verify.length!==0){
                resp.json({verify:'error'})
            }else{
              const dados= await knex('orfanato').insert({
                name, username,image, latitude, longitude, about, instructions, senha, open_on_weekends, data, email,adm,hora_aberta
              })
              const id=dados[0];
              resp.json(dados)
            }    
        } catch (error) {console.log(error);
        }
    }
    async listar(req:Request, resp:Response) {
        try {
          const orfanato=await knex('orfanato').select('*')
          resp.json(orfanato)
        } catch (error) {console.log(error);
        }
    }
    async buscarOrfanato(req:Request, resp:Response) {
        try {
          const {id}= req.params
          const orfanato=await knex('orfanato').where('id', id)
          const d=orfanato[0]
          resp.json(d)
        } catch (error) {console.log(error);
        }
    }
    
}

export default OrfanatoController;



// pointItems, i
/**
 * 
 *             const data = coletador.map(element=>{
                if(email===element.email && senha===element.senha){
                    resp.json(element)
                }else{
                    resp.json('Credencias erradas')
                }
            })
 */