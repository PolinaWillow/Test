import express  from 'express'
import fetch from ('node-fetch');

//Полчуение значения порта
const PORT = 5000;
const app = express(); //Сервер

app.post('/api', (req,res)=>{
    try {
        const {fromValute, outValute, number} = req.body
        if(fromValute==""||outValute==""||number=="") return res.status(500).json({message: "Не все поля заполнены"})
     

    } catch (error) {
        
    }
})


const startApp = async()=>{
    try {
        app.listen(PORT, ()=>console.log(`Server start on port ${PORT}`))
    } catch (error) {
        console.log(error)
    }
}

startApp()
