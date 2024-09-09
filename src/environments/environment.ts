

export const apiUrl = () =>{
    if(process.env.NODE_ENV === "development"){
        return 'http://localhost:3001/'
    }else {
        //return 'https://api.jstore.fr/'
        return 'http://localhost:3001/'
    }
}
export const webApiUrl = apiUrl()