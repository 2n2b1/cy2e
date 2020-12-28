export { }; // fixes: TS1208 -- dummy export to fix all files must be modules error
it('should work', () => {
	cy.visit('http://localhost:3000');
	cy.get('a').should('have.text', 'Learn React');
})
