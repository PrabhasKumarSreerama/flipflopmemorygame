
---

# Flip-Flop Memory Game

A fun memory-based card-matching game built with HTML, CSS, and JavaScript. The goal is to match all pairs of cards in as few moves as possible!

## How to Play

1. **Select Cards**: Click on any card to reveal it.
2. **Match Cards**: Select two cards one after the other:
   - If they match, they stay revealed.
   - If they don’t match, they will flip back.
3. **Track Moves**: Each pair selection counts as one move. The move counter increments every time two cards are selected, regardless of whether they match or not.
4. **Win Condition**: When all cards are successfully matched, a message will appear displaying the total number of moves taken to complete the game.
5. **Restart Anytime**: You can press the **Restart** button at any time:
   - All cards will be flipped back and reshuffled.
   - The move counter resets to zero.
   - If you restart after winning, the displayed win message will disappear.

> **Note**: Once a card is revealed as part of a matched pair, it becomes unclickable.

## Features

- **Restart Button**: Resets the game at any time.
- **Move Counter**: Tracks the number of moves needed to complete the game.
- **Win Message**: Displays the number of moves taken to win.
- **Shuffle on Restart**: Each restart reshuffles the card positions.

## Technologies Used

- **HTML**: Structure of the game.
- **CSS**: Styling for the cards, board, and win message.
- **JavaScript**: Logic for card matching, move counting, win condition, and game reset.

---

Enjoy matching the cards! Feel free to clone the repository and try it out.
