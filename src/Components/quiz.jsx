import { useState } from "react";

export const Quiz = () => {
  const [answers, setAnswers] = useState({
    favoriteEra: "",
    favoriteSong: "",
    seenLive: ""
  });

  const [submitted, setSubmitted] = useState(false);

  // Hantera ändringar i input/select
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAnswers((prev) => ({ ...prev, [name]: value }));
  };

  // Era-alternativ
  const eras = ["80s", "90s", "2000s"];

  return (
    <div className="max-w-md mx-auto p-4">
      {!submitted ? (
        <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
          {/* Fråga 1: Favorit era */}
          <div className="mb-4">
            <label className="font-semibold block mb-2">Vilken era föredrar du?</label>
            {eras.map((era) => (
              <label key={era} className="block">
                <input
                  type="radio"
                  name="favoriteEra"
                  value={era}
                  checked={answers.favoriteEra === era}
                  onChange={handleChange}
                  required
                  className="mr-2"
                />
                {era}
              </label>
            ))}
          </div>

          {/* Fråga 2: Favoritlåt */}
          <div className="mb-4">
            <label className="font-semibold block mb-2">Välj en favoritlåt</label>
            <select
              name="favoriteSong"
              value={answers.favoriteSong}
              onChange={handleChange}
              className="w-full border rounded-lg p-2"
              required
            >
              <option value="">-- Välj låt --</option>
              <option value="Love Story">Love Story</option>
              <option value="Cruel Summer">Cruel Summer</option>
              <option value="Cardigan">Cardigan</option>
              <option value="All Too Well (10 Minute Version)">All Too Well (10 Minute Version)</option>
              <option value="Anti-Hero">Anti-Hero</option>
            </select>
          </div>

          {/* Fråga 3: Sett live */}
          <div className="mb-4">
            <label className="font-semibold block mb-2">Har du sett Taylor live?</label>
            <select
              name="seenLive"
              value={answers.seenLive}
              onChange={handleChange}
              className="w-full border rounded-lg p-2"
              required
            >
              <option value="">-- Välj --</option>
              <option value="Ja">Ja</option>
              <option value="Nej">Nej</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-pink-600 text-white py-2 rounded-xl hover:bg-pink-700 transition"
          >
            Skicka in
          </button>
        </form>
      ) : (
        <div className="text-center space-y-4">
          <h2 className="text-xl font-bold text-pink-700">Tack för dina svar!</h2>
          <p><strong>Favoritera:</strong> {answers.favoriteEra}</p>
          <p><strong>Favoritlåt:</strong> {answers.favoriteSong}</p>
          <p><strong>Sett live:</strong> {answers.seenLive}</p>
          <button
            onClick={() => setSubmitted(false)}
            className="mt-4 bg-pink-600 text-white py-2 px-4 rounded-xl hover:bg-pink-700 transition"
          >
            Gör om quizet
          </button>
        </div>
      )}
    </div>
  );
};
