import { server } from "./server.js";
import {routes} from "./config/routes.js";

const app = server();
routes(app);
// app.get("/3", (req, res)=>{res.end("from third page")})
app.listen();