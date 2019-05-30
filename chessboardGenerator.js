function createChessBoard(size, symbol = '#') {
	let chessboard = '';
	for (let i = 1; i <= size; i+=1) {
		for(let j = 1; j <= size; j+=1) {
				if (j % 2 !== 0) {
					chessboard += i % 2 === 0 ? symbol : ' ';
				} else {
					chessboard += i % 2 === 0 ? ' ' : symbol;
				}
		}
		chessboard += '\n';
	}
	return chessboard;
}

console.log(createChessBoard(8));

