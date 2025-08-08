// app/page.jsx
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">

      <main className="flex flex-1">
        {/* Left side */}
        <div className="hidden md:flex flex-col justify-center items-center w-1/2 bg-gradient-to-br from-purple-600 to-blue-500 text-white p-10">
          <img
            src="/network.png"
            alt="Network Illustration"
            className="rounded-lg w-64 h-64 object-contain mb-6"
          />
          <h2 className="text-3xl font-semibold mb-2">Connect. Grow. Succeed.</h2>
          <p className="text-center mb-4">
            Join millions of professionals building their careers and expanding their networks.
          </p>
          <div className="bg-white/10 p-4 rounded-lg">
            <p className="italic text-sm">
              “NetConnect helped me land my dream job in just 3 weeks!”
            </p>
            <div className="mt-2 flex items-center gap-2">
              <img
                src="/sarah.jpg"
                alt="Sarah"
                className="w-8 h-8 rounded-full"
              />
              <div>
                <p className="text-sm font-medium">Sarah Chen</p>
                <p className="text-xs">Product Manager</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center px-8 py-12">
          <div className="max-w-md w-full space-y-6">
            <div className="flex justify-center gap-2 mb-4">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md">Sign In</button>
              <Link href = "/Signup"><button className="px-4 py-2 bg-gray-200 text-black rounded-md">Join Now</button></Link>
            </div>
            <h2 className="text-xl font-semibold text-gray-800">Welcome back</h2>
            <p className="text-sm text-gray-600">Sign in to your account to continue</p>
            <form className="space-y-4">
              <div>
                <label className="block text-sm mb-1">Email or Phone</label>
                <input
                  type="text"
                  placeholder="Enter your email or phone"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm mb-1">Password</label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex justify-between items-center text-sm">
                <label className="flex items-center gap-2">
                  <input type="checkbox" />
                  Remember me
                </label>
                <a href="#" className="text-blue-600 hover:underline">
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
              >
                Sign In
              </button>
            </form>
            <div className="flex items-center justify-center text-sm text-gray-500">
              Or continue with
            </div>
            <div className="flex justify-between gap-4">
              <button className="flex-1 flex items-center justify-center gap-2 border rounded-md py-2 hover:bg-gray-100">
                <img src="/google.png" alt="Google" className="w-5 h-5" />
                Google
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 border rounded-md py-2 hover:bg-gray-100">
                <img src="/linkedin.png" alt="LinkedIn" className="w-5 h-5" />
                LinkedIn
              </button>
            </div>
          </div>
        </div>
      </main>

    </div>
  );
}
