import PlayIcon from "./svg/play"
import PlusIcon from "./svg/plus"

type MenuProps = {
  onOpenCreateModal: () => void
  hideUI?: boolean
}

const Menu = ({ onOpenCreateModal, hideUI = false }: MenuProps) => {
  if (hideUI) return null

  return (
    <menu className="z-50 absolute left-[50%] translate-x-[-50%] bottom-8 bg-white flex gap-4 rounded-2xl py-2.5 px-6 shadow">
      <li className="flex justify-center">
        <button onClick={onOpenCreateModal}> <PlusIcon /> </button>
      </li>
    </menu>
  )
}

export default Menu
