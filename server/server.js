const express = require("express");
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT || 8080;
const app = express();
app.use(cors());
const axios = require("axios");

// this is an endpoint
app.get("/", (_, response) => response.json("Testing testing"));

app.get("/translate", async (request, response) => {
	// const word = request.query.wordconst;
	// const from = request.query.from;
	// const to = request.query.to;

	// destructure all the properties from request.query into variables
	const { word, from, to } = request.query;

	const API = `https://api.mymemory.translated.net/get?q=${word}&langpair=${from}|${to}`;

	const res = await axios.get(API);

	const wrangledData = {
		translation: res.data.responseData.translatedText,
		match: res.data.responseData.match,
	};

	response.json(wrangledData);
});

app.listen(PORT, () => console.log(`App is running PORT ${PORT}`));
