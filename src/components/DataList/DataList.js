import styles from './DataList.module.css'
import {useEffect, useState} from "react";
import DataItem from "../DataItem/DataItem";

function DataList() {
    const [newData, setNewData] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch('/data.json')
                const data = await res.json()
                setNewData(data)
            } catch (error) {
                console.error("Something went wrong, it must've been : " + error)
            }
        })()
    }, []);
    return (
        <section id={styles.grid}>
            {
                newData.map(activity =>
                    <DataItem key={activity.title} title={activity.title} img={activity.img}
                              timeframes={activity.timeframes}/>
                )
            }
        </section>)
}

export default DataList