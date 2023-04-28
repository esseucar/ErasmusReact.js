import Sidebar from './Sidebar.js';
import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';


function BasvuruGoruntule(){
    
    const [bilgi, setBilgi] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    

    useEffect(()=>{

        const islogin=async()=>{ 
            
                
                var login=sessionStorage.getItem("login");
                
                if(login!='true'){
                   navigate('/');
                }          
                   }
        const bilgiGetir = async () => {
            
            const ad = sessionStorage.getItem('ad');
            const soyad = sessionStorage.getItem('soyad');
            const dogumTarihi= sessionStorage.getItem('dogumTarihi');
            const cinsiyet = sessionStorage.getItem('cinsiyet');

            const EMail = sessionStorage.getItem('EMail');
            const TelNo= sessionStorage.getItem('TelNo');
            const Milliyet1 = sessionStorage.getItem('Milliyet1');
            
            const TcPasapportNo = sessionStorage.getItem('TcPasapportNo');
            const  engelDurum = sessionStorage.getItem('engelDurum');
            const  EngelDurum_aciklama = sessionStorage.getItem('EngelDurum_aciklama');

            const mezuniyetdurum =  sessionStorage.getItem('mezuniyetdurum');
            const mezuniyetTarih = sessionStorage.getItem('mezuniyetTarih');
            const ortalama = sessionStorage.getItem('ortalama');
            const universite = sessionStorage.getItem('universite');
            const fakulte = sessionStorage.getItem('fakulte');
            const bolum =  sessionStorage.getItem('bolum');
            const ulke = sessionStorage.getItem('ulke');
            const il =   sessionStorage.getItem('il');
            const ilce =sessionStorage.getItem('ilce');
            const postaKutusu =sessionStorage.getItem('postaKutusu');
            const mahalle = sessionStorage.getItem('mahalle');
            const adr_aciklama =sessionStorage.getItem('adr_aciklama');
            const cvbelge =sessionStorage.getItem('cvbelge');
            const niyetbelge =sessionStorage.getItem('niyetbelge');
            const pasaportbelge =sessionStorage.getItem('pasaportbelge');
            const ikametgahbelge = sessionStorage.getItem('ikametgahbelge');
            const diplomabelge = sessionStorage.getItem('diplomabelge');
            const ingyeterlilikbelge=sessionStorage.getItem('ingyeterlilikbelge');

            
            

            setBilgi(prevState => ({
                ...prevState,
                ad,
                soyad,
                dogumTarihi,
                
                EMail,
                TelNo,
                cinsiyet,

                Milliyet1,                
                TcPasapportNo,

                engelDurum,
                EngelDurum_aciklama,

                mezuniyetdurum,
                mezuniyetTarih,
                ortalama,

                universite,
                fakulte,
                bolum,
                ulke,
                il,
                ilce,
                postaKutusu,
                mahalle,
                adr_aciklama,
                cvbelge,
                niyetbelge,
                pasaportbelge,
                ikametgahbelge,
                diplomabelge,
                ingyeterlilikbelge,   

                
            }));
        }
    islogin();
    bilgiGetir();
    
    
      },[])
        
    
    


    return(
        <div className="row" style={{width:"100vw",height:"100vh", backgroundImage: "linear-gradient(rgba(0, 0, 255, 0.5), rgba(255, 255, 0, 0.5))"}}>
            <div className="col-4">
                <Sidebar 
                    gor_active="active" 
                    gor_disable="disabled" 
                    form_to="/portal/BasvuruFormu"                    
                    iletisim_to="/portal/Iletisim"
                    sifre_to="/portal/Sifre"/>
            </div>
            <div className="col-7 mt-5" style={{ textDecorationColor: "white", borderRadius: "25px", backgroundColor: "none",  height: "38rem", overflowX: "hidden",scrollBehavior:"smooth" ,scrollbarGutter:"revert", scrollbarColor:"-moz-initial",msScrollbarHighlightColor:"Highlight"  , overflowY: "scroll", msOverflowStyle:"none", scrollbarWidth:"none"}}>
            <h1 className="h3 mb-3 fw-normal mt-5" id="register_yazi"> Basvuru Formu</h1>
                <form>
                    <div class="row">

                        <div class="col-md-4" id="name" name="ad" >
                            <label for="validationServer01">Ad</label>
                            <input type="text" class="form-control" id="validationServer01" placeholder="Ad" 
                            value = {bilgi.ad}
                            />
                        </div>

                        <div class="col-md-4" id="soyad" name="soyad">
                            <label for="validationServer02">Soyad</label>
                            <input type="text" class="form-control" id="validationServer02"
                            value={bilgi.soyad}                             
                            placeholder="Soyad"/>                        
                        </div>

                        <div class="col-md-4" id="DogumTarihi" name="DogumTarihi" >
                            <div id="date-picker" class="md-form  input-with-post-icon datepicker" inline="true">
                                <label >Doğum Tarihi</label>
                                <input type='text' class="form-control" id='datepicker' 
                                value={bilgi.dogumTarihi}                                
                                placeholder='Tarih'  />
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4" >
                            <label for="form_eposta" >E-Posta</label>
                            <input type="email" class="form-control" id="form_eposta" name="form_eposta"                            
                            value={bilgi.EMail}                           
                            placeholder="E-posta" />
                            
                        </div>
                        <div class="col-md-4" id="form_tel" name="form_tel">
                            <label for="form_tel">Telefon</label>
                            <input type="text" class="form-control" id="form_tel" name="form_tel"                            
                            value={bilgi.TelNo}                            
                            placeholder="Telefon"/>                            
                        </div>
                        <div class="col-md-4" id="drop_cinsiyet" name="cinsiyet">
                            <div>
                                <label for="validationServer05">Cinsiyet</label>      
                                <input type='text' class="form-control"                                 
                                value={bilgi.cinsiyet}  />                            
                                    
                                
                            </div>
                        </div>                        
                    </div>
                    <div class="row">
                        <div class="col-md-4">
                            <div>
                                <label for="validationServer05">Uyruk</label>      
                                <input type='text' class="form-control" 
                                id="uyruk"
                                value={bilgi.Milliyet1}/>
                                    
                                
                            </div>
                        </div>
                        <div class="col-md-8" id="pasaport" name="pasaport">
                            <label id="tcDiv" for="validationServer05"> Pasaport No</label>
                            <label id="pasaportDiv" for="validationServer05"> TC Kimlik No</label>
                            <input type="text" class="form-control" id="validationServer05" name="validationServer05_5"                           
                            value={bilgi.TcPasapportNo}/>
                        </div>
                    </div>  
                    <div class="row">
                        <div class="col-md-4 ">                            
                            <label for="engel" >Engel Durumu : </label>                            
                            <div>                    
                                <input class="form-control" 
                                id="engel"
                                value = {bilgi.engelDurum}/>                                
                                    
                            </div>
                        </div>
                        <div class="col-md-8 " id="aciklamaDiv1"                
                        >
                            <label for="aciklama"                                                                        
                            >Açıklama</label>
                            <input type="text" class="form-control" value = {bilgi.EngelDurum_aciklama}                         
                            id="aciklama" />
                        </div>
                    </div>
                    <div className='row'> 
                        <div class="col-md-4" id="form_mezuniyet_bilgi" name="form_mezuniyet_bilgi">  
                            <div id="date-picker-example" class="md-form md-outline input-with-post-icon datepicker" inline="true">
                                <label for="validationServer05">Mezuniyet Durumu</label>                                
                                <select class="form-control" 
                                id="form_mezuniyet_bilgi" name="form_mezuniyet_bilgi"
                                value = {bilgi.mezuniyetdurum}
                                >
                                    <option>Seçiniz... </option>
                                    <option value="mezun">Mezun</option>
                                    <option value="mezun2">Mezun değil</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-md-4" id="form_mezuniyet" name="form_mezuniyet">
                            <div id="date-picker-example" class="md-form md-outline input-with-post-icon datepicker" inline="true">
                                <label for="validationServer05">Mezuniyet Tarihi</label>
                                <input type='text' class="form-control" id='datepicker'
                                value = {bilgi.mezuniyetTarih} 
                                name="datepicker" placeholder=' Mezuniyet Tarihiniz'/>
                            </div>
                        </div>
                        <div class="col-md-4" id="form_ortalama" name="form_ortalama">
                            <label for="validationServer02">Ortalama</label>
                            <input type="text" class="form-control" id="validationServer02" name="validationServer02_5"                            
                            value = {bilgi.ortalama}                          
                            placeholder="Ortalamanız"/>
                            <div class="valid-feedback">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4" id="form_uni" name="form_uni">
                            <label for="validationServer02">Üniversite</label>
                            <input type="text" class="form-control" id="validationServer02" name="validationServer02_2"                             
                            value = {bilgi.universite}                            
                            placeholder="Üniversite adını girin"/>                            
                        </div>
                        <div class="col-md-4" id="form_fakulte" name="form_fakulte">
                            <label for="validationServer02">Fakülte</label>
                            <input type="text" class="form-control" id="validationServer02" name="validationServer02_3"                            
                            value = {bilgi.fakulte}                          
                            placeholder="Fakülte"/>                            
                        </div>
                        <div class="col-md-4" id="form_bolum" name="form_bolum">
                            <label for="validationServer02">Bölüm</label>
                            <input type="text" class="form-control" id="validationServer02" name="validationServer02_4"                             
                            value = {bilgi.bolum}                          
                            placeholder="Bölümünüz"/>                            
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4" id="form_ulke" name="ulke">
                            <label for="validationServer02">Ülke</label>
                            <input type="text" class="form-control" 
                                value = {bilgi.ulke}                         
                           name="validationServer02_6" placeholder="Ülke"/>                            
                        </div>
                        <div class="col-md-4" id="il_ilce" name="il-ilce" >
                            <label for="validationServer02">İl</label>
                            <input type='text' name="iller" class="form-control"                           
                            value = {bilgi.il}                            
                             placeholder="Ülke"/>
                        </div>
                        <div class="col-md-4" id="il_ilce" name="il-ilce">
                            <label for="Ilceler">İlçe</label>
                            <input type='text' id="Ilceler" class="form-control"                             
                            value = {bilgi.ilce}                    
                            name="ilceler" placeholder='İlçe'/>                                
                        </div>                    
                    </div>
                    <div className='row'>
                        <div class="col-md-4" id="form_posta_kutusu" name="form_posta_kutusu">
                            <label for="validationServer02">Posta Kutusu</label>
                            <input type="text"                             
                            value = {bilgi.postaKutusu}                           
                            class="form-control " id="validationServer02" name="validationServer02_7" placeholder="Posta kutusu" />                            
                        </div>
                        <div class="col-md-4" id="form_mahalle" name="form_mahalle">
                            <label for="validationServer02">Mahalle</label>
                            <input type="text" class="form-control "
                            value = {bilgi.mahalle}                
                            name="validationServer02_8" placeholder="Mahalle"/>                           
                        </div>
                        <div class="col-md-4" name="form_adres_aciklama">
                            <label for="validationServer02">Adres Açıklama</label>
                            <input type="text" class="form-control " 
                                    value = {bilgi.adr_aciklama}
                                    name="validationServer02_9" placeholder="Detaylı belirtiniz"/>                         
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4" id="form_cv" name="form_cv">
                            <label for="formFile" class="form-label">CV: </label>
                            <input class="form-control"
                                value = {bilgi.cvbelge}                                
                            type="text" id="cvbelge" name="form_cvFile" />
                        </div>
                        <div class="col-md-4" id="form_niyet_mektubu" name="form_niyet_mektubu">
                            <label for="formFile" class="form-label">Niyet mektubu: </label>
                            <input class="form-control" 
                            
                            value = {bilgi.niyetbelge }                            
                            type="text" name="formniyetFile" />
                        </div>
                        <div class="col-md-4" id="form_pasaport" name="form_pasaport">
                            <label for="formFile" class="form-label">Pasaport: </label>
                            <input class="form-control" 
                                value = {bilgi.pasaportbelge}                               
                            type="text" id="formFile" name="form_pasaportFile" />
                        </div>
                        <div class="col-md-4" id="form_ikamet" name="form_ikamet">
                            <label for="formFile" class="form-label">İkametgah: </label>
                            <input class="form-control"                            
                            value = {bilgi.ikametgahbelge}                           
                            type="text" id="formFile" name="form_ikametFile" />
                        </div>
                        <div class="col-md-4" id="form_diploma" name="form_diploma">
                            <label for="formFile" class="form-label">Diploma: </label>
                            <input class="form-control"
                                value = {bilgi.diplomabelge}                               
                            type="text" id="formFile" name="form_diplomaFile" />
                        </div>
                        <div class="col-md-4" id="form_ing_yeterlilik" name="form_ing_yeterlilik">
                            <label for="formFile" class="form-label">İngilizce Yeterlilik: </label>
                            <input class="form-control" 
                                value = {bilgi.ingyeterlilikbelge}                               
                            type="text" id="formFile" name="form_ing_yeterlilik_File" />
                        </div>
                    </div>
                
                </form>
                {error && <p style={{color: 'red'}}> {error} </p>}
            </div>
            <div className='col-1'></div>
        </div>
    );

}

export default BasvuruGoruntule;