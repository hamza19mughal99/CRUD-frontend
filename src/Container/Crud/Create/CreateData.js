import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {Form} from "react-bootstrap";

const CreateData = () => {
    const navigate = useNavigate();
    const [getFormData, setGetFormData] = useState({})

    const SubmitHandler = (e) => {
        e.preventDefault();

        axios.post('/register', getFormData)
            .then((res) => {
                console.log(res.data)
                navigate('/')
            }).catch((err) => {
                console.log(err)
        })
    }

    const onChangeHandler = (e) => {
        setGetFormData({
            ...getFormData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <React.Fragment>
            <h1 className={'text-center my-3'}> Create User </h1>

            <div className={'form_div'}>
                <div className={'text-end'}>
                    <button className={'create_btn'} onClick={() => navigate('/')}>Back</button>
                </div>

                <Form onSubmit={SubmitHandler}>

                <Form.Label>Email</Form.Label>
                <Form.Control type="text" name={'email'} onChange={onChangeHandler} />

                <Form.Label>UserName</Form.Label>
                <Form.Control type="text" name={'username'} onChange={onChangeHandler} />

                <Form.Label>Job</Form.Label>
                <Form.Control type="text" name={'job'} onChange={onChangeHandler} />

                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="number" name={'number'} onChange={onChangeHandler} />

                <div className={'text-center my-4'}>
                    <button type={'submit'} className={'create_btn'} >Create</button>
                </div>

                </Form>
            </div>

        </React.Fragment>
    );
};

export default CreateData;