const { defineConfig } = require("cypress");
const { Client } = require('pg')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Just change this data based on what you need for your project.
      on("task", {
        async connectDB(query){
          const client = new Client({
            user: "postgres",
            password: "postgrespw",
            host: "host.docker.internal",
            database: "postgres",
            ssl: false,
            port: 49156
          })
          await client.connect()
          const res = await client.query(query)
          await client.end()
          return res.rows;
        }
      })
    },
  },
});
