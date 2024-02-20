import Menu from "./Menu";
import Logo from "./Logo";
import Availveh from "./Availveh";

function Sidebar(props) {
  return (
    <div className="text-white flex flex-col">
      <Logo />
      <Menu handler={props.handler} />
      <Availveh />
    </div>
  );
}

export default Sidebar;
