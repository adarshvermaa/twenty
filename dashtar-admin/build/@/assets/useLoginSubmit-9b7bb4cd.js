import{r as u,G as L,M as N,t as b,H as g}from"./index-43045997.js";import{u as A,A as a,b as o,n}from"./AdminServices-15c19bb0.js";const G=()=>{const[p,s]=u.useState(!1),{dispatch:i}=u.useContext(L),c=N(),t=b(),{register:d,handleSubmit:S,formState:{errors:l}}=A();return{onSubmit:({name:h,email:m,verifyEmail:y,password:r,role:x})=>{s(!0);const f=.5;t.pathname==="/login"&&a.loginAdmin({email:m,password:r}).then(e=>{e&&(s(!1),o("Login Success!"),i({type:"USER_LOGIN",payload:e}),g.set("adminInfo",JSON.stringify(e),{expires:f,sameSite:"None",secure:!0}),c.replace("/"))}).catch(e=>{n(e?e.response.data.message:e.message),s(!1)}),t.pathname==="/signup"&&a.registerAdmin({name:h,email:m,password:r,role:x}).then(e=>{e&&(s(!1),o("Register Success!"),i({type:"USER_LOGIN",payload:e}),g.set("adminInfo",JSON.stringify(e),{expires:f,sameSite:"None",secure:!0}),c.replace("/"))}).catch(e=>{n(e?e.response.data.message:e.message),s(!1)}),t.pathname==="/forgot-password"&&a.forgetPassword({verifyEmail:y}).then(e=>{s(!1),o(e.message)}).catch(e=>{s(!1),n(e?e.response.data.message:e.message)})},register:d,handleSubmit:S,errors:l,loading:p}};export{G as u};
