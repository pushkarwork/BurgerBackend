import app from "./app.js"
import { connectdb } from "./config/db.js"

connectdb()

app.get("/", (req, res) => {
    res.send("this is home")

})


app.listen(process.env.PORT, () => {
    console.log(`Server is running at http://localhost:${process.env.PORT}`)

})