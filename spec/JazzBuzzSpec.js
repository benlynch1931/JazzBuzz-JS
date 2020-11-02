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

});
