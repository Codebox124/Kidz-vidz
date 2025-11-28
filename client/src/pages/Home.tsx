import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Music, BookOpen, BookMarked } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [hoveredPlaylist, setHoveredPlaylist] = useState<string | null>(null);

  const playlists = [
    {
      id: "songs",
      title: "SONGS",
      description: "Catchy music and educational songs for kids",
      icon: Music,
      image: "/hero-songs.jpg",
      color: "from-pink-400 to-yellow-300",
      textColor: "text-pink-600",
      videos: [
        "Months Song",
        "Foods Song",
        "Planets Song",
        "Fruits Song",
        "Days Song",
        "Animals Song",
        "Colors Song",
        "Shapes Song",
        "Letters Song (ABCs)",
        "Counting Song (Numbers 1-10)",
      ],
    },
    {
      id: "lessons",
      title: "LESSONS",
      description: "Educational content to help kids learn",
      icon: BookOpen,
      image: "/hero-lessons.jpg",
      color: "from-blue-400 to-green-300",
      textColor: "text-blue-600",
      videos: [
        "ABC Learning",
        "Number Basics",
        "Color Recognition",
        "Shape Learning",
        "Days & Months",
        "Seasons",
      ],
    },
    {
      id: "stories",
      title: "STORIES",
      description: "Magical stories and adventures for imagination",
      icon: BookMarked,
      image: "/hero-stories.jpg",
      color: "from-purple-400 to-pink-300",
      textColor: "text-purple-600",
      videos: [
        "Fairy Tales",
        "Adventure Stories",
        "Bedtime Stories",
        "Fantasy Adventures",
        "Character Tales",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-blue-100 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-pink-400 via-yellow-300 to-blue-400 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
              K
            </div>
            <div>
              <h1 className="text-2xl font-fredoka font-bold bg-gradient-to-r from-pink-500 via-yellow-500 to-blue-500 bg-clip-text text-transparent">
                Kidz-Vidz
              </h1>
              <p className="text-xs text-gray-600 font-comfortaa">
                Fun Learning for Kids
              </p>
            </div>
          </div>
          <Button
            className="bg-gradient-to-r from-pink-500 to-orange-400 hover:from-pink-600 hover:to-orange-500 text-white font-fredoka font-bold rounded-full px-6 shadow-lg hover:shadow-xl transition-all"
            onClick={() =>
              window.open("https://youtube.com/@kidsvids321", "_blank")
            }
          >
            Subscribe on YouTube
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-fredoka font-bold mb-4 text-gray-800">
            Welcome to Kidz-Vidz! 🎉
          </h2>
          <p className="text-lg md:text-xl text-gray-600 font-comfortaa max-w-2xl mx-auto">
            Explore our amazing collection of educational songs, fun lessons,
            and magical stories designed just for you!
          </p>
        </div>

        {/* Playlists Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {playlists.map((playlist) => {
            const Icon = playlist.icon;
            const isHovered = hoveredPlaylist === playlist.id;

            return (
              <Card
                key={playlist.id}
                className="overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group"
                onMouseEnter={() => setHoveredPlaylist(playlist.id)}
                onMouseLeave={() => setHoveredPlaylist(null)}
              >
                {/* Image Section */}
                <div className="relative h-48 md:h-56 overflow-hidden bg-gray-200">
                  <img
                    src={playlist.image}
                    alt={playlist.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-b ${playlist.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                  />
                </div>

                {/* Content Section */}
                <div className="p-6 bg-white">
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className={`p-3 rounded-full bg-gradient-to-br ${playlist.color} shadow-md`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3
                      className={`text-2xl font-fredoka font-bold ${playlist.textColor}`}
                    >
                      {playlist.title}
                    </h3>
                  </div>

                  <p className="text-gray-600 font-comfortaa mb-4 text-sm">
                    {playlist.description}
                  </p>

                  {/* Sample Videos */}
                  {isHovered && (
                    <div className="mb-4 p-3 bg-blue-50 rounded-lg border border-blue-200 animate-in fade-in duration-200">
                      <p className="text-xs font-fredoka font-bold text-blue-900 mb-2">
                        Featured Videos:
                      </p>
                      <ul className="text-xs text-gray-700 space-y-1">
                        {playlist.videos.slice(0, 3).map((video, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-pink-500 font-bold">•</span>
                            <span>{video}</span>
                          </li>
                        ))}
                        {playlist.videos.length > 3 && (
                          <li className="text-gray-500 italic">
                            + {playlist.videos.length - 3} more videos
                          </li>
                        )}
                      </ul>
                    </div>
                  )}

                  <Button
                    className={`w-full font-fredoka font-bold rounded-full bg-gradient-to-r ${playlist.color} text-white hover:shadow-lg transition-all hover:scale-105`}
                    onClick={() =>
                      window.open("https://youtube.com/@kidsvids321", "_blank")
                    }
                  >
                    Watch Now →
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl md:text-4xl font-fredoka font-bold text-white text-center mb-12">
            Why Kids Love Kidz-Vidz ✨
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "🎵 Educational Songs",
                description:
                  "Learn through music with catchy tunes about numbers, letters, colors, and more!",
              },
              {
                title: "📚 Fun Lessons",
                description:
                  "Engaging educational content that makes learning enjoyable and easy to understand.",
              },
              {
                title: "🌟 Magical Stories",
                description:
                  "Inspiring stories that spark imagination and creativity in young minds.",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center"
              >
                <p className="text-2xl mb-3">{feature.title}</p>
                <p className="text-gray-700 font-comfortaa text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="bg-gradient-to-r from-yellow-300 via-pink-300 to-blue-300 rounded-3xl p-8 md:p-12 text-center shadow-2xl">
          <h3 className="text-3xl md:text-4xl font-fredoka font-bold text-gray-800 mb-4">
            Ready for More Fun? 🚀
          </h3>
          <p className="text-gray-700 font-comfortaa text-lg mb-8 max-w-2xl mx-auto">
            Subscribe to our YouTube channel to get new videos every week!
          </p>
          <Button
            className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-fredoka font-bold text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
            onClick={() =>
              window.open("https://youtube.com/@kidsvids321", "_blank")
            }
          >
            Subscribe Now on YouTube ❤️
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="font-fredoka font-bold mb-2">
            © 2025 Kidz-Vidz. All rights reserved.
          </p>
          <p className="text-gray-400 font-comfortaa text-sm">
            Making learning fun, one video at a time! 🎉
          </p>
        </div>
      </footer>
    </div>
  );
}
