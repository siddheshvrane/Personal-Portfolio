import React, { useState, useRef, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import BentoGrid from './components/BentoGrid';
import Contact from './components/Contact';
import Footer from './components/Footer';
import StickyMusicPlayer from './components/StickyMusicPlayer';
import Journey from './components/Journey';
import songAudio from './assets/Post Malone, Swae Lee - Sunflower (Spider-Man_ Into the Spider-Verse) (Official Video).mp3';

export default function App() {
  // Global Audio State
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(new Audio(songAudio));

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

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(e => console.error("Playback failed:", e));
    }
    setIsPlaying(!isPlaying);
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
        />
        <Projects />
        <BentoGrid />
        <Journey />
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
      />
    </div>
  )
}
