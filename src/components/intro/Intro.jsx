import "./intro.css"
import Me from "../../images/PigMia.png"

const Intro = () => {
  return (
    <div className="i">
        <div className="i-left">
            <div className="i-left-wrapper">
                <h2 className="i-greet">Hello, my name is</h2>
                <h1 className="i-name">Eric Alonso Martinez</h1>
                <div className="i-title">
                    <div className="i-title-wrapper">
                        <div className="i-title-item">Web Developer</div>
                        <div className="i-title-item">Software Developer</div>
                        <div className="i-title-item">Android Developer</div>
                        <div className="i-title-item">Software Engineer</div>
                        <div className="i-title-item">Database Management</div>
                    </div>
                </div>
                <p clasName="i-desc">
                    Passionate about using my skills, in colloration with others, to contribute to new and exsitng software. 
                </p>
            </div>
        </div>
        <div className="i-right">
            <div className="i-bg"></div>
            <img src={Me} alt="" className="i-imgA"/>
        </div>
    </div>
  )
}

export default Intro