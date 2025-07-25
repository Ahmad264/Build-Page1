import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import MidProjectCard from "./MidProjectCard";

const MidLevelProjectsAnimatedLayout = ({ projects, setShowPopup }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  // Responsive: detect mobile
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (isMobile) {
    // 2 cards per row on mobile, animate right card in each row
    return (
      <div ref={targetRef} className="grid grid-cols-2 gap-3 lg:hidden">
        {projects.map((project, idx) => (
          <motion.div
            key={project.id}
            style={idx % 2 === 1 ? { y: translateY } : {}}
            className="h-full"
          >
            <MidProjectCard project={project} setShowPopup={setShowPopup} />
          </motion.div>
        ))}
      </div>
    );
  }

  // Desktop: 3 columns with square cards, animate only column 2
  const col1 = [projects[0], projects[3], projects[6]].filter(Boolean);
  const col2 = [projects[1], projects[4], projects[7]].filter(Boolean);
  const col3 = [projects[2], projects[5], projects[8]].filter(Boolean);

  return (
    <div ref={targetRef} className="w-full max-w-6xl mx-auto hidden lg:block">
      <div className="grid grid-cols-3 gap-6">
        {/* Column 1 (fixed) */}
        <div className="space-y-6">
          {col1.map((project) => (
            <div key={project.id}>
              <MidProjectCard project={project} setShowPopup={setShowPopup} />
            </div>
          ))}
        </div>
        {/* Column 2 (animated) */}
        <div className="space-y-6">
          {col2.map((project) => (
            <motion.div
              key={project.id}
              style={{ y: translateY }}
              className="will-change-transform"
            >
              <MidProjectCard project={project} setShowPopup={setShowPopup} />
            </motion.div>
          ))}
        </div>
        {/* Column 3 (fixed) */}
        <div className="space-y-6">
          {col3.map((project) => (
            <div key={project.id}>
              <MidProjectCard project={project} setShowPopup={setShowPopup} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MidLevelProjectsAnimatedLayout;
