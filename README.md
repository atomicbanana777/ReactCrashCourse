# About the project
  - To learn React js
  - following tutorial 
  - study any docuements along the way

# Reference
  - React crash course
    - https://www.youtube.com/watch?v=LDB4uaJ87e0

  - React.dev
    - https://react.dev/
# Note
- React
	- Frontend library/framework created by Facebook
	- Dynamic components
	- THe most popular front-end library/frameworks
	- Virtual DOM (but it changes to use compiler in React19)
	
- Component
	- reusable piece of code
	- break down complexs UI
	- can take props and hold state
	
- State
	- data that component manage

- Hooks
	- allow us to use state and other features 

- JSX
	- is the language used inside React
	- to return html

- SPA, SSR, SSG
	- SPA = Single Page Application
	- SSR = Server Side Rendering
	- SSG = Static Site Generators 

- Vite
	- help building web project
	- it can run as dev server that will watch any update at the source code
	- or it can build deployable files for you to deploy on web server
	
	- to create a vite project
		- e.g.
			```
			npm create vite@latest
			```
	- then you choose framework you want to work with
	- vite will create project for you
		- we choose react + javascript
		
	- after the project created
	- we will see a number of files
		- index.html will be your web page entry point
		- there is src folder when contain react jsx file
		- package.json which contain dependency
		- vite.config.js which contain vite setup
	
	- go to vite.config.js
		- change server port by adding server object with port:3000
		- the reason we do this because the default port(e.g. 8000) may be used by other application
			e.g.
        ```
				// https://vite.dev/config/
				export default defineConfig({
				  plugins: [react()],
				  server: {  //add server object
					port: 3000, //set port to 3000
				  }
				})
	    ```
	
	- install npm package first
		e.g.
			```
			npm install
			```
	
	- then you can run the project out of the box
		- e.g.
			```
			npm run dev
			```
		- we can see package.json
		- there is script dev setup

	- After you execute "npm run dev"
	- Our dev server will be created (localhost:3000)
	- and we can access it and see a default landing page
	
	- to understand how things work
		- we look at index.html
			- there is a div element with id "root"
			- and there is a script element which refer to main.jsx
			
		- we look at main.jsx
			- this is our React application
			- we can see react, react-dom were being imported
			- inside the code
				- we saw createRoot() method
				- a component called <App /> which is come from App.jsx
				- using StrictMode
				
		- look at the App.jsx
			- we can see the jsx script
			- it return html page dynamically
			
		- and that how we can see our default landing page
			
			
			
- clear up
	- clear up App.jsx since we will create our own
	- clear up index.css
	- delete App.css since we will use tailwind

- install tailwind
		
	- google tailwind css install vite
	- we will find
	https://tailwindcss.com/docs/installation/using-vite
			
	- the installation is a little bit different from the video
	- I will just follow the official document since it is the latest
	- After you successfully setup tailwind, you can check if it is effective by 
		using some tailwind class in your code
		e.g.
      ```
			<h1 class="text-3xl font-bold underline">    Hello world!  </h1>
			
			//remember to use className instead of class in jsx
			<h1 className="text-3xl font-bold underline">    Hello world!  </h1>
		```
			
- JSX Crash Course			
			
	- JSX express must have one element
		- There are 2 elements `<div>` and `<h1>` we want to return
		- we need to use `<>` to include both in order to return
		e.g.
			```
			const App = () =>{
			  return <>
					  <div>App</div>
					  <h1 className="text-3xl font-bold underline">    Hello world!  </h1>
					 </>
			};

			export default App;
			```
			
	- Print out variable
		- init a variable 
		- print using {}
		
		e.g. 
		```
		const App = () =>{
		  const name = 'John';
		  return (
			<>
			  <div>App</div>
			  <h1 className="text-3xl font-bold underline">    Hello {name}!  </h1>
			</>
		  );
		};

		export default App;
		```
			
		- it can also be an expression
		
		e.g.
			const x = 10;
			const y = 20;
			
			{x+y}
			
	- create a list
		- using {}
		- to generate `<li>` for each name
		
		e.g
      ```
			const App = () =>{
			  const names = ['Mary', 'Sam', 'Peter'];
			  return (
				<>
				  <ul>
					{names.map((name) => (
					  <li>{name}</li>
					))}
				  </ul>

				</>
			  );
			};

			export default App;
	  ```
	  - conditional statement
		- we cannot use if statement
     - e.g.
       ```
       {if(loggedIn) <h1>logged in</h1> else <h1>logged out</h1>} //you will get error
       ```
		- we need to use one condition
     - e.g.
        ```
        {loggedIn? <h1>logged in</h1> : <h1>logged out</h1>}
        ```
        or
       ```
       {loggedIn && <h1>logged in</h1>}
       ```
			
		- e.g.
			```
			const App = () =>{
			  const loggedIn = true;
			  return (
				<>
				  {loggedIn && <h1>logged in</h1>}
				</>
			  );
			};

			export default App;
			```
- Copy theme from github
  - https://github.com/bradtraversy/react-crash-2024/blob/main/_theme_files/index.html
	
	1. copy html in `<body>` but not include `<body>` itself
			
	2. paste it in your `App.jsx`

	3. you will find error in html comment 
		- you can delete it or comment it in jsx format
		- e.g.
			from 
				`<!-- logo -->`
			to
				`{/* <!-- logo --> */}`
			
	4. rename `class=` to `className=`
		- you can use ReplaceAll
		- or you can `Ctrl+Shift+L` to use multiple cursor
			
			
- Create component `<Navbar>`

- Create component `<Hero>`

- using props
	There are different way to use props
	1. you can define a input param object in your function 
		e.g.
  ```
      //to call it
			<Hero title='Test Title' subTitle='This is Sub Title'/>
		
			//to define it
			const Hero = (props) => {
			return (
				<section>
					<div
						<h1> {props.title} </h1>
						<p> {props.subTitle} </p>
					</div>
				</section>
			);
		}

		export default Hero;
  ```
			
	3. or you can destructure it	
		e.g.
  ```
      //to call it
			<Hero title='Test Title' subTitle='This is Sub Title'/>
		
			//to define it
			const Hero = ({title, subTitle}) => {
			return (
				<section>
					<div
						<h1> {title} </h1>
						<p> {subTitle} </p>
					</div>
				</section>
			);
		}
  ```
		
	4. you can also define a default value
    - e.g.
    ```
     //to call it
  			<Hero />
  		
  			//to define it
  			const Hero = ({title = 'Become a React Dev',
  							subTitle = 'Find the React job that fits your skills and needs'}) => {
  			return (
  				<section>
  					<div
  						<h1> {title} </h1>
  						<p> {subTitle} </p>
  					</div>
  				</section>
  			);  
  		}
    ```

- Create component HomeCards
	- we create a wrapper component that make the structure clearer
	
	- must be children, otherwise it won't work
	
- Dynamic className	
	- so we can dynamically add String
	- using `{`${bg} p-6 rounded-lg shadow-md`}`
	
	
- Create component JobListing

- Import Json file
	- we can import data and image
		e.g.
			`import Jobs from "../data/jobs.json"`

- Create component Job
	- we create componet with props that input job
	
- Listing only 3 recent jobs
	- we use `slice()`

- Create ViewAllJobs component

- Use State

	1. we import
		e.g.
			`import {useState} from 'react'`
		
	2. we define useState function in our component
		e.g.
			`const [showAllDesc, setShowAllDesc] = useState(false);`
		- there are three things
			- showAllDesc is a variable that store the state
			- setShowAllDesc is the function that change the state
			- useState(false) set the default status to false(in this case showAllDesc is false)
		
	4. to use the variable
		e.g.
  ```
			let desc = job.description;
			if(!showAllDesc) {
				desc = desc.substring(0,90) + '...';
			}
	```
	6. to use the function
		e.g. we trigger the function when click a button
		```
		<button onClick={() => setShowAllDesc((preState) => !preState)} className='...'>
			{showAllDesc ? 'Less' : 'More'}
		</button>
		```
		- one thing that we need to know
		- about the "preState"
		- it is pre-defined by react and it store the previous State of showAllDesc
			

			
- About react icon
	- when we want to use icon
	- react-icon package provide a ton of icon
	- including font awesome
	
	-to use it
    1. install package
		  - e.g.
				`npm i react-icons`
    2. import 
		  - e.g.
				`import {FaMapMaker} from 'react-icons/fa'`
    3. use it
		  - e.g.
				`<FaMapMaker className='....' />`
				
	- The icon is actually a component
	- react-icons package contains lot of icons
	- read it at https://react-icons.github.io/react-icons/

	
- react route
	- install
	- in the video Brad use "npm i react-router-dom"
	- but I think it is react router v6
	- now we need upgrade to v7
	- and we should use "npm i react-router"
	- and the setup was changed
		https://reactrouter.com/start/declarative/installation
	- There are 3 mode, we should follow the declarative mode guide 
	- the video is out-dated
	
	- so let start
    1. install
       - e.g.
				`npm i react-router`
		
    2. import
		  - e.g.
				`import { BrowserRouter, Routes, Route  } from "react-router";`
	
    3. use BrowserRouter, 
		  - e.g.
        ```
				import { BrowserRouter, Routes, Route } from "react-router";
				import HomePage from "./pages/HomePage";
				import MainLayout from "./layouts/MainLayout";

				const App = () =>{
				  return (
					<BrowserRouter>
					  <Routes>
						<Route element={<MainLayout />}>
						  <Route index element={<HomePage />} />
						  <Route path="about" element={<h1>about Hello World</h1>} />
						</Route> 
					  </Routes>
					</BrowserRouter>
				  );
				};

				export default App;
        ```
        - Notice the structure
				<BrowserRouter>
					<Routes>
						<Route>

			- inside Route
				- there are different props
					1. index 
						- it will be map when URL had nothing 
							e.g. `localhost:3000`
					2. path
						- it will map the string
							e.g. `localhost:3000/about`
					3. element
						- the action that will be triggered, in this case it show components
			
			- To create `<MainLayout />`
        - we nest Route
          ```
					<Route>
						<Route>
          ```
					
          4. we use {Outlet} in MainLayout component
             - e.g.
             ```
              import Navbar from "../components/Navbar";
              import { Outlet } from "react-router";
  
              const MainLayout = () => {
                return(
                  <>
                    <Navbar />
                    <Outlet />
                  </>
                );
              }
  
              export default MainLayout;
             ```
            - Outlet
						- Renders the matching child route of a parent route or nothing if no child route matches.


- Create Jobs page
	
- Use `{Link}` instead of `<a>`
	- `<a>` refresh the whole page
	- while `{Link}` do not, just smoother
     - e.g.
       `import { Link } from "react-router";`
			
	- change `<a>` to `<Link>`
	- change `href=` to `to=`

- Create custom 404 page
	- to catch the not found URL
	- use `*` in the route
     - e.g.
       `<Route path="*" element={<NotFound />} />`

- Use `NavLink`
	- it just just like `Link`
	- but
	- it provide a pre defined variable `isActive`
	- which is suitable for our Nav Bar
	- when active its background change
	
	- to use `isActive`
   ```
		<NavLink
		  to="/"
		  className={({isActive}) => 
						  isActive ? 'text-white bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2' 
						  : 'text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2';}
		  >Home</NavLink
		>
   ```

		
- Create json server to simulate backend

	- to install
		e.g.
			```
			npm install json-server
			```
		- in fact we should install it on dev env
			```
			npm install -D json-server
			```
		
		
	- to run the json server
		1. we setup the package.json scripts section
			e.g.
				`"json-server": "json-server src/data/jobs.json --port 4000"`
			
			- notice that in the tutorial video, Brad use `"server" : "json-server --watch src/jobs.json --port 8000"`
			- `--watch` is omitted, we don't need it
			
		2. run it
      - e.g.
        `npm run json-server`
	
	- there are many build in api, param, query in json server
	- you can check the doc
    - e.g.
      `localhost:4000/jobs/1`
			`localhost:4000/jobs?_limit=3`
	
- Then we modify our component to fetch the data from json server

	- we will use `useState` and `useEffect`

		- useState
			- store jobs 
			- store loading
   - e.g.
     ```
     const[jobs, setJobs] = useState([]);
     const[loading, setLoading] = useState(true);
     ```	
		- useEffect
			- it will run when the component is loaded
       - e.g.
         ```
  				useEffect(async () => {
  						setLoading(true);
  						const apiUrl = showRecent ? 'http://localhost:4000/jobs?_limit=3' : 'http://localhost:4000/jobs';
  						const res = await fetch(apiUrl);
  						const data = await res.json();
  						setJobs(data);
  						setLoading(false);
  				}, []);
	      ```
			- notice it take two parameters
			- one is function that it run
			- two is a array
				-if it is empty, the effect will run when ever the component call
				-if there is variable in the array, the effect will only run when the variable changed
	
	
			- also notice in the tutorial video Brad say he cannot use async in the function
			- he create an inner function that do the async
       - e.g.
         ```
					useEffect(() => {  //he say he cannot declare async here
						const fetchJobs = async () => { //so he say declare async here
							:
							:
						}

						fetchJobs(); //resulting he need to call the function explicitly
					}, []);
         ```
			
			- I dont have any issue declare async in the outter function
			- oh, I saw the issue now, it shows error in console saying we must return a function, it is use for clear up
	
- Create loading spinner
	- to install	
		- e.g.
			`npm i react-spinner`
	
	- to use it
		- we can follow the usage in github 
			https://github.com/davidhu2000/react-spinners
	
		- e.g. create a Spinner component that use MoonLoader
			```
			import { MoonLoader } from "react-spinners";

			const Spinner = ({loading}) => {

				const override = {
					display:"block",
					margin: "100px auto"
				}

				return (
					<MoonLoader loading={loading}
						color="#7636d2"
						cssOverride={override}
						size={150}
					/>
				);
			}

			export default Spinner;
			```
	
- set proxy	
	
	- since we are hard coding our api URL all this time
		e.g.
			`const apiUrl = showRecent ? 'http://localhost:4000/jobs?_limit=3' : 'http://localhost:4000/jobs';`
	
	- we want to put it into config 
	
	- for react 
		- we do it in package json
	
	- but we are using vite
	- for vite
		- we do it in `vite.config.js`
		- https://vite.dev/config/server-options#server-proxy
    - e.g.
      ```
  		proxy: {
  		  '/api':{
  			target: 'http://localhost:4000',
  			changeOrigin: true,
  			rewrite: (path) => path.replace(/^\/api/, '')
  		  }
  		}
      ```
	
	- after config
		`const apiUrl = showRecent ? '/api/jobs?_limit=3' : '/api/jobs';`

		
- Talking about suspense fetching

	- we are currently fetching before render
	
	- but there is suspend fetching which allow us to fetch while render
	
	- just so we know but he didn't implement it in this course
	
	- according to doc below, only supense-enable datasource can use supense
	- https://react.dev/reference/react/Suspense#displaying-a-fallback-while-content-is-loading

- Mentioned about react-query and "use" Hook
	- bascially, what Brad want to say is
	- there are many ways to fetch data from backend
	- useEffect is just a very basic one

	
- Create individual job page

	- use `useState` and `useEffect` to fetch data
	
	- to get the id from url param
	- use `useParams` from react-router
	
	- Then we change to use dataloader in react-router to do the same thing
		- and I found out Brad was using data model mode of react-router
		- so I need to change it in order to use dataloader feature
			e.g. after update
			```
			const router = createBrowserRouter(
			  [ 
				{
				  element : <MainLayout />,
				  children : [
					{index: true, element: <HomePage />},
					{path: "jobs", element: <JobsPage />},
					{path: "jobs/:id", element: <JobPage />},
					{path: "*", element: <NotFound />}
				  ]
				}
			  ]
			);

			const App = () =>{
			  return (
				<RouterProvider router={router} />
			  );
			};

			export default App;
			```
	
	- now we use dataLoader
		1. we create a data loader function
      - e.g.
        ```
        const JobLoader = async ({params}) => {
          const res = await fetch(`/api/jobs/${params.id}`);
          const data = await res.json();
          return data;
        }
       ```
    2. export both JobPage and JobLoader function
       - e.g.
       `export {JobPage as default, JobLoader};`

    3. use it in our router
       - e.g.
				`{path: "jobs/:id", element: <JobPage />, loader : JobLoader},`
	
	
	- Then, we copy the job page UI from theme files
	- and I found out `<aside>` is not working
  - later I found out it is working, Brad set it earlier when do the tailwind config
    ```
    gridTemplateColumns: {
        '70/30': '70% 28%',
      },
    ```
	- I update the css file to use flexbox
		e.g.
			#JobPage {
				display: flex;
				flex-direction: row;
			}

			#JobPage aside{
				flex: 40%;
			}
	
	- Then we need to change
		1. `class` to `className`
    2. `<a>` to `<Link>`
		3. `href` to `to`
		4. using dynamic content
       - e.g.
				`{job.type}`
				`{job.company.name}`
	
		6. import icons
       - e.g.
				`import { FaLocationDot, FaArrowLeft} from "react-icons/fa6";`
				
		7. and use it
      - e.g.
				`<FaArrowLeft className="mr-3"/> Back to Job Listings`
	
- Create Add Job Page
	- create AddJobPage Component
	- set the route
	- copy html file from theme
		- as usual
		- change `class` to `className`
		- one addition
			-change `for=` to `htmlFor=`
	
	- Then we handle the `<form>`
	- there are many way
	- we are using State
		1. create `useState`
      - e.g.
				`const[type, setType] = useState('');`
    2. create `onChange` handler
      - e.g.
        ```
        <select
					id="type"
					name="type"
					className="border rounded w-full py-2 px-3"
					required
					value={type}
					onChange={(e) => setType(e.target.value)}
				>
					<option value="Full-Time">Full-Time</option>
					<option value="Part-Time">Part-Time</option>
					<option value="Remote">Remote</option>
					<option value="Internship">Internship</option>
				</select>
        ```
				
	
	
		4. create `onSubmit` handler
      - e.g.
        ```
        const submitJob = async (e) => {
				const newJob = {
					title,
					type,
					description: desc,
					location: location,
					salary: salary,
					company: {
						name: comName,
						description: comDesc,
						contactEmail: comEmail,
						contactPhone: comPhone
					}
				}

				e.preventDefault();
				console.log(newJob);
				const res = await fetch('/api/jobs', {
					method : 'POST',
					headers : {'Content-Type' : 'application/json'},
					body : JSON.stringify(newJob)
				})
				navigate('/jobs');
			}
        ```
				
		6. use navigate to return to jobs listing page
      - e.g.
        ```
        import { useNavigate } from "react-router";
				const navigate = useNavigate();
				
				navigate('/jobs');
        ```
				
- Create delete job function

- using react-toastify
	- it is use for signal the user that something success or fail
	- looks pretty cool
	
	- install
		`npm -i react-toastify`
		
		- https://fkhadra.github.io/react-toastify/installation
		
	- to use it
		- since we want it everywhere we create it in our MainLayout
		
		e.g.
    ```
    import { ToastContainer } from "react-toastify";
			<ToastContainer />
    ```	
			
			

	- My Toastify not working 
	- and it is due to the Tailwind
	- I was following the latest installation 
		- installation in vite
		https://tailwindcss.com/docs/installation/using-vite
	
		- but Brad is using something like this
		https://v3.tailwindcss.com/docs/installation/using-postcss


- the we create the remaining edit page
	- its easy, we just use what we learn previously



	
	
	
	
	
	
	
	
	
	
	
	
