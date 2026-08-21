export default function App() {
  return (
    <div style={{ padding: '40px 20px', fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '0 auto', textAlign: 'left', color: '#1e293b' }}>
      <span style={{ backgroundColor: '#e0e7ff', color: '#4338ca', padding: '6px 12px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 'bold' }}>
        SÉQUENCE 1 • ÉCRAN 2
      </span>
      
      <h1 style={{ fontSize: '2rem', marginTop: '20px', marginBottom: '15px' }}>
        Démystifier l'Intelligence Artificielle
      </h1>
      
      <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: '1.6', marginBottom: '20px' }}>
        <strong>Objectif :</strong> Expliquer ce qu'est l'IA en termes simples et distinguer les faits des idées reçues.
      </p>

      <div style={{ backgroundColor: '#f8fafc', borderLeft: '4px solid #4338ca', padding: '20px', borderRadius: '4px', marginBottom: '25px' }}>
        <h3 style={{ margin: '0 0 10px 0', color: '#334155' }}>💡 Idée reçue vs Réalité</h3>
        <p style={{ margin: 0, color: '#64748b', lineHeight: '1.5' }}>
          <strong>Idée reçue :</strong> "L'IA comprend ce qu'elle écrit et possède une conscience."<br />
          <strong>Réalité :</strong> L'IA est un outil mathématique qui calcule des probabilités de mots, sans intention ni conscience propre.
        </p>
      </div>

      <button style={{ padding: '12px 24px', backgroundColor: '#4338ca', color: '#ffffff', border: 'none', borderRadius: '8px', cursor: 'pointer', fontSize: '1rem', fontWeight: 'bold' }}>
        Continuer vers les familles d'IA →
      </button>
    </div>
  );
}