import React from 'react'

export default function UserInfoForViewModel({UserInfoForView, closeViewInfoModel}) {
    
    return (
        <>
            <div className="modal" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">View User Info</h5>
                            <button type="button" className="close" onClick={closeViewInfoModel} aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <h5>First_Name: {UserInfoForView?.first_name}</h5>
                            <h5>Last_Name: {UserInfoForView?.last_name}</h5>
                            <h5>Email: {UserInfoForView?.email}</h5>
                            <h5>Gender: {UserInfoForView?.gender}</h5>
                            <h5>Role: {UserInfoForView?.role}</h5>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className='btn btn-primary' onClick={() => closeViewInfoModel()}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
