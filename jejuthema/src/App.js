import { festivalObj } from "./js/commonData";
import Festival_p from "./pages/Festival_p";
import Video_p from "./pages/Video_p";
import Event_p from "./pages/Event_p";
import CommentP from "./pages/Comment_p";
import Quickbtns from "./component/kjw/Quickbtn";
import Attraction_p from "./pages/Attraction_p";
import Tour_p from "./pages/Tour_p";
import Footer from "./pages/Footer";
import Hd from "./component/bine/Hd";
import MainBanner from "./component/bine/MainBanner";
// css
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  // style
  const QbtnFix = { position: "fixed", right: "30px", bottom: "30px", display: "flex", flexDirection: "column", alignItems: "flex-end", zIndex: "9999" }
  const toTop = {
    backgroundColor: "#059B84",
    marginTop: "10px",
    width: "3.4rem",
    height: "3.4rem",
    textAlign: "center",
    borderRadius: "50%",
    cursor: "pointer"
  }
  const toTopi = {
    color: "#fff",
    fontSize: "33px",
  }


  function handleScrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <>
      <Hd></Hd>
      <div id='slidebanner'>
        <MainBanner className="position-relative"></MainBanner>
      </div>


      <div className="wrap px-3 px-md-4 px-lg-0">
        <div style={QbtnFix}>
          <Quickbtns
            quickText={{
              text: "대중교통",
              icons: "bi bi-bus-front",
              href: "http://bus.jeju.go.kr/",
              target: "_blank"
            }}
          ></Quickbtns>
          <Quickbtns
            quickText={{
              text: "신청하기",
              icons: "bi bi-check2-square",
              href: "#applyform",
              target: ""
            }}
            onClick={() => {
              handleScrollToTop()
            }}
          ></Quickbtns>
          <div
            style={toTop}
            onClick={() => {
              handleScrollToTop()
            }}
          >
            <i style={toTopi} class="bi bi-arrow-up-short"></i>
          </div>
        </div>
        <Festival_p commonData={festivalObj}></Festival_p>
      </div>

      <Attraction_p></Attraction_p>
      <div className="d-none">
        <div className="wrap ">

          <Video_p></Video_p>
          <Event_p></Event_p>
        </div>

        <Tour_p></Tour_p>
      </div>
      <div className="wrap ">
        <CommentP></CommentP>
      </div>


      <Footer></Footer>

    </>
  );
}

export default App;
