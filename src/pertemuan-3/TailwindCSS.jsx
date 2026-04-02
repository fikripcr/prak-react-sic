// export default function TailwindCSS() {
//   return (
//     <div>
//       <h1 className="border m-4">Belajar Tailwind</h1>
//       <button className="bg-blue-500 text-white px-4 py2 mx-4 rounded shadow-lg">
//         Click Me
//       </button>
//       <Spacing />
//       <Typography />
//       <BorderRadius />
//       <BackgroundColors />
//       <FlexboxGrid />
//       <ShadowEffects />
//     </div>
//   );
// }

// function Spacing(){
//     return (
//         <div className="bg-red-200 shadow-lg p-6 m-4 rounded-lg">
//             <h2 className="text-lg font-semibold">Card Title</h2>
//             <p className="mt-2 text-gray-600">Ini adalah contoh penggunaan padding dan margin di Tailwind.</p>
//         </div>
//     )
// }

// function Typography(){
//     return (
//         <div>
//             <h1 className="text-3xl font-bold text-blue-600">Tailwind Typography</h1>
//             <p className="text-gray-600 text-lg mt-2">Belajar Tailwind sangat menyenangkan dan cepat!</p>
//         </div>
//     )
// }

// function BorderRadius(){
//     return (
//         <button className="border-4 border-blue-500 text-blue-500 px-4 py-2 rounded-full"> Klik Saya </button>
//     )
// }

// function BackgroundColors(){
//     return(
//         <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white p-6 rounded-lg shadow-lg">
//             <h3 className="text-xl font-bold">Tailwind Colors</h3>
//             <p className="mt-2">Belajar Tailwind itu seru dan fleksibel!</p>
//         </div>
//     )
// }

// function FlexboxGrid(){
//     return (
//         <nav className="flex justify-between bg-gray-800 p-4 text-white">
//             <h1 className="text-lg font-bold">MyWebsite</h1>
//             <ul className="flex space-x-4 ">
//                 <li><a href="#">Home</a></li>
//                 <li><a href="#">About</a></li>
//                 <li><a href="#">Contact</a></li>
//             </ul>
//         </nav>
//     )
// }

// function ShadowEffects(){
//     return (
//         <div className="bg-white shadow-lg p-6 rounded-lg hover:shadow-2xl transition">
//             <h3 className="text-xl font-semibold">Hover me!</h3>
//             <p className="text-gray-600 mt-2">Lihat efek bayangan saat hover.</p>
//         </div>
//     )
// }


import React from 'react';

export default function TailwindCSS() {
  return (
    // Membungkus seluruh halaman dengan background abu-abu terang agar shadow terlihat jelas
    <div className="min-h-screen bg-gray-100 font-sans pb-10">
      
      {/* 1. Menggunakan FlexboxGrid sebagai Navbar di bagian atas */}
      <FlexboxGrid />

      {/* Kontainer utama untuk mengatur jarak konten ke tengah layar */}
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        
        {/* 2. Menggunakan Typography sebagai Header Halaman */}
        <div className="mb-8 text-center">
          <Typography />
        </div>

        {/* 3. Menggunakan BackgroundColors sebagai Hero Banner */}
        <div className="mb-8">
          <BackgroundColors />
        </div>

        {/* Menerapkan Grid CSS bawaan Tailwind untuk merapikan Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {/* 4. Menggunakan Spacing Component */}
          <Spacing />
          
          {/* 5. Menggunakan ShadowEffects Component */}
          <ShadowEffects />
        </div>

        {/* 6. Menggunakan BorderRadius sebagai tombol Call-to-Action di tengah bawah */}
        <div className="mt-12 flex flex-col items-center justify-center space-y-4">
          <p className="text-gray-500 text-sm">Sudah siap mencoba?</p>
          <BorderRadius />
        </div>

      </main>
    </div>
  );
}

// --- Kumpulan Function Component di bawah ini tetap sama persis seperti milikmu ---

function Spacing() {
  return (
    <div className="bg-red-200 shadow-lg p-6 m-4 md:m-0 rounded-lg">
      <h2 className="text-lg font-semibold">Card Title</h2>
      <p className="mt-2 text-gray-600">Ini adalah contoh penggunaan padding dan margin di Tailwind.</p>
    </div>
  );
}

function Typography() {
  return (
    <div>
      <h1 className="text-4xl font-extrabold text-blue-600 tracking-tight">Tailwind Typography</h1>
      <p className="text-gray-600 text-lg mt-2">Belajar Tailwind sangat menyenangkan dan cepat!</p>
    </div>
  );
}

function BorderRadius() {
  return (
    <button className="border-4 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition px-8 py-3 rounded-full font-bold shadow-md">
      Klik Saya
    </button>
  );
}

function BackgroundColors() {
  return (
    <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white p-8 rounded-xl shadow-lg transform hover:scale-[1.02] transition-transform duration-300">
      <h3 className="text-2xl font-bold">Tailwind Colors & Gradients</h3>
      <p className="mt-2 text-lg">Belajar Tailwind itu seru dan fleksibel! Ini adalah contoh gradasi.</p>
    </div>
  );
}

function FlexboxGrid() {
  return (
    <nav className="flex items-center justify-between bg-gray-800 p-4 text-white shadow-md sticky top-0 z-10">
      <h1 className="text-xl font-bold tracking-wider">MyWebsite</h1>
      <ul className="flex space-x-6 font-medium">
        <li><a href="#" className="hover:text-blue-300 transition">Home</a></li>
        <li><a href="#" className="hover:text-blue-300 transition">About</a></li>
        <li><a href="#" className="hover:text-blue-300 transition">Contact</a></li>
      </ul>
    </nav>
  );
}

function ShadowEffects() {
  return (
    <div className="bg-white shadow-lg p-6 rounded-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer border border-gray-100">
      <h3 className="text-xl font-semibold text-gray-800">Hover me!</h3>
      <p className="text-gray-600 mt-2">Lihat efek bayangan saat kursor diarahkan ke sini (hover state).</p>
    </div>
  );
}