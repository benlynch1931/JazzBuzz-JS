class JazzBuzz {

  says(number) {
    if (this.isDivisibleByFifteen(number)) {
      return "JazzBuzz";
    }
    if (this.isDivisibleByThree(number)) {
      return "Jazz";
    }
    if (this.isDivisibleByFive(number)) {
      return "Buzz"
    }
    else {
      return number;
    }
  }

  isDivisibleByThree(number) {
    return this._isDivisibleBy(number, 3);
  }

  isDivisibleByFive(number) {
    return this._isDivisibleBy(number, 5);
  }

  isDivisibleByFifteen(number) {
    return this._isDivisibleBy(number, 15);
  }

  _isDivisibleBy(number, divisor) {
    return (number % divisor === 0);
  }

}
