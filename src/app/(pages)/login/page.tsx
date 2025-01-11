import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

export default function LoginPage() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div className="flex flex-col gap-8 items-center">
        <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 animate-fade-in text-center">
          Transform Your Music Experience with AI
        </h1>
        <p className="text-lg md:text-xl text-gray-300 text-center text-pretty">
          Let AI curate the perfect soundtrack for any occasion. Sign in to start your personalized
          music journey.
        </p>
        <div className="flex flex-col gap-4 w-full max-w-md items-center">
          <button className="flex items-center justify-center gap-3 px-6 py-3 text-lg font-semibold text-white bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-300 border border-white/20 w-full max-w-80 md:max-w-full">
            <FcGoogle className="text-2xl" />
            <span>Continue with Google</span>
          </button>
          <button className="flex items-center justify-center gap-3 px-6 py-3 text-lg font-semibold text-white bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-300 border border-white/20 w-full max-w-80 md:max-w-full">
            <FaGithub className="text-2xl" />
            <span>Continue with GitHub</span>
          </button>

          {/* START: Updated Code (Line 54) */}
          <div className="mt-6 text-center">
            <p className="text-gray-400 mb-2">Not sure about signing up yet?</p>
            <button className="text-purple-400 hover:text-purple-300 font-semibold">
              Try our demo →
            </button>
          </div>
          {/* END: Updated Code (Line 57) */}
        </div>
      </div>
      <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl h-screen md:h-[calc(100vh-8rem)]">
        <img
          src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="Music visualization"
          className="w-full h-full object-cover absolute inset-0"
        />
      </div>
    </section>
  );
}
