import "./projectImages.css"

const ProjectImages = ({img, link}) => {
  return (
    <div className="pi">
        <div className="pi-top">
          <div className="pi-circle"></div>
          <div className="pi-circle"></div>
          <div className="pi-circle"></div>
        </div>
        <a href={link} target="_blank" rel="noreferrer">
          <img src={img} alt="" className="pi-img"/>
        </a>
    </div>
    
  )
}

export default ProjectImages