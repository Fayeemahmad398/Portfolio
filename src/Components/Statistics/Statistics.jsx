/* eslint-disable react/jsx-key */
import Heading from "../Heading";
import "./statistics.css"
function Statistics() {
    const dataStatictics = [
        { count: "5+", effort: "Projects", status: "Done" },
        { count: "500+", effort: "Commits", status: "GitHub" },
        { count: "300+", effort: "DSA", status: "Solved" }];
    return (
        <div>
            <Heading firstChar={"S"} RemainChars={"TATISTICS"} />
            <div className="container m-auto all-statistics">
                {
                    dataStatictics.map((data) =>
                        <div className="statistics-box">
                            <div>{data.count}</div>
                            <div>{data.effort}</div>
                            <div>{data.status}</div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Statistics;
