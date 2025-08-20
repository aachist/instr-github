const { useState } = React;

function App() {
  const [showImages, setShowImages] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white font-sans">
      <h1 className="text-4xl font-bold mb-6 tracking-wide drop-shadow-lg">
       Мой сайт сайт 
      </h1>
      <button
        onClick={() => setShowImages(true)}
        className="px-6 py-3 bg-indigo-600 hover:bg-indigo-800 rounded-2xl shadow-lg transition transform hover:scale-105"
      >
        Нажми меня
      </button>

      {showImages && (
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <img
            src="./assets/cyberpunk-chatgpt.png"
            alt="ChatGPT Cyberpunk"
            className="rounded-2xl shadow-xl border border-gray-700"
          />
          <img
            src="./assets/second-chatgpt.png"
            alt="ChatGPT Second"
            className="rounded-2xl shadow-xl border border-gray-700"
          />
        </div>
      )}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

