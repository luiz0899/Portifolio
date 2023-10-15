import {AiFillPhone,AiFillEnvironment} from "react-icons/ai";

import "../style/components/informationContainer.sass";
const informationContainer = () => {
  return (
    <section id = "information">
       
        <div className="info-card">
            <AiFillPhone id = "phone-icon" />
            <div>
                <h3>Telefone</h3>
                <p>(48) 99826-4056 </p>
            </div>
        </div>

        <div className="info-card">
            <AiFillEnvironment id = "pin-icon" />
            <div>
                <h3>Localização</h3>
                <p>Pescaria Brava / SC</p>
            </div>
        </div>
        
    </section>
  );
  
}

export default informationContainer