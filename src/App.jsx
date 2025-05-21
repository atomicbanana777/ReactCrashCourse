import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import JobsPage from "./pages/JobsPage";
import JobPage, {JobLoader} from "./pages/JobPage";
import AddJobPage from "./pages/AddJobPage";
import EditJobPage from "./pages/EditJobPage";
import NotFound from "./pages/NotFound";
import { toast } from 'react-toastify';

const App = () =>{

  const submitJob = async (newJob) => {
    try {
      const res = await fetch('/api/jobs', {
            method : 'POST',
            headers : {'Content-Type' : 'application/json'},
            body : JSON.stringify(newJob)
        });
      
      if(res.ok) {
        toast.success('Job added successfully');
      }
    } catch (error) {
      toast.error('Error occur when adding job, please check console');
      console.log('Error when adding job...', error);
    }
    return;
  }

  const deleteJob = async (id) => {
    try{
      const res = await fetch(`/api/jobs/${id}`, {
                method : 'DELETE'
            });
      
      if(res.ok) {
        toast.success('Job deleted successfully');
      }
    } catch (error) {
      toast.error('Error occur when deleting job, please check console');
      console.log('Error when deleting job...', error);
    } 
    return;
  }

  const editJob = async (updatedJob) => {
   try {
      const res = await fetch(`/api/jobs/${updatedJob.id}`, {
            method : 'PUT',
            headers : {'Content-Type' : 'application/json'},
            body : JSON.stringify(updatedJob)
        });
      
      if(res.ok) {
        toast.success('Job updated successfully');
      }
    } catch (error) {
      toast.error('Error occur when updating job, please check console');
      console.log('Error when updating job...', error);
    }
    return;
  }

  const router = createBrowserRouter(
    [ 
      {
        element : <MainLayout />,
        children : [
          {index: true, element: <HomePage />},
          {path: "jobs", element: <JobsPage />},
          {path: "jobs/:id", element: <JobPage deleteMethod={deleteJob}/>, loader : JobLoader},
          {path: "edit/:id", element: <EditJobPage editMethod={editJob}/>, loader : JobLoader},
          {path: "add-job", element: <AddJobPage addJobMethod={submitJob}/>},
          
          {path: "*", element: <NotFound />}
        ]
      }
    ]
  );

  return (
    <RouterProvider router={router} />
  );
};

export default App;

