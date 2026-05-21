export default function TailwindCSS(){
      return (
            <div>
                  <FlexboxGrid/>
                  <h1 class="border m-4">Belajar Tailwind CSS 4</h1>
                  <button className="bg-blue-500 text-white px-4 py-2 mx-4 rounded shadow-lg">Click Me</button>
                  <Spacing title="Judul Card" content="Ini merupakan isi dari card Spacing"/>
                  <Typography/>
                  <BorderRadius/>
                  <BackgroundColors/>
                  <ShadowEffects/>
                  <TailwindShowcase/>
            </div>
      )
}

function Spacing(props){
    return (
        <div className="bg-gray-500 shadow-lg p-5 m-4 rounded-lg">
            <h2 className="text-lg font-extrabold">{props.title}</h2>
            <p className="mt-2 text-white">{props.content}</p>
        </div>
    )
}

function Typography(){
    return (
        <div className="ml-4 underline">
            <h1 className="text-5xl font-bold text-blue-900">Tailwind Typography</h1>
            <p className="text-gray-600 text-sm mt-2">Belajar Tailwind sangat menyenangkan dan cepat!</p>
        </div>
    )
}

function BorderRadius(){
    return (
      <div className="m-4">
            <button className="border-1 mr-3 border-blue-500 text-blue-500 px-4 py-2 rounded-l-full"> Klik Saya </button>
            <button className="border-1 border-blue-500 text-blue-500 px-4 py-2 rounded-r-full"> Klik Saya </button>
      </div>
    )
}

function BackgroundColors(){
    return(
        <div className="m-4 bg-green-700 text-white p-6 rounded-lg hover:bg-green-900">
            <h3 className="text-xl font-bold">Tailwind Colors</h3>
            <p className="mt-2">Belajar Tailwind itu seru dan fleksibel!</p>
        </div>
    )
}

function FlexboxGrid(){
    return (
        <nav className="flex justify-between bg-gray-800 p-4 text-white">
            <h1 className="text-lg font-bold">MyWebsite</h1>
            <ul className="flex space-x-5">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <h1 className="text-lg font-bold">Login</h1>

        </nav>
    )
}

function ShadowEffects(){
    return (
        <div className="bg-white  m-4 p-6 rounded-lg hover:shadow-md transition">
            <h3 className="text-xl font-semibold">Hover me!</h3>
            <p className="text-gray-600 mt-2">Lihat efek bayangan saat hover.</p>
        </div>
    )
}

function TailwindShowcase() {
  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* 1. Flexbox & Background (Navigasi) */}
      <nav className="flex justify-between items-center bg-blue-900 p-4 text-white shadow-md">
        <h1 className="text-xl font-extrabold tracking-tight">TailwindLab</h1>
        <ul className="flex space-x-6 font-medium">
          <li className="hover:text-blue-300 cursor-pointer">Home</li>
          <li className="hover:text-blue-300 cursor-pointer">Explore</li>
        </ul>
        <button className="bg-white text-blue-900 px-5 py-1.5 rounded-full font-bold hover:bg-blue-100 transition">
          Login
        </button>
      </nav>

      <main className="p-8">
        {/* 2. Typography & Spacing */}
        <div className="mb-10 text-center">
          <h2 className="text-4xl font-black text-gray-800 underline decoration-blue-500 decoration-4 underline-offset-8">
            Mastering Tailwind CSS
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Menggabungkan spacing, color, dan efek dalam satu layout bersih.
          </p>
        </div>

        {/* 3. Grid & Card (Shadow, Border Radius, Hover) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: Fokus ke Background & Hover */}
          <div className="bg-green-600 hover:rotate-2 text-white p-6 rounded-2xl shadow-lg hover:bg-green-700 transition duration-300">
            <h3 className="text-2xl font-bold">Background & Hover</h3>
            <p className="mt-2 opacity-90">
              Card ini menggunakan warna hijau solid yang akan berubah menjadi lebih gelap saat kursor diletakkan di atasnya.
            </p>
            <button className="mt-4 bg-white text-green-700 px-4 py-2 rounded-lg font-bold shadow-md">
              Action Button
            </button>
          </div>

          {/* Card 2: Fokus ke Border Radius & Typography */}
          <div className="bg-white p-6  hover:rotate-2 rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-bold text-blue-900">Border & Shadow</h3>
            <p className="mt-2 text-gray-600">
              Menggunakan border tipis dan shadow halus. Tombol di bawah menggunakan teknik 
              <span className="italic font-semibold text-blue-500"> rounded-l-full </span> dan 
              <span className="italic font-semibold text-blue-500"> rounded-r-full</span>.
            </p>
            <div className="mt-4 flex">
              <button className="bg-blue-500 text-white px-6 py-2 rounded-l-full hover:bg-blue-600">Left</button>
              <button className="bg-blue-100 text-blue-600 px-6 py-2 rounded-r-full hover:bg-blue-200">Right</button>
            </div>
          </div>

          {/* Card 1: Fokus ke Background & Hover */}
          <div className="bg-green-600  hover:rotate-2 text-white p-6 rounded-2xl shadow-lg hover:bg-green-700 transition duration-300">
            <h3 className="text-2xl font-bold">Background & Hover</h3>
            <p className="mt-2 opacity-90">
              Card ini menggunakan warna hijau solid yang akan berubah menjadi lebih gelap saat kursor diletakkan di atasnya.
            </p>
            <button className="mt-4 bg-white text-green-700 px-4 py-2 rounded-lg font-bold shadow-md">
              Action Button
            </button>
          </div>

          {/* Card 2: Fokus ke Border Radius & Typography */}
          <div className="bg-white p-6  hover:rotate-2 rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-bold text-blue-900">Border & Shadow</h3>
            <p className="mt-2 text-gray-600">
              Menggunakan border tipis dan shadow halus. Tombol di bawah menggunakan teknik 
              <span className="italic font-semibold text-blue-500"> rounded-l-full </span> dan 
              <span className="italic font-semibold text-blue-500"> rounded-r-full</span>.
            </p>
            <div className="mt-4 flex">
              <button className="bg-blue-500 text-white px-6 py-2 rounded-l-full hover:bg-blue-600">Left</button>
              <button className="bg-blue-100 text-blue-600 px-6 py-2 rounded-r-full hover:bg-blue-200">Right</button>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}