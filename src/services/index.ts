import fs from "fs";
import path from "path";

export interface ICountry {
  fips: string;
  state: string;
  name: string;
}

let data: ICountry[] = [];

export function getCountries() {
  if (data.length === 0) {
    const list = fs.readFileSync(path.resolve(__dirname, "../../data.json"));
    data = JSON.parse(list.toString());
  }

  return data;
}

export function searchCountry(countries: ICountry[], search: string) {
  let namePattern = new RegExp(`${search}`, "gi");
  let state = search;

  if (search.includes(",")) {
    const [name, stateName] = search.split(",");
    namePattern = new RegExp(`${name.trim()}`, "gi");
    state = stateName;
  }

  return countries
    .filter((country) => {
      if (country.state.toLowerCase() === state) {
        return true;
      }

      if (state.length > 2) {
        return country.name.toLowerCase().match(namePattern);
      }
    })
    .slice(0, 5);
}
