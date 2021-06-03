const axios = require("axios");
const getLastPrice = async (symbol) => {
  try {
    const url = `https://api-pub.bitfinex.com/v2/tickers?symbols=${symbol}`;
    const resp = await axios.get(url);
    let lastPrice;
    if (resp.data.length) {
      lastPrice = resp.data[0][7];
    } else {
      lastPrice = "please add specific symbol like tBTCUSD,tLTCUSD,fUSD";
    }
    return lastPrice;
  } catch (err) {
    console.log(err);
  }
};
module.exports = {
  getLastPrice,
};
