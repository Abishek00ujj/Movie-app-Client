import React, { useState, useRef } from "react";
import { Rocket, Globe, Server } from "lucide-react";
import { Button } from "../components/button";
import { motion } from "framer-motion";

const demoMovie = {
  imdbId: "tt6443346",
  title: "Black Adam",
  releaseDate: "2022-10-19",
  trailerLink: "https://www.youtube.com/watch?v=JaV7mmc9HGw",
  poster: "https://image.tmdb.org/t/p/w500/pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg",
  genres: ["Fantasy", "Action", "Science Fiction"],
  backdrops: [
    "https://image.tmdb.org/t/p/original/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg",
    "https://image.tmdb.org/t/p/original/zplntIhzXyBiXFYWReETxh0uyFF.jpg",
  ],
};

const apiBaseUrl = "https://movie-api-spring-boot-3.onrender.com/api/v1/movies";

const usageSnippets = {
  "Node.js": `// Using fetch in Node.js (requires node-fetch package)
import fetch from 'node-fetch';

async function fetchMovies() {
  const res = await fetch('${apiBaseUrl}');
  const data = await res.json();
  console.log(data);
}

fetchMovies();`,
  Java: `// Using Java with HttpClient (Java 11+)
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

public class ApiExample {
  public static void main(String[] args) throws Exception {
    HttpClient client = HttpClient.newHttpClient();
    HttpRequest request = HttpRequest.newBuilder()
      .uri(URI.create("${apiBaseUrl}"))
      .build();

    HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
    System.out.println(response.body());
  }
}`,
  Django: `# Using requests in Python (for Django or general)
import requests

response = requests.get("${apiBaseUrl}")
print(response.json())`,
  PHP: `<?php
// Using file_get_contents
$response = file_get_contents('${apiBaseUrl}');
$data = json_decode($response, true);
print_r($data);
?>`,
  Go: `// Using Go net/http package
package main

import (
  "fmt"
  "io/ioutil"
  "net/http"
)

func main() {
  resp, err := http.Get("${apiBaseUrl}")
  if err != nil {
    panic(err)
  }
  defer resp.Body.Close()

  body, _ := ioutil.ReadAll(resp.Body)
  fmt.Println(string(body))
}`,
};

export default function ApiPromoPage() {
  const [selectedLang, setSelectedLang] = useState("Node.js");
  const apiBoxRef = useRef(null);

  const getYouTubeEmbedUrl = (url) => {
    const videoId = new URL(url).searchParams.get("v");
    return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`;
  };

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
  };

  const handleStartClick = () => {
    apiBoxRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-900 via-slate-900 to-black text-white flex flex-col items-center p-6">
      <div className="max-w-5xl w-full text-center space-y-14">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold leading-tight">🎬 Movie API for Everyone</h1>
          <p className="mt-4 text-lg text-gray-300">
            A blazing fast Spring Boot API to fetch movie data — <br />
            100% free, public, and ready to use in your projects.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left"
        >
          <FeatureCard
            icon={<Globe className="text-cyan-400 mb-3" size={30} />}
            title="Open & Free"
            desc="No API keys, no authentication — just plug and play."
          />
          <FeatureCard
            icon={<Server className="text-emerald-400 mb-3" size={30} />}
            title="Hosted on Render"
            desc="Always-on deployment so your frontend never breaks."
          />
          <FeatureCard
            icon={<Rocket className="text-pink-400 mb-3" size={30} />}
            title="Built with Java Spring Boot"
            desc="Fast, scalable, and production-grade backend technology."
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          <Button
            className="bg-gradient-to-r from-pink-500 to-violet-500 text-white px-6 py-3 text-lg font-semibold rounded-full hover:scale-105 transition transform"
            onClick={() => {
              handleStartClick();
            }}
          >
            Start Using API ➜
          </Button>
          <p className="mt-2 text-sm text-gray-400">
            Endpoints:
            <code className="bg-gray-800 px-2 py-1 rounded ml-2">/api/v1/movies</code>,
            <code className="bg-gray-800 px-2 py-1 rounded ml-2">
              /api/v1/movies/&lt;imdbId&gt;
            </code>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="bg-white/5 p-6 rounded-2xl backdrop-blur-md border border-white/10 max-w-4xl mx-auto text-left space-y-6"
        >
          <h2 className="text-2xl font-semibold">🔥 Demo Movie: {demoMovie.title}</h2>
          <div className="flex flex-col md:flex-row items-start gap-6">
            <img
              src={demoMovie.poster}
              alt="poster"
              className="w-44 rounded-lg shadow-md"
            />
            <div className="space-y-1 text-sm">
              <p>
                <span className="text-gray-400">IMDB ID:</span> {demoMovie.imdbId}
              </p>
              <p>
                <span className="text-gray-400">Release:</span> {demoMovie.releaseDate}
              </p>
              <p>
                <span className="text-gray-400">Genres:</span>{" "}
                {demoMovie.genres.join(", ")}
              </p>
              <div className="mt-4">
                <p className="mb-2 text-gray-400">🎞️ Watch Trailer:</p>
                <div className="w-full max-w-sm aspect-video border border-gray-700 rounded-lg overflow-hidden">
                  <iframe
                    src={getYouTubeEmbedUrl(demoMovie.trailerLink)}
                    title="YouTube Trailer"
                    className="w-full h-full"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>

          {/* JSON STRUCTURE */}
          <div>
            <h3 className="text-lg font-semibold mt-6 mb-2">📦 Sample JSON Response</h3>
            <pre className="bg-black/80 text-sm p-4 rounded-xl text-green-200 overflow-auto max-h-80 whitespace-pre-wrap text-left">
              {JSON.stringify(demoMovie, null, 2)}
            </pre>
          </div>
        </motion.div>
      </div>

      {/* API usage box */}
      <motion.div
        ref={apiBoxRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-16 w-full max-w-5xl bg-white rounded-2xl p-6 shadow-lg text-gray-900"
      >
        <h3 className="text-xl font-semibold mb-3">🛠️ API Base URL</h3>
        <div className="flex items-center bg-gray-100 rounded-md p-3 mb-6">
          <code className="flex-1 font-mono text-sm select-all">{apiBaseUrl}</code>
          <button
            onClick={() => handleCopy(apiBaseUrl)}
            className="ml-3 px-3 py-1 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
            aria-label="Copy API URL"
          >
            Copy
          </button>
        </div>

        {/* Language tabs */}
        <div className="flex gap-4 border-b border-gray-300 mb-4">
          {Object.keys(usageSnippets).map((lang) => (
            <button
              key={lang}
              onClick={() => setSelectedLang(lang)}
              className={`py-2 px-4 font-semibold rounded-t-lg ${
                selectedLang === lang
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              } transition`}
            >
              {lang}
            </button>
          ))}
        </div>

        {/* Usage code snippet */}
        <div className="relative">
          <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-auto whitespace-pre-wrap max-h-64 font-mono text-sm">
            {usageSnippets[selectedLang]}
          </pre>
          <button
            onClick={() => handleCopy(usageSnippets[selectedLang])}
            className="absolute top-2 right-2 bg-indigo-600 text-white px-3 py-1 rounded-md hover:bg-indigo-700 transition text-sm"
            aria-label="Copy code snippet"
          >
            Copy Code
          </button>
        </div>

        <p className="mt-4 text-gray-700 text-sm">
          Use the above code snippet in your {selectedLang} project to fetch data from the Movie API.
        </p>
      </motion.div>

      <footer className="pt-6 border-t border-white/10 text-gray-500 text-sm mt-12 max-w-5xl w-full text-center">
        Made with ❤️ by <span className="text-blue-400"><a href="https://codewithabi.vercel.app">Abishek</a></span> — Open Source Forever
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, desc }) {
  return (
    <div className="bg-white/5 p-6 rounded-2xl backdrop-blur-md border border-white/10">
      {icon}
      <h2 className="text-xl font-semibold mb-1">{title}</h2>
      <p className="text-gray-300 text-sm">{desc}</p>
    </div>
  );
}
