import { React } from 'react';
import image from './image-qr-code.png';
import { Helmet } from 'react-helmet';
import './App.css';

function App() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>My QR Reader</title>
        <meta name="description" content="QR Reader Code Challenge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
      <div className="main">
        <div>
          <img src={image} alt="qr-code" />
        </div>
        <section>
          <div>
            <p className="mainbodyText">
              Coding daily will help to improve your front-end skills
            </p>
          </div>
          <div>
            <p className="subbodyText">
              Scan the QR code to <br /> and start a coding challenge
            </p>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
