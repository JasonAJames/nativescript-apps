var validator = require("email-validator");

export class User {
  name: string;
  email: string;
  password: string;
  isValidEmail() {
    return validator.validate(this.email);
  }
}