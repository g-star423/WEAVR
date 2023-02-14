interface Props {
    colors: string[]
}

function HorizontalSquare({ colors }: Props) {

    return (
        <div className="horizontal-container">
            {colors.map((color, index) => (
                <div key={index} style={{ backgroundColor: color }}></div>
            ))}
        </div>
    )
}

export default HorizontalSquare