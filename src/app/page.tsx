'use client'

import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";

export default function Home() {
  const [output, setOutput] = useState("");
  const handleReset = () => {
    setOutput("");
  }
  const handleRun = () => {
    setOutput("");
  }
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <p>test</p>
        <button onClick={handleRun}>Run</button>
        <button onClick={handleReset}>Reset</button>
      </main>
    </div>
  );
}
