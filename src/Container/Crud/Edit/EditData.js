import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import {Form} from "react-bootstrap";

const EditData = () => {
    const navigate = useNavigate();
    const [getEditFormData, setEditGetFormData] = useState({})

    const SubmitHandler = (e) => {
        e.preventDefault();
        console.log(getEditFormData)
    }

    const onChangeHandler = (e) => {
        setEditGetFormData({
            ...getEditFormData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <React.Fragment>
            <h1 className={'text-center my-3'}> Edit User </h1>

            <div className={'form_div'}>

                <div className={'text-end'}>
                    <button className={'create_btn'} onClick={() => navigate('/')}>Back</button>
                </div>

                <Form onSubmit={SubmitHandler}>

                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text" value={'hamza@gmail.com'} name={'email'} onChange={onChangeHandler} />

                    <Form.Label>UserName</Form.Label>
                    <Form.Control type="text" value={'hamza mughal'} name={'username'} onChange={onChangeHandler} />

                    <Form.Label>Job</Form.Label>
                    <Form.Control type="text" value={'developer'} name={'job'} onChange={onChangeHandler} />

                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="text" value={'03492496204'} name={'number'} onChange={onChangeHandler} />

                    <div className={'text-center my-4'}>
                        <button type={'submit'} className={'create_btn'} >Create</button>
                    </div>

                </Form>
            </div>

        </React.Fragment>
    );
};

export default EditData;