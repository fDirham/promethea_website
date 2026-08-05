import EmailIcon from "./icons/EmailIcon";
import TikTokIcon from "./icons/TikTokIcon";

const WRITING_SAMPLE_URL = "https://l.fajardirham.com/promethea_sample";
const GET_NOTIFIED_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfM80QQxU1Bpgsa9Pbwl3GhNycsi2COX2frc8ozbSTWWtKAJg/viewform?usp=publish-editor";
const HERO_IMG_URL = "/hero-img.png";
const TIKTOK_URL = "https://tiktok.com/@fbdreads";
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
          In a matriarchal, Sparta-inspired world, an ambitious orphan girl
          competes in an elite war-academy, to chase her dreams of greatness.
          There, she faces her toughest rival yet: a handsome, manipulative
          prince.
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
          women have used their intellectual, emotional, and spiritual prowess
          to lead humanity, forging a thriving society inspired by classical
          Sparta. Men have been given the equally important role of becoming
          warriors. Strong, handsome men might even become husbands.
        </p>
        <p>
          <b>JUNA</b> wants desperately to get into Promethea, the best
          war-academy in the world. She's an orphan, a non-citizen, who learned
          to survive Petriate society by being bold and ruthless. Promethea is a
          necessary step towards her citizenship and future political career. To
          get in, she must run the Labyrinth: a deadly trial that pits sister
          against sister, humanity against the Swarm.
        </p>
        <p>But to run the Labyrinth, one needs a partner...</p>
        <p>
          <b>GANYMEDE, DESCENDANT OF MEDEA</b> is so handsome that it hurts. He
          grew up alongside Juna, enduring her wrath after making the fatal
          mistake of scorning her once. He survived by flexing his privileges as
          a prince. He survived by seducing Juna's rivals to fight on his
          behalf. Needless to say, he hates Juna...
        </p>
        <p>
          Imagine Juna's surprise when she finds him in the Labyrinth, begging
          her to be his partner.
        </p>
        <p>
          <b>
            Promethea is an action, adventure romantic fantasy novel about love
            and ambition. It features a magic system involving fire and
            telepathy, a character driven plot, and a majority female cast of
            characters. It is heavily inspired by <i>The Poppy War</i>,{" "}
            <i>The Will of the Many</i>, and <i>Homer's Iliad</i>.{" "}
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
