import styles from "./DataItem.module.css"
import ellipsis from "../../icon-ellipsis.svg"
import {useContext} from "react";
import {DataContext} from "../Context/DataContext";

function DataItem(props) {
    const {data} = useContext(DataContext)
    let timeframes = props.timeframes

    return (
        <div className={styles[props.title]}>
            <img src={props.img} alt={props.title}/>
            <div className={styles.tracking}>
                <div>
                    <h2>{props.title.charAt(0).toUpperCase() + props.title.slice(1).replace('-', ' ')}</h2>
                    <img src={ellipsis} alt="three-dots"/>
                </div>
                <h3 id={props.title + "-current"}>
                    {timeframes[data].current}{timeframes[data].current !== 1 ? "hrs" : "hr"}
                </h3>
                <p id={props.title + "-previous"}>
                    {'Previous - ' + timeframes[data].previous}{timeframes[data].previous !== 1 ? "hrs" : "hr"}
                </p>
            </div>
        </div>
    )
}

export default DataItem
/* example
<div id="self-care">
            <img src="./images/icon-self-care.svg" alt="self-care">
            <div class="tracking">
                <div>
                    <h2>Self Care</h2>
                    <img src="./images/icon-ellipsis.svg" alt="three-dots">
                </div>
                <h3 id="self-care-current">0hrs <!-- daily --></h3>
                <p id="self-care-previous">Previous - 1hr <!-- daily --></p>
</div>
        </div>
*/