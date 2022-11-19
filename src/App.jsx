import { useState } from "react"
import { Slider } from "./components/Slider.jsx"
import "./App.scss"
const imgUrls = [
	"https://picsum.photos/200",
	"https://picsum.photos/201",
	"https://picsum.photos/202",
	"https://picsum.photos/203",
	"https://picsum.photos/204",
	"https://picsum.photos/205",
	"https://picsum.photos/206",
	"https://picsum.photos/207",
	"https://picsum.photos/208",
	"https://picsum.photos/209",
	"https://picsum.photos/199",
	"https://picsum.photos/198",
	"https://picsum.photos/197",
]

const items = imgUrls.map((url, ind) => {
	return <img src={url} key={ind} alt="image" />
})

function App() {
	return (
		<div className="App">
			<Slider
				items={items}
				containerWidth="200px"
				autoplay={true}
				autoplaySpeedMs={500}
			/>
		</div>
	)
}

export default App
