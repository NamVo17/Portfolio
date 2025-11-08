import { motion } from "framer-motion";

export default function FloatingBalloons() {
  const balloons = [
    { color: "#ff0000", gradient: "radial-gradient(circle at 30% 30%, #ff0000, #ff0000 80%)", left: "0px", top: "40px", rotate: "-20deg" },
    { color: "#f7d700", gradient: "radial-gradient(circle at 30% 30%, #f7d700, #f7d700 80%)", left: "50px", top: "80px", rotate: "-8deg" },
    { color: "#008080", gradient: "radial-gradient(circle at 30% 30%, #008080, #008080 80%)", left: "80px", top: "0px", rotate: "1deg" },
    { color: "#1e90ff", gradient: "radial-gradient(circle at 30% 30%, #1e90ff, #1e90ff 80%)", left: "100px", top: "110px", rotate: "10deg" },
    { color: "#ffa500", gradient: "radial-gradient(circle at 30% 30%, #ffa500, #cc7000 80%)", left: "140px", top: "50px", rotate: "18deg" },
    { color: "#ff69b4", gradient: "radial-gradient(circle at 30% 30%, #ff69b4, #ff1493 80%)", left: "30px", top: "150px", rotate: "-15deg" },
    { color: "#00ff7f", gradient: "radial-gradient(circle at 30% 30%, #00ff7f, #008000 80%)", left: "70px", top: "200px", rotate: "5deg" },
    { color: "#800080", gradient: "radial-gradient(circle at 30% 30%, #800080, #4b0082 80%)", left: "110px", top: "170px", rotate: "12deg" },
    { color: "#00bfff", gradient: "radial-gradient(circle at 30% 30%, #00bfff, #1e90ff 80%)", left: "150px", top: "130px", rotate: "20deg" },
    { color: "#ffd700", gradient: "radial-gradient(circle at 30% 30%, #ffd700, #ffa500 80%)", left: "180px", top: "60px", rotate: "-5deg" },
  ];

  return (
    <div className="relative mx-auto my-10 w-[230px] h-[600px]">
      {balloons.map((b, i) => (
        <motion.div
          key={i}
          initial={{ y: "100vh", opacity: 0 }}
          animate={{ y: "-780px", opacity: 1, transition: { duration: 12, ease: "linear" } }}
          className="absolute w-[85px]"
          style={{ top: b.top, left: b.left }}
        >
          <div className="absolute top-[110px] left-[42px] w-[2px] h-[250px] bg-gray-800 origin-top-left" style={{ transform: `rotate(${b.rotate})` }}></div>

          <div
            className="absolute w-[85px] h-[100px] rounded-full border border-white/30 shadow-2xl backdrop-blur-sm"
            style={{
              background: b.gradient,
              boxShadow: "inset -15px -15px 30px #ffffff70, inset 10px 10px 25px #00000050, 0 0 50px rgba(255,255,255,0.5)",
              filter: "brightness(1.2) contrast(1.2)",
            }}
          >
            <div
              className="absolute right-[18px] top-[14px] w-[18px] h-[38px] rounded-full opacity-80"
              style={{ background: "linear-gradient(to bottom, #ffffff90, transparent)", transform: "rotate(-25deg)" }}
            ></div>

            <div
              className="absolute left-1/2 -translate-x-1/2 bottom-[-15px] w-[25px] h-[20px]"
              style={{ background: b.color, clipPath: "polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)" }}
            ></div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
