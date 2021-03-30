const Request = require("./async");

describe("Request: get", () => {
  test("should return value async ", async () => {
    const result = await Request.get("some data");
    expect(result).toBe("some data");
  });

  test("should return value with promise", () => {
    return Request.get("some data").then((data) =>
      expect(data).toBe("some data")
    );
  });

  test("should catch error from promise", async () => {
      try {
        await Request.get()
      } catch (error) {
          expect (error.message).toBe("err")
      }
  });
});
