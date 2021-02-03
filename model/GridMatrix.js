const DEFAULT_DIMENSION =5;

/**
 * GridMatrix class
 * instantiate class with number of rows and columns
 * @constructor
 * @var dimensionX x axis number of rows
 * @var dimensionY y axis number of columns
 */
class GridMatrix {
  constructor (dimensionX = DEFAULT_DIMENSION, dimensionY = DEFAULT_DIMENSION) {
    this.dimensionX = dimensionX;
    this.dimensionY = dimensionY;
  }

  //check if the dimensions are valid and lees than the maximum contraints
  validate (x, y) {
    return x >= 0 && x < this.dimensionX && y >= 0 && y < this.dimensionY;
  }
}

module.exports = {
  GridMatrix
};