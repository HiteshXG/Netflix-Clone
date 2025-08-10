import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TitleCard from "@/components/TitleCard";

const hero_banner = "/assets/hero_banner.jpg";
const hero_title = "/assets/hero_title.png";
const play_icon = "/assets/play_icon.png";
const info_icon = "/assets/info_icon.png";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="relative">
        <img className="w-full mask-l-from-50% mask-l-to-90%" src={hero_banner} alt="banner-img" />
        <div className="absolute w-full" style={{ paddingLeft: "6%", bottom: "0", margin: "-120px 0px", paddingRight: "10px" }}>
          <img className="w-[90%] max-w-md" src={hero_title} alt="caption-img" style={{ marginBottom: "30px" }} />
          <p className="max-w-[700px] text-lg mb-5" style={{ padding: "10px 0px" }}>Discovering his ties to a secret ancient order, a young man living in modern istanbul embarks on a quest to save the city from an immortal enemy.</p>
          <div className="flex gap-2.5" style={{ marginBottom: "50px" }}>
            <button className="outline-0 inline-flex items-center gap-2.5 text-sm font-bold bg-white rounded-sm cursor-pointer text-black hover:bg-[#ffffffbf] transition-colors duration-200" style={{ padding: "8px 20px", border: "0" }}>
              <img className="w-[25px]" src={play_icon} alt="" />Play
            </button>
            <button className="outline-0 inline-flex items-center gap-2.5 text-sm font-bold bg-[#6d6d6eb3] rounded-sm cursor-pointer hover:bg-[#6d6d6e66] transition-colors duration-200" style={{ padding: "8px 20px", border: "0" }}>
              <img className="w-[25px]" src={info_icon} alt="" style={{ color: "#fff" }} />More Information
            </button>
          </div>
          <div style={{ paddingBottom: "120px" }}>
            <TitleCard />
          </div>
        </div>
      </div>
      <div style={{ paddingLeft: "6%" }}>
        <TitleCard title={"Blockbuster Movies"} />
        <TitleCard title={"Only on Netflix"} />
        <TitleCard title={"Upcoming"} />
        <TitleCard title={"Top Picks for You"} />
      </div>
        <Footer />
    </>
  );
}
