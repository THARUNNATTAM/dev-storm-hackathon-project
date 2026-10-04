const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "Carbon Footprint Backend is running!"
    });
});

app.post("/calculate", (req, res) => {
    const { electricity, travel, lpg } = req.body;

    const total = Number(electricity || 0) +
                  Number(travel || 0) +
                  Number(lpg || 0);

    res.json({
        totalCarbon: total
    });
});

app.listen(3000, () => {
    console.log("Backend running at http://localhost:3000");
});