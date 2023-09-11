import { Routes, Route, Outlet, Link as RouterLink } from "react-router-dom";
import Link from "@mui/joy/Link";
import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import List from "@mui/joy/List";
import ListDivider from "@mui/joy/ListDivider";
import ListItem from "@mui/joy/ListItem";
import ListItemButton from "@mui/joy/ListItemButton";
import Home from "@mui/icons-material/Home";
import { styled } from "@mui/joy/styles";
import Sheet from "@mui/joy/Sheet";
import Grid from "@mui/joy/Grid";
import Avatar from "@mui/joy/Avatar";
import IMAGES from "../assets/images";

export default function App() {
  return (
    <div className="Main">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Hhome />} />
          <Route path="Reporte1" element={<Reporte1 />} />
          <Route path="Reporte2" element={<Reporte2 />} />
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <div className="Layouts">
      <Box
        component="nav"
        aria-label="My site"
        sx={{
          flexGrow: 1,
          backgroundColor: "#18122B",
          padding: "16px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderRadius: "10px", // Agregar bordes redondos
        }}
      >
        <List
          role="menubar"
          orientation="horizontal"
          sx={{ display: "flex", alignItems: "center" }}
        >
          <ListItem role="none">
            <ListItemButton role="menuitem" component="RouterLink">
              <RouterLink to={"/"}>
                <Home />
              </RouterLink>
            </ListItemButton>
          </ListItem>
          <ListDivider orientation="vertical" />
          <ListItem role="none">
            <Typography
              sx={{ color: "#635985" }}
              variant="plain"
              level="h2"
              className="MainTitle"
            >
              Reporte con React
            </Typography>
          </ListItem>
          <ListDivider orientation="vertical" />
          <ListItem role="none">
            <ListItemButton role="menuitem" component="RouterLink">
              <RouterLink to={"Reporte1"}>
                <Link
                  sx={{ color: "#827A9D" }}
                  underline="hover"
                  variant="plain"
                >
                  Reporte #1
                </Link>
              </RouterLink>
            </ListItemButton>
          </ListItem>
          <ListDivider orientation="vertical" />
          <ListItem role="none">
            <ListItemButton role="menuitem" component="RouterLink">
              <RouterLink to={"Reporte2"}>
                <Link
                  sx={{ color: "#827A9D" }}
                  underline="hover"
                  variant="plain"
                >
                  Reporte #2
                </Link>
              </RouterLink>
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
      <Outlet />
    </div>
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

function Hhome() {
  return (
    <div className="Hhomes">
      <Grid
        container
        spacing={2}
        columns={16}
        sx={{ flexGrow: 1, justifyContent: "center" }}
      >
        <Grid xs={8}>
          <Item>
            El propósito principal de esta página es mostrar los reportes que se
            vayan pidiendo. La página fue hecha con React y joy-ui para los
            estilos de los componentes, además de que se usó Vercel para hacer
            el despliegue de una manera sencilla y rápida.
          </Item>
        </Grid>
        <Grid xs={7}>
          <Item sx={{ display: "flex", justifyContent: "center" }}>
            <div>
              <h1>Desarrolladores</h1>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Avatar
                  src={IMAGES.image1}
                  sx={{
                    "--Avatar-size": "180px",
                    margin: "0 10px", // Espacio horizontal entre las imágenes
                  }}
                />
                <Avatar
                  src={IMAGES.image2}
                  sx={{
                    "--Avatar-size": "180px",
                    margin: "0 10px", // Espacio horizontal entre las imágenes
                  }}
                />
              </div>
            </div>
          </Item>
        </Grid>
      </Grid>
    </div>
  );
}

// Reporte hecho por Antonio
function Reporte1() {
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

function Reporte2() {
  return <h1 className="Material">Por ahora no hay reporte 2...</h1>;
}
