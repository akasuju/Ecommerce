import { useState } from "react";

const Login = () => {
  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

const login =async ()=>{
  console.log("login",  formData);


}
const signup =async ()=>{
console.log("signup" , formData);
let responseData;
await fetch ('http://localhost:4000/signup',
{
  method:'POST',
  headers:{
    Accept:'application/json',
    'Content-Type':'application/json',
  },
  body:JSON.stringify(formData)
}).then((response)=>response.json()).then((data)=>responseData=data)
if(responseData.success){
  localStorage.setItem("auth-token", responseData.token);
  if(responseData.success){
    localStorage.setItem("auth-token", responseData.token);
    window.location.replace('/');
  }
  }
}

  return (
    <section className="max_padd_container flexCenter flex-col pt-32">
      <div>
        <h3 className="h3">Sign Up</h3>
        <div className="flex flex-col gap-4 mt-7">
          {state === "Sign Up" ? (
            <input
              name="username"
              value={formData.username}
              onChange={handleChange}
              type="text"
              placeholder="Your Name"
              className="h-14 w-full pl-5 bg-slate-900/5 outline-none rounded-xl "
            />
          ) : (
            ""
          )}
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            className="h-14 w-full pl-5  bg-slate-900/5 outline-none rounded-xl"
          />
          <input
            type="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="h-14 w-full pl-5  bg-slate-900/5 outline-none rounded-xl"
          />
        </div>
        <button onClick={()=>{state==="Login"?login():signup()}} className="btn_dark_rounded my-5 w-full !rounded-md">
          Continue
        </button>

        {state==="Sign Up"?<p className="text-black font-bold">
          Already have an Account?
          <span onClick={()=>{setState("Login") }} className="text-secondary underline cursor-pointer">Login</span>
        </p> 
:
        <p className="text-black font-bold">
          Create an account?
          <span onClick={()=>{setState("Sign Up") }} className="text-secondary underline cursor-pointer">
            Click here
          </span>
        </p>}

        <div className="flexCenter mt-6 gap-3">
          <input type="checkbox" name="" id="" />
          <p>By continuing, I agree to terms and condition.</p>
        </div>
      </div>
    </section>
  );
};
export default Login;
