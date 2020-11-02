describe('JazzBuzz', function() {

  var jazzbuzz;

  beforeEach(function() {
    jazzbuzz = new JazzBuzz();
  });

  describe('knows when a number is', function() {

    it('is divisible by 3', function() {

      expect(jazzbuzz.isDivisibleByThree(3)).toBe(true);

    });
  });

  describe('knows when a number isn\'t', function() {

    it('is divisible by 3', function() {

      expect(jazzbuzz.isDivisibleByThree(4)).toBe(false);

    });

  });

  describe('knows when a number is', function() {

    it('is divisible by 5', function() {

      expect(jazzbuzz.isDivisibleByFive(5)).toBe(true);

    });
  });

  describe('knows when a number isn\'t', function() {

    it('is divisible by 5', function() {

      expect(jazzbuzz.isDivisibleByFive(4)).toBe(false);

    });
  });

  describe('knows when a number is', function() {

    it('is divisible by 15', function() {

      expect(jazzbuzz.isDivisibleByFifteen(30)).toBe(true);

    });
  });

  describe('knows when a number isn\'t', function() {

    it('is divisible by 15', function() {

      expect(jazzbuzz.isDivisibleByFifteen(31)).toBe(false);

    });
  });

  describe('when playing, says', function() {

    it('"Jazz" when a number is divisible by 3', function() {
      expect(jazzbuzz.says(18)).toEqual("Jazz");
    });

    it('"Buzz" when a number is divisible by 5', function() {
      expect(jazzbuzz.says(70)).toEqual("Buzz");
    });

    it('"JazzBuzz" when a number is divisible by 15', function() {
      expect(jazzbuzz.says(75)).toEqual("JazzBuzz");
    });

    it('4 as this number is not divisible by 3, 5 or both', function() {
      expect(jazzbuzz.says(4)).toEqual(4);
    });

  });

});
