import styles from './Main.module.css';
import Icon from '../../image-jeremy.png'
import {useContext} from "react";
import {DataContext} from "../Context/DataContext";

function Main() {
    const {updateData} = useContext(DataContext)

    const handleClick = (e) => {
        updateData(e.currentTarget.textContent.toLowerCase())
    }

    return (
        <section id={styles.main}>
            <div id={styles.name}>
                <img src={Icon} alt="logo"/>
                <span>Report for</span>
                <h1>Jeremy Robson</h1>
            </div>
            <div id={styles.period}>
                <button className="time" data-view="daily" id={styles.daily} onClick={handleClick}>Daily</button>
                <button className="time" data-view="weekly" id={styles.weekly} onClick={handleClick}>Weekly</button>
                <button className="time" data-view="monthly" id={styles.monthly} onClick={handleClick}>Monthly</button>
            </div>
        </section>
    );
}

export default Main;
