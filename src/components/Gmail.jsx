
import { useState } from "react"
import "../style/components/gmail.sass"
import emailJs from '@emailjs/browser'

const Gmail = () => {

  const[name,setName] = useState('')
  const[gmail,setGmail] = useState('')
  const[message,setMessage] = useState('')

  function sendEmail(e){
    
    e.preventDefault();
    if(gmail === '' || message === '' || name === ''){
      alert("Preencha todos os campos");
      return;
    }

    const templateParams = {
      from_name: name,
      message: message,
      email: gmail
    }

    emailJs.send("service_1zcirfs" , "template_jxuc97i",templateParams,"nJE5ed9n-t0X19gwr" ).then((Response) => {
      console.log("EMAIL ENVIADO !" , Response.status , Response.text),setName(''),setGmail(''),setMessage('')
    },
    (err) => {
      console.log("ERRO : ", err)
    } )
  
  }

  return (
    <main id="main-Gmail">

      <h1>Contate me </h1>
      
      <form className="form" onSubmit={sendEmail}>
            
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Deixe seu Nome abaixo :</label>
                <input type="Name" class="form-control" id="exampleFormControlInput1" placeholder="...."
                onChange={(e) => setName(e.target.value)}
                value={name}/>
              </div>
            
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Deixe seu Gmail abaixo :</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"
                onChange={(e) => setGmail(e.target.value)}
                value={gmail}/>
              </div>

              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Deixe seu recado abaixo :</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="...." 
                onChange={(e) => setMessage(e.target.value)}
                value = {message}></textarea>
            </div>  
                  
            <div class="d-grid gap-2 col-6 mx-auto">
              <button class="btn btn-primary"     type="submit" value="Enviar" >Enviar</button>
            </div>

      </form>

    </main>
  )
}

export default Gmail