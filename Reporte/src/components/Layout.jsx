import { Outlet, Link as RouterLink } from "react-router-dom";
import Link from "@mui/joy/Link";
import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import List from "@mui/joy/List";
import ListDivider from "@mui/joy/ListDivider";
import ListItem from "@mui/joy/ListItem";
import ListItemButton from "@mui/joy/ListItemButton";
import Home from "@mui/icons-material/Home";
import { useState, useEffect } from "react";

const Layout = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    const width = window.innerWidth;
    setIsMobile(width <= 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize(); // Llama a handleResize para verificar el tamaño inicial
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
          borderRadius: "10px",
          flexDirection: isMobile ? "column" : "row", // Cambia la orientación en dispositivos móviles
          width: "100%", // Haz que ocupe todo el ancho en dispositivos móviles
          maxWidth: "90%", // Ajusta el ancho máximo automáticamente
          margin: "0 auto", // Centra el contenido en pantallas más grandes
        }}
      >
        <List
          role="menubar"
          orientation={isMobile ? "vertical" : "horizontal"} // Cambia la orientación en dispositivos móviles
          sx={{ display: "flex", alignItems: "center" }}
        >
          <ListItem role="none">
            <ListItemButton role="menuitem" component={RouterLink}>
              <RouterLink to={"/"}>
                <Home />
              </RouterLink>
            </ListItemButton>
          </ListItem>
          <ListDivider orientation={isMobile ? "horizontal" : "vertical"} />
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
          <ListDivider orientation={isMobile ? "horizontal" : "vertical"} />
          <ListItem role="none">
            <ListItemButton role="menuitem" component={RouterLink}>
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
          <ListDivider orientation={isMobile ? "horizontal" : "vertical"} />
          <ListItem role="none">
            <ListItemButton role="menuitem" component={RouterLink}>
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
};

export default Layout;
