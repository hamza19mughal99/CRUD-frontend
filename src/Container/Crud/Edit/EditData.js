import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
import { Form } from "react-bootstrap";

const EditData = () => {
    const navigate = useNavigate();
    const [getEditFormData, setEditGetFormData] = useState({
        email: '',
        username: '',
        job: '',
        number: ''
    })

    const id = useParams();

    useEffect(() => {
        axios.get(`/all-users/${id.id}`)
            .then((res) => {
                setEditGetFormData(res.data)

            }).catch((err) => {
                console.log(err.message)
            })
    },[])

    const SubmitHandler = (e) => {
        e.preventDefault();
        axios.patch(`/all-users/${id.id}`, getEditFormData)
            .then((res) => {
                navigate('/')
                console.log('successfully updated')
            }).catch((err) => {
                console.log(err.message)
        })
    }

    const onChangeHandler = (e) => {
        console.log(e.target.value)
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
                    <Form.Control type="text" value={getEditFormData.email} name={'email'} onChange={onChangeHandler} />

                    <Form.Label>UserName</Form.Label>
                    <Form.Control type="text" value={getEditFormData.username}  name={'username'} onChange={onChangeHandler} />

                    <Form.Label>Job</Form.Label>
                    <Form.Control type="text" value={getEditFormData.job} name={'job'} onChange={onChangeHandler} />

                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="text" value={getEditFormData.number} name={'number'} onChange={onChangeHandler} />

                    <div className={'text-center my-4'}>
                        <button type={'submit'} className={'create_btn'} >Edit</button>
                    </div>

                </Form>
            </div>

        </React.Fragment>
    );
};

export default EditData;