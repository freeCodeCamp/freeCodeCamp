
function checkIfStatement(playerCode) {
    const ifStatementRegex = /if\s*([\s\S]?)\s*{([\s\S]*?)}/;
    const match = playerCode.match(ifStatementRegex);
    if (match) {
        const ifBody = match[1].trim();
        return ifBody === ''; // Check if the body is empty
    }
    return false; // No matching if statement found
}

// Example usage
const playerCode = `
update() {
    this.draw();
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;

    if (this.position.y + this.height + this.velocity.y <= canvas.height) {
        // Empty if statement as per your requirement
    }
}
`;

console.log(checkIfStatement(playerCode)); // Should print false because of the comment
