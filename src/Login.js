import React,{useState} from "react"
function Login(){
    const [name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
function signUp(){
        let item ={name,email,password}
        console.warn(item)
    }

    return(
        <>
        <div className='col-sm-6 offset-sm-3'>
            <h1>Login Page</h1>

            <input type="text" value={email} placeholder='Enter Email Id' onChange={(e)=>setEmail(e.target.value)} className="form-control" />
            <br/>
            <input type="Password" value={password} placeholder='Enter Password' onChange={(e)=>setPassword(e.target.value)} className="form-control" />
            <br/>
            <button  onClick={signUp}className='btn btn-primary'>Login</button>
            
        </div>
        </>
    )
}

export default Login