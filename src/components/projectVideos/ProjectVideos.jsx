import "./projectVideos.css"

const ProjectVideos = ({link}) => {
  return (
    <div className="pv">
        <iframe
      width="500"
      height="300"
      src={link}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
        />
    </div>
  )
}

export default ProjectVideos