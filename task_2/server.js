import express  from 'express'
import fetch from ('node-fetch');

//Полчуение значения порта
const PORT = 5000;
const app = express(); //Сервер

app.post('/api',async (req,res)=>{
    try {
        const {fromValute, toValute, number} = req.body
        if(fromValute==""||toValute==""||number=="") return res.status(500).json({message: "Не все поля заполнены"})

        const apiUrl = "Тут URL зфпроса на сервер"

        //Отправка запроса на сервер для получения текущего курса валюты
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.error) {
            return res.status(500).json({message: "Что-то пошло не так"})
          } else {
            const exchangeRate = data.rates[to];
      
            if (exchangeRate) {
            
                return res.status(201).json(number * exchangeRate)
            } else {
                res.status(error).json({message: "Что-то пошло не так"})
            }
          }

     

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
