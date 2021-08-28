import axios from "axios";
//https://api.themoviedb.org/3/movie/550?api_key=3476533434c73afdccc3b438dbd24159

//org/3 tk api same hai baqi key ay gii phr jo movies chaiyay wo

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});


//instance.get('/abc') = https://api.themoviedb.org/3/abc yay hojay ga 

export default instance;