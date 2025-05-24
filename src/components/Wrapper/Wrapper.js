import React, {Suspense} from 'react';
import Main from "../Main/Main";
import DataList from "../DataList/DataList";
import {DataContext} from "../Context/DataContext";
import Loader from "../Loader/Loader";

const Wrapper = () => {
    const [data, setData] = React.useState('daily');

    const updateData = (newData) => {
        setData(newData);
    };

    // example
    // let data = 'daily';
    // let setData = (newData) => data = newData;
    return (<>
            <DataContext.Provider value={{data, updateData}}>
                <Main/>
                <Suspense fallback={<Loader/>}>
                    <DataList/>
                </Suspense>
            </DataContext.Provider>
        </>
    );
};

export default Wrapper;