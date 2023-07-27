function getUserInfo() {
  return {
    username: user.username,
    name: user.name,
    id: user.id
  }
}

module.exports = getUserInfo;