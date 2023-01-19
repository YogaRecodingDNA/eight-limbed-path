import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

const ModalPage = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  // const showModalClassName = showModal && "bg-gray-500 blur-2xl";

  const handleClick = () => {
    setShowModal(true);
  };
  
  const handleCloseModal = () => {
    setShowModal(false);
  }
  
  const handleOk = () => {
    alert('Success! You are now a Guru.');
    setShowModal(false);
  }

  const actionBar = (
    <div>
      <Button primary onClick={handleOk}>Agree</Button>
      <Button danger onClick={handleCloseModal}>Close</Button>
    </div>
  )

  const modal = (
    <Modal onClose={handleCloseModal} actionBar={actionBar} >
      <p>
        Sign up for the Guru Account to access this content
      </p>
    </Modal>
  );

  return (
    <div className="realtive">
      <Button onClick={handleClick} primary>
        Open Modal
      </Button>
      {showModal && modal}
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus feugiat metus lacus, a ornare massa hendrerit ut. Morbi tincidunt metus a neque venenatis, at gravida mauris vestibulum. Nunc sed bibendum odio, et scelerisque turpis. Etiam imperdiet nunc sed posuere tincidunt. Aenean tristique tellus eu leo semper dictum. Donec tristique ornare luctus. Nulla id eros quis arcu pharetra commodo eu quis velit. Aliquam commodo finibus purus in scelerisque. Maecenas ut elit at mauris scelerisque sodales. Vestibulum a nibh vitae nisi rhoncus cursus. Morbi vehicula augue ullamcorper elementum sodales. Donec lobortis iaculis imperdiet. In lobortis ipsum sed risus suscipit, euismod aliquam tortor euismod.
      </p>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus feugiat metus lacus, a ornare massa hendrerit ut. Morbi tincidunt metus a neque venenatis, at gravida mauris vestibulum. Nunc sed bibendum odio, et scelerisque turpis. Etiam imperdiet nunc sed posuere tincidunt. Aenean tristique tellus eu leo semper dictum. Donec tristique ornare luctus. Nulla id eros quis arcu pharetra commodo eu quis velit. Aliquam commodo finibus purus in scelerisque. Maecenas ut elit at mauris scelerisque sodales. Vestibulum a nibh vitae nisi rhoncus cursus. Morbi vehicula augue ullamcorper elementum sodales. Donec lobortis iaculis imperdiet. In lobortis ipsum sed risus suscipit, euismod aliquam tortor euismod.
      </p>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus feugiat metus lacus, a ornare massa hendrerit ut. Morbi tincidunt metus a neque venenatis, at gravida mauris vestibulum. Nunc sed bibendum odio, et scelerisque turpis. Etiam imperdiet nunc sed posuere tincidunt. Aenean tristique tellus eu leo semper dictum. Donec tristique ornare luctus. Nulla id eros quis arcu pharetra commodo eu quis velit. Aliquam commodo finibus purus in scelerisque. Maecenas ut elit at mauris scelerisque sodales. Vestibulum a nibh vitae nisi rhoncus cursus. Morbi vehicula augue ullamcorper elementum sodales. Donec lobortis iaculis imperdiet. In lobortis ipsum sed risus suscipit, euismod aliquam tortor euismod.
      </p>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus feugiat metus lacus, a ornare massa hendrerit ut. Morbi tincidunt metus a neque venenatis, at gravida mauris vestibulum. Nunc sed bibendum odio, et scelerisque turpis. Etiam imperdiet nunc sed posuere tincidunt. Aenean tristique tellus eu leo semper dictum. Donec tristique ornare luctus. Nulla id eros quis arcu pharetra commodo eu quis velit. Aliquam commodo finibus purus in scelerisque. Maecenas ut elit at mauris scelerisque sodales. Vestibulum a nibh vitae nisi rhoncus cursus. Morbi vehicula augue ullamcorper elementum sodales. Donec lobortis iaculis imperdiet. In lobortis ipsum sed risus suscipit, euismod aliquam tortor euismod.
      </p>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus feugiat metus lacus, a ornare massa hendrerit ut. Morbi tincidunt metus a neque venenatis, at gravida mauris vestibulum. Nunc sed bibendum odio, et scelerisque turpis. Etiam imperdiet nunc sed posuere tincidunt. Aenean tristique tellus eu leo semper dictum. Donec tristique ornare luctus. Nulla id eros quis arcu pharetra commodo eu quis velit. Aliquam commodo finibus purus in scelerisque. Maecenas ut elit at mauris scelerisque sodales. Vestibulum a nibh vitae nisi rhoncus cursus. Morbi vehicula augue ullamcorper elementum sodales. Donec lobortis iaculis imperdiet. In lobortis ipsum sed risus suscipit, euismod aliquam tortor euismod.
      </p>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus feugiat metus lacus, a ornare massa hendrerit ut. Morbi tincidunt metus a neque venenatis, at gravida mauris vestibulum. Nunc sed bibendum odio, et scelerisque turpis. Etiam imperdiet nunc sed posuere tincidunt. Aenean tristique tellus eu leo semper dictum. Donec tristique ornare luctus. Nulla id eros quis arcu pharetra commodo eu quis velit. Aliquam commodo finibus purus in scelerisque. Maecenas ut elit at mauris scelerisque sodales. Vestibulum a nibh vitae nisi rhoncus cursus. Morbi vehicula augue ullamcorper elementum sodales. Donec lobortis iaculis imperdiet. In lobortis ipsum sed risus suscipit, euismod aliquam tortor euismod.
      </p>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus feugiat metus lacus, a ornare massa hendrerit ut. Morbi tincidunt metus a neque venenatis, at gravida mauris vestibulum. Nunc sed bibendum odio, et scelerisque turpis. Etiam imperdiet nunc sed posuere tincidunt. Aenean tristique tellus eu leo semper dictum. Donec tristique ornare luctus. Nulla id eros quis arcu pharetra commodo eu quis velit. Aliquam commodo finibus purus in scelerisque. Maecenas ut elit at mauris scelerisque sodales. Vestibulum a nibh vitae nisi rhoncus cursus. Morbi vehicula augue ullamcorper elementum sodales. Donec lobortis iaculis imperdiet. In lobortis ipsum sed risus suscipit, euismod aliquam tortor euismod.
      </p>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus feugiat metus lacus, a ornare massa hendrerit ut. Morbi tincidunt metus a neque venenatis, at gravida mauris vestibulum. Nunc sed bibendum odio, et scelerisque turpis. Etiam imperdiet nunc sed posuere tincidunt. Aenean tristique tellus eu leo semper dictum. Donec tristique ornare luctus. Nulla id eros quis arcu pharetra commodo eu quis velit. Aliquam commodo finibus purus in scelerisque. Maecenas ut elit at mauris scelerisque sodales. Vestibulum a nibh vitae nisi rhoncus cursus. Morbi vehicula augue ullamcorper elementum sodales. Donec lobortis iaculis imperdiet. In lobortis ipsum sed risus suscipit, euismod aliquam tortor euismod.
      </p>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus feugiat metus lacus, a ornare massa hendrerit ut. Morbi tincidunt metus a neque venenatis, at gravida mauris vestibulum. Nunc sed bibendum odio, et scelerisque turpis. Etiam imperdiet nunc sed posuere tincidunt. Aenean tristique tellus eu leo semper dictum. Donec tristique ornare luctus. Nulla id eros quis arcu pharetra commodo eu quis velit. Aliquam commodo finibus purus in scelerisque. Maecenas ut elit at mauris scelerisque sodales. Vestibulum a nibh vitae nisi rhoncus cursus. Morbi vehicula augue ullamcorper elementum sodales. Donec lobortis iaculis imperdiet. In lobortis ipsum sed risus suscipit, euismod aliquam tortor euismod.
      </p>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus feugiat metus lacus, a ornare massa hendrerit ut. Morbi tincidunt metus a neque venenatis, at gravida mauris vestibulum. Nunc sed bibendum odio, et scelerisque turpis. Etiam imperdiet nunc sed posuere tincidunt. Aenean tristique tellus eu leo semper dictum. Donec tristique ornare luctus. Nulla id eros quis arcu pharetra commodo eu quis velit. Aliquam commodo finibus purus in scelerisque. Maecenas ut elit at mauris scelerisque sodales. Vestibulum a nibh vitae nisi rhoncus cursus. Morbi vehicula augue ullamcorper elementum sodales. Donec lobortis iaculis imperdiet. In lobortis ipsum sed risus suscipit, euismod aliquam tortor euismod.
      </p>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus feugiat metus lacus, a ornare massa hendrerit ut. Morbi tincidunt metus a neque venenatis, at gravida mauris vestibulum. Nunc sed bibendum odio, et scelerisque turpis. Etiam imperdiet nunc sed posuere tincidunt. Aenean tristique tellus eu leo semper dictum. Donec tristique ornare luctus. Nulla id eros quis arcu pharetra commodo eu quis velit. Aliquam commodo finibus purus in scelerisque. Maecenas ut elit at mauris scelerisque sodales. Vestibulum a nibh vitae nisi rhoncus cursus. Morbi vehicula augue ullamcorper elementum sodales. Donec lobortis iaculis imperdiet. In lobortis ipsum sed risus suscipit, euismod aliquam tortor euismod.
      </p>
    </div>
  )
}

export default ModalPage;