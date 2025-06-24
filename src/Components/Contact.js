const Contact=()=>{
    return (
        <div>
            <h1 className="text-3xl font-bold p-4 m-4 ">Contact Us</h1>
            <form>
                <input className="border border-black m-3 pl-1 rounded-sm " type="text" placeholder="Name"/>
                <input className="border border-black  m-3 pl-1 rounded-sm" type="text" placeholder="Message"/>
                <button className="bg-black text-white  font-semibold rounded-md px-2 py=1">Submit</button>
            </form>
            <h3></h3>
        </div>
    )
}
export default Contact;

