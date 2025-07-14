const scrollToSection = (sectionId, setMobileMenuOpen) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
  if (setMobileMenuOpen) setMobileMenuOpen(false);
};

export default scrollToSection; 