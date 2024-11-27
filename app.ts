/*
Author: Kalle Liljeström
*/
import express from 'express';

import router from "./src/index"

const app = express()
const port = 3000

app.use(express.static('public'))
app.use("/", router)


app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})

