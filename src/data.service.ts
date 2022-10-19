import axios from "axios"

const getDummyData = () => {
    return axios.get('http://localhost:7000/dummyData')
    .then((response) => response)
    .catch((error) => "Error! :"+error.statusMessage)
}

export default getDummyData;