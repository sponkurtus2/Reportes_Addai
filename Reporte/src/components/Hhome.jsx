import React from "react";
import { styled } from "@mui/joy/styles";
import Sheet from "@mui/joy/Sheet";
import Avatar from "@mui/joy/Avatar";
import Grid from "@mui/joy/Grid";
import IMAGES from "../../assets/images";

export default function Hhome() {
  return (
    <div className="Hhomes">
      <Grid
        container
        spacing={2}
        columns={16}
        sx={{ flexGrow: 1, justifyContent: "center" }}
      >
        <Grid xs={12} sm={8} md={8} lg={8}>
          <Item>
            El propósito principal de esta página es mostrar los reportes que se
            vayan pidiendo. La página fue hecha con React y joy-ui para los
            estilos de los componentes, además de que se usó Vercel para hacer
            el despliegue de una manera sencilla y rápida.
          </Item>
        </Grid>
        <Grid xs={12} sm={4} md={4} lg={4}>
          <Item sx={{ display: "flex", justifyContent: "center" }}>
            <div>
              <h1>Desarrolladores</h1>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Avatar
                  src={IMAGES.image1}
                  sx={{
                    "--Avatar-size": "120px", // Ajusta el tamaño para dispositivos más pequeños
                    margin: "0 10px", // Espacio horizontal entre las imágenes
                  }}
                />
                <Avatar
                  src={IMAGES.image2}
                  sx={{
                    "--Avatar-size": "120px", // Ajusta el tamaño para dispositivos más pequeños
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

const Item = styled(Sheet)(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? theme.palette.background.level1 : "#18122B",
  ...theme.typography["body-lg"],
  padding: theme.spacing(3), // Reducir el espaciado para dispositivos más pequeños
  textAlign: "center",
  borderRadius: 4,
  color: "#cdc9d7 ",
}));
