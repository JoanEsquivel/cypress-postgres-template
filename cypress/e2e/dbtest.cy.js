describe('Postgres demo', ()=>{
    it('Connection test', ()=>{
        cy.task("connectDB", "SELECT * FROM public.movies ORDER BY user_id ASC ").then((response)=>{
            cy.log(response)
            cy.log(`Movie name: ${response[0].name}`)
        })
    })
})