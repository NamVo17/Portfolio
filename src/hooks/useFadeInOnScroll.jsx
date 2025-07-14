import { useEffect, useState } from 'react';

const useFadeInOnScroll = (sectionIds = []) => {
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      { threshold: 0.1 }
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [sectionIds]);

  const fadeInUpClass = (elementId) =>
    `transition-all duration-1000 transform ${
      isVisible[elementId] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
    }`;

  return fadeInUpClass;
};

export default useFadeInOnScroll; 