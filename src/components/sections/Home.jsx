import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-500 to-cyan-400 bg-clip-text text-transparent leading-right">
            Hi, I'm Rethabile Chomi
          </h1>

          <p className="tex-gray-400 text-lg mb-8 max-w-lg mx-auto">
          I am a passionate and dedicated frontend developer with experience in
            building user-focused applications using  <span className="text-blue-400 ">HTML, CSS, JavaScript, React,
            and Firebase.</span>
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-yellow-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-yellow-500/50 text-yellow-500 py-3 px-6 rounded font-medium transition-all duration-200 
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
