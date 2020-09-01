let board = generateChessBoard(7);

console.log(board);


/**
 * Генерирует строку заполненой из '#' символов в шахматном порядке
 * 
 * @param {number} size размер шахматной доски
 * @returns {string} строку в виде шахматной доски
 */
function generateChessBoard(size = 8) {
    let tempBoard = '';

    for (let i = 1; i <= size; i++) {
        if (i % 2 == 1) {
            for (let j = 0; j < size / 2; j++) {
                tempBoard += '# ';
            }
            tempBoard += '\n ';
        } else {
            for (let k = 0; k < (size / 2) - 1; k++) {
                tempBoard += '# ';
            }
            tempBoard += '\n';
        }
    }

    return tempBoard.trim();
}