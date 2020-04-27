import clubs from "./clubs.js";

class DataSource {
  static searchClub(keyword) {
    return fetch(`https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${keyword}`)
      .then(response => response.json())
      .then(response => response.teams)
      .catch(`${keyword} is not found!`);
  }
}

export default DataSource;