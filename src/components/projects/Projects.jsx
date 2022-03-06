import ProjectImages from "../projectImages/ProjectImages";
import "./projects.css"
import {projectImgs} from "../../dataImg"
import {projectVids} from "../../dataVid"
import ProjectVideos from "../projectVideos/ProjectVideos";

const Projects = () => {
  return (
    <div className="p">
      <div className="p-texts">
        <h1 className="p-title">My Projects</h1>
        <p className="p-desc">
          These are few of my projects I have made over the years, some are academic and others are personal.
        </p>
      </div>
      <div className="p-images">
        {projectImgs.map((item) => (
          <ProjectImages key={item.id} img={item.img} link={item.link}/>
        ))}
      </div>
      <div className="p-proj-texts">
      <h4 className="p-proj-1">
        Tissartic Bot
      </h4>
      <h4 className="p-proj-2">
        Android Application
      </h4>
      <h4 className="p-proj-3">
        Desktop Application
      </h4>
      <h4 className="p-proj-4">
        React Website
      </h4>
      </div>
      <div className="p-videos">
      {projectVids.map((item) => (
          <ProjectVideos key={item.id} link={item.link}/>
        ))}
      </div>
      <div className="p-proj-desc">
        <p className="p-desc-1">The Tissartic Bot is a Discord bot written with JavaScript, node.js and discord.js. Moderation for servers, so that users with sufficient permissions could mute, kick, and ban misbehaved users. I also added social features so that it would greet my friends in my server. If you needed help using the bot, I implemneted a GUI help list, to see all available commands and usage.</p>
        <p className="p-desc-2">My Android application was an academic group project in Java and XML. The premise was a matching card game where the user had the option of choosing how many pairs of card to match. The player is only allowed to flip two cards at one time. If they match correctly then points would be added. At the end the user would be prompted to enter their initials and placed on the top ten scores. </p>
        <p className="p-desc-3">While this was a group project, but I did all of the coding. I did not mind, it was fun and I learned a few things in C# and GUIs. It was a casino with the games 21 and a slot machine. 21 had buttons to bet, fold, and hit. Of course the house had the advantage and would allow the player to continue playing if they won or if the house lost. Then a pull buttom to represent the lever at a slot machine.</p>
        <p className="p-desc-4">This portfolio website was built using React and it has been great to learn. I had a few problems but I was able to diagnose and resolve them with the help of reading some documentation.</p>
      </div>
    </div>
  )
}

export default Projects