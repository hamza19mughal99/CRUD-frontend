import React from 'react';
import Table from "../Table/Table";
import { useNavigate } from "react-router-dom";

const Crud = () => {
    const navigate = useNavigate();
    return (
        <React.Fragment>
            <h1 className={'text-center my-4'}>CRUD OPERATION</h1>

            <div className={'text-center'}>
                <button className={'create_btn'} onClick={() => navigate('/create-data')}>Create Data</button>
            </div>

            <Table />
        </React.Fragment>
    );
};

export default Crud;
