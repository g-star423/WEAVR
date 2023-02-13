import { useState } from "react"
import { HexColorPicker } from "react-colorful"
import VerticalSquare from "./VerticalSquare"
import axios from "axios"


function AddWeave() {

    const [color, setColor] = useState("#aabbcc")

    const [colorArray, setColorArray] = useState<string[]>([])

    function addColor() {
        setColorArray([...colorArray, color])
    }
    function reset() {
        setColorArray([])
    }

    return (
        <div className="add-weave">
            <HexColorPicker color={color} onChange={setColor}></HexColorPicker>
            <div style={{ backgroundColor: color }} className="next-color"></div>
            <button onClick={addColor}>Add Color</button>
            <button onClick={reset}>Reset</button>
            <VerticalSquare colors={colorArray}></VerticalSquare>
            <button>Submit Pattern</button>
        </div>
    )
}

export default AddWeave