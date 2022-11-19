import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import styles from "./slider.module.scss"

console.log(styles)
export const Slider = ({
	items,
	containerWidth = "100px",
	autoplay = false,
	autoplaySpeedMs = 1000,
}) => {
	const [position, setPosition] = useState(1)

	useEffect(() => {
		let interval = null
		if (autoplay === true) {
			interval = setInterval(() => {
				setPosition((prevPos) => {
					if (prevPos + 1 > items.length) {
						return 1
					}
					return prevPos + 1
				})
			}, autoplaySpeedMs)
		}
		return () => clearInterval(interval)
	}, [])

	const handleNext = () => {
		console.log(position)
		if (position + 1 > items.length) {
			setPosition(1)
		} else {
			setPosition((prev) => prev + 1)
		}
	}
	const handlePrev = () => {
		if (position - 1 < 1) {
			setPosition(items.length)
		} else {
			setPosition(position - 1)
		}
	}
	return (
		<div className={`${styles["slider"]} `}>
			<div className={styles["dots"]}>
				{items.map((_, index) => {
					return (
						<div
							className={`${styles["dot"]} ${
								position === index + 1 ? styles["active"] : ""
							}`}
							key={index}
							onClick={() => {
								setPosition(index + 1)
							}}
						></div>
					)
				})}
			</div>
			<div className={styles["slider__container-wrapper"]}>
				<button
					className={`${styles["slider__arrow"]} `}
					onClick={() => handlePrev()}
				>
					Prev
				</button>
				<div
					className={`${styles["slider__container"]} `}
					style={{
						width: `${containerWidth}`,
						translate: `calc(-${
							position - 1
						} * ${containerWidth}) 0px`,
					}}
				>
					{items.map((item) => item)}
				</div>
				<button
					className={`${styles["slider__arrow"]} `}
					onClick={() => handleNext()}
				>
					Next
				</button>
			</div>
		</div>
	)
}
