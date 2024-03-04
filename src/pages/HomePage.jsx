 
import useProjects from '../hooks/use-projects';  
import ProjectCard from '../components/ProjectCard'; 
import PageDesign from '../components/PageDesign';
import  '../index.css';   



function HomePage() {
    const {projects} = useProjects();
    const sortProjects = projects.slice().sort((a, b) => { new Date(b.created_at) - new Date(a.created_at) });


  return (
    <PageDesign>
      <div className='flex flex-col items-center justify-center py-6'>
        <h1 className='text-4xl font-bold text-center'>Projects</h1>
        <div className='flex flex-wrap justify-center'>
          {sortProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </PageDesign>
  );
}   
export default HomePage;