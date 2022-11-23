describe('All Testes', () => {

    it('Cadastrando usuário com sucesso', () => {

      cy.viewport(1600, 900)
      cy.visit('https://m2.ongame.net/')
      cy.get('a[href="https://minhaconta.ongame.net/cadastro/?site=metin-2&url=https://m2.ongame.net/"').click()
      cy.get('#conteudo-pag-cadastro div h1').should('have.text', 'Cadastro')
      cy.get('input[name="usuario"]').type('Felipe')
      cy.get('input[name="senha"]').type('123456789')
      cy.get('input[name="password_confirm"]').type('123456789')
      cy.get('input[name="email"]').type('Felipe12547@hotmail.com')
      cy.get('input[name="termos_de_uso"]').click()
      cy.get('input[name="termos_de_uso"]').click()
  
    })

    it('Tentando se cadastrar com usuário inválido', () => {

        cy.viewport(1600, 900)
        cy.visit('https://m2.ongame.net/')
        cy.get('a[href="https://minhaconta.ongame.net/cadastro/?site=metin-2&url=https://m2.ongame.net/"').click()
        cy.get('#conteudo-pag-cadastro div h1').should('have.text', 'Cadastro')
        cy.get('input[name="usuario"]').type('F3L!P&')
        cy.get('input[name="senha"]').type('123456789')
        cy.get('input[name="password_confirm"]').type('123456789')
        cy.get('input[name="email"]').type('Felipe12547@hotmail.com')
        cy.get('input[name="termos_de_uso"]').click()
        cy.get('input[name="termos_de_uso"]').click()
    
      })

      it('Tentando se cadastrar com senha inválida', () => {

        cy.viewport(1600, 900)
        cy.visit('https://m2.ongame.net/')
        cy.get('a[href="https://minhaconta.ongame.net/cadastro/?site=metin-2&url=https://m2.ongame.net/"').click()
        cy.get('#conteudo-pag-cadastro div h1').should('have.text', 'Cadastro')
        cy.get('input[name="usuario"]').type('F3L!P&')
        cy.get('input[name="senha"]').type('12')
        cy.get('input[name="password_confirm"]').type('123456789')
        cy.get('input[name="email"]').type('Felipe12547@hotmail.com')
        cy.get('input[name="termos_de_uso"]').click()
        cy.get('input[name="termos_de_uso"]').click()
    
      })

      it('Tentando se cadastrar com senhas diferentes', () => {

        cy.viewport(1600, 900)
        cy.visit('https://m2.ongame.net/')
        cy.get('a[href="https://minhaconta.ongame.net/cadastro/?site=metin-2&url=https://m2.ongame.net/"').click()
        cy.get('#conteudo-pag-cadastro div h1').should('have.text', 'Cadastro')
        cy.get('input[name="usuario"]').type('F3L!P&')
        cy.get('input[name="senha"]').type('123456789')
        cy.get('input[name="password_confirm"]').type('123456')
        cy.get('input[name="email"]').type('Felipe12547@hotmail.com')
        cy.get('input[name="termos_de_uso"]').click()
        cy.get('input[name="termos_de_uso"]').click()
    
      })

      it('Tentando se cadastrar com Email inválido', () => {

        cy.viewport(1600, 900)
        cy.visit('https://m2.ongame.net/')
        cy.get('a[href="https://minhaconta.ongame.net/cadastro/?site=metin-2&url=https://m2.ongame.net/"').click()
        cy.get('#conteudo-pag-cadastro div h1').should('have.text', 'Cadastro')
        cy.get('input[name="usuario"]').type('F3L!P&')
        cy.get('input[name="senha"]').type('123456789')
        cy.get('input[name="password_confirm"]').type('123456789')
        cy.get('input[name="email"]').type('Felipe12547hotmail,com')
        cy.get('input[name="termos_de_uso"]').click()
        cy.get('input[name="termos_de_uso"]').click()
    
      })

      it('Tentando se cadastrar sem aceitar nos termos de uso', () => {

        cy.viewport(1600, 900)
        cy.visit('https://m2.ongame.net/')
        cy.get('a[href="https://minhaconta.ongame.net/cadastro/?site=metin-2&url=https://m2.ongame.net/"').click()
        cy.get('#conteudo-pag-cadastro div h1').should('have.text', 'Cadastro')
        cy.get('input[name="usuario"]').type('F3L!P&')
        cy.get('input[name="senha"]').type('123456789')
        cy.get('input[name="password_confirm"]').type('123456789')
        cy.get('input[name="email"]').type('Felipe12547@hotmail.com')
        cy.get('input[name="termos_de_uso"]').click()
    
      })


  })