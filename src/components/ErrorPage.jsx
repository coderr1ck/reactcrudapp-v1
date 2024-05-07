import { useRouteError } from "react-router-dom";
const ErrorPage =()=>{
    const err = useRouteError();
    console.log(err);
    return(
        <div>
            <h1>This is 404 page.</h1>
            <h2>{}</h2>
        </div>
    );
}

export default ErrorPage;