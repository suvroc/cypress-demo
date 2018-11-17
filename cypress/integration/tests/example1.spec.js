describe('My First Test', function() {
    it('Example 1', function() {

        cy.visit('01/example.html')

        cy.get('#elementWithId').clear().type("sample text")
            .should('have.value', "sample text");

        cy.get('input[name="elementWithName"]')
            .clear()
            .type('anotherText')
            .should("have.value", "anotherText");

        cy.get('.elementWithClass')
            .clear()
            .type('anotherText2')
            .should("have.value", "anotherText2");

        cy.get('.disabledElementWithClass')
            .should("be.disabled");

        cy.contains('a', 'Test link')
            .click();

        cy.contains('longer test')
            .click();
    })

    it('Workshop 1', function() {

        cy.visit('01/workshop.html')


        cy.get('input[name="firstName"]')
            .should("have.value", "Terry");

        cy.get('input[name="lastName"]')
            .should("have.value", "Pratchett");

        cy.get('input[name="country"]')
            .should("have.value", "England");

        cy.get("#isActive")
            .should("be.disabled");

        cy.get('#commentInput')
            .type('write sth');

        cy.get('.btn').click();

        cy.contains("Details")
            .should("have.attr", "href", "https://en.wikipedia.org/wiki/Terry_Pratchett");

        cy.contains('a', "Details").then(($a) => {
            // pull off the fully qualified href from the <a>
            const url = $a.prop('href')

            // make a cy.request to it
            cy.request(url).its('body').should('include', '</html>')
        });
    })
})