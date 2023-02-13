
function VerticalSquare() {

    const testColors = [
        "#32a852",
        "#1885c9",
        "#1824c9",
        "#32a852",
        "#1885c9",
        "#1824c9",
    ]
    function makeDivs(arr: string[]) {
        for (let i = 0; i < arr.length; i++) {
            return <div>asdfff</div>
        }
    }
    return (
        <div className="vertical-container">
            {testColors.map(color => (
                <div style={{ backgroundColor: color }}>{color}</div>
            ))}
        </div>
    )
}

export default VerticalSquare