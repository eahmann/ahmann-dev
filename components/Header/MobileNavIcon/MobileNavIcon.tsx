import clsx from "clsx"
import { useEffect } from "react"

interface MobileNavIconProps {
  open: boolean
}

const MobileNavIcon: React.FC<MobileNavIconProps> = ({ open }) => {
  
  useEffect(() => {
    open && (document.body.style.overflow = "hidden")
    !open && (document.body.style.overflow = "auto")
  }, [open])
  
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5 overflow-visible stroke-pizazz-500"
      fill="none"
      strokeWidth={2}
      strokeLinecap="round"
    >
      <path
        d="M0 1H14M0 7H14M0 13H14"
        className={clsx(
          'origin-center transition',
          open && 'scale-90 opacity-0'
        )}
      />
      <path
        d="M2 2L12 12M12 2L2 12"
        className={clsx(
          'origin-center transition',
          !open && 'scale-90 opacity-0'
        )}
      />
    </svg>
  )
}

export default MobileNavIcon