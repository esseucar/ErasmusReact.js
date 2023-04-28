async function SignOut(navigate){

    const id = sessionStorage.getItem("id");
    var login=sessionStorage.getItem("login");
    login=false;
    sessionStorage.setItem("login",false);
    navigate('/');    
}

export default SignOut;