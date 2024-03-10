import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BackgroundBeams } from './components/BackgroundBeams';
import { TracingBeam } from "@/constants/tracing-beam";
import AppHome from './components/app_home';
import { BentoGridDemo } from './components/app_body_grid';
import { InfiniteMovingCardsDemo } from './components/app_moving_cards';
import Nav from "@/components/Nav";
import { BookNow } from './constants/BookNow';
import { LampDemo } from './components/ui/lamp';
import AppFooter from './components/app_footer';
import  SignupFormDemo  from './components/app_signup';
const App: React.FC = () => {
  return (
    
      <div className='relative'>
        <Router>
        <Nav />
        <BackgroundBeams className='bg-neutral-950 absolute' />
        {/* Main content inside TracingBeam */}
        <TracingBeam>
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/book-now" element={<BookNow />}/>
            <Route path="/sign-up" element={<SignupFormDemo />}/>
          </Routes>
        </TracingBeam>
        </Router>
      </div>
    
  );
}

// Main content of the app (excluding BookNowPageContent)
const MainContent: React.FC = () => {
  return (
    <div>
      <AppHome />
      <LampDemo />
      <BentoGridDemo />
      <InfiniteMovingCardsDemo />
      <AppFooter />
    </div>
  );
}

export default App;
