import { Routes, Route, Outlet, Link } from "react-router-dom";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function App() {
  return (
    <div className="Main">
      <h1>Ejemplo de rutas en React</h1>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="material" element={<Material />} />
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <Stack direction="row" spacing={2}>
      <div className="Layouts">
        <nav>
          <ul>
            <li>
              <Button variant="contained" color="success">
                <Link to="/">Home</Link>
              </Button>
            </li>
            <li>
              <Button variant="contained" color="success">
                <Link to="/about">About</Link>
              </Button>
            </li>
            <li>
              <Button variant="contained" color="success">
                <Link to={"/material"}>Material</Link>
              </Button>
            </li>
          </ul>
        </nav>
        <Outlet />
      </div>
    </Stack>
  );
}

function Home() {
  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      <Alert severity="info">This is an error alert — check it out!</Alert>;
    </Stack>
  );
}

function About() {
  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      <Alert severity="success">This is an error alert — check it out!</Alert>;
    </Stack>
  );
}

function Material() {
  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      <Alert severity="error">This is an error alert — check it out!</Alert>;
    </Stack>
  );
}
