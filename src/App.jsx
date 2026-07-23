import React from "react";
import { useFormik } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { add } from "./redux/fueters/hisobSlice";
function App() {
  let selector = useSelector((state) => state.hisob.hisob);
  let dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
    },
    onSubmit: (values) => {
      console.log(values);
      dispatch(add(values));
    },
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <input
          type="text"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
          placeholder="name"
        />
        <input
          type="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          placeholder="email"
        />
        <button type="submit">submit</button>
      </form>
      {selector.map((item) => {
        return (
          <div key={item.name}>
            <h1>{item.name}</h1>
            <h1>{item.email}</h1>
          </div>
        );
      })}
    </div>
  );
}

export default App;
