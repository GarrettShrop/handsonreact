
import { Project } from './Project';
import { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectForm from './ProjectForm';

interface ProjectListProps {
    onSave: (project: Project) => void;
    projects: Project[];
  }

function ProjectList({ projects, onSave }: ProjectListProps){
    const [projectBeingEdited, setProjectBeingEdited] = useState({});
    const handleEdit = (project: Project) => {
        setProjectBeingEdited(project);
    };
    const cancelEditing = () => {
        setProjectBeingEdited({});
    };
    return(
        <div className="row">
            {projects.map((project) => (
                <div key={project.id} className="cols-sm">
                    {project === projectBeingEdited? (
                        <ProjectForm onSave={onSave} onCancel={cancelEditing} />
                    ) : (
                        <ProjectCard project={project} onEdit={handleEdit} />
                    )}
                </div>
            ))}
        </div>
    );
}

export default ProjectList;