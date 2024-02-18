function scrollToSecondSection() {             
   const secondSection = document.getElementById('secondSection');            
   if (secondSection) {                
   secondSection.scrollIntoView({ behavior: 'smooth' });
   }
}

