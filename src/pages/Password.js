// need to cover the scenario if all the char options passed are false.
import charSets from "./charSets";

class Password {
  constructor(
    length = 10,
    upper = true,
    lower = true,
    special = true,
    nums = true
  ) {
    this.options = {
      upper,
      lower,
      special,
      nums,
      length
    };
    this.value = this.generatePassword();
  }

  passMinLength() {
    // Check password length meets min requirement of 6 of more
    if (this.length >= 6) {
      return true;
    }
    return false;
  }

  validOptions(upper, lower, nums, special) {
    //Check is there have been no valid options passed for constructor
    if (!upper && !lower & !nums && !special) {
      return false;
    }
    return true;
  }

  generatePassword() {
    const length = this.options.length;
    let password = "";
    while (password.length < length) {
      const char = this.generateX();
      if (char) {
        password += char;
      }
    }
    return password;
  }
  generateX() {
    const randomBranch = Math.floor(Math.random() * 4);

    switch (randomBranch) {
      case 0:
        if (this.options.nums === true) {
          return this.num();
        }
        break;
      case 1:
        if (this.options.upper === true) {
          return this.upper();
        }
        break;
      case 2:
        if (this.options.lower === true) {
          return this.lower();
        }
        break;
      case 3:
        if (this.options.special === true) {
          return this.special();
        }
        break;
      default:
        throw new Error("Something went wrong!!");
    }
  }
  //Takes a set of chars and returns one at random
  randomFromCharSet(chars) {
    const random = Math.floor(Math.random() * chars.length);
    return chars[random];
  }
  // Generate a random number
  num() {
    const randomNumber = Math.floor(Math.random() * 9);
    return randomNumber;
  }
  // Generate a random lowercase char
  lower() {
    const chars = charSets.lower;
    return this.randomFromCharSet(chars);
  }
  // Generate a random uppercase char
  upper() {
    const chars = charSets.upper;
    return this.randomFromCharSet(chars);
  }
  // Generate a random special char
  special() {
    const chars = charSets.special;
    return this.randomFromCharSet(chars);
  }
}

export default Password;