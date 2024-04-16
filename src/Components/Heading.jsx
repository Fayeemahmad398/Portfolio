/* eslint-disable react/prop-types */

function Heading({ firstChar, RemainChars }) {
    return (
        <div style={{
            fontSize: "28px",
            textAlign: "center",
            color: "red", marginTop: "40px",
            marginBottom: "10px",
        }}>
            <strong style={{ color: "black" }}>{firstChar}</strong><strong>{RemainChars}</strong>
        </div>
    )
}

export default Heading
