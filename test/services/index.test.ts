import { getCountries, searchCountry } from "../../src/services";

describe("SERVICES", () => {
  test("getCountries should be a function", () => {
    expect(typeof getCountries).toBe("function");
  });

  test("getCountries should output array", () => {
    expect(Array.isArray(getCountries())).toBe(true);
  });

  const countries = getCountries();

  test("searchCountry should output empty array", () => {
    expect(searchCountry(countries, "")).toStrictEqual([]);
  });

  test("searchCountry should have a length of 1", () => {
    expect(searchCountry(countries, "cowlitz, wa")).toHaveLength(1);
  });

  test("searchCountry should have a length of 2", () => {
    expect(searchCountry(countries, "cowl")).toHaveLength(2);
  });

  test("searchCountry should have a length of 5", () => {
    expect(searchCountry(countries, "wa")).toHaveLength(5);
  });
});
