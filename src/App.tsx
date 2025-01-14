import HeaderAgs from "./components/Header/HeaderAgs";
import FooterAgs from "./components/Footer/FooterAgs";
import InfoAgs from "./components/Info/InfoAgs";
import PreFooterAgs from "./components/PreFooter/PreFooterAgs";
import Top3Component from "./components/Top3Component/Top3Component";
import barrios from "./assets/barrios.json";
import BentoAgs from "./components/BentoAgs/BentoAgs";
import { Divider } from "@mui/material";
import './App.css'

//fotos
import foto3 from "./assets/colosio.jpg";
import foto2 from "./assets/encino-barrio.jpg";
import foto1 from "./assets/san-marcos-barrio.jpg";
const fotos = [foto1, foto2, foto3];

function App(){
  
  return(
<body>

    
      <main>
        {/* Header */}
        <HeaderAgs />
        {/* información principal */}
        <InfoAgs />
        <section id="zona"></section>
        {/* video de youtube */}
        <PreFooterAgs />

          <div className='contenedor-top grid grid-cols-3 grid-rows-1 gap-12'>
            <h2 className='titulo col-start-2'>Zonas de importancia</h2>
          </div>

          {barrios.map((barrio) => (
              <Top3Component
                key={barrio.id}
                nombrePuesto={barrio.nombre}
                informacion={barrio.informacion}
                foto={fotos[barrio.id]}
              />
            ))}

            <span id='bento'></span> 
            <Divider sx={{ borderColor: '#f9c74f', borderWidth: 2 }}/>
            <BentoAgs 
            primerafoto='./public/fotos-bento/sisifo.webp'  
            segundafoto='./public/fotos-bento/rotonda.webp' 
            tercerafoto='./public/fotos-bento/llavero.webp' 
            cuartafoto='./public/fotos-bento/pajaro.webp' 
            quintafoto='./public/fotos-bento/reloj.webp' 
            sextafoto='./public/fotos-bento/edificio.webp' 
            />  

            <BentoAgs 
            primerafoto='./public/fotos-bento/altar-de-muertos.webp'  
            segundafoto='./public/fotos-bento/3-centurias.webp' 
            tercerafoto='./public/fotos-bento/noche-exedra.webp' 
            cuartafoto='./public/fotos-bento/parada.webp' 
            quintafoto='./public/fotos-bento/tranvia.webp' 
            sextafoto='./public/fotos-bento/britanica-1.webp' 
            /> 


        <FooterAgs />
      </main>
    </body>

  );
}

export default App;