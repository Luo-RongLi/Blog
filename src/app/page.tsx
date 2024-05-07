"use client";
import { useState } from "react";
import { Switch } from "antd";

export default function Home() {
  let [text,setText] = useState('首页')
  return (
    <>
      <div className="flex">
        <span>{text}</span>
      </div>
    </>
  );
}
