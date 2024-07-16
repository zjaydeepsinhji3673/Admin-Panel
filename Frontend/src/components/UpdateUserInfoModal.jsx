import { useEffect } from "react";
import { useForm } from "react-hook-form";

export default function UpdateUserInfoModal({ isOpen, userInfo, closeModal, onUpdate }) {
    const { register, handleSubmit, formState: { errors }, setValue } = useForm();

    useEffect(() => {
        if (isOpen && userInfo) {
            setValue('fname', userInfo.first_name);
            setValue('lname', userInfo.last_name);
            setValue('email', userInfo.email);
            setValue('gender', userInfo.gender);
        }
    }, [isOpen, userInfo, setValue]);

    const handleUpdate = data => {
        const updatedUser = {
            ...data,
            user_id: userInfo.id
        };
        onUpdate(updatedUser);
    };

    return isOpen ? (
        <div className="modal" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Update User Info</h5>
                        <button type="button" className="close" onClick={closeModal} aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleSubmit(handleUpdate)}>
                            <div className='row'>
                                <div className="form-group col-8 mx-auto">
                                    <label htmlFor="fname">First Name</label>
                                    <input type="text" id="fname" className="form-control" {...register('fname', {
                                        required: 'Please Enter First Name',
                                        pattern: { value: /^[A-Za-z]+([\s][A-Za-z]+)*[A-Za-z]{3,20}$/, message: 'Please Enter Only alphabets and length should be between 3 and 20.' },
                                    })} placeholder='Enter Your First Name' />
                                    {errors.fname && <p style={{color:'red'}} className="error">{errors.fname.message}</p>}
                                </div>
                            </div>
                            <div className='row'>
                                <div className="form-group col-8 mx-auto">
                                    <label htmlFor="lname">Last Name</label>
                                    <input type="text" id="lname" className="form-control" {...register('lname', {
                                        required: 'Please Enter Last Name',
                                        pattern: { value:  /^[A-Za-z]+([\s][A-Za-z]+)*[A-Za-z]{3,20}$/, message: 'Please Enter Only alphabets and length should be between 3 and 20.' },
                                    })} placeholder='Enter Your Last Name' />
                                    {errors.lname && <p  style={{color:'red'}} className="error">{errors.lname.message}</p>}
                                </div>
                            </div>
                            <div className='row'>
                                <div className="form-group col-8 mx-auto">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" id="email" className="form-control" {...register('email', {
                                        required: 'Please Enter Email',
                                        pattern: { value: /^[a-zA-Z0-9]+[._-]*[a-zA-Z0-9]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, message: 'Please Enter Valid Email' },
                                    })} placeholder='Enter Your Email' />
                                    {errors.email && <p  style={{color:'red'}} className="error">{errors.email.message}</p>}
                                </div>
                            </div>
                            <div className='row'>
                                <div className="form-group col-8 mx-auto">
                                    <label htmlFor='role'>Role</label>
                                    <select className="form-select" name='role' {...register('role', { required: 'Please Select Role.' })}>
                                        <option disabled selected value=''>Select Role</option>
                                        <option value="Traveler">Traveler</option>
                                        <option value="Service_Provider">Service_Provider</option>
                                    </select>
                                    {errors.role && <p style={{color:'red'}} className="error">{errors.role.message}</p>}
                                </div>
                            </div>
                            <div className='row col-8 mx-auto'>
                                <center><button type="submit" className="btn btn-primary mt-3 mb-2">Edit User Info</button></center>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className='btn btn-primary' onClick={closeModal}>Close</button>
                    </div>
                </div>
            </div>
        </div>
    ) : null;
};