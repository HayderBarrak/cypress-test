
beforeEach(function () {
     cy.visit('http://185.222.61.150:8081/gaya/public/index.html')
});
describe('login_page', function() {  


     it('cy.window() - get the global window object', () => {
         var loginInput = cy.get('.login-email');
  loginInput.type('klawr1@assist1.phcvip.com')
  var passwordInput = cy.get('.login-password');
  passwordInput.type('123456')

   cy.contains('Login').click();
  })
})
