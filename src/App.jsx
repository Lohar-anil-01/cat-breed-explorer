import { useEffect, useState, useCallback } from "react";
import Rating from "./components/Rating";
import StatCard from "./components/StatCard";

function App() {
  const [randomCat, setRandomCat] = useState(null);
  const [status, setStatus] = useState("loading");
  const [error, setError] = useState(null);

  const fetchCat = useCallback(async (signal) => {
    try {
      setStatus("loading");
      setError(null);

      const response = await fetch(
        "https://api.freeapi.app/api/v1/public/cats/cat/random",
        { signal },
      );

      if (!response.ok) {
        throw new Error(
          `Failed to fetch: ${response.status} ${response.statusText}`,
        );
      }

      const data = await response.json();

      setRandomCat(data.data);
      setStatus("success");
    } catch (err) {
      if (err.name === "AbortError") return;

      setError(err.message || "Something went wrong.");
      setStatus("error");
    }
  }, []);

  useEffect(() => {
    const controller = new AbortController();

    fetchCat(controller.signal);

    return () => controller.abort();
  }, [fetchCat]);

  const handleRefresh = () => {
    fetchCat();
  };

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl font-semibold">
        Loading Cat Breed...
      </div>
    );
  }

  if (status === "error") {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500 text-xl">
        {error}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-end mb-6">
          <button
            onClick={handleRefresh}
            disabled={status === "loading"}
            className="px-5 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition disabled:opacity-50"
          >
            {status === "loading" ? "Loading..." : "🐱 Get Another Random Cat"}
          </button>
        </div>
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          {/* Hero Section */}
          <div className="relative">
            <img
              src={randomCat.image}
              alt={randomCat.name}
              className="w-full h-100 object-cover"
            />

            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />

            <div className="absolute bottom-0 left-0 p-8 text-white">
              <h1 className="text-5xl font-bold mb-2">{randomCat.name}</h1>

              <div className="flex gap-4 text-lg">
                <span>📍 {randomCat.origin}</span>

                {randomCat.rare === 1 && (
                  <span className="bg-amber-500 px-3 py-1 rounded-full text-sm">
                    Rare Breed
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 space-y-10">
            {/* About */}
            <section>
              <h2 className="text-3xl font-bold mb-4">About the Breed</h2>

              <p className="text-gray-600 leading-8">{randomCat.description}</p>
            </section>

            {/* Stats */}
            <section>
              <h2 className="text-3xl font-bold mb-4">Quick Facts</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <StatCard
                  title="Life Span"
                  value={`${randomCat.life_span} Years`}
                />

                <StatCard
                  title="Weight"
                  value={`${randomCat.weight?.metric} kg`}
                />

                <StatCard title="Origin" value={randomCat.origin} />
              </div>
            </section>

            {/* Ratings */}
            <section>
              <h2 className="text-3xl font-bold mb-6">Characteristics</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <Rating label="Adaptability" value={randomCat.adaptability} />

                <Rating
                  label="Affection Level"
                  value={randomCat.affection_level}
                />

                <Rating label="Intelligence" value={randomCat.intelligence} />

                <Rating label="Energy Level" value={randomCat.energy_level} />

                <Rating label="Dog Friendly" value={randomCat.dog_friendly} />

                <Rating
                  label="Child Friendly"
                  value={randomCat.child_friendly}
                />

                <Rating label="Social Needs" value={randomCat.social_needs} />

                <Rating
                  label="Stranger Friendly"
                  value={randomCat.stranger_friendly}
                />
              </div>
            </section>

            {/* Temperament */}
            <section>
              <h2 className="text-3xl font-bold mb-4">Temperament</h2>

              <div className="flex flex-wrap gap-3">
                {randomCat.temperament?.split(", ").map((trait) => (
                  <span
                    key={trait}
                    className="px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium"
                  >
                    {trait}
                  </span>
                ))}
              </div>
            </section>

            {/* Additional Details */}
            <section>
              <h2 className="text-3xl font-bold mb-4">
                Additional Information
              </h2>

              <div className="grid md:grid-cols-2 gap-4">
                <StatCard title="Country Code" value={randomCat.country_code} />

                <StatCard
                  title="Vocalisation"
                  value={`${randomCat.vocalisation}/5`}
                />

                <StatCard title="Grooming" value={`${randomCat.grooming}/5`} />

                <StatCard
                  title="Shedding"
                  value={`${randomCat.shedding_level}/5`}
                />

                <StatCard
                  title="Health Issues"
                  value={`${randomCat.health_issues}/5`}
                />

                <StatCard
                  title="Hypoallergenic"
                  value={randomCat.hypoallergenic ? "Yes" : "No"}
                />
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
