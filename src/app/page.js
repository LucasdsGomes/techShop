'use client'
import CheckoutButton from "./components/CheckoutButton";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default  function Home() {
  return (
    <main>
      <Carousel showThumbs={true} autoPlay infiniteLoop={false}>
        <div>
          <img
            src="https://miro.medium.com/v2/resize:fit:720/format:webp/0*OLBBmwZWiKUNk685.png"
            alt=""
          />
        </div>
        <div>
        <img
            src="https://miro.medium.com/v2/resize:fit:720/format:webp/0*OLBBmwZWiKUNk685.png"
            alt=""
          />
        </div>
      </Carousel>
    </main>
  );
}
