import React, { useState } from 'react';

const screens = [
  {
    id: 1,
    tag: "MODULE 1 • INTRODUCTION",
    title: "Comprendre l'IA",
    text: "Bienvenue dans ce premier module. Découvrons ensemble ce qu'est réellement l'intelligence artificielle, au-delà des idées reçues et des effets de mode.",
    type: "intro"
  },
  {
    id: 2,
    tag: "SÉQUENCE 1 • ÉCRAN 2",
    title: "Démystifier l'Intelligence Artificielle",
    text: "L'IA n'a pas de conscience propre. C'est un outil mathématique qui calcule des probabilités de mots.",
    highlight: "💡 Idée reçue : 'L'IA comprend ce qu'elle écrit.' -> Réalité : C'est de la modélisation statistique."
  },
  {
    id: 3,
    tag: "SÉQUENCE 1 • ÉCRAN 3",
    title: "Les 3 grandes familles d'IA",
    text: "On distingue généralement trois grandes approches techniques :",
    items: [
      "1. Le Machine Learning (apprentissage statistique à partir de données)",
      "2. Le Deep Learning (réseaux de neurones profonds pour l'image et la voix)",
      "3. Le Traitement du Langage (NLP et modèles génératifs)"
    ]
  }
];

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentScreen = screens[currentIndex];

  const progress = ((currentIndex + 1) / screens.length) * 100;

  const handleNext = () => {
    if (currentIndex < screens.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f1f5f9', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      
      <div style={{ backgroundColor: '#ffffff', width: '100%', maxWidth: '750px', borderRadius: '16px', boxShadow: '0 10px 25px rgba(0,0,0,0.05)', padding: '40px', boxSizing: 'border-box' }}>
        
        <div style={{ width: '100%', backgroundColor: '#e2e8f0', height: '6px', borderRadius: '3px', marginBottom: '30px', overflow: 'hidden' }}>
          <div style={{ width: `${progress}%`, backgroundColor: '#4338ca', height: '100%', transition: 'width 0.4s ease' }}></div>
        </div>

        <span style={{ backgroundColor: '#e0e7ff', color: '#4338ca', padding: '6px 14px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase' }}>
          {currentScreen.tag}
        </span>

        <h1 style={{ fontSize: '2rem', color: '#1e293b', marginTop: '20px', marginBottom: '15px' }}>
          {currentScreen.title}
        </h1>

        <p style={{ fontSize: '1.15rem', color: '#475569', lineHeight: '1.6', marginBottom: '20px' }}>
          {currentScreen.text}
        </p>

        {currentScreen.highlight && (
          <div style={{ backgroundColor: '#f8fafc', borderLeft: '4px solid #4338ca', padding: '16px', borderRadius: '4px', marginBottom: '25px', color: '#334155', fontSize: '1rem' }}>
            {currentScreen.highlight}
          </div>
        )}

        {currentScreen.items && (
          <ul style={{ lineHeight: '1.8', color: '#334155', fontSize: '1.05rem', marginBottom: '25px', paddingLeft: '20px' }}>
            {currentScreen.items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        )}

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '40px', borderTop: '1px solid #f1f5f9', paddingTop: '20px' }}>
          <button 
            onClick={handlePrev} 
            disabled={currentIndex === 0}
            style={{ padding: '10px 20px', backgroundColor: currentIndex === 0 ? '#cbd5e1' : '#f1f5f9', color: currentIndex === 0 ? '#94a3b8' : '#334155', border: 'none', borderRadius: '8px', cursor: currentIndex === 0 ? 'not-allowed' : 'pointer', fontWeight: 'bold' }}>
            ← Précédent
          </button>

          <span style={{ fontSize: '0.9rem', color: '#64748b' }}>
            Écran {currentIndex + 1} sur {screens.length}
          </span>

          <button 
            onClick={handleNext} 
            disabled={currentIndex === screens.length - 1}
            style={{ padding: '10px 20px', backgroundColor: currentIndex === screens.length - 1 ? '#cbd5e1' : '#4338ca', color: '#ffffff', border: 'none', borderRadius: '8px', cursor: currentIndex === screens.length - 1 ? 'not-allowed' : 'pointer', fontWeight: 'bold' }}>
            {currentIndex === screens.length - 1 ? 'Fin du module' : 'Suivant →'}
          </button>
        </div>

      </div>
    </div>
  );
}