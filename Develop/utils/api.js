
const axios = require('axios')

const api = {
getUser(username) {
  return axios.get((`https://api.github.com/users/${username}`))
}
};


module.exports = api;
// axios.get(`https://api.github.com/users/${username}`)

// axios.get(`https://api.github.com/users/${username}`)
// .then(data => {return data})
// .catch(err => console.log(err))