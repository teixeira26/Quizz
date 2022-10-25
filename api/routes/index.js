const {Router}= require('express');
const {Questions} = require('../db')

const router = Router();
router.post('/newCategory', async(req, res)=>{
    
    try {
        const {categoria, img, preguntas} = req.body;

        const newCategory = await Questions.findOrCreate({
            where:{categoria},
            defaults:{categoria, img,preguntas}
        });

        res.json(newCategory);

    } catch (error) {
        res.json(error);
        console.log(error);
    }
});

router.put('/newQuestion', async(req, res)=>{
    try {
        const {categoria, preguntas, img, opcionCorrecta} = req.body;

        const registroAnterior = await Questions.findOne({where:{categoria}});
        const {preguntas:preguntasAnteriores} = registroAnterior.dataValues
        console.log(preguntasAnteriores);
        const preguntasActuales = [...preguntasAnteriores, {preguntas, img, opcionCorrecta}]
        
        await Questions.update({preguntas:preguntasActuales},{
            where:{
                categoria
            }
        })
        res.send('si')
    } catch (error) {
        console.log(error);    
        res.send(error)    
    }
})

router.get('/', async(req, res)=>{
    try {
        const preguntas = await Questions.findAll()
        console.log(preguntas.dataValues)
        res.status(200).json(preguntas);
        
    } catch (error) {
        res.send(error)
    }
})

module.exports = router