

/** create a server */

// server config

const express = require("express")

const app = express()

app.use(express.json())

const notes = []

// POST /notes
app.post("/notes",(req, res)=> {

    // console.log(req.body)
    notes.push(req.body)

    res.status(201).json({
        message: "Note created successfully"
    })

})

// GET /notes
app.get("/notes",(req, res)=>{
    res.status(200).json({
        notes: notes
    })
})

// DELETE /notes
app.delete("/notes/:index", (req, res) => {
    delete notes[req.params.index]

    res.status(204).json({
        message: "delete note successfully"
    })
})

// PATCH /notes
app.patch("/notes/:index", (req,res)=> {
    notes[req.params.index].desc = req.body.desc

    res.status(200).json({
        message: "Note updated successfully"
    })
})

module.exports = app