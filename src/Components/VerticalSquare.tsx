
interface Props {
    colors: string[]
}

function VerticalSquare({ colors }: Props) {

    return (
        <div className="vertical-container">
            {colors.map(color => (
                <div style={{ backgroundColor: color }}></div>
            ))}
        </div>
    )
}

export default VerticalSquare