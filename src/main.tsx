import "dreamland/dev";

const App: Component<{}, { frame: number }> = function () {
  this.frame = 1;
  return (
    <div>
      <img
        src={use(this.frame, (frame) => "/frames/frame" + frame + ".png")}
        on:pointermove={(e: PointerEvent) => {
          let x = e.clientX;
          let totalX = window.innerWidth;
          let percent = Math.floor((x / totalX) * 100);
          this.frame = Math.floor((percent / 100) * 8) + 1;
          console.log(x, totalX, percent, this.frame);
        }}
      ></img>
    </div>
  );
};

window.addEventListener("load", () => {
  document.getElementById("app")!.replaceWith(<App />);
});
