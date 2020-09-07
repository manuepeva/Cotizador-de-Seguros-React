import React, { useState } from 'react';
import styled from '@emotion/styled';

import Header from './Components/Header/Header';
import Formulario from './Components/Formulario/Formulario';
import Resultado from './Components/Resultado/Resultado';

import Resumen from './Components/Resumen/Resumen';

import Spinner from './Components/Spinner/Spinner';



const Contenedor = styled.div`
    max-width: 600px;
    margin: 0 auto;
`;

const ContenedorFormulario = styled.div`
    background-color: #ffffff;
    padding: 3rem;
`;


function App() {


  const [resumen, guardarResumen] = useState({
    cotizacion: 0,
    datos: {
      marca: '',
      year: '',
      plan: ''
    }
  });


  const [cargando, guardarCargando] = useState(false);



  // Extraer datos

  const { datos, cotizacion } = resumen;




  return (
    <Contenedor>
      <Header
        titulo="Cotizador de Seguros - Auto"
      />
      <ContenedorFormulario>

        <Formulario
          guardarResumen={guardarResumen}
          guardarCargando={guardarCargando}
        />

        {cargando ? <Spinner /> : null}





        {!cargando ?
          <div>
            <Resultado
              cotizacion={cotizacion}
            /><Resumen
              datos={datos}
            />
          </div> :
          null
        }


      </ContenedorFormulario>
    </Contenedor>
  );
}

export default App;
