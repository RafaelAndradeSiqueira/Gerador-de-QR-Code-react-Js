import {useState} from 'react'
import QRCode from 'react-qr-code'
import QrCodeLink from 'qrcode'
import './App.css';

function App() {
  const[Url,setUrl] = useState("")
  const[qrcodeLink,setQrcodeLink] = useState("")

  function handleQrcode(e){
    setUrl(e.target.value)
    handleGenerate(e.target.value);
  }

  function handleGenerate(link_url){
    QrCodeLink.toDataURL(link_url,{width:600,margin:3,},function (err,url) {
      setQrcodeLink(url);
    })
  }

  return (

    <div className="Container">
      <h1>Gerador de QR</h1>
      <QRCode
      value={Url}
      />
      <input className="Input" placeholder="Digite seu link..." value={Url} 
      onChange={(e) => handleQrcode(e)}></input>

      <a className='btn' href={qrcodeLink} download={'Qrcode.png'}>Baixar QrCode</a>


    </div>
  );
}

export default App;