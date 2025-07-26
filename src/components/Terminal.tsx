"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LINES = [
  "📦 Expertise automatisme industriel",
  "🧠 Supervision & IA embarquée",
  "🌐 Interfaces Homme-Machine modernes",
  "🔒 Cybersécurité & réseaux industriels",
  "⚙️ Optimisation & maintenance prédictive",
];

export default function Terminal() {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [loadingDone, setLoadingDone] = useState(false);
  const [showTerminal, setShowTerminal] = useState(true);
  const [hideProgress, setHideProgress] = useState(false);

  useEffect(() => {
    let lineIndex = 0;

    const interval = setInterval(() => {
      if (lineIndex < LINES.length) {
        setDisplayedLines((prev) => [...prev, LINES[lineIndex]]);
        lineIndex++;
      } else {
        clearInterval(interval);
        setLoadingDone(true);

        // Masquer la progress bar après 3s
        setTimeout(() => {
          setHideProgress(true);
        }, 3000);

        // Masquer le terminal après 5s
        setTimeout(() => {
          setShowTerminal(false);
        }, 5000);
      }
    }, 700);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {showTerminal && (
        <motion.div
          className="bg-gray-900 border border-gray-700 rounded-lg w-full max-w-2xl mx-auto p-4 shadow-lg overflow-hidden"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, height: 0, padding: 0, margin: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="font-mono text-green-400 text-sm space-y-1 min-h-[120px]">
            {displayedLines.map((line, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.2 }}
              >
                {line}
              </motion.div>
            ))}

            {loadingDone && !hideProgress && (
              <div className="text-yellow-400 animate-pulse mt-4">
                ✅ Chargement terminé — Prêt à démarrer.
              </div>
            )}
          </div>

          {!hideProgress && (
            <div className="mt-4">
              <div className="w-full bg-gray-800 h-2 rounded overflow-hidden">
                <motion.div
                  className="bg-yellow-400 h-full"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: LINES.length * 0.7 }}
                />
              </div>
              <div className="text-gray-400 text-xs mt-1 font-mono text-center">
                Chargement des modules...
              </div>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
