import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { getRegisterData } from '../services/home.services';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Register() {
    
    const { register, handleSubmit, formState: { errors }, watch } = useForm();
    const navigate = useNavigate();
    const RegisterUser = data => {
        const userdata ={
            first_name:data.fname,
            last_name:data.lname,
            email:data.email,
            password:data.password,
            role:data.role,
            gender:data.gender
        }
        getRegisterData(userdata).then(r=>{
            if(r.code == 1){
                console.log(r.data);
                localStorage.setItem('User_model',JSON.stringify(r?.data));
                toast.success('Registration Successfull..');
                setTimeout(()=>{
                    navigate('/dashboard');
                },2000)
            }
            else{
                toast.error(r.data);
            }
        })
    }

    useEffect(()=>{
        if(localStorage.getItem('User_model')){
            navigate('/dashboard');
        }
    },[])

    return (
        <>
            <div className='container'>
                <div className='row text-center'>
                    <h1>Register Here</h1>
                </div>
                <form className='border border-success rounded w-50 mx-auto mt-4 py-4' onSubmit={handleSubmit(RegisterUser)}>

                    <div className='row'>
                        <div className="form-group col-8 mx-auto">
                            <label htmlFor="fname">First Name</label>
                            <input type="text" id="fname" className="form-control" {...register('fname', {
                                required: 'Please Enter First Name',
                                pattern: { value: /^[a-zA-Z ]{3,20}$/, message: 'Please Enter Only alphabets and length should be between 3 and 20.' },
                            })} placeholder='Enter Your First Name' />
                            <p style={{ color: 'red' }}>{errors.fname?.message}</p>
                        </div>
                    </div>

                    <div className='row'>
                        <div className="form-group col-8 mx-auto">
                            <label htmlFor="lname">Last Name</label>
                            <input type="text" id="lname" className="form-control" {...register('lname', {
                                required: 'Please Enter Last Name',
                                pattern: { value: /^[a-zA-Z ]{3,20}$/, message: 'Please Enter Only alphabets and length should be between 3 and 20.' },
                            })} placeholder='Enter Your Last Name' />
                            <p style={{ color: 'red' }}>{errors.lname?.message}</p>
                        </div>
                    </div>

                    <div className='row'>
                        <div className="form-group col-8 mx-auto">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" className="form-control" {...register('email', {
                                required: 'Please Enter Email',
                                pattern: { value: /^[a-zA-Z0-9]+[._-]*[a-zA-Z0-9]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, message: 'Please Enter Valid Email' },
                            })} placeholder='Enter Your Email' />
                            <p style={{ color: 'red' }}>{errors.email?.message}</p>
                        </div>
                    </div>

                    <div className='row'>
                        <div className="form-group col-8  mx-auto">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" className="form-control" {...register('password', {
                                required: 'Please Enter Password',
                                pattern: { value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,20})/, message: 'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Characte' }
                            })} placeholder='Enter Your Password' />
                            <p style={{ color: 'red' }}>{errors.password?.message}</p>
                        </div>
                    </div>

                    <div className='row'>
                        <div className="form-group col-8  mx-auto">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                                <input type="password" className="form-control" id="confirmPassword" name='cpassword' placeholder="Confirm Password"  {...register('cpassword', {required:'Please Enter Confirm Password', validate:(value) => value === watch('password')||"Password do not match"})} />
                            <p style={{ color: 'red' }}>{errors.cpassword?.message}</p>
                        </div>
                    </div>


                    <div className='row'>

                        <div className="form-group col-5  mx-auto">
                            <label htmlFor='gender'>Gender</label>
                            <select class="form-select" name='gender' {...register('gender', { required: 'please Select Your Gender.', })}>
                                <option disabled selected value=''>Select Your Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                            <p style={{ color: 'red' }}>{errors.gender?.message}</p>
                        </div>

                        <div className="form-group col-5  mx-auto">
                            <label htmlFor='role'>Role</label>
                            <select class="form-select" name='role' {...register('role', { required: 'Please Select Your Role.' })}>
                                <option disabled selected value=''>Select Your Role</option>
                                <option value="Admin">Admin</option>
                                <option value="Employee">Employee</option>
                            </select>
                            <p style={{ color: 'red' }}>{errors.role?.message}</p>
                        </div>

                    </div>

                    <div className='row'>
                        <div className="form-group col-8  mx-auto">
                            <input className="form-check-input" type="checkbox" style={{ height: '20px', width: '20px', border: '2px solid black' }} value="" id="flexCheckDefault" {...register('select', { required: 'Please Select T&C CkeckBox.' })} />
                            <label className="form-check-label" for="flexCheckDefault">&nbsp; I am over Age of 18.&nbsp;</label><Link to="">What Does This Change?</Link>
                            <p style={{ color: 'red' }}>{errors.select?.message}</p>
                        </div>
                    </div>

                    <div className='row col-8 mx-auto'>
                        <center><button type="submit" className="btn btn-primary mt-3 mb-2">Register</button><br />
                            Already Have An Account ?<Link to='/'> Login Here</Link></center>
                    </div>

                </form>
            </div>
        <ToastContainer/>
        </>
    )
}
