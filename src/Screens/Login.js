import React,{useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'
export default function Login() {
  const [userinfo, setuserinfo] = useState({email:"",password:""})
let navigate=useNavigate()
    const handleSubmit= async(e)=>{
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/loginuser",{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({email:userinfo.email, password:userinfo.password})
        });
        const json = await response.json()
        console.log(json);
        if(!json.success)
        {
            alert("Enter valid information")
        }
        if(json.success)
        {
          localStorage.setItem("userEmail",userinfo.email);
          localStorage.setItem("authToken",json.authToken);
          console.log(localStorage.getItem("authTken"))
            navigate("/");
        }
    }
    const onChange=(event)=>{
        setuserinfo({...userinfo,[event.target.name]:event.target.value})
    }
  return (
    <div>
      <div className='container'>
    <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" name='email' value={userinfo.email} onChange={onChange}id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">Enter valid email id</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" name='password' value={userinfo.password}onChange={onChange} id="exampleInputPassword1"/>
  </div>
  <button type="submit" className="m-3 btn btn-success">Submit</button>
  <Link to="/createuser" className='m-3 btn btn-danger'>Sign up</Link>
</form>
</div>
    </div>
  )
}
