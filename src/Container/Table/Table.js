import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete, AiFillEye } from "react-icons/ai";
import { Modal, Spinner } from "react-bootstrap";

const Table = () => {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const [getUserData, setGetUserData] = useState(null)
    const [getOneUserData, setGetOneUserData] = useState(null)
    const [searchEmail, setSearchEmail] = useState(null)

    const viewData = (id) => {
        axios.get(`/all-users/${id}`)
            .then((res) => {
                setGetOneUserData(res.data)

            }).catch((err) => {
                console.log(err.message)
            })
        setShow(true)
    }

    useEffect(() => {
        axios.get('/all-users')
            .then((res) => {
                setGetUserData(res.data)
            }).catch((err) => {
                console.log(err.message)
            })
    }, [getOneUserData])

    const deleteData = (id) => {
        axios.delete(`all-users/${id}`)
            .then((res) => {
                window.location.reload();
            }).catch((err) => {
                console.log(err.message)
        })
    }

    const SearchHandler = (e) => {
        e.preventDefault();
        
        axios.get(`/all-users?keyword=${searchEmail}`)
            .then((res) => {
                setGetUserData(res.data)
            }).catch((err) => {
                console.log(err.message)
        })
    }

    const modal = (
        <Modal show={show} onHide={() => setShow(false)}>
            <Modal.Header closeButton>
                <Modal.Title>View User</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {
                    getOneUserData ?
                        <div>
                            <h5>ID: {getOneUserData._id}</h5>
                            <h5>UserName: {getOneUserData.username}</h5>
                            <h5>Email: {getOneUserData.email}</h5>
                            <h5>Phone: {getOneUserData.number}</h5>
                        </div>
                        : null
                }
            </Modal.Body>
        </Modal>
    )

    let data = (
        <div className='text-center my-2 w-100'>
            <Spinner animation="border" />
        </div>
    )

    if(getUserData && getUserData.length === 0){
        data = (
            <p className={'text-center'}>No Data Found</p>
        )
    }
    if (getUserData && getUserData.length > 0) {
        data = (
            <table className="table table-striped w-75">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Username</th>
                        <th scope="col">Email</th>
                        <th scope="col">Job</th>
                        <th scope="col">Number</th>
                        <th scope="col" />
                    </tr>
                </thead>
                <tbody>
                    {
                        getUserData.map((d, i) => {
                            return (

                                <tr key={i}>
                                    <th>{i + 1}</th>
                                    <td>{d.username}</td>
                                    <td>{d.email}</td>
                                    <td>{d.job}</td>
                                    <td>{d.number}</td>
                                    <td>
                                        <div>
                                            <button className={'action_btn view'} onClick={() => viewData(d._id)}> <AiFillEye /> </button>
                                            <button className={'action_btn edit'} onClick={() => navigate(`/edit-data/${d._id}`)}> <FiEdit /> </button>
                                            <button className={'action_btn del'} onClick={() => deleteData(d._id)}><AiOutlineDelete /> </button>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        )
    }

    return (
        <React.Fragment>
            <form onSubmit={SearchHandler}>
            <div className={'input_div'}>
                <input placeholder={'Enter Email Address'} type="email" onChange={(e) => setSearchEmail(e.target.value)}/>
                <button className={'create_btn'}> Search </button>
            </div>
            </form>
            <div className={'text-center d-flex justify-content-center mt-5'}>
                {modal}
                {data}
            </div>
        </React.Fragment>

    );
};

export default Table;
