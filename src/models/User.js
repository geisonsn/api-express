class User {
  get() {
    return {id: 1, nome: 'Fulano'};
  }
  list() {
    return [
      {id: 1, nome: 'Beltrano'},
      {id: 2, nome: 'Fulano'},
      {id: 3, nome: 'Sicrano'}
    ];
  }
}

module.exports = new User();