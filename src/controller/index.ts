import { getCountries, searchCountry } from "../services";

export async function suggest(req: any, res: any) {
  const countries = getCountries();
  const result = searchCountry(countries, req.query.search);
  res.json(result);
}
