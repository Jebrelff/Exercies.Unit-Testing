const whoWon = require('../RPS.js');

describe('whoWon function', () => {
    test('should declare a tie when both players choose the same', () => {
      expect(whoWon('rock', 'rock')).toBe('TIE!');
      expect(whoWon('paper', 'paper')).toBe('TIE!');
      expect(whoWon('scissors', 'scissors')).toBe('TIE!');
    });
  
    test('should declare Player 2 as the winner in specific cases', () => {
      expect(whoWon('rock', 'paper')).toBe('Player 2 wins!');
      expect(whoWon('paper', 'scissors')).toBe('Player 2 wins!');
      expect(whoWon('scissors', 'rock')).toBe('Player 2 wins!');
    });
  
    test('should declare Player 1 as the winner in other cases', () => {
      expect(whoWon('rock', 'scissors')).toBe('Player 1 wins!');
      expect(whoWon('paper', 'rock')).toBe('Player 1 wins!');
      expect(whoWon('scissors', 'paper')).toBe('Player 1 wins!');
    });

    test('should handle invalid choices and return a message', () => {
        expect(whoWon('rock', 'invalid')).toBe('Invalid choices. Please choose from: rock, paper, scissors.');
        expect(whoWon('invalid', 'scissors')).toBe('Invalid choices. Please choose from: rock, paper, scissors.');
        expect(whoWon('invalid1', 'invalid2')).toBe('Invalid choices. Please choose from: rock, paper, scissors.');
    });
  });