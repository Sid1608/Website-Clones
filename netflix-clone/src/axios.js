import axios from "axios";


// alternative to postman
/** base url to make requests to the  movie database*/
const instance= axios.create({
	baseURL:"https://api.themoviedb.org/3",
});
/**  
	instance.get('/foo-bar);
	Generated url:https://api.themoviedb.org/3/foo-bar
*/
export default instance;