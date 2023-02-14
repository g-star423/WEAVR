import { useState } from "react"
import { HexColorPicker } from "react-colorful"
import VerticalSquare from "./VerticalSquare"
import axios from "axios"
import { Button, Modal, Box } from "@mui/material"
import { width } from "@mui/system"

function AddWeave() {

    const [color, setColor] = useState("#aabbcc")

    const [colorArray, setColorArray] = useState<string[]>([])
    const [tooMany, setTooMany] = useState(false)

    function addColor() {
        if (colorArray.length <= 15) {
            setColorArray([...colorArray, color])
            setTooMany(false)
        } else {
            setTooMany(true)
        }
    }
    function reset() {
        setColorArray([])
        setTooMany(false)
    }

    function sendPattern() {
        axios.post('http://localhost:3000/newpattern', { colors: colorArray }).then((response) => {
            console.log(response)
            reset()
            handleClose()
        })
    }

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: "90%",
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    return (
        <>
            <Button variant="contained" onClick={handleOpen}>Add Your Pattern</Button>
            <Modal open={open}
                onClose={handleClose}>
                <Box sx={style}>
                    <div className="add-weave">
                        <HexColorPicker color={color} onChange={setColor}></HexColorPicker>
                        <div style={{ backgroundColor: color }} className="next-color"></div>
                        <Button variant="contained" onClick={addColor}>Add Color</Button>
                        <Button variant="outlined" onClick={reset}>Reset</Button>
                        {tooMany ? <p>too many colors!</p> : null}
                        <VerticalSquare colors={colorArray}></VerticalSquare>
                        <Button variant="contained" onClick={sendPattern}>Submit Pattern</Button>
                    </div>
                </Box>
            </Modal>
        </>
    )
}

export default AddWeave