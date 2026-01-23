import React, { useState, useRef, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import BentoGrid from './components/BentoGrid';
import Contact from './components/Contact';
import Footer from './components/Footer';
import StickyMusicPlayer from './components/StickyMusicPlayer';
import Journey from './components/Journey';
import Extras from './components/Extras';
import songAudio from './assets/Post Malone, Swae Lee - Sunflower (Spider-Man_ Into the Spider-Verse) (Official Video).mp3';
import songBanner from './assets/Song_banner.jpg'; // Import default banner here

export default function App() {
  // Default Song Data
  const defaultSong = {
    title: "Sunflower",
    artist: "Post Malone, Swae Lee",
    cover: songBanner,
    src: songAudio
  };

  // Global Audio State
  const [currentSong, setCurrentSong] = useState(defaultSong);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  // Use a ref to keep track of the current audio element
  const audioRef = useRef(new Audio(defaultSong.src));

  // Audio Logic
  useEffect(() => {
    const audio = audioRef.current;

    const setAudioData = () => {
      setDuration(audio.duration);
      setCurrentTime(audio.currentTime);
    }

    const setAudioTime = () => setCurrentTime(audio.currentTime);
    const handleEnded = () => setIsPlaying(false);

    // Events
    audio.addEventListener('loadeddata', setAudioData);
    audio.addEventListener('timeupdate', setAudioTime);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('loadeddata', setAudioData);
      audio.removeEventListener('timeupdate', setAudioTime);
      audio.removeEventListener('ended', handleEnded);
      audio.pause();
    }
  }, []);

  // Handle changing song source when currentSong changes (if needed manually, but we do it in handlePlaySong)
  // We don't need a useEffect for src change because we do it imperatively in handlePlaySong to avoid auto-play issues or race conditions

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(e => console.error("Playback failed:", e));
    }
    setIsPlaying(!isPlaying);
  };

  const handlePlaySong = (newSong) => {
    if (currentSong.src === newSong.src) {
      togglePlay();
      return;
    }

    // Change song
    audioRef.current.src = newSong.src;
    audioRef.current.load();
    setCurrentSong(newSong);

    audioRef.current.play().then(() => {
      setIsPlaying(true);
    }).catch(e => console.error("Playback failed:", e));
  };

  const handleSeek = (time) => {
    audioRef.current.currentTime = time;
    setCurrentTime(time);
  };

  return (
    <div className="bg-off-white min-h-screen relative">
      <Navbar />
      <main className="pt-20">
        <Hero
          isPlaying={isPlaying}
          onToggle={togglePlay}
          currentSong={currentSong}
        />
        <Projects />
        <BentoGrid />
        <Journey />
        <Extras onPlaySong={handlePlaySong} currentSong={currentSong} isPlaying={isPlaying} />
        <Contact />
      </main>
      <Footer />

      {/* Global Music Player */}
      <StickyMusicPlayer
        isPlaying={isPlaying}
        onToggle={togglePlay}
        currentTime={currentTime}
        duration={duration}
        onSeek={handleSeek}
        currentSong={currentSong}
      />
    </div>
  )
}
