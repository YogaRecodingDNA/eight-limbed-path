import { GoBell, GoCloudDownload, GoFlame, GoDatabase, GoHome } from "react-icons/go";
import Button from "../components/Button";

const ButtonPage = () => {

  const handleClick = () => {};

  return (
    <div>
      <div>
        <Button
          primary
          rounded
          className='mb-5'
          onClick={handleClick}
        >
          <GoBell /> Primary
        </Button>
      </div>
      <div>
        <Button secondary onMouseEnter={handleClick}>
          <GoHome />
          Secondary
        </Button>
      </div>
      <div>
        <Button success onMouseLeave={handleClick}>Success</Button>
      </div>
      <div>
        <Button warning outlined>Warning</Button>
      </div>
      <div>
        <Button danger outlined rounded>Danger</Button>
      </div>
    </div>
  )
}

export default ButtonPage;

{/* <GoCloudDownload /> */}

{/* <GoDatabase /> */}

{/* <GoFlame /> */}