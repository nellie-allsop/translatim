import "./App.css";
import { useState } from "react";
import axios from "axios";

function App() {
	const [from, setFrom] = useState("ar");
	const [to, setTo] = useState("ar");
	const [word, setWord] = useState("");
	const [translation, setTranslation] = useState("");
  const [image, setImage] = useState("")

	async function handleTranslate(event) {
		event.preventDefault();
		const API = `http://localhost:8080/translate?word=${word}&from=${from}&to=${to}`;
		const res = await axios.get(API);
		console.log(res.data);
		setTranslation(res.data.translation);
	}

  async function handleImage(event){
    event.preventDefault()
    const API = `http://`
  }

	return (
		<>
    <h1>Translations</h1>
			<form onSubmit={handleTranslate}>
				<div className="container">
					<select onChange={(event) => setFrom(event.target.value)}>
						<option value="ar">Arabic</option>
						<option value="en">English</option>
						<option value="pl">Polish</option>
						<option value="es">Spanish</option>
						<option value="tr">Turkish</option>
					</select>
					<input
						placeholder="Translate"
						onChange={(event) => setWord(event.target.value)}
					/>
				</div>

				<div className="container">
					<select onChange={(event) => setTo(event.target.value)}>
						<option value="ar">Arabic</option>
						<option value="en">English</option>
						<option value="pl">Polish</option>
						<option value="es">Spanish</option>
						<option value="tr">Turkish</option>
					</select>
          {translation && (<div className="output"><p>The translation is {translation}</p></div>)}
          {translation && (<div className="image">
            {/* I want an image here based on the 'translation' part of the object from myMemory */}
          <p> {image} this is where the picture will go</p>
          <img src="url from unsplash"/>
          </div>)}
				</div>
        <br />
				<button>Submit</button>
			</form>
		</>
	);
}

export default App;
