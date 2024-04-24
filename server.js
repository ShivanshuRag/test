import express from 'express'

const app = express();

// app.get('/', (req , res)=>{

//     res.send(" hello brother i here")
// });
 
app.get('/api/jokes',(req , res)=>{
  const jokes = [
    
        {
            "id" : 1,
          "joke": "A programmer puts two glasses on his bedside table before going to sleep. A full one, in case he gets thirsty, and an empty one, in case he doesn’t."
        },
        {
            "id" : 2,
          "joke": "If doctors were like software engineers, they would say things like “Have you tried killing yourself and being reborn?"
        },
        {
            "id" : 3,
          "joke": "I would love to change the world, but they wonnot give me the source code."
        },
        {
            "id" : 4,
          "joke": "There are 10 types of people in the world: those who understand binary, and those who don’t."
        },
        {
            "id" : 5,
          "joke": "Debugging is like being the detective in a crime drama where you are also the murderer."
        },
        {
            "id" : 6,
          "joke": "Linux is only free if your time has no value."
        },
        {
            "id" : 7,
          "joke": "There are only two kinds of programming languages: those people always bitch about and those nobody uses."
        },
  ] 

   res.send(jokes)

})

// app.get('/google' ,(req , res)=>{
//     res.send(` https://google.com`)
// })

const port = process.env.PORT || 4000 ;

app.listen(port , ()=>{

    console.log(`server at http://localhost:${port}`);
})