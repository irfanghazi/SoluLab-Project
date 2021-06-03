const http = require("http");
const { apiCall } = require("./api");
const { getLastPrice } = require("./crypto");
const url = require("url");
//create a server object:
http
  .createServer(function (req, res) {
    res.write("Hello World!"); //write a response
    if (req.method === "GET") {
      return handleGetReq(req, res);
    }
    res.end(); //end the response
  })
  .listen(3002, function () {
    console.log("server start at port 3002"); //the server object listens on port 3000
  });
if (process.argv.length === 3 && process.argv[2]) {
  console.log(process.argv);

  return callCryotoFetch(process.argv[2]);
}
async function handleGetReq(req, res) {
  const { pathname } = url.parse(req.url);

  if (pathname === "/api/fetch") {
    const resp = await apiCall();
    return res.end(JSON.stringify(resp));
  }
}
async function callCryotoFetch(symbol) {
  const resp = await getLastPrice(symbol);
  console.log("Your price of crypto is ", resp);
}
