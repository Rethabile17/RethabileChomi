import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-yellow-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">Hotel App </h3>
              <p className="text-gray-400 mb-4">
                Collaborative project to create a hotel booking application.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Redux", "Firebase"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/Rethabile17/react-hotel-app"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Weather App</h3>
              <p className="text-gray-400 mb-4">
                An app that fetches and displays current weather conditions for
                a selected city using live APIs.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Node.js", "OpenWeather API", "CSS"].map(
                  (tech, key) => (
                    <span
                      key={key}
                      className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/Rethabile17/weather-app"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">E-commerce Store</h3>
              <p className="text-gray-400 mb-4">
                An online store built with teammates to learn full-stack
                development.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Firebase", "Stripe"].map((tech) => (
                  <span
                    key={tech}
                    className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/Rethabile17/onlinemarketplace"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Restaurants App</h3>
              <p className="text-gray-400 mb-4">
                A collaborative project to create a platform for discovering and
                reviewing local restaurants.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "MongoDB", "Node.js", "Express", "Redux"].map(
                  (tech, key) => (
                    <span
                      key={key}
                      className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center ">
                <a
                  href="https://github.com/Rethabile17/Restaurant-Reservation-app"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Shopping List App</h3>
              <p className="text-gray-400 mb-4">
                A simple app to help users create and manage their shopping
                lists, with real-time updates.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Redux", "Firebase"].map((tech) => (
                  <span
                    key={tech}
                    className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/Rethabile17/Shopping-List-App-with-Redux"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Quiz App</h3>
              <p className="text-gray-400 mb-4">
                An application where users can take quizzes on various topics,
                with scoring and progress tracking.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Firebase", "CSS"].map((tech) => (
                  <span
                    key={tech}
                    className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/Rethabile17/quiz-app"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div
              className="
    glass p-6 rounded-xl border border-white/10 
    hover:-translate-y-1 hover:border-blue-500/30
    hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
    transition-all
  "
            >
              <h3 className="text-xl font-bold mb-2">
                News App with React Native
              </h3>
              <p className="text-gray-400 mb-4">
                A mobile news app fetching real-time articles using APIs, built
                with React Native.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React Native", "Expo", "News API"].map((tech) => (
                  <span
                    key={tech}
                    className="
          bg-blue-500/10 text-blue-500 py-1 px-3 
          rounded-full text-sm
          transition
          hover:bg-blue-500/20 hover:-translate-y-0.5
          hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
        "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/Rethabile17/react-native-newsapp"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div
              className="
    glass p-6 rounded-xl border border-white/10 
    hover:-translate-y-1 hover:border-blue-500/30
    hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
    transition-all
  "
            >
              <h3 className="text-xl font-bold mb-2">To-Do List</h3>
              <p className="text-gray-400 mb-4">
                A task management app with CRUD operations and local storage
                support.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Local Storage", "Hooks"].map((tech) => (
                  <span
                    key={tech}
                    className="
          bg-blue-500/10 text-blue-500 py-1 px-3 
          rounded-full text-sm
          transition
          hover:bg-blue-500/20 hover:-translate-y-0.5
          hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
        "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/Rethabile17/Todo-list-application"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
