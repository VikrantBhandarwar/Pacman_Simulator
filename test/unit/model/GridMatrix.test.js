const { GridMatrix } = require('../../../model/GridMatrix');

describe('GridMatrix tests', () => {
  describe('Test constructor', () => {
    it('should create 5 x 5 dimension grid by default', () => {
      const grid = new GridMatrix();
      expect(grid.dimensionX).toEqual(5);
      expect(grid.dimensionY).toEqual(5);
    });

    it('should create a grid base on dimension parameter', () => {
      const grid = new GridMatrix(6, 7);
      expect(grid.dimensionX).toEqual(6);
      expect(grid.dimensionY).toEqual(7);
    });
  });

  describe('Test validate', () => {
    it('should return false when either coordinator x < 0 or coordinator y < 0', () => {
      const grid = new GridMatrix(6, 7);
      expect(grid.validate(-1, 1)).toEqual(false);
      expect(grid.validate(1, -1)).toEqual(false);
    });

    it('should return false when coordinator outside grid dimension', () => {
      const grid = new GridMatrix(6, 7);
      expect(grid.validate(10, 1)).toEqual(false);
      expect(grid.validate(1, 9)).toEqual(false);
    });
  });
});