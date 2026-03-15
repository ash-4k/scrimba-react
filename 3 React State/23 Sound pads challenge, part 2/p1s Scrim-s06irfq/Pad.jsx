export default function Pad(prop) {
    console.log(prop)
    const styleColor = {
        backgroundColor: prop.color
    }
    return <button style={styleColor}></button>
}