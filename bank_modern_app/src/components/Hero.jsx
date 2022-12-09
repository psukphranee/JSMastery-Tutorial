import styles from "../style"
import { discount, robot } from "../assets"


const Hero = () => {
  return (
    <section id="home" className={`
      flex md:flex-row flex-col 
      ${styles.paddingY}`} text-white 
      >
      <div className="border-solid border-2">
        <div className="text-white flex flex-row bg-discount-gradient">
          <img src={discount}/>
          <p className={`${styles.paragraph}`}>
            Discount for one month
          </p>
        </div>

        <div className="text-white">
          The Next Generation Payment Method.
        </div>

        <h1>
          Payment Method
        </h1>
        <p className={`${styles.paragraph}`}>
          Our team of experts uses a methodology to identify the credit cards most
          likely to fit your needs. We examine annual percentage rates, annual fees.
        </p>
      </div>

      <div>
        <img src={robot}/>  
      </div>

    </section>
  )
}

export default Hero