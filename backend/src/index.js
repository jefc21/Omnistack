const express =  require("express");
const routes=require("./routes");
const cors = require("cors");

//controle de acesso
app.use(cors());

//recebe o plugin express
const app = express();

//configura o recebimento para json
app.use(express.json());

app.use(routes);

//port
app.listen(3333);