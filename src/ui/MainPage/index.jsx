import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./index.module.css";
import Section from "./Section";
import { createSocketConnection } from "../../socket";

const MainPage = () => {
  const dispatch = useDispatch();
  useEffect(() => dispatch(createSocketConnection()), []);

  const { data, updatedAt, status } = useSelector((state) => state.mainReducer);
  return (
    <main className={styles["main-page"]}>
      <div>
        <p>Status: {status}</p>
        <p>Updated at: {updatedAt}</p>
      </div>
      <Section header="Dealer status" content={Object.entries(data)} />
    </main>
  );
};

export default MainPage;
