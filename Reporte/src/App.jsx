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
                  src="./assets/C.png"
                  sx={{
                    "--Avatar-size": "180px",
                    margin: "0 10px", // Espacio horizontal entre las imágenes
                  }}
                />
                <Avatar
                  src="./assets/A.png"
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

function Reporte1() {
  return <h1 className="About">Aqui estara el primer reporte</h1>;
}

function Reporte2() {
  return <h1 className="Material">Por ahora no hay reporte 2...</h1>;
}
