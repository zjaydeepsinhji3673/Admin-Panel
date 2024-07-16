import React, { useEffect, useRef, useState } from 'react';
import { deleteUser, getEmployeeData, logout, updateUserData } from '../services/home.services';
import { FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from '../context/Theme';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import ReactPaginate from 'react-paginate';
import '../App.css';
// import DataTable from 'react-data-table-component';
import UserInfoForViewModel from './UserInfoForViewModel';
import UpdateUserInfoModal from './UpdateUserInfoModal';

export default function Dashboard() {

    const [Data, SetData] = useState([]);
    const [DeletedUser, setIsDelete] = useState(false);
    const [ViewUserInfoModel, setViewUserInfoModel] = useState(false);
    const [UserInfoForView, setUserInfoForView] = useState([]);
    const [UpdateUserInfoModel, setUpdateUserInfoModel] = useState(false);
    const [UserInfoViewForUpdate, setUserInfoViewForUpdate] = useState([]);
    const [EditUser, setEditUser] = useState(false);
    const THEME = useTheme();
    const navigate = useNavigate();

    document.body.style.backgroundColor = THEME.Theme === "Dark" ? 'black' : 'white';

    const UserData = JSON.parse(localStorage.getItem('User_model'));
    const token = UserData[0]?.token;
    const role = UserData[0]?.role;
    const uid = UserData[0]?.id;

    const page = localStorage.getItem('Page') || 0;
    const [pageSize, setPageSize] = useState(5);
    const [pageNo, setPageNo] = useState(page);
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState('');
    const [total, setTotal] = useState(0);
    const [filteredTotal, setFilteredTotal] = useState(0);
    const searchRef = useRef();

    useEffect(() => {
        getEmployeeData({
            "page_size": pageSize,
            "page_no": pageNo,
            "search": search,
            "filter": filter === '' ? null : filter
        }).then(r => {
            if (r?.code == 1) {
                SetData(r?.data?.content);
                setTotal(r?.data?.total);
                setFilteredTotal(r?.data?.filtered_total);
            }
        })

    }, [EditUser, DeletedUser, pageNo, filter, search])


    const handlePageClick = (event) => {
        setPageNo(event?.selected);
        localStorage.setItem('Page', event?.selected);
    }

    function handleSearch(e) {
        setSearch(e?.target?.value);
        setPageNo(0);
    }

    function handleTheme(theme) {
        THEME.setTheme(theme);
        localStorage.setItem('Theme', theme);
    }

    function Logout() {
        logout().then(r => {
            if (r?.code == 1) {
                localStorage.removeItem('User_model');
                toast.success(r?.data);
                navigate('/');
            }
        })
    }

    function DeleteUser(userid) {
        Swal.fire({
            title: "Are you sure?",
            text: "Are you Sure Want to Delete this user!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                deleteUser({ user_id: userid }).then(r => {
                    if (r.code == 1) {
                        setIsDelete((prev) => !prev);
                        Swal.fire({
                            title: "Deleted!",
                            text: "Data has been Deleted Successfully.",
                            icon: "success"
                        });
                    }
                })
            }
        });
    }

    function ViewUserInfo(usermodel) {
        setViewUserInfoModel(true);
        setUserInfoForView(usermodel);
    }

    function closeViewInfoModel() {
        setViewUserInfoModel(false);
    }

    function UpdateUser(usermodel) {
        setUpdateUserInfoModel(true);
        setUserInfoViewForUpdate(usermodel)
    }

    const UpadteUserInfo = data => {
        var userData = {
            fname: data.fname,
            lname: data.lname,
            user_id: UserInfoViewForUpdate.id,
            email: data.email,
            gender: data.gender,
        }
        updateUserData(userData).then(r => {
            if (r?.code == 1) {
                setEditUser((prev) => !prev);
                setUpdateUserInfoModel(false);
                toast.success(r?.data);
            }
        })
    }

    const filteredData = role === 'Employee' ? Data.filter(user => user?.role !== 'Admin') : Data;

    return (
        <>
            <div className='container'>
                <div className='row mt-2' style={{ color: 'orangered' }} >
                    <div className='col-3'>
                        <h3>Employee List</h3>
                    </div>
                    <div className='col-7 text-end'>
                        <span>
                            <select
                                onChange={(e) => { setFilter(e.target?.value); setPageNo(0) }}
                                className={'form-control'} style={{ width: '200px', float: 'right', margin: '5px' }}>
                                <option selected={filter === ''} value={''}>All</option>
                                <option selected={filter === 'Admin'} value={'Admin'}>Admin</option>
                                <option selected={filter === 'Employee'} value={'Employee'}>Employee</option>
                            </select>
                            <input style={{ width: '200px', float: 'right', border: '1px solid grey', margin: '5px' }}
                                className={'form-control'} ref={searchRef} onChange={(e) => handleSearch(e)} />
                        </span>

                    </div>
                    <div className='col-2 mt-2'>
                        <>
                            {THEME.Theme === "Dark" ? <FaSun className='fs-4' onClick={() => handleTheme("Light")} /> : <FaMoon className='fs-4' onClick={() => handleTheme("Dark")} />}
                            <button className='ms-2' style={{ backgroundColor: 'orangered', width: '70px', borderRadius: '20px', color: 'white', borderColor: 'orangered' }}><i className="bi bi-box-arrow-right" onClick={() => Logout()}></i></button>
                        </>
                    </div>
                </div>

                <div className='row ms-2 me-2'>
                    <table className='table table-bordered table-striped'>
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Gender</th>
                                <th>Role</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredData?.length > 0 ?
                                filteredData?.map((v, i) =>
                                    <tr key={i}>
                                        <td>{v?.first_name}</td>
                                        <td>{v?.last_name}</td>
                                        <td>{v?.email}</td>
                                        <td>{v?.gender}</td>
                                        <td>{v?.role}</td>
                                        <td>
                                            <><button className='btn btn-small btn-primary me-2 mt-2 ms-2'
                                                onClick={() => ViewUserInfo(v)}>View</button></>
                                            {((v?.role === "Admin" && v?.token === token) || (v?.role === 'Employee' && v.id === uid) || (v?.role === 'Employee' && role === 'Admin')) && (
                                                <>
                                                    <button className='btn btn-small btn-warning me-2 mt-2' onClick={() => UpdateUser(v)}>Edit</button>
                                                    <button className='btn btn-small btn-danger me-2 mt-2' onClick={() => DeleteUser(v?.id)}>Delete</button>
                                                </>
                                            )}

                                        </td>

                                    </tr>
                                )
                                : (
                                    <tr>
                                        <td colSpan={6}>No Data Found...</td>
                                    </tr>
                                )}
                        </tbody>
                    </table>
                    <nav aria-label="Page navigation example">
                        <ReactPaginate
                            className={'pagination'}
                            onPageChange={handlePageClick}
                            pageCount={Math.ceil(filteredTotal / pageSize)} />
                    </nav>
                </div>
            </div>

            {ViewUserInfoModel && <UserInfoForViewModel UserInfoForView={UserInfoForView} closeViewInfoModel={closeViewInfoModel} />}

            <UpdateUserInfoModal
                isOpen={UpdateUserInfoModel}
                userInfo={UserInfoViewForUpdate}
                closeModal={() => setUpdateUserInfoModel(false)}
                onUpdate={UpadteUserInfo}
            />

            <ToastContainer />
        </>
    )
}