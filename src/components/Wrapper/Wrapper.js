import React from 'react';
import Main from "../Main/Main";
import DataList from "../DataList/DataList";
import {DataContext} from "../Context/DataContext";

const Wrapper = () => {
    const [data,setData] = React.useState('daily');

    const updateData = (newData) => {
        setData(newData);
    };

    // example
    // let data = 'daily';
    // let setData = (newData) => data = newData;
    return (<>
        <DataContext.Provider value={{data, updateData}}>
            <Main/>
            <DataList/>
        </DataContext.Provider>
        </>
    );
};

export default Wrapper;