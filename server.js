const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const TOKEN = process.env.TOKEN; // Lấy từ Render

app.post("/create-link", async (req, res) => {
    try {
        const { url } = req.body;

        if (!url) {
            return res.status(400).json({ error: "Missing URL" });
        }

        const encoded = encodeURIComponent(url);
        const trackingLink = `https://goeco.mobi/?token=${TOKEN}&url=${encoded}`;

        res.json({ link: trackingLink });

    } catch (err) {
        res.status(500).json({ error: "Server error" });
    }
});

app.listen(3000);
