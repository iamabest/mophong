import { useMemo } from 'react';
import { simulationsByGrade } from './data/simulations.js';
import { AppFooter } from './components/AppFooter.jsx';
import { GradeSection } from './components/GradeSection.jsx';
import { Hero } from './components/Hero.jsx';
import { SimulationPage } from './components/SimulationPage.jsx';
import { SiteHeader } from './components/SiteHeader.jsx';
import PageLayout from './components/PageLayout.jsx';
import SymmetryApp from './simulations/lop6-doi-xung-hinh-phang/SymmetryApp.jsx';


export default function App() {
  const simulationSlug = useMemo(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get('simulation');
  }, []);

  if (simulationSlug) {
    return (
      <PageLayout>
             <SimulationPage slug={simulationSlug} />
      </PageLayout>
    );
  }

  return (
    <>
    <PageLayout>
          <Hero/>
       <div className="grade-container">
          {simulationsByGrade.map((gradeGroup) => (
            <GradeSection key={gradeGroup.id} gradeGroup={gradeGroup} />
          ))}
        </div>
      
        </PageLayout>
    
</>
  );
}
