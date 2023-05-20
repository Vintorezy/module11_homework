import fromEntries from "../fromEntries.js";

describe("fromEntries function", () => {
  it("should convert entries array to object", () => {
    const entries = [
      ["key2", 3],
      ["key1", "hello"],
    ];
    const expectedResult = {
      key2: 3,
      key1: "hello",
    };
    expect(fromEntries(entries)).toEqual(expectedResult);
  });

  it("should handle empty entries array", () => {
    const entries = [];
    const expectedResult = {};
    expect(fromEntries(entries)).toEqual(expectedResult);
  });

  it("should handle single entry", () => {
    const entries = [["key", "value"]];
    const expectedResult = { key: "value" };
    expect(fromEntries(entries)).toEqual(expectedResult);
  });

  it("should throw an error for invalid input type", () => {
    const entries = "not an array";
    expect(() => fromEntries(entries)).toThrow();
  });

  it("should handle duplicate keys and overwrite previous values", () => {
    const entries = [
      ["key", "value1"],
      ["key", "value2"],
    ];
    const expectedResult = { key: "value2" };
    expect(fromEntries(entries)).toEqual(expectedResult);
  });
});