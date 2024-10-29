import React from 'react';
import './App.css';

const images = [
    "/images/image1.jpg",
    "/images/image2.jpg",
    "/images/image3.jpg",
    "/images/image4.jpg",
    "/images/image5.jpg",
    "/images/image6.jpg",
    "/images/image7.jpg",
    "/images/image8.jpg",
    "/images/image9.jpg",
    "/images/image10.jpg",
    "/images/image11.jpg",
    "/images/image12.jpg",
    "/images/image13.jpg",
    "/images/image14.jpg",
    "/images/image15.jpg",
    "/images/image16.jpg",
    "/images/image17.jpg",
    "/images/image18.jpg",
    "/images/image19.jpg",
    "/images/image20.jpg",
    "/images/image21.jpg",
    "/images/image22.jpg",
    "/images/image23.jpg",
    "/images/image24.jpg",
    "/images/image25.jpg",
    "/images/image26.jpg",
    "/images/image27.jpg",
    "/images/image28.jpg",
    "/images/image29.jpg",
    "/images/image30.jpg",
    "/images/image31.jpg",
    "/images/image32.jpg",
    "/images/image33.jpg",
    "/images/image34.jpg",
    "/images/image35.jpg",
    "/images/image36.jpg",
    "/images/image37.jpg",
    "/images/image38.jpg",
    "/images/image39.jpg",
    "/images/image40.jpg",
    "/images/image41.jpg",
    "/images/image42.jpg",
    "/images/image43.jpg",
    "/images/image44.jpg",
    "/images/image45.jpg",
    "/images/image46.jpg",
    "/images/image47.jpg",
    "/images/image48.jpg",
    "/images/image49.jpg",
    "/images/image50.jpg",
    "/images/image51.jpg",
    "/images/image52.jpg",
    "/images/image53.jpg",
    "/images/image54.jpg",
    "/images/image55.jpg",
    "/images/image56.jpg",
    "/images/image57.jpg",
    "/images/image58.jpg",
    "/images/image59.jpg",
    "/images/image60.jpg",
    "/images/image61.jpg",
    "/images/image62.jpg",
    "/images/image63.jpg",
    "/images/image64.jpg",
    "/images/image65.jpg",
    "/images/image66.jpg",
    "/images/image67.jpg",
    "/images/image68.jpg",
    "/images/image69.jpg",
    "/images/image70.jpg",
    "/images/image71.jpg",
    "/images/image72.jpg",
    "/images/image73.jpg",
    "/images/image74.jpg",
    "/images/image75.jpg"
];

const shuffleArray = (array) => {
    let shuffledArray = array;
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = shuffledArray[i];
      shuffledArray[i] = shuffledArray[j];
      shuffledArray[j] = temp;
    }
    return shuffledArray;
  };
  
  const Home = () => {
      // Shuffle the images array
      const shuffledImages = shuffleArray(images);
  
      return (
        <div className="gallery-container">
        <div className="image-gallery">
          {shuffledImages.map((image, index) => (
            <img 
              key={index} 
              src={image} 
              alt={`eats-${index}`} 
              className="image-single"
            />
          ))}
        </div>
        </div>
      );
  };

export default Home;