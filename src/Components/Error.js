import { useRouteError } from "react-router-dom";
const Error=()=>{
    const err=useRouteError();
    console.log(err);
    <div>
        <h1>Oops !!!</h1>
        <h2>Something went wrong</h2>
        <h3>err.statusText</h3>
    </div>
}
export default Error;