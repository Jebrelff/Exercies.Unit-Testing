const checkFive = require("../checkFive.js");

describe("checkFive function", () => {
    test("should return 'num is less than 5.' when num < 5.", () => {
      expect(checkFive(3)).toBe("3 is less than 5.");
    });
  
    test("should return 'num is equal to 5.' when num = 5.", () => {
      expect(checkFive(5)).toBe("5 is equal to 5.");
    });
  
    test("should return 'num is greater than 5.' when num > 5.", () => {
      expect(checkFive(8)).toBe("8 is greater than 5.");
    });
});