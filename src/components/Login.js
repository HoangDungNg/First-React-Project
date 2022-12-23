import React from 'react';
import 'react-responsive-modal/styles.css';
/** @jsxImportSource theme-ui */
import { Modal } from 'react-responsive-modal';
const Login = ({ open, setOpen }) => {
  const onCloseModal = () => setOpen(false);
  return (
    <div>
      <Modal
        open={open}
        onClose={onCloseModal}
        center
        classNames={{
          modal: 'customModal',
        }}
      >
        <div className="wrapper fadeInDown">
          <div id="formContent">
            <form>
              <input type="text" className="fadeIn first" placeholder="Email" />
              <input
                type="text"
                className="fadeIn second"
                placeholder="Password"
              />
              <input type="submit" className="fadeIn third" value="Log In" />
            </form>

            <div id="formFooter">
              <a href="#">Forgot Password?</a>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Login;
