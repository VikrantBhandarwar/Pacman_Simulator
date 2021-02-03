const { ReportCommand } = require('../../../command/ReportCommand');
const { Directions} = require('../../../constants/constants');
const { NORTH } = Directions;

describe('ReportCommand tests', () => {
  describe('Test handle', () => {
    const mockedPrint = jest.fn();
    const { Pacman } = require('../../../model/Pacman');

    Pacman.prototype.print = mockedPrint;

    it('should throw an error when there is no pacman', () => {
      const reportCommand = new ReportCommand();
      expect(() => {
        reportCommand.handle();
      }).toThrowError('Please initialise a pacman');
    });

    it('should throw an error when pacman has not been placed on grid', () => {
      const pacman = new Pacman();
      const reportCommand = new ReportCommand(pacman);
      expect(() => {
        reportCommand.handle();
      }).toThrowError('Pacman is not on grid, please run PLACE command first');
    });

    it('should print pacman position', () => {
      const pacman = new Pacman(1, 2, NORTH);
      const reportCommand = new ReportCommand(pacman);
      reportCommand.handle();

      expect(mockedPrint).toHaveBeenCalledTimes(1);
    });
  });
});
