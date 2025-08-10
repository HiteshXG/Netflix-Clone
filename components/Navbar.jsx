// const logo = "/assets/logo.png";
// const search_icon = "/assets/search_icon.svg";
// const bell_icon = "/assets/bell_icon.svg";
// const profile_img = "/assets/profile_img.svg";
// const caret_icon = "/assets/caret_icon.svg";

// const Navbar = () => {
//   const navItems = [
//     "Home",
//     "TV Shows",
//     "Movies",
//     "New & Popular",
//     "My List",
//     "Browse by Language",
//   ];
//   return (
//     <div
//       style={{
//         width: "100%",
//         padding: "20px 6%",
//         display: "flex",
//         justifyContent: "space-between",
//         alignItems: "center",
//         position: "fixed",
//         fontSize: "14px",
//         color: "#e5e5e5",
//         backgroundImage:
//           "linear-gradient(180deg, rgba(0,0,0,0.7) 10%, transparent)",
//         zIndex: 1,
//       }}
//     >
//       <div className="navbar-left" style={{display: "flex", alignItems: "center", gap: "50px"}}>
//         <img src={logo} alt="Website Logo" className="logo" style={{width: "90px"}} />
//         <ul style={{display: "flex", listStyle: "none", gap: "20px"}}>
//           {navItems.map((item, index) => (
//             <li style={{cursor: "pointer"}} key={index}>{item}</li>
//           ))}
//         </ul>
//       </div>
//       <div className="navbar-right" style={{display: "flex", alignItems: "center", gap: "20px"}}>
//         <img className="icons" src={search_icon} alt="Search" style={{cursor: "pointer"}} />
//         <p>Children</p>
//         <img className="icons" src={bell_icon} alt="Notifications" style={{cursor: "pointer"}} />
//         <div className="navbar-profile" style={{display: "flex", alignItems: "center", gap: "10px", cursor: "pointer"}}>
//           <img className="profile" src={profile_img} alt="Profile" />
//           <img className="caret" src={caret_icon} alt="Menu" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

// // import Image from "next/image";

// const logo = "/assets/logo.png";
// const search_icon = "/assets/search_icon.svg";
// const bell_icon = "/assets/bell_icon.svg";
// const profile_img = "/assets/profile_img.svg";
// const caret_icon = "/assets/caret_icon.svg";

// const Navbar = () => {
//   const navItems = [
//     "Home",
//     "TV Shows",
//     "Movies",
//     "New & Popular",
//     "My List",
//     "Browse by Language",
//   ];
//   return (
//     <div
//       style={{
//         width: "100%",
//         padding: "20px 6%",
//         display: "flex",
//         justifyContent: "space-between",
//         alignItems: "center",
//         position: "fixed",
//         fontSize: "14px",
//         color: "#e5e5e5",
//         backgroundImage:
//           "linear-gradient(180deg, rgba(0,0,0,0.7) 10%, transparent)",
//         zIndex: 1,
//       }}
//     >
//       <div
//         className="navbar-left"
//         style={{ display: "flex", alignItems: "center", gap: "50px" }}
//       >
//         {/* <Image src={logo} alt="Website Logo" width={120} height={40}/> */}
//         <img
//           src={logo}
//           alt="Website Logo"
//           className="logo"
//           style={{ width: "90px" }}
//         />
//         <ul style={{ display: "flex", listStyle: "none", gap: "20px" }}>
//           {navItems.map((items, index) => (
//             <li style={{ cursor: "pointer" }} key={index}>
//               {items}
//             </li>
//           ))}
//         </ul>
//       </div>
//       <div className="navbar-right">
//         {/* <Image className="icons" src={search_icon} alt="" width={20} height={20}/> */}
//         <img className="icons" src={search_icon} alt="Search" />
//         <p>Children</p>
//         {/* <Image
//           className="icons"
//           src={bell_icon}
//           alt=""
//           width={20}
//           height={20}
//         /> */}
//         <img className="icons" src={bell_icon} alt="Notifications" />
//         <div className="navbar-profile">
//           {/* <Image
//             className="profile"
//             src={profile_img}
//             alt=""
//             width={32}
//             height={32}
//           /> */}
//           <img className="profile" src={profile_img} alt="Profile" />
//           {/* <Image src={caret_icon} alt="" width={16} height={16} /> */}
//           <img className="caret" src={caret_icon} alt="Menu" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

const logo = "/assets/logo.png";
const search_icon = "/assets/search_icon.svg";
const bell_icon = "/assets/bell_icon.svg";
const profile_img = "/assets/profile_img.png";
const caret_icon = "/assets/caret_icon.svg";

const Navbar = () => {
  const navItems = [
    "Home",
    "TV Shows",
    "Movies",
    "New & Popular",
    "My List",
    "Browse by Language",
  ];

  return (
    <div
      className="bg-white px-[6%] py-5 z-1 w-full fixed flex justify-between items-center text-sm text-[#e5e5e5] bg-gradient-to-b from-[rgba(0,0,0,0.7)] to-transparent"
      style={{ padding: "20px 6%", zIndex: "1" }}
    >
      <div className="flex items-center gap-12">
        <img src={logo} alt="Website Logo" className="w-24" />
        <ul className="flex list-none gap-5">
          {navItems.map((item, index) => (
            <li
              className="cursor-pointer hover:text-white transition-colors"
              key={index}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center gap-5">
        <img
          src={search_icon}
          alt="Search"
          className="w-5 h-5 cursor-pointer hover:opacity-80"
        />
        <p className="hover:text-white transition-colors">Children</p>
        <img
          src={bell_icon}
          alt="Notifications"
          className="w-5 h-5 cursor-pointer hover:opacity-80"
        />
        <div className="relative group">
          <div className="flex items-center gap-2.5 cursor-pointer hover:opacity-80">
            <img
              src={profile_img}
              alt="Profile"
              className="w-10 h-10 rounded"
            />
            <img src={caret_icon} alt="Menu" />
          </div>
          <div
            className="absolute top-full right-0 w-max bg-[#191919] rounded-xs underline hidden group-hover:block"
            style={{ padding: "18px 22px", zIndex: "1" }}
          >
            <p className="text-sm cursor-pointer">Sign Out of Netflix</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
