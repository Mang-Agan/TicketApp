import Axios from "axios";

export const createConser = async (data = null) => {
    let request = Axios({
        method: "post", data: data, url: window.origin + "/create-conser"
    });
    return Promise.resolve(request);
};

export const tableConser = async (data = null) => {
    let request = Axios({
        method: "get", data: data, url: window.origin + "/table-conser"
    });
    return Promise.resolve(request);
};

export const deleteConser = async (data = null) => {
    let request = Axios({
        method: "post", data: data, url: window.origin + "/delete-conser"
    });
    return Promise.resolve(request);
};

export const updateConser = async (data = null) => {
    let request = Axios({
        method: "post", data: data, url: window.origin + "/update-conser"
    });
    return Promise.resolve(request);
};