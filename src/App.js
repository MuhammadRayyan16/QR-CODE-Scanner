// src/App.js
import React from 'react';
import QRCode from 'react-qr-code';
import './App.css';


const App = () => {
  return (

    <div style={styles.container}>
      <h1>SCAN QR CODE</h1>
      <div style={styles.qrContainer}>
        <QRCode value="Mehnat karne walon ki kabhi haar nahi hoti." />
      </div >
    </div>
  );
};

const styles = {
  container: {

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: 'teal',
  },
  qrContainer: {
    backgroundColor: 'white',
    padding: '16px',
    marginBottom: '20px',
  },
  responsiveContainer: {
    height: 'auto',
    margin: '0 auto',
    maxWidth: 256,
    width: '100%',
  },
  qrCode: {
    height: 'auto',
    maxWidth: '100%',
    width: '100%',
  },
};

export default App;
