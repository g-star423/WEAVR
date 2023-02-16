interface Props {
    colors: string[]
}

function TempVerticalSquare({ colors }: Props) {

    return (
        <div className="vertical-container">
            {colors.map((color, index) => (
                <div key={index} style={{ backgroundColor: color }}></div>
            ))}
        </div>
    )
}

export default TempVerticalSquare