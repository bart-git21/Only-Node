import fs from "fs";

const routes = (app) => {
  app.get("/", (req, res) => {
    fs.readFile("./server/public/index.html", function (err, data) {
      res.writeHead(200);
      res.write(data);
      res.end();
    });
  });
  app.post("/add", (req, res) => {
    // https://github.com/mandeeppasbola/parse-post-request-in-NodeJS-without-using-expressJS/blob/main/server.js
    const chunks = [];
    req.on("data", (chunk) => {
      chunks.push(chunk);
    });
    req.on("end", () => {
      console.log("all parts/chunks have arrived");
      const data = Buffer.concat(chunks);
      console.log("Data: ", data);
      const stringData = data.toString();
      console.log("stringData: ", stringData);

      const parsedData = new URLSearchParams(stringData);
      const dataObj = {};
      for (let [key, val] of parsedData.entries()) {
        dataObj[key] = val;
      }
      console.log(parsedData);
      res.end(JSON.stringify(dataObj));
    });
  });
};

export { routes };
