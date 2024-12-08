import axios from "axios";

export const signInServices = async (user) => {
  try {
    const response = await axios.post(
      "https://barangay-bonbon-backend.onrender.com/authentication/signin",
      user
    );

    return response.data;
  } catch (error) {
    if (error.response) {
      throw error.response;
    } else {
      throw new Error("Network error or no response from server");
    }
  }
};

export const signUpServices = async (user) => {
  try {
    const response = await axios.post(
      "https://barangay-bonbon-backend.onrender.com/authentication/signup",
      user
    );

    return response.data;
  } catch (error) {
    if (error.response) {
      throw error.response;
    } else {
      throw new Error("Network error or no response from server");
    }
  }
};
export const getByUserid = async (id) => {
  try {
    const response = await axios.get(
      `https://barangay-bonbon-backend.onrender.com/authentication/${id}`
    );

    return response.data;
  } catch (error) {
    if (error.response) {
      throw error.response;
    } else {
      throw new Error("Network error or no response from server");
    }
  }
};

export const updateUser = async (data) => {
  try {
    const response = await axios.put(
      `https://barangay-bonbon-backend.onrender.com/authentication/${data.id}`,
      {
        username: data.username,
        emailaddress: data.emailaddress,
        password: data.password,
      }
    );
    return response.data;
  } catch (error) {
    if (error.response) {
      throw error.response;
    } else {
      throw new Error("Network error or no response from server");
    }
  }
};
