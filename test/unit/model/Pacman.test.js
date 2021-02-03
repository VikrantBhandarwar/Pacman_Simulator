const {
   Directions
  } = require('../../../constants/constants');
  
  describe('Pacman tests', () => {
    const { Pacman } = require('../../../model/Pacman');
    console.log = jest.fn();
    describe('Test constructor', () => {
      it('should create a Pacman base on parameter', () => {
        const pacman = new Pacman(6, 7, Directions.WEST);
        expect(pacman.x).toEqual(6);
        expect(pacman.y).toEqual(7);
        expect(pacman.direction).toEqual(Directions.WEST);
      });
    });
  
    describe('Test isPlacedOnGrid', () => {
      it('should return true when pacman has x, y coordinator and has direction', () => {
        const pacman = new Pacman(6, 7, Directions.WEST);
        expect(pacman.isPlacedOnGrid()).toEqual(true);
      });
  
      it('should return false when pacman x or y or direction is undefined', () => {
        const pacman = new Pacman();
        expect(pacman.isPlacedOnGrid()).toEqual(false);
      });
    });
  
    describe('Test move', () => {
      it('Pacman should move to destination coordinator', () => {
        const pacman = new Pacman(6, 7, Directions.WEST);
        pacman.move(1, 2);
        expect(pacman.x).toEqual(1);
        expect(pacman.y).toEqual(2);
      });
    });
  
    describe('Test turn', () => {
      it('Pacman should turn to destination direction from current position', () => {
        const pacman = new Pacman(6, 7, Directions.WEST);
        pacman.turn(Directions.NORTH);
        expect(pacman.direction).toEqual(Directions.NORTH);
      });
    });
  
    describe('Test print position', () => {
      it('Pacman should print current position', () => {
        const pacman = new Pacman(6, 7, Directions.WEST);
        pacman.move(1, 2);
        pacman.print();
      });
    });
  });