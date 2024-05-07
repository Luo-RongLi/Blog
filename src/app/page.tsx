'use client'
import { useState } from "react";
import { Switch } from "antd";

export default function Home() {
  const [checked, setChecked] = useState<boolean>(false);
  const onChange = (checked: boolean) => {
    console.log(checked);
    setChecked((pre) => (pre = checked));
            const transition = (document as any).startViewTransition(() => {
              document.documentElement.classList.toggle("dark");
              isDark = document.documentElement.classList.contains("dark");
            })
            const [x, y] = [e.clientX, e.clientY];
            const tragetRadius = Math.hypot(
              Math.max(x, window.innerWidth - x),
              Math.max(y, window.innerHeight - y)
            );
            const clipPath = [
              `circle(0% at ${x}px ${y}px)`,
              `circle(${tragetRadius}px at ${x}px ${y}px)`,
            ];
            transition.ready.then(() => {
              document.documentElement.animate(
                {
                  clipPath: isDark ? clipPath : clipPath.reverse(),
                },
                {
                  duration: 1000,
                  pseudoElement: "::view-transition-new(root)",
                }
              );
            });
  };
      const btn = document.querySelector("#btn");
      let isDark = document.documentElement.classList.contains("dark");
  return (
    <>
      <div className="flex justify-around mt-12">
        <div>测试</div>
        <Switch defaultChecked={checked} onChange={onChange} />
      </div>
    </>
  );
}
