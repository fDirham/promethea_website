import EmailIcon from "./icons/EmailIcon";
import TikTokIcon from "./icons/TikTokIcon";
import YouTubeIcon from "./icons/YouTubeIcon";

const WRITING_SAMPLE_URL = "https://l.fajardirham.com/promethea_sample";
const GET_NOTIFIED_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfM80QQxU1Bpgsa9Pbwl3GhNycsi2COX2frc8ozbSTWWtKAJg/viewform?usp=publish-editor";
const HERO_IMG_URL = "/hero-img.png";
const TIKTOK_URL = "https://tiktok.com/@fbdreads";
const YT_URL = "https://youtube.com/@fbdwrites";
const EMAIL_URL = "mailto:fajarletters@gmail.com";

function App() {
  return (
    <>
      <main>
        <img src={HERO_IMG_URL} alt="" className="hero-img" />
        <div className="hero-emojis">
          <img src="/fire_color.svg" alt="" />
          <img src="/woman_with_bunny_ears_color.svg" alt="" />
          <img src="/crossed_swords_color.svg" alt="" />
        </div>
        <h1 className="hero-title">PROMETHEA</h1>
        <h2 className="hero-subtitle">
          In a matriarchal, Sparta-inspired world, an ambitious warrior girl
          enters an elite war-academy, where she rivals a charming prince.
        </h2>

        <a className="hero-button" href={GET_NOTIFIED_URL} target="_blank">
          <b>GET NOTIFIED</b>
        </a>

        <a className="hero-link" href={WRITING_SAMPLE_URL} target="_blank">
          writing sample
        </a>

        <p>
          <b>
            An action-packed romantasy about sacrificing love for ambition by
            debut novelist, FB Diane.
          </b>
        </p>
        <p>
          <b>IN PETRAPOLIS</b> women think, men serve. For hundreds of years,
          women have utilized their intellectual, emotional, and social prowess
          to lead humanity, creating a thriving society based on equality,
          sisterhood, and cooperation. A society heavily inspired by ancient
          Sparta. Men have been given the equally important role of becoming
          warriors. Strong, handsome men might even become husbands.
        </p>
        <p>
          <b>JUNA RHOMAIA</b> wants desperately to get into an elite
          war-academy. She's an orphan, a non-citizen, who learned to fit into
          Petriate society by being strong and ruthless. Entering war-academy is
          her first step towards citizenship and a future political career. To
          ensure her admission, she must run the Kretan Labyrinth: a deadly
          trial that pits sister against sister, humanity against the Swarm.
        </p>
        <p>
          <b>GANYMEDE EPIMEDES</b> needs to find out how to survive. Despite
          being born into royalty, he'll soon be drafted into military service.
          Sure, he's handsome and charming, but he's also frail and cowardly.
          Fighting in the front will end with him getting devoured by the Swarm.
          But, if he were to enter an elite war-academy, he could land an
          interior posting upon graduation. Unfortunately, war-academies
          typically don't admit boys, unless they somehow run the Labyrinth.
        </p>
        <p>
          <b>
            Promethea is an ancient-Greek inspired romantasy novel about love,
            ambition, and gender wars. It features a magic system involving fire
            and telepathy, a majority female cast of characters, action,
            mystery, and tragedy. It is heavily inspired by <i>The Poppy War</i>
            , <i>The Will of the Many</i>, and <i>Homer's Iliad</i>.{" "}
          </b>
        </p>

        <a className="hero-button" href={GET_NOTIFIED_URL} target="_blank">
          <b>GET NOTIFIED</b>
        </a>

        <a className="hero-link" href={WRITING_SAMPLE_URL} target="_blank">
          writing sample
        </a>
        <div className={"socials-container"}>
          <a href={TIKTOK_URL} target="_blank" className="social-icon">
            <TikTokIcon />
          </a>
          <a href={YT_URL} target="_blank" className="social-icon">
            <YouTubeIcon />
          </a>
          <a href={EMAIL_URL} target="_blank" className="social-icon">
            <EmailIcon />
          </a>
        </div>
      </main>

      <footer>© 2026 Fajar Dirham. All rights reserved.</footer>
    </>
  );
}

export default App;
