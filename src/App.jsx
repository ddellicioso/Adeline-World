import React, { useLayoutEffect } from 'react';
import {
  Routes,
  Route,
  BrowserRouter as Router,
  useLocation,
  Navigate
} from "react-router-dom";
import WorksPage from "./pages/WorksPage";
import WorkDetailPage from "./pages/WorkDetailPage";
import ProjectDetailPage from './components/ProjectDetailPage';

const ResetScroll = ({ children }) => {
  const pathName = useLocation();

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathName.pathname]);

  return children;
};

const App = () => {
  return (
    <Router>
      <ResetScroll>
        <Routes>
          {/* Redirect from "/" to "/WorksPage/all" */}
          <Route path="/" element={<Navigate to="/WorksPage/LearningOutcomeOne" replace />} />
          
          <Route path="/WorksPage/:outcome" element={<WorksPage />} />
          <Route
            path="/WorksPage/:outcome/WorkDetailPage/:url"
            element={<WorkDetailPage />}
          />
          <Route path="/:url" element={<ProjectDetailPage />} />
        </Routes>
      </ResetScroll>
    </Router>
  );
};

export default App;
