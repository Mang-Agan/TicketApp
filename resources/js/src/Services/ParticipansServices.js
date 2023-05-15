import Axios from "axios";

export const createParticipans = async (data = null) => {
    let request = Axios({
        method: "post", data: data, url: window.origin + "/create-participans"
    });
    return Promise.resolve(request);
};