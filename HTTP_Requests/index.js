import express from "express";
const app = express();
const port = 5000;

app.get("/", (req, res)=>{
    res.send("Welcome!");
});

app.get("/contact", (req, res)=>{
    res.send("Contact me using Email");
});

app.get("/about", (req, res)=>{
    res.send("My Name Is Aviral Gupta");
});

app.listen(port, () => {
    console.log(`Server Active At Port, localhost:${port}`);
});