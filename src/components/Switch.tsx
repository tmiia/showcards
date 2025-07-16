import CardIcon from "./svg/card"
import ListIcon from "./svg/list"

type SwitchCustomProps = {
  view: "list" | "card",
  toggleView: () => void;
}

const SwitchCustom = ({ view, toggleView } : SwitchCustomProps) => {

  return (
    <div className="absolute top-8 left-[50%] translate-x-[-50%] z-10">
      <div className="relative flex justify-between items-center bg-gray-300 rounded-full p-1 shadow-lg w-25">
        <div
          className={`absolute top-[50%] translate-y-[-50%] w-11 h-8 bg-white rounded-full transition-transform duration-300 ease-in-out ${
            view === "card" ? "translate-x-0" : "translate-x-[110%]"
          }`}
        />

        <div
          className="relative flex-auto flex justify-center p-2 rounded-full cursor-pointer z-10"
          onClick={toggleView}
        >
          <CardIcon
            classname={`transition-colors duration-300`}
            color={`${ view === "card" ? "#3448C6" : "#9CA3D2" }`}
          />
        </div>

        <div
          className="relative flex-auto flex justify-center p-2 rounded-full cursor-pointer z-10 ml-3"
          onClick={toggleView}
        >
          <ListIcon
            classname={`transition-colors duration-300`}
            color={`${ view === "card" ? "#9CA3D2" : "#3448C6" }`}
          />
        </div>
      </div>
    </div>
  )
}

export default SwitchCustom
