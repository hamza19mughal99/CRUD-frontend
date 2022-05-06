import React, {useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {FiEdit} from "react-icons/fi";
import {AiOutlineDelete, AiFillEye} from "react-icons/ai";
import {Modal} from "react-bootstrap";

const Table = () => {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const [getUserData, setGetUserData] = useState({})

    const viewData = () => {
        setShow(true)
    }

    useEffect(() => {
        axios.get('/all-users')
            .then((res) => {
            console.log(res)
        }).catch((err) => {
            console.log(err.message)
        })
    }, [])

    const modal = (
        <Modal show={show} onHide={() => setShow(false)}>
            <Modal.Header closeButton>
                <Modal.Title>View User</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    <h5>ID: 1</h5>
                    <h5>UserName: Hamza</h5>
                    <h5>Email: Hamza@gmail.com</h5>
                    <h5>Phone: 03492496204</h5>
                </div>

            </Modal.Body>
        </Modal>
    )

    return (
        <div className={'text-center d-flex justify-content-center mt-5'}>
            {modal}
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
                <tr>
                    <th>1</th>
                    <td>Hamza</td>
                    <td>hamza@gmail.com</td>
                    <td>Developer</td>
                    <td>123456</td>
                    <td>
                        <div>
                            <button className={'action_btn view'} onClick={viewData}> <AiFillEye /> </button>
                            <button className={'action_btn edit'} onClick={() => navigate('/edit-data')}> <FiEdit /> </button>
                            <button className={'action_btn del'}> <AiOutlineDelete /> </button>
                        </div>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Table;
