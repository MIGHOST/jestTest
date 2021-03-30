class Request {
  static get(data) {
    return new Promise((res, rej) => {
      setTimeout(() => {
        if (data) {
          res(data);
        } else {
          rej(new Error("err"));
        }
      }, 1000);
    });
  }
};

module.exports = Request;