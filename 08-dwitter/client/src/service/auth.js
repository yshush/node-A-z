export default class AuthService {
  async login(username, password) {
    return {
      username: 'yshush',
      token: 'abc1234',
    };
  }

  async me() {
    return {
      username: 'yshush',
      token: 'abc1234',
    };
  }

  async logout() {
    return;
  }

  async signup(username, password, name, email, url) {
    return {
      username: 'yshush',
      token: 'abc1234',
    };
  }
}
