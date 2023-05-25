import React from 'react';
import semilleroImage from './assets/sipi.png';
import universidadImage from './assets/unad.png';
import { Container, Typography, Grid} from '@mui/material';
import ReactPlayer from 'react-player';
import './App.css';
import Video from "./assets/presentacion.mp4";

function App() {
  return (
    <Container maxWidth="md">
      <br />
      <Typography variant="h4" className="title">Semillero de Investigación Sipi</Typography>
      <br /><br />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <div className="imageContainer">
            <img src={semilleroImage} alt="Semillero" />
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className="imageContainer">
            <img src={universidadImage} alt="Universidad" />
          </div>
        </Grid>
        <Grid>

        </Grid>
      </Grid>
      <div className="content">
        <h2 className="title">Invitación al Semillero</h2>
        <div className="video-container">
            <ReactPlayer url={Video} controls />
        </div>
        <p className='url'>Link: https://acortar.link/uT0yBi</p>

        <h2 className="title">¿Cuéntanos un poquito de tu experiencia docente en la UNAD?</h2>
        <p>
          La Licenciatura en Pedagogía Infantil inicia desde el año 2015 con registro calificado. La Misión de la Licenciatura de acuerdo con el Proyecto Educativo del Programa (PEP) es formar líderes profesionales en la educación de las infancias, con alto desempeño investigativo, pedagógico, didáctico y con competencias capaces de abordar a las infancias desde una perspectiva de educación inclusiva, haciendo uso de las TIC, como elemento pedagógico y didáctico en procesos educativos a favor la educación integral de las infancias.
        </p>
        <h2 className="title">¿Háblanos del semillero SIPI?</h2>
        <p>
          De acuerdo a lo anterior a finales del año 2019 en el CEAD Acacias surge el 
          semillero Investigación de Pedagogía Infantil con los primeros estudiantes que 
          iniciaron Practicas pedagógicas, dando cumplimiento Proyecto Educativo del 
          Programa(PEP) la propuesta de formar docentes para la infancia de la UNAD, 
          demanda entonces la formación de profesionales con competencias para la 
          innovación, para la investigación sobre su propia práctica y para enfrentarse a 
          escenarios educativos diversos, ampliados y no convencionales.
          La Licenciatura en Pedagogía Infantil brinda al estudiante elementos teóricos y 
          prácticos que le permitan abordar procesos de investigación, desde las 
          competencias de lectura y escritura propias de los procesos de generación de 
          conocimiento, pasando por fundamentos generales de investigación, para 
          profundizar más adelante en la investigación disciplinar.
          Por lo tanto, se crea el semillero con el objetivo de Generar espacios de 
          investigación en los estudiantes de la Licenciatura en Pedagogía Infantil para 
          adquirir nuevos aprendizajes sobre la primera infancia, tendientes a fortalecer la 
          transformación del conocimiento y con la misión de Generar espacios académicos 
          de investigación por medio del trabajo en red, entre estudiantes, docentes y 
          comunidad educativa, para obtener nuevos aprendizajes a través de la ejecución de 
          proyectos de investigación para ser aplicados en su quehacer como futuro docentes.
          El Semillero es reconocido oficialmente por la Decana de la Escuela Ciencias de la 
          Educación la Doctora Clara Esperanza Pedraza Goyeneche con el aval institucional 
          el 27/04/2020 
          El semillero SIPI se encuentra articulado al Grupo de Investigación de Infancias, 
          Educación y Diversidad, Liderado por la Licenciada Carmen Eugenia Pedraza, Este 
          Grupo categorizado en C.
        </p>
        <h2 className="title">¿Cómo pertenecer a el semillero SIPI?</h2>
        <p>
          Lo invito a que se acerque al CEAD Acacias y dialogue con los Docentes de La 
          Licenciatura En Pedagogía Infantil para brindarle orientación 
        </p>
        <h2 className="title">¿Comprendo que algunos estudiantes que están iniciando su carrera 
            profesional se preguntaran que Significa Semillero de Investigación?</h2>
        <p>
          Los semilleros de investigación de la UNAD son comunidades de aprendizaje de 
          estudiantes y docentes, de una o diferentes áreas, surgidas en el seno de la 
          Universidad por el interés en investigación de los actores que lo integran.
          Soy Giovanna Yalile García Cardona, Docente de la Licenciatura en Pedagogía 
          Infantil de la Universidad Nacional Abierta y a Distancia UNAD, CEAD Acacias. 
        </p>
        <h2 className="title">¿Línea de Investigación que aporta el semillero SIPI? </h2>
        <p>
          Pertenecemos a la línea de investigación Infancias, Educación y Diversidad, por 
          ende, apuntamos a los proyectos de investigación que aportan a las infancias 
          específicamente frente a procesos de educación y la diversidad como parte 
          fundamental de la transformación como calidad educativa
        </p>
        <h2 className="title">¿Qué se ha obtenido en los eventos de investigación el semillero SIPI?</h2>
        <p>
          En los eventos de Investigación en los que ha participado el Semillero SIPI ha tenido 
          significativos reconocimientos a nivel zonal y nacional. Así mismo, La estudiante 
          Dinamizador del semillero Erika María Rodríguez Sánchez se gradúo con grado de 
          Honor en el año 2022.
        </p>
        <h2 className="title">¿A dónde nos podemos presentar con nuestras propuestas de investigación?</h2>
        <p>
          Nuestros proyectos de investigación pueden ser visibilizados en las diversas 
          convocatorias realizadas a nivel interno en nuestra universidad, a nivel regional 
          como en red Colsi y a nivel nacional en las convocatorias ofertadas por otras 
          universidades. 
          Por lo consiguiente, Se inicia a participar en diferentes eventos de Investigación a 
          Nivel Zonal y Nacional con el Proyecto Fortalecimiento de la Comprensión Lectora 
          de los estudiantes del grado tercero de la institución educativa las Violetas del 
          Municipio de Castilla la Nueva, a través de la plataforma Edmodo, Siendo este 
          representado por el Estudiante Dinamizador del semillero Erika María Rodríguez 
          Sánchez, posteriormente con el proyecto alfabetización E-Learning A La 
          Comunidad Educativa Para El Apoyo Escolar Y Formativo En Los Escenarios De 
          Práctica De Docentes En Formación
        </p>
        <h2 className="title">¿Qué significa Alfabetización E- Learning?</h2>
        <p>
          Un saludo caluroso parra todos soy Leonardo Valencia, Docente de la Licenciatura 
          en Pedagogía Infantil de la Universidad Nacional Abierta y a Distancia UNAD, CEAD 
          Acacias de la zona ZAO.
          Los dos términos de su pregunta son conceptos contemporáneos en educación y lo 
          que primero voy a decir es que los reunimos en el semillero para plantear un trabajo 
          macro que incluya varios trabajos de grado de aquellos estudiantes que les interese 
          el tema y que decidan aportar al proyecto general del semillero y por su puesto de 
          una vez a sus trabajos. Segundo iniciemos con el termino alfabetización que 
          normalmente se ha usado para las personas que no manejan conocen ni usan con 
          propiedad el alfabeto mínimo del lenguaje o el idioma desde el cual se comunican 
          e interactúan con los demás, pero para el caso de la educación contemporánea se 
          ha acuñado esta concepto como analfabetismo digital o personas que en el uso de 
          las nuevas tecnologías no cuentan con las bases mínimas de uso y comunicación y 
          este es el caso de muchos docentes o padres de familia que no pueden aportar al 
          desempeño académico de sus hijos o estudiantes por que no manejan o ni siquiera
          conocen las grandes posibilidades de esta tecnología aplicada a la educación. Y 
          partiendo de la última idea podemos explicar el segundo concepto que “hace 
          referencia a todas las actividades formativas que se dan exclusivamente a través 
          de un dispositivo conectado a la red, lo que se suele llamar como aprendizaje 
          electrónico, teleformación, formación online o aprendizaje virtual” en otras palabras
          nos habla de las tecnologías de la información y comunicación digital cuando se 
          usan o manejan como recursos o instrumentos en el campo educativo, todos los 
          productos, plataformas o herramientas digitales que se generan en torno al campo 
          educativo podríamos meterlos dentro de una categoría E- Learning.
        </p>
        <h2 className="title">¿Cómo puedo como estudiante en formación colaborar con la construcción 
          de esta investigación?</h2>
        <p>
          Todos los estudiantes que les interese responder preguntas relacionadas con la 
          relación entre objetos virtuales de aprendizaje y los estudiantes de aula apoyados 
          por sus docentes o padres de familia, preguntas como cuales herramientas digitales 
          puede aprender a usar un padre de familia para apoyar de manera efectiva el 
          proceso escolar de sus hijos. En resumen necesitamos estudiantes para la fase 
          diagnostica en los lugares de practica que ayuden a identificar las debilidades o 
          fortalezas de la comunidad educativa con relación a las Tics en el campo educativo, 
          también se necesita estudiantes que quieran diseñar actividades de capacitación a 
          la comunidad educativa en el uso académico de las tics y que quieran implementar 
          modelos de relacionamiento entre la comunidad y los recursos digitales durante sus 
          prácticas para implementar nuestro proyecto en el marco del semillero. 
        </p>
        <h2 className="title">¿Qué productos podemos tener si pertenecemos al semillero SIPI?</h2>
        <p>
        Los productos que se pueden conseguir siendo parte del semillero, son:
        <ul>
          <li>
            Construcción de su proyecto como opción de grado.
          </li>
          <li>Manuales pedagógicos como consecución de su investigación</li>
          <li>Manuales pedagógicos como consecución de su investigación</li>
          <li>Artículos de revisión bibliográfica o científicos del proceso de su 
          investigación.</li>
          <li>Ponencias a nivel Local, Regional y Nacional.</li>
          <li>Visibilización como investigadores a nivel Local, Regional y Nacional.</li>
        </ul>
        </p>
        <h2 className="title">¿Cuáles son los Requisitos para ser parte del Semillero de Investigación?</h2>
        <p>
          De acuerdo con el Sistema integrado de Investigación menciona claramente que 
          los requisitos son:
          <br /> 
          1. El gusto por aprender y desarrollar habilidades en investigación formativa <br />
          2. Revisar las temáticas, objetivos y líneas de investigación de los semilleros  
          por escuela y/o por zona que te identifiquen con tus gustos investigativos. <br />
          3. Tener matricula activa en cualquiera de los períodos académicos que ofrece 
          la universidad. <br />
          4. No se mide por el promedio ni el periodo académico en que se encuentre. <br />
          5. No hay límite de edad. <br />
          6. Escribe un correo electrónico al líder de semillero de investigación de tu 
          interés para pertenecer al mismo. <br /> <br />
          Estimados estudiantes: Tener presente el lema del Semillero SIPI es <br />
          •Educación Infantil Unadista para la Transformación Socio Cultural
          Los invito a los estudiantes que están realizando la Licenciatura en Pedagogía 
          Infantil que hagan parte de este Semillero SIPI.

        </p>
        <div className='mission'>
          <h2 className="title">MISION</h2>
          <p>
            Generar espacios académicos de investigación a través de trabajo en red, 
            entre estudiantes, docentes y comunidad educativa, con el propósito de obtener 
            nuevos aprendizajes a través de la ejecución de proyectos de investigación para ser 
            aplicados en su quehacer como futuro docentes

          </p>
        </div>


      </div>


    </Container>
  );
}

export default App;
