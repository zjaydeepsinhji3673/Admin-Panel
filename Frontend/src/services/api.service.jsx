import request from "./axios.service";
import { GET, POST, BASE_URL, AUTH, COMPANY, SUBSCRIPTION, HOME, ORGANIZATION, MEMBER, TEAM, COMMON, CLIENT, TASK } from "../app.config";

//////////////////////////////////////////////////////////////////////
//                               Auth                               //
//////////////////////////////////////////////////////////////////////

export const loginApi = (body) => {
  return request(`${BASE_URL}/${AUTH}/login`, POST, false, body)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw error;
    });
};

export const signupApi = (body) => {
  return request(`${BASE_URL}/${AUTH}/signup`, POST, false, body)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw error;
    });
};

export const verifyOtpApi = (body) => {
  return request(`${BASE_URL}/${AUTH}/verify_otp`, POST, false, body)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw error;
    });
};

export const resendOtpApi = (body) => {
  return request(`${BASE_URL}/${AUTH}/resend_otp`, POST, false, body)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw error;
    });
};

export const completeProfileApi = (body) => {
  return request(`${BASE_URL}/${AUTH}/complete_profile`, POST, true, body)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw error;
    });
};

export const uploadDocumentApi = (body) => {
  return request(`${BASE_URL}/${AUTH}/upload_document`, POST, true, body)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw error;
    });
};

export const addOrganizationApi = (body) => {
  return request(`${BASE_URL}/${AUTH}/add_organization`, POST, true, body)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw error;
    });
};

export const logoutApi = (body) => {
  return request(`${BASE_URL}/${AUTH}/logout`, POST, true, body)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw error;
    });
};

export const deleteAccountApi = (body) => {
  return request(`${BASE_URL}/${AUTH}/delete_account`, POST, true, body)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw error;
    });
};

export const forgotPasswordApi = (data) => {
  return request(`${BASE_URL}/${AUTH}/forgot_password`, POST, false, data)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw error;
    });
};

export const resetPasswordAPI = (data) => {
  return request(`${BASE_URL}/${AUTH}/reset_password`, POST, true, data)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw error;
    });
};

export const getUserDetailsAPI = (data) => {
  return request(`${BASE_URL}/${AUTH}/user_details`, POST, true, data)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw error;
    });
};

export const editProfileAPI = (data) => {
  return request(`${BASE_URL}/${AUTH}/edit_profile`, POST, true, data)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw error;
    });
};

export const changePasswordAPI = (data) => {
  return request(`${BASE_URL}/${AUTH}/change_password`, POST, true, data)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw error;
    });
};

export const contactUsAPI = (data) => {
  return request(`${BASE_URL}/${AUTH}/contact_us`, POST, true, data)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw error;
    });
};

export const organizationListForClientAPI = (data) => {
  return request(`${BASE_URL}/${AUTH}/organization_list_for_client`, POST, true, data)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw error;
    });
};


//////////////////////////////////////////////////////////////////////
//                           Subscription                           //
//////////////////////////////////////////////////////////////////////

export const subscriptionPurchaseApi = (body) => {
  return request(`${BASE_URL}/${SUBSCRIPTION}/subscription_purchase`, POST, true, body)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw error;
    });
};

//////////////////////////////////////////////////////////////////////
//                              Common                              //
//////////////////////////////////////////////////////////////////////

export const countryListApi = (body) => {
  return request(`${BASE_URL}/${COMMON}/country_list`, GET, false, body)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw error;
    });
};

export const appContentPageApi = (params) => {
  return request(`${BASE_URL}/${COMMON}/app_content_page/${params}`, GET, false, {})
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw error;
    });
};

export const faqListApi = (body) => {
  return request(`${BASE_URL}/${COMMON}/faq_list`, POST, true, body)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw error;
    });
};

//////////////////////////////////////////////////////////////////////
//                               Home                               //
//////////////////////////////////////////////////////////////////////

export const dashboardCountApi = (body) => {
  return request(`${BASE_URL}/${HOME}/total_counts`, POST, true, body)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw error;
    });
};


//////////////////////////////////////////////////////////////////////
//                           Organization                           //
//////////////////////////////////////////////////////////////////////

export const getOrganizationListApi = (body) => {
  return request(`${BASE_URL}/${ORGANIZATION}/organization_list`, POST, true, body)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw error;
    });
};

export const editOrganizationApi = (body) => {
  return request(`${BASE_URL}/${ORGANIZATION}/edit_organization`, POST, true, body)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw error;
    });
};

export const addOrganizationApiForOrganization = (body) => {
  return request(`${BASE_URL}/${ORGANIZATION}/add_organization`, POST, true, body)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw error;
    });
};



//////////////////////////////////////////////////////////////////////
//                              Members                             //
//////////////////////////////////////////////////////////////////////

export const getTotalMembersListApi = (body) => {
  return request(`${BASE_URL}/${MEMBER}/total_members_list`, POST, true, body)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw error;
    });
};

export const addMemberApi = (body) => {
  return request(`${BASE_URL}/${MEMBER}/add_member`, POST, true, body)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw error;
    });
};

export const editMemberDetailsApi = (body) => {
  return request(`${BASE_URL}/${MEMBER}/edit_member`, POST, true, body)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw error;
    });
};

export const getMemberDetailsApi = (body) => {
  return request(`${BASE_URL}/${MEMBER}/member_details`, POST, true, body)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw error;
    });
};

export const getSelectMembersListApi = (body) => {
  return request(`${BASE_URL}/${MEMBER}/select_members_list`, POST, true, body)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw error;
    });
};



//////////////////////////////////////////////////////////////////////
//                               Teams                              //
//////////////////////////////////////////////////////////////////////

export const getMyTeamsListApi = (body) => {
  return request(`${BASE_URL}/${TEAM}/my_teams`, POST, true, body)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw error;
    });
};

export const getMyTeamsPinListApi = (body) => {
  return request(`${BASE_URL}/${TEAM}/my_teams_pin_list`, POST, true, body)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw error;
    });
};

export const getTeamsDetailsApi = (body) => {
  return request(`${BASE_URL}/${TEAM}/team_details`, POST, true, body)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw error;
    });
};

export const createTeamApi = (body) => {
  return request(`${BASE_URL}/${TEAM}/create_team`, POST, true, body)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw error;
    });
};

export const getSelectMemberListApi = (body) => {
  return request(`${BASE_URL}/${TEAM}/select_member`, POST, true, body)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw error;
    });
};

export const editTeamDetailsApi = (body) => {
  return request(`${BASE_URL}/${TEAM}/edit_team`, POST, true, body)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw error;
    });
};



//////////////////////////////////////////////////////////////////////
//                              Client                              //
//////////////////////////////////////////////////////////////////////

export const getMyClientListApi = (body) => {
  return request(`${BASE_URL}/${CLIENT}/my_client_list`, POST, true, body)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw error;
    });
};

export const getClientDetailsApi = (body) => {
  return request(`${BASE_URL}/${CLIENT}/client_details`, POST, true, body)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw error;
    });
};

export const addClientApi = (body) => {
  return request(`${BASE_URL}/${CLIENT}/add_client`, POST, true, body)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw error;
    });
};

export const editClientApi = (body) => {
  return request(`${BASE_URL}/${CLIENT}/edit_client`, POST, true, body)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw error;
    });
};

export const addDocumentApi = (body) => {
  return request(`${BASE_URL}/${CLIENT}/add_document`, POST, true, body)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw error;
    });
};

export const documentListApi = (body) => {
  return request(`${BASE_URL}/${CLIENT}/documents_list`, POST, true, body)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw error;
    });
};

export const editDocumentApi = (body) => {
  return request(`${BASE_URL}/${CLIENT}/edit_document`, POST, true, body)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw error;
    });
};



//////////////////////////////////////////////////////////////////////////
//                               Task API                               //
//////////////////////////////////////////////////////////////////////////

export const getTaskListApi = (body) => {
  return request(`${BASE_URL}/${TASK}/task_list`, POST, true, body)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw error;
    });
};

export const taskProgressChangeApi = (body) => {
  return request(`${BASE_URL}/${TASK}/task_progress_change`, POST, true, body)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw error;
    });
};

export const getClientListForAddTaskApi = (body) => {
  return request(`${BASE_URL}/${TASK}/client_list_for_add_task`, POST, true, body)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw error;
    });
};

export const getTeamListForAddTaskApi = (body) => {
  return request(`${BASE_URL}/${TASK}/team_list_for_add_task`, POST, true, body)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw error;
    });
};

export const getEmployeeListTeamWiseForAddTaskApi = (body) => {
  return request(`${BASE_URL}/${TASK}/employee_list_team_wise`, POST, true, body)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw error;
    });
};

export const addTaskApi = (body) => {
  return request(`${BASE_URL}/${TASK}/add_task`, POST, true, body)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw error;
    });
};

export const getTaskDetailsApi = (body) => {
  return request(`${BASE_URL}/${TASK}/task_details`, POST, true, body)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw error;
    });
};

export const editTaskDetailsApi = (body) => {
  return request(`${BASE_URL}/${TASK}/edit_task`, POST, true, body)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw error;
    });
};



//////////////////////////////////////////////////////////////////////////
//                              Media API                               //
//////////////////////////////////////////////////////////////////////////

export const addMediaOrDocumentApi = (body) => {
  return request(`${BASE_URL}/${TASK}/add_media`, POST, true, body)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw error;
    });
};

export const getMediaOrDocumentListApi = (body) => {
  return request(`${BASE_URL}/${TASK}/media_or_document_list`, POST, true, body)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw error;
    });
};



//////////////////////////////////////////////////////////////////////////
//                             Comment API                              //
//////////////////////////////////////////////////////////////////////////

export const addCommentApi = (body) => {
  return request(`${BASE_URL}/${TASK}/add_comment`, POST, true, body)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw error;
    });
};

export const getCommentListApi = (body) => {
  return request(`${BASE_URL}/${TASK}/comment_list`, POST, true, body)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw error;
    });
};


