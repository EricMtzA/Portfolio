import "./about.css"
import MeA from "../../images/Happy.png"
import AP from "../../images/AP.png"

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={MeA} alt="" className="a-img"/>
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">Computer Science Major</p>
        <p className="a-desc">
          I am 21 years old, born and raised in Pomona, California. I have always been fascinated by the innovations computer science has brought to our lives.
          The advancements of technology in healthcare, the automotive industry,  and communications have made society faster and safer. It has been my dream to contribute
          to new and existing software in order to make a positive difference in the world. I want an opportunity to use my skills I have aquired to achieve my goals. I am
          excited to experience how to apply my skills and learn new techniques, tools and skills. 
        </p>
        <div className="a-uni">
          <img src={AP} alt="" className="a-uni-img"/>
          <div className="a-uni-texts">
            <h4 className="a-uni-name">California Polytechnic State University, Pomona</h4>
            <p className="a-uni-desc">
            Received my Bachelors in Science of Computer Science on May 2022.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About