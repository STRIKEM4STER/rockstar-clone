import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';


function Home() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>

    <div className='container-fluid bg-dark px-5 '>
      <div className='carousel-container'>
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img
              className="img-fluid carousel-image"
              src="https://www.hindustantimes.com/ht-img/img/2023/09/29/1600x900/GTA-6-Leak-Featured_1681695859263_1696003454576.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="img-fluid carousel-image"
              src="https://i.redd.it/80d0fui3apob1.jpg"
              alt="Second slide" style={{objectPosition:"bottom"}}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="img-fluid carousel-image"
              src="https://cdn1.epicgames.com/b30b6d1b4dfd4dcc93b5490be5e094e5/offer/RDR2476298253_Epic_Games_Wishlist_RDR2_2560x1440_V01-2560x1440-2a9ebe1f7ee202102555be202d5632ec.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>



      <div className='container-fluid py-5' >
        <h1 className='text-white'>Newswire</h1>

        <div className="row">
          
    <div className="col-md-4 mb-4">
      <div className="card border-0 bg-black rounded">
        <img src="https://media-rockstargames-com.akamaized.net/tina-uploads/posts/k44ao7934a73a1/cc27d0c6ea171d6d60874a287203a39570c9c52b.jpg" className="card-img-top" alt="Card image cap" />
        <div className="card-body bg-black text-white rounded">
          <h5 className="card-title">GTA ONLINE</h5>
          <p className="card-text" style={{textAlign:"justify"}} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quam ea odit autem ipsum deleniti molestiae aliquam nulla, </p>
        </div>
      </div>
    </div>

    <div className="col-md-4 mb-4">
      <div className="card border-0 bg-black rounded">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9-XY-5O3VS_nPh0KO-JVrH_mBiTdyP0sydg&s" className="card-img-top" alt="Card image cap" />
        <div className="card-body bg-black text-white rounded">
          <h5 className="card-title">GTA ONLINE</h5>
          <p className="card-text" style={{textAlign:"justify"}} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quam ea odit autem ipsum deleniti molestiae aliquam nulla, </p>
        </div>
      </div>
    </div>

    <div className="col-md-4 mb-4">
      <div className="card border-0 bg-black rounded">
        <img src="https://media-rockstargames-com.akamaized.net/tina-uploads/posts/51177485oa84a9/4d342f6d587e9c16c8495dcd3845d4c66c0ce353.jpg" className="card-img-top" alt="Card image cap" />
        <div className="card-body bg-black text-white rounded">
          <h5 className="card-title">GTA ONLINE</h5>
          <p className="card-text" style={{textAlign:"justify"}} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quam ea odit autem ipsum deleniti molestiae aliquam nulla, </p>
        </div>
      </div>
    </div>

    <div className="col-md-4 mb-4">
      <div className="card border-0 bg-black rounded">
        <img src="https://media-rockstargames-com.akamaized.net/tina-uploads/posts/ak7oo548499938/cb1b01592253b9e587cb238ed5c82d2700d20343.jpg" className="card-img-top" alt="Card image cap" />
        <div className="card-body bg-black text-white rounded">
          <h5 className="card-title">GTA ONLINE</h5>
          <p className="card-text" style={{textAlign:"justify"}} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quam ea odit autem ipsum deleniti molestiae aliquam nulla, </p>
        </div>
      </div>
    </div>

    <div className="col-md-4 mb-4">
      <div className="card border-0 bg-black rounded">
        <img src="https://upload.wikimedia.org/wikipedia/en/a/ab/Grand_Theft_Auto_Online.jpg" className="card-img-top" alt="Card image cap" />
        <div className="card-body bg-black text-white rounded">
          <h5 className="card-title">GTA ONLINE</h5>
          <p className="card-text" style={{textAlign:"justify"}} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quam ea odit autem ipsum deleniti molestiae aliquam nulla, </p>
        </div>
      </div>
    </div>

    
    <div className="col-md-4 mb-4">
      <div className="card border-0 bg-black rounded">
        <img src="https://upload.wikimedia.org/wikipedia/en/2/23/Red_Dead_Online.jpg" className="card-img-top" alt="Card image cap" />
        <div className="card-body bg-black text-white rounded">
          <h5 className="card-title">GTA ONLINE</h5>
          <p className="card-text" style={{textAlign:"justify"}} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quam ea odit autem ipsum deleniti molestiae aliquam nulla, </p>
        </div>
      </div>
    </div>
  </div>

      </div>


    <div className='py-5'>
      <h1 className='text-white' > Featured Games </h1>


  <div className="row">
    
    <div className="col-md-3 mb-4">
      <div className="card bg-dark border-0">
        <img 
          src="https://upload.wikimedia.org/wikipedia/en/a/ab/Grand_Theft_Auto_Online.jpg" 
          className="card-img-top rounded" 
          alt="GTA Online" 
        />
      </div>
    </div>

    
    <div className="col-md-3 mb-4">
      <div className="card bg-dark  border-0">
        <img 
          src="https://upload.wikimedia.org/wikipedia/en/2/23/Red_Dead_Online.jpg" 
          className="card-img-top rounded" 
          alt="Red Dead Online" 
        />
      </div>
    </div>

    
    <div className="col-md-3 mb-4">
      <div className="card bg-dark border-0">
        <img 
          src="https://cdn1.epicgames.com/b30b6d1b4dfd4dcc93b5490be5e094e5/offer/RDR2476298253_Epic_Games_Wishlist_RDR2_2560x1440_V01-2560x1440-2a9ebe1f7ee202102555be202d5632ec.jpg" 
          className="card-img-top rounded" 
          alt="rdr2" 
        />
      </div>
    </div>

    
    <div className="col-md-3 mb-4">
      <div className="card bg-dark  border-0 rounded">
        <img 
          src="https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2668510/8f73dc378141e642d00e40484adde709e0ad33cb/capsule_616x353.jpg?t=1731017882" 
          className="card-img-top rounded" 
          alt="rdr" 
        />
      </div>
    </div>
  </div>

    </div>

    

    </div>

    <div className='bg-black px-5 container-fluid  d-flex justify-content-center align-items-center ' style={{height:"500px"}} >
     <div className=' d-flex flex-column' >
      <img src="https://w0.peakpx.com/wallpaper/776/772/HD-wallpaper-rockstar-games-logo-rockstargames-rokcstar-games.jpg" alt="" height="150px" width="100px" />
      <button className=' hover-effect btn btn-warning p-3' > SUBSCRIBE </button>
      </div>
    
    </div>


    


    </>
  
  );
}

export default Home;
