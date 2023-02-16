import { useState } from "react";
import { Modal, Box } from "@mui/material"

interface Props {
    colors: string[]
    pattern: {
        colors: string[],
        country: string,
        region: string,
        city: string,
        createdAt: string
    }
}

function VerticalSquare({ colors, pattern }: Props) {

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

    let city = ''
    let region = ''
    let country = ''
    // let date = pattern.createdAt.slice(0, 9)
    let testDate = new Date(pattern.createdAt)
    let formattedTestDate = testDate.toLocaleDateString()

    if (pattern.city) {
        city = pattern.city + ", "
        region = pattern.region + ", "
        country = pattern.country
    } else {
        city = 'unknown location'
    }

    return (
        <>
            <div onClick={handleOpen} className="vertical-container">
                {colors.map((color, index) => (
                    <div key={index} style={{ backgroundColor: color }}></div>
                ))}
            </div>
            <Modal open={open}
                onClose={handleClose}>
                <Box sx={style}>
                    <div className="info-div">
                        <p>{`Quilted from: ${city} ${region} ${country}`}</p>
                        <p>{`On: ${formattedTestDate}`}</p>
                    </div>
                </Box>
            </Modal>
        </>
    )
}

export default VerticalSquare