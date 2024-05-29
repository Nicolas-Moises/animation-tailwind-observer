import { AnimatedOnScroll } from "@/components/animated-on-scroll";

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto">
        <div className="h-screen flex items-center justify-between ">
          <AnimatedOnScroll classNameInView="animate-fade-in-right">
            <div className="w-40 h-40 bg-gradient-to-tr from-violet-400 rounded-xl" />
          </AnimatedOnScroll>

          <AnimatedOnScroll classNameInView="animate-fade-in-left">
            <div className="w-40 h-40 bg-gradient-to-tr from-cyan-400 rounded-xl" />
          </AnimatedOnScroll>
        </div>
        <div className="h-screen flex items-center justify-between ">
          <AnimatedOnScroll classNameInView="animate-fade-in-down">
            <div className="w-40 h-40 bg-gradient-to-tr from-violet-400 rounded-xl" />
          </AnimatedOnScroll>

          <AnimatedOnScroll classNameInView="animate-fade-in-up">
            <div className="w-40 h-40 bg-gradient-to-tr from-cyan-400 rounded-xl" />
          </AnimatedOnScroll>

        </div>
        <div className="h-screen flex items-center justify-between ">
          <AnimatedOnScroll classNameInView="animate-fade-in">
            <div className="w-40 h-40 bg-gradient-to-tr from-violet-400 rounded-xl" />
          </AnimatedOnScroll>

          <AnimatedOnScroll classNameInView="animate-fade-in">
            <div className="w-40 h-40 bg-gradient-to-tr from-cyan-400 rounded-xl" />
          </AnimatedOnScroll>

        </div>
        <div className="h-screen flex items-center justify-between ">
          <AnimatedOnScroll classNameInView="animate-slide-in-left">
            <div className="w-40 h-40 bg-gradient-to-tr from-violet-400 rounded-xl" />
          </AnimatedOnScroll>

          <AnimatedOnScroll classNameInView="animate-slide-in-right">
            <div className="w-40 h-40 bg-gradient-to-tr from-cyan-400 rounded-xl" />
          </AnimatedOnScroll>

        </div>
        <div className="h-screen flex items-center justify-between ">
          <AnimatedOnScroll classNameInView="animate-slide-in-top">
            <div className="w-40 h-40 bg-gradient-to-tr from-violet-400 rounded-xl" />
          </AnimatedOnScroll>

          <AnimatedOnScroll classNameInView="animate-slide-in-bottom">
            <div className="w-40 h-40 bg-gradient-to-tr from-cyan-400 rounded-xl" />
          </AnimatedOnScroll>
        </div>
        
    </main>
  );
}
