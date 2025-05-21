import styles from './DataList.module.css'
import {useEffect, useState} from "react";
import DataItem from "../DataItem/DataItem";

function DataList() {
    const [newData, setNewData] = useState([]);

    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => {
                setNewData(data);
            })
    }, []);
    return (
        <section id={styles.grid}>
            {
                newData.map(activity =>
                    <DataItem key={activity.title} title={activity.title} img={activity.img} timeframes={activity.timeframes}/>
                )
            }
        </section>)
}

export default DataList