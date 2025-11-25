import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// Ruta principal
app.get("/", (req, res) => {
  res.send("OMC Backend funcionando ✔");
});

// IMPORTACIÓN DE RUTAS
import authRoutes from "./routes/auth.js";
app.use("/auth", authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor en puerto ${PORT}`);
});
