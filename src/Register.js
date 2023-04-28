import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import background from "./img/background.jpg";


function Registers() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passRepeat, setPassRepeat] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async(e) => {
        e.preventDefault();

        if(password != passRepeat){
            setError("Sifreler eslesmiyor!");
            return;
        }

        sessionStorage.setItem('email', email);
        sessionStorage.setItem('password', password);

        setEmail('');
        setPassword('');
        setPassRepeat('');
        setSuccess('Kayit Olusturuldu. Giris yapabilirsiniz.');
        navigate('/');
        setError('');
    }

    return (
        <>
        <div style={{ backgroundImage: `url(${background})`,
        backgroundRepeat:"no-repeat",
        backgroundAttachment:"fixed",
        backgroundSize:"cover",
        height:"100vh"}}>

            <div class="row" style={{height:"10vh"}}>
                <div class="col-12"></div>
            </div>
            <div class="row justify-content-center ">
                <div class="col-4" style={{backgroundColor:"white", borderRadius:"2rem"}}>

                <h2 class="h3 mb-3 fw-normal mt-4">Kayıt</h2>
                <form onSubmit={handleSubmit}>
                
                <input type="email" class="form-control mt-2"
                            placeholder="Mail adresiniz" 
                            value={email} 
                            onChange= {(e) => setEmail(e.target.value)}
                            required />
                <input type="password" class="form-control mt-2"
                            placeholder="Şifre"
                            value={password}
                            onChange= {(e) => setPassword(e.target.value)}
                            minLength = "6"
                            required />
                <input type="password" class="form-control mt-2"
                            placeholder="Şifre Tekrar"
                            value={passRepeat}
                            onChange= {(e) => setPassRepeat(e.target.value)}
                            minLength = "6"
                            required />
                <button type="submit"class="w-100 btn btn-lg btn-primary mt-4 mb-3">Kayıt Ol</button>
                </form>
                {error && <p style={{color: 'red'}}> {error} </p>}
                {success && <p style={{color: 'green'}}> {success} </p>}
                <p>
                    Hesabınız var mı? <Link to="/" style={{textDecorationLine:"none"}}>Giriş Yap</Link>
                </p>


               

            </div>
        </div>
        </div>
        </>
    );
}

export default Registers;