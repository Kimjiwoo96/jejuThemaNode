import axios from 'axios';



export const myApi = async (myName, data = null) => {
    try {
        if (data) {
            const response = await axios.post(`/data/${myName}`, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                body: data
            });
            console.log("여기는 노드 응답 성공 / 리액트 api함수 ", response);
            return response;
        } else {
            const response = await axios.get(`/data/${myName}`);
            return response;
        }
    } catch (error) {
        console.log(error);
        return error;
    }
};
