describe('Testando tela inicial', () => {

    it('Validando campos', () => {
      cy.visit('https://www.testesonline.com.br/')
      cy.get(':nth-child(3) > .boxteste > :nth-child(1) > img').click
     
    })
  })