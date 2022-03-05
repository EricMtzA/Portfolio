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
          I am 21 years old, born and raised in Pomona, California. 

          I'm going to hire professional help tomorrow. I can't handle this anymore. She fell over the coffee table and now there is blood in her catheter. This is much more than I ever signed up to do.

          Greg understood that this situation would make Michael terribly uncomfortable. Michael simply had no idea what was about to come and even though Greg could prevent it from happening, he opted to let it happen. It was quite ironic, really. It was something Greg had said he would never wish upon anyone a million times, yet here he was knowingly letting it happen to one of his best friends. He rationalized that it would ultimately make Michael a better person and that no matter how uncomfortable, everyone should experience racism at least once in their lifetime.
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