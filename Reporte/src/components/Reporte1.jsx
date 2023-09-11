import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import { styled } from "@mui/joy/styles";
import Sheet from "@mui/joy/Sheet";

// Reporte hecho por Antonio
export default function Reporte1() {
  return (
    <Item sx={{ marginTop: "15px" }}>
      <Box sx={{ padding: "16px" }}>
        <Typography
          variant="h1"
          sx={{ marginBottom: "16px", fontSize: "25px", color: "#974EC3" }}
        >
          Características y lenguajes utilizados en las aplicaciones web
          orientadas a servicios.
        </Typography>
        <Typography
          variant="body1"
          sx={{ marginBottom: "26px", color: "#9C8EAF" }}
        >
          Una aplicación web orientada a servicios es una aplicación en línea
          que se basa en la arquitectura de servicios web para proporcionar
          funcionalidades a través de la web. Estas aplicaciones se componen de
          servicios independientes que interactúan entre sí para realizar tareas
          específicas.
        </Typography>
        <Typography
          variant="h6"
          sx={{ marginBottom: "16px", fontSize: "25px", color: "#974EC3" }}
        >
          Conceptos clave
        </Typography>
        <Typography
          variant="body1"
          sx={{ marginBottom: "10px", color: "#9C8EAF" }}
        >
          <b sx={{ color: "#DFCCFB" }}>Servicios Web: </b>Son componentes de
          software que ofrecen funcionalidades a través de la web utilizando
          estándares como <b> HTTP y XML o JSON </b> para la comunicación.
        </Typography>
        <Typography
          variant="body1"
          sx={{ marginBottom: "10px", color: "#9C8EAF" }}
        >
          <b>API's: </b>Son conjuntos de reglas y protocolos que permiten que
          diferentes aplicaciones se comuniquen entre sí. Las <b> API</b> son
          esenciales para que los servicios interactúen.
        </Typography>
        <Typography
          variant="body1"
          sx={{ marginBottom: "26px", color: "#9C8EAF" }}
        >
          <b>SOAP & REST: </b>Son dos enfoques comunes para implementar
          servicios web. <b> SOAP utiliza XML </b> para la comunicación,
          mientras que <b> REST utiliza HTTP </b>y es más ligero y simple.
        </Typography>
        <Typography
          variant="h6"
          sx={{ marginBottom: "16px", fontSize: "25px", color: "#974EC3" }}
        >
          Características
        </Typography>
        <ul>
          <li>
            <Typography
              variant="body1"
              sx={{ marginBottom: "10px", color: "#9C8EAF" }}
            >
              <b>Arquitectura basada en servicios: </b>La aplicación se divide
              en módulos o servicios independientes que realizan funciones
              específicas. Estos servicios se comunican entre sí a través de
              interfaces definidas, como APIs (Interfaces de Programación de
              Aplicaciones).
            </Typography>
          </li>
          <li>
            <Typography
              variant="body1"
              sx={{ marginBottom: "10px", color: "#9C8EAF" }}
            >
              <b>Reutilización de servicios: </b>Los servicios pueden ser
              reutilizados en diferentes partes de la aplicación o incluso en
              otras aplicaciones, lo que promueve la modularidad y la eficiencia
              del desarrollo.
            </Typography>
          </li>
          <li>
            <Typography
              variant="body1"
              sx={{ marginBottom: "10px", color: "#9C8EAF" }}
            >
              <b>Interoperabilidad: </b>Los servicios web suelen utilizar
              estándares de comunicación, como <b> HTTP, XML o JSON, </b> lo que
              facilita la interoperabilidad entre diferentes tecnologías y
              plataformas.
            </Typography>
          </li>
          <li>
            <Typography
              variant="body1"
              sx={{ marginBottom: "10px", color: "#9C8EAF" }}
            >
              <b>Escalabilidad: </b>Al separar la funcionalidad en servicios
              independientes, es más fácil escalar partes específicas de la
              aplicación según sea necesario para manejar la carga.
            </Typography>
          </li>
          <li>
            <Typography
              variant="body1"
              sx={{ marginBottom: "10px", color: "#9C8EAF" }}
            >
              <b>Mantenimiento simplificado: </b>Como los servicios son
              independientes, es más fácil realizar cambios o mejoras en una
              parte de la aplicación sin afectar a otras áreas.
            </Typography>
          </li>
          <li>
            <Typography
              variant="body1"
              sx={{ marginBottom: "10px", color: "#9C8EAF" }}
            >
              <b>Seguridad: </b>Los servicios pueden tener su propio nivel de
              seguridad y autenticación, lo que permite controlar quién tiene
              acceso a cada parte de la aplicación.
            </Typography>
          </li>
          <li>
            <Typography
              variant="body1"
              sx={{ marginBottom: "26px", color: "#9C8EAF" }}
            >
              <b>Desarrollo distribuido: </b>Los equipos de desarrollo pueden
              trabajar de manera independiente en diferentes servicios, lo que
              acelera el desarrollo y permite la colaboración en proyectos
              grandes.
            </Typography>
          </li>
        </ul>
        <Typography
          variant="h6"
          sx={{ marginBottom: "16px", fontSize: "25px", color: "#974EC3" }}
        >
          Implementación
        </Typography>
        <ul>
          <li>
            <Typography
              variant="body1"
              sx={{ marginBottom: "10px", color: "#9C8EAF" }}
            >
              Para implementar una aplicación web orientada a servicios, se
              desarrollan diferentes servicios web utilizando lenguajes de
              programación como <b> Java, Python, Ruby, PHP o C#. </b> Estos
              servicios exponen sus funcionalidades a través de API que otros
              componentes de la aplicación pueden consumir.
            </Typography>
          </li>
          <li>
            <Typography
              variant="body1"
              sx={{ marginBottom: "26px", color: "#9C8EAF" }}
            >
              La infraestructura de la aplicación, incluida la gestión de
              servicios, se puede implementar en servidores web, servidores de
              aplicaciones o en la nube utilizando tecnologías como Docker y
              Kubernetes para la administración y el escalado de los servicios.
            </Typography>
          </li>
        </ul>
        <Typography
          variant="h6"
          sx={{ marginBottom: "16px", fontSize: "25px", color: "#974EC3" }}
        >
          Lenguajes Populares
        </Typography>
        <Typography
          variant="body1"
          sx={{ marginBottom: "10px", color: "#9C8EAF" }}
        >
          Los lenguajes de programación populares para desarrollar aplicaciones
          web orientadas a servicios incluyen{" "}
          <b>
            JavaScript, Java, Python, Ruby, PHP, C#, Go, Scala, Kotlin y Rust.{" "}
          </b>{" "}
          La elección depende de factores como los requisitos del proyecto y la
          experiencia del equipo. Cada lenguaje tiene sus propias ventajas y se
          utiliza en combinación con frameworks específicos para crear servicios
          web escalables y eficientes.
        </Typography>
      </Box>
    </Item>
  );
}

const Item = styled(Sheet)(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? theme.palette.background.level1 : "#18122B",
  ...theme.typography["body-lg"],
  padding: theme.spacing(5),
  textAlign: "center",
  borderRadius: 4,
  color: "#cdc9d7 ",
}));
