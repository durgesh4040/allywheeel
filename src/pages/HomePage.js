import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import DashBoard from "./DashBoard";
import Stations from "./Stations";
import MyTrips from "./MyTrips";
import Account from "./Account";
import SubscriptionPlan from "./SubscriptionPlan";
import Sidebar from "./Sidebar";
import { useAuth } from "../context/AuthContext";
function HomePage() {
  // const { getUser, userIsAuthenticated, userLogout } = useAuth();
  const [window, setWindow] = useState(0);

  function handler(val) {
    setWindow(val);
  }

  function func(window) {
    if (window === 0) {
      return <DashBoard />;
    }
    if (window === 1) {
      return <Stations />;
    }
    if (window === 2) {
      return <MyTrips />;
    }
    if (window === 3) {
      return <Account />;
    }
    if (window === 4) {
      return <SubscriptionPlan />;
    }
  }

  // const getUserName = () => {
  //   const user = getUser();
  //   console.log("login nane" + user.data.name);
  //   return user.data.name;
  // };

  return (
    <div className="flex flex-wrap">
      <div className="bg-[#141414] w-1/4">
        <Sidebar handler={handler} />
        {console.log(window)}
        {/* <h1> {`hi ${getUserName()}`}</h1>
        <button onSubmit={userLogout}>Logout</button> */}
      </div>
      <div className="w-3/4 bg-black">
        {func(window)}
        {/* <div className="text-white">{window}</div> */}
      </div>
      <div>{/* Other components and content */}</div>
    </div>
  );
}

export default HomePage;
