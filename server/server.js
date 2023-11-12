import http from "http";

const PORT = 3000;

const server = () => {
  const routes = [];
  return {
    get(url, cb) {
      routes.push({ url, cb, method: "GET" });
    },
    post(url, cb) {
      routes.push({ url, cb, method: "POST" });
    },
    listen() {
      const listner = (req, res) => {
        for (let route of routes) {
          if (req.method === route.method) {
            if (req.url === route.url) {
              route.cb(req, res);
            }
          }
        }
      };

      http.createServer(listner).listen(PORT, "127.0.0.1", function () {
        console.log(`Server is running on port ${PORT}`);
      });
    },
  };
};

export { server };
