# Pacman simulator

A pacman simulator written in Node.js 

## Installation & usage

**Local**

```sh
$ cd pacman-simulator
$ npm install
$ node index.js
```

## Instruction format

The simulator accept input, with one command per line. The commands available are:

- **PLACE X, Y, DIRECTION (PLACE 0,1,NORTH):** Place the pacman on the grid.
- **MOVE:** Move the pacman one unit in the direction it is facing
- **LEFT:** Turn the pacman left
- **RIGHT:** Turn the pacman right
- **REPORT:** Report the current position and direction of the pacman (0,0,NORTH)

## Example Input and Output
------------------------

### Example a

    PLACE 0,0,NORTH
    MOVE
    REPORT

Expected output:

    0,1,NORTH

### Example b

    PLACE 0,0,NORTH
    LEFT
    REPORT

Expected output:

    0,0,WEST

### Example c

    PLACE 1,2,EAST
    MOVE
    MOVE
    LEFT
    MOVE
    REPORT

Expected output:

    3,3,NORTH

## Dependencies

- [chalk]
- [inquirer]

## Tests

```sh
$ npm run test
```