import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import background from "./img/background.jpg";

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [login, setLogin] = useState('');
    const [success, setSuccess] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const kullanici_adi = sessionStorage.getItem('email');
        const sifre = sessionStorage.getItem('password');

        if(email == kullanici_adi && password == sifre){
            // navigate('/portal');
            const login = sessionStorage.setItem("login",true);
           

            setEmail('');
            setPassword('');
            
            setSuccess('Kayit Olusturuldu. Giris yapabilirsiniz.');
            navigate('/portal');
            setError('');
        }
        else{
            setError('Hatali kullanici adi veya sifre!');
        }
    }
    return (
        
        <div style={{ backgroundImage: `url(${background})`,
        backgroundRepeat:"no-repeat",
        backgroundAttachment:"fixed",
        backgroundSize:"cover",
        height:"100vh"}}>

        <div class="row" style={{height:"90px"}}>
            <div class="col-12"></div>
            </div>
            <div class="row justify-content-center ">
            <div class="col-4" style={{backgroundColor:"white", borderRadius:"2rem"}}>

                <form name="giris" onSubmit={handleSubmit} >
                    
                    <h1 class="h3 mb-3 fw-normal mt-4">Giriş Yap</h1>                   
                        
                        <input  class="form-control mt-2" type="email" 
                            
                            value={email} 
                            onChange= {(e) => setEmail(e.target.value)}
                            required placeholder="name@example.com"/>
                        <input type="password" class="form-control mt-2" 
                            placeholder="Şifre"
                            value={password}
                            onChange= {(e) => setPassword(e.target.value)}
                            required />
                    
                <div class="form-floating py-2">
                    <p id="sonuc" style={{backgroundColor: "aliceblue", borderRadius:"5px"}}></p>
                    <button class="w-100 btn btn-lg btn-primary mt-2 mb-3" type="submit">Giriş</button>
                
                </div>
                </form>
                
                {error && <p style={{color:'red'}}> {error} </p> }
                {success && <p style={{color:'green'}}> {success} </p> }

                <p className='mb-4'>
                    Hesabınız yok mu? <Link to="/kayit" style={{textDecorationLine:"none"}}>Kayıt Ol!</Link>
                    {/* <a class="align-content-center"><button type="button" class="w-100 btn btn-lg btn-secondary mb-3">Kayıt Ol</button></a> */}
                </p>
            </div>
        </div>
    </div>
        
    );
}

export default Login;