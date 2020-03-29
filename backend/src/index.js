const express =  require("express");
const routes=require("./routes");
const cors = require("cors");

//recebe o plugin express
const app = express();

//controle de acesso
app.use(cors());

//configura o recebimento para json
app.use(express.json());

app.use(routes);

//port
app.listen(3333);