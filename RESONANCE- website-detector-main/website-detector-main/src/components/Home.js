// src/components/Home.js
import React from 'react';
import '../styles/Home.css';
function Home() {
  return (
    <div>
      <h2>Welcome to Website-Detector !!</h2>
      <p>It’s a free online service that tests multiple aspects of your website, including its presentation, accessibility via search engines, security, and speed. The tool analyzes your website to see how well equipped it is for success online and gives you tips on how you can improve it. You can implement many of these tips immediately yourself, and IONOS offers additional products to help you take advantage of the full range of advice </p>
      
      <div>
        <div style={{marginRight:"15px"}}> <img src="https://www.familyres.org/wp-content/uploads/2021/01/Scam-Alert.png" height="300" width="500" alt="reactimage"/></div>
      </div>
      
      {/* <img src="https://the-ken.com/wp-content/uploads/2016/11/fake-1726362_1280-e1479407138548-970x400.jpg" height="200" width="200"alt="reactimage"/>
      <img src="https://the-ken.com/wp-content/uploads/2016/11/fake-1726362_1280-e1479407138548-970x400.jpg" height="200" width="200"alt="reactimage"/> */}

    </div>
  );
}

export default Home;
