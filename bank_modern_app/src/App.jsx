import React from 'react'
import styles from './style';
import {
  Billing,
  Business,
  Button,
  CardDeal,
  Clients,
  CTA,
  FeedbackCard,
  Footer,
  GetStarted,
  Hero,
  NavBar,
  Stats,
  Testimonials
} from './components';

const App = () => {
  return (
    <div className='bg-primary overflow-hidden w-full'>
  
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth} text-white`}>
          <NavBar/>
        </div>
      </div>

      <div className={`bg-primary ${styles.flexCenter}`}>
        <div className={` ${styles.boxWidth }`}>
          <Hero/>
        </div>
      </div>

      <div className={`${styles.paddingX} ${styles.flexStart} bg-primary`}>
        <div className={`${styles.boxWidth}`}>
          <Stats/>
          <Business/>
          <Billing/>
          <CardDeal/>
          <Testimonials/>
          <Clients/>
          <CTA/>
          <Footer/>  
        </div>
      </div>
    </div>
  )
}

export default App;