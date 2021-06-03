const axios = require("axios");

const apiCall = () => {
  return new Promise((resolve, reject) => {
    const apiArr = [
      "https://jsonplaceholder.typicode.com/posts",
      "https://jsonplaceholder.typicode.com/posts/59",
      "https://jsonplaceholder.typicode.com/users",
      "https://jsonplaceholder.typicode.com/posts/178",
      "https://jsonplaceholder.typicode.com/comments",
      "https://jsonplaceholder.typicode.com/users/987",
      "https://jsonplaceholder.typicode.com/albums",
      "https://jsonplaceholder.typicode.com/todos/967",
      "https://jsonplaceholder.typicode.com/comments/732",
      "https://jsonplaceholder.typicode.com/photos",
      "https://jsonplaceholder.typicode.com/todos",
      "https://jsonplaceholder.typicode.com/photos/800",
    ];

    const respData = {
      success: true,
      message: "Api called successfully",
      data: {},
    };
    const success = [];
    const fail = [];
    apiArr.forEach(async (element, index) => {
      try {
        const resp = await axios.get(element);
        const data = {
          url: resp.config.url,
          status: resp.status,
        };
        success.push(data);
      } catch (err) {
        const data = {
          url: err.config.url,
          status: err.response.status,
        };
        fail.push(data);
      }
      respData.data.success = success;
      respData.data.fail = fail;
      if (index == apiArr.length - 1) {
        resolve(respData);
      }
    });
  });
};

module.exports = {
  apiCall,
};
