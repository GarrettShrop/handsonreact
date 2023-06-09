import React, { useEffect } from 'react';
import ProjectDetail from './ProjectDetail';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../state';
import { loadProjects } from './state/projectActions';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { ProjectState } from './state/projectTypes';

function ProjectPage(props: any) {
  

  const loading = useSelector(
        (appState: AppState) => appState.projectState.loading
  );
  const error = useSelector(
        (appState: AppState) => appState.projectState.error
  );



  const dispatch = useDispatch<ThunkDispatch<ProjectState, any, AnyAction>>();


  useEffect(() => {
    dispatch(loadProjects(1));
  }, [dispatch]);

  return (
    <div>
      <>
        <h1>Project Detail</h1>

        {loading && (
          <div className="center-page">
            <span className="spinner primary"></span>
            <p>Loading...</p>
          </div>
        )}

        {error && (
          <div className="row">
            <div className="card large error">
              <section>
                <p>
                  <span className="icon-alert inverse "></span> {error}
                </p>
              </section>
            </div>
          </div>
        )}

        {project && <ProjectDetail project={project} />}
      </>
    </div>
  );
}

export default ProjectPage;