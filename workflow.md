# Front-End LMS

Dependencies:
npm install react-redux @reduxjs/toolkit react-router-dom axios react-bootstrap bootstrap react-toastify react-icons

Configurations:

1. [x] react router dom: main.jsx <BrowserRouter></BrowserRouter>

# react-router-dom

import { BrowserRouter } from "react-router-dom";

# _ wrap with react-router-dom _

    <BrowserRouter>
      <App />
    </BrowserRouter>

2. [x] import css of bootstrap: main.jsx

# bootstrap css

import "bootstrap/dist/css/bootstrap.min.css";

3. [x] import css of react-toastify: App.jsx <ToastContainer />

# react-toastify

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast, Bounce } from "react-toastify";

# in component:

function App() {

useEffect(() => {
toast.success("Welcome to LMS");
}, []);

return (
<>
<ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
</>
);
}

4. [x] react icons:

# in app.jsx or any component

import { FaRegThumbsUp } from "react-icons/fa";

# then use the item:

<FaRegThumbsUp />
